-- CreateEnum
CREATE TYPE "ServiceTypeEnum" AS ENUM ('EXPRESS', 'LOW_COST', 'PUNTO_DE_RETIRO');

-- CreateEnum
CREATE TYPE "SocialPlatformEnum" AS ENUM ('facebook', 'instagram', 'whatsapp');

-- CreateTable
CREATE TABLE "PriceRange" (
    "id" SERIAL NOT NULL,
    "serviceType" "ServiceTypeEnum" NOT NULL,
    "distanciaMinKm" DECIMAL(10,2) NOT NULL,
    "distanciaMaxKm" DECIMAL(10,2) NOT NULL,
    "precioRango" DECIMAL(10,2) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceRange_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialPost" (
    "id" SERIAL NOT NULL,
    "platform" "SocialPlatformEnum" NOT NULL,
    "userName" TEXT NOT NULL DEFAULT 'Envios DosRuedas',
    "userAvatar" TEXT DEFAULT '/LogoEnviosDosRuedas.webp',
    "userUrl" TEXT,
    "content" TEXT NOT NULL,
    "postUrl" TEXT NOT NULL,
    "imageUrl" TEXT,
    "imageHint" TEXT,
    "likes" INTEGER DEFAULT (floor((random() * (100)::double precision)))::integer,
    "comments" INTEGER DEFAULT (floor((random() * (50)::double precision)))::integer,
    "shares" INTEGER DEFAULT (floor((random() * (20)::double precision)))::integer,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SocialPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PriceRange_serviceType_distanciaMinKm_distanciaMaxKm_key" ON "PriceRange"("serviceType", "distanciaMinKm", "distanciaMaxKm");

-- CreateIndex
CREATE UNIQUE INDEX "SocialPost_postUrl_key" ON "SocialPost"("postUrl");
