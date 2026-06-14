import prisma from "../src/lib/prisma";
import * as fs from "fs";
import * as path from "path";

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

function parseCSV(filePath: string): string[][] {
  const content = fs.readFileSync(filePath, "utf-8");
  // Split lines, ignoring empty ones
  const lines = content.split(/\r?\n/).filter(line => line.trim() !== "");
  // Skip header
  const dataLines = lines.slice(1);
  return dataLines.map(parseCSVLine);
}

async function main() {
  // 1. Seed Users
  const users = await Promise.all([
    prisma.user.upsert({
      where: { email: "alice@prisma.io" },
      update: { name: "Alice" },
      create: {
        email: "alice@prisma.io",
        name: "Alice",
      },
    }),
    prisma.user.upsert({
      where: { email: "bob@prisma.io" },
      update: { name: "Bob" },
      create: {
        email: "bob@prisma.io",
        name: "Bob",
      },
    }),
  ]);
  console.log(`Seeded ${users.length} users.`);

  // 2. Seed PriceRange from CSV
  const priceRangePath = path.join(process.cwd(), "prisma", "data", "public-PriceRange-selection.csv");
  if (fs.existsSync(priceRangePath)) {
    const priceRangeRows = parseCSV(priceRangePath);
    let seededRangesCount = 0;
    for (const row of priceRangeRows) {
      if (row.length < 8) continue;
      const id = parseInt(row[0]);
      const createdAt = new Date(row[1]);
      const distanciaMaxKm = parseFloat(row[2]);
      const distanciaMinKm = parseFloat(row[3]);
      const isActive = row[4] === "true";
      const precioRango = parseFloat(row[5]);
      const serviceType = row[6] as any; // Typecasted to match ServiceTypeEnum
      const updatedAt = new Date(row[7]);

      await prisma.priceRange.upsert({
        where: {
          id: id,
        },
        update: {
          serviceType,
          distanciaMinKm,
          distanciaMaxKm,
          precioRango,
          isActive,
          createdAt,
          updatedAt,
        },
        create: {
          id,
          serviceType,
          distanciaMinKm,
          distanciaMaxKm,
          precioRango,
          isActive,
          createdAt,
          updatedAt,
        },
      });
      seededRangesCount++;
    }
    console.log(`Seeded ${seededRangesCount} PriceRanges from CSV.`);
  } else {
    console.warn(`PriceRange CSV not found at: ${priceRangePath}`);
  }

  // 3. Seed SocialPost from CSV
  const socialPostPath = path.join(process.cwd(), "prisma", "data", "public-SocialPost-selection.csv");
  if (fs.existsSync(socialPostPath)) {
    const socialPostRows = parseCSV(socialPostPath);
    let seededPostsCount = 0;
    for (const row of socialPostRows) {
      if (row.length < 15) continue;
      const id = parseInt(row[0]);
      const comments = row[1] ? parseInt(row[1]) : null;
      const content = row[2];
      const createdAt = new Date(row[3]);
      const imageHint = row[4] || null;
      const imageUrl = row[5] || null;
      const likes = row[6] ? parseInt(row[6]) : null;
      const platform = row[7] as any; // Typecasted to match SocialPlatformEnum
      const postUrl = row[8];
      const shares = row[9] ? parseInt(row[9]) : null;
      const timestamp = row[10] ? new Date(row[10]) : new Date();
      const updatedAt = new Date(row[11]);
      const userAvatar = row[12] || null;
      const userName = row[13];
      const userUrl = row[14] || null;

      await prisma.socialPost.upsert({
        where: {
          postUrl: postUrl,
        },
        update: {
          platform,
          userName,
          userAvatar,
          userUrl,
          content,
          imageUrl,
          imageHint,
          likes,
          comments,
          shares,
          timestamp,
        },
        create: {
          platform,
          userName,
          userAvatar,
          userUrl,
          content,
          postUrl,
          imageUrl,
          imageHint,
          likes,
          comments,
          shares,
          timestamp,
        },
      });
      seededPostsCount++;
    }
    console.log(`Seeded ${seededPostsCount} SocialPosts from CSV.`);
  } else {
    console.warn(`SocialPost CSV not found at: ${socialPostPath}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
