export interface ICoffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  quantity?: number;
}
export const coffees: ICoffee[] = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    tags: ["Tradicional"],
    image: "/assets/images/coffees/coffee-1.png",
    quantity: 0,
  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    tags: ["Tradicional"],
    image: "/assets/images/coffees/coffee-2.png",
    quantity: 0,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    tags: ["Tradicional"],
    image: "/assets/images/coffees/coffee-3.png",
    quantity: 0,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    tags: ["Tradicional", "Gelado"],
    image: "/assets/images/coffees/coffee-4.png",
    quantity: 0,
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    image: "/assets/images/coffees/coffee-5.png",
    quantity: 0,
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    image: "/assets/images/coffees/coffee-6.png",
    quantity: 0,
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    image: "/assets/images/coffees/coffee-7.png",
    quantity: 0,
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    image: "/assets/images/coffees/coffee-8.png",
    quantity: 0,
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    image: "/assets/images/coffees/coffee-9.png",
    quantity: 0,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    tags: ["Tradicional", "Com Leite"],
    image: "/assets/images/coffees/coffee-10.png",
    quantity: 0,
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    tags: ["Especial", "Alcoólico", "Gelado"],
    image: "/assets/images/coffees/coffee-11.png",
    quantity: 0,
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    tags: ["Especial"],
    image: "/assets/images/coffees/coffee-12.png",
    quantity: 0,
  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    tags: ["Especial"],
    image: "/assets/images/coffees/coffee-13.png",
    quantity: 0,
  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    tags: ["Especial", "Alcoólico"],
    image: "/assets/images/coffees/coffee-14.png",
    quantity: 0,
  },
];
