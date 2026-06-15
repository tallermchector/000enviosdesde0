export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    platform: string;
    avatarPlaceholder: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: "Sol R.",
        role: "Local Guide",
        content: "Matías de envío dos ruedas mensajería se ha convertido en mi héroe logístico por segundo año consecutivo 🙌. Tenía un encargo muy especial y nada fácil: ir hasta un local de Havanna en Mar del Plata, comprar los alfajores de temporada...",
        rating: 5,
        platform: "Google Business",
        avatarPlaceholder: "SR"
    },
    {
        id: '2',
        name: "Agustin Torres",
        role: "Emprendedor",
        content: "Lo use varias veces para llevar unos pedidos a nuestros clientes. Impecable el servicio. Ademas hacen depósitos en cajeros sin problemas. Unos genios !!!",
        rating: 5,
        platform: "Google Business",
        avatarPlaceholder: "AT"
    },
    {
        id: '3',
        name: "Alexis Bogarin",
        role: "Cliente",
        content: "El mejor servicio premium de la zona. 100% recomendable.",
        rating: 5,
        platform: "Google Business",
        avatarPlaceholder: "AB"
    },
    {
        id: '4',
        name: "Lorenzo Elizagoyen",
        role: "Cliente",
        content: "Excelente servicio, atención de primera, rápido, confiable y seguro. Recomendado 100%",
        rating: 5,
        platform: "Google Business",
        avatarPlaceholder: "LE"
    },
    {
        id: '5',
        name: "Karen Herrera",
        role: "Cliente",
        content: "Excelente el servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición, los recomiendo ampliamente!",
        rating: 5,
        platform: "Google Business",
        avatarPlaceholder: "KH"
    }
];