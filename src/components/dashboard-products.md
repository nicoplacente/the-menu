import SectionContainer from "@/components/section-container";

interface Product {
categoryId?: string;
name: string;
price: number;
isStock: boolean;
}

interface Subcategory {
id: string;
name: string;
}

interface Category {
id: string;
name: string;
subcategories?: Subcategory[] | null;
products?: Product[] | null;
}

interface Card {
appId: string;
appName: string;
categories: Category[];
textColor: string;
bgColor: string;
primaryColor: string;
image?: string;
isImageRounded?: boolean;
}

interface Params {
appId: string;
}

const PRODUCTS: { [key: string]: Product[] } = {
pizzas: [
{ categoryId: "", name: "Pizza primavera", price: 3000, isStock: true },
{ categoryId: "", name: "Pizza de anana", price: 931000, isStock: true },
],
cafe: [
{
categoryId: "conazucar",
name: "Café de vainilla",
price: 2000,
isStock: true,
},
{
categoryId: "sinazucar",
name: "Café con leche",
price: 4000,
isStock: false,
},
],
};

const CARDS: Card[] = [
{
appId: "lamestiza",
appName: "La Mestiza",
textColor: "#000", // solo blanco o negro el txt
bgColor: "#e3e3e3",
primaryColor: "#48e",
image:
"https://imgs.search.brave.com/OVvv9uw84YybYQv9l4S63ug70CHJibpR-di4APeDDQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2FpLmNvbS9v/c3MvaWNvbnMvMjAy/MS8xMC8yNy9sMWVY/VHhtMnc3VE02dDku/cG5n",
isImageRounded: true,
categories: [
{
id: "pizzas",
name: "Pizzas",
subcategories: null,
products: PRODUCTS.pizzas,
},
{
id: "cafe",
name: "Café",
subcategories: [
{
id: "conazucar",
name: "Café con azúcar",
},
{
id: "sinazucar",
name: "Café sin azúcar",
},
],
products: PRODUCTS.cafe,
},
{
id: "helados",
name: "Helados",
products: null,
},
],
},
];

export default function UserCard({ params }: { params: Params }) {
const userCard = params.appId;

const appFound = CARDS.find((card) => card.appId === userCard);

if (!appFound) {
return (

<div className="flex flex-col justify-center h-screen">
<h2 className="text-white text-center">
No se encontró ninguna carta con ese nombre
</h2>
</div>
);
}

return (

<main
style={{ backgroundColor: appFound.bgColor, color: appFound.textColor }} >
<header
className="px-0 py-9 sm:py-12 flex items-center gap-4 justify-center"
style={{ backgroundColor: appFound.primaryColor }} >
{appFound.image && (
<img
src={appFound.image}
alt={appFound.appName}
className={`size-12 object-cover ${
              appFound.isImageRounded ? "rounded-full" : "rounded-lg"
            } `}
/>
)}
<h1 className="text-center text-3xl ">{appFound.appName}</h1>
</header>
<SectionContainer className="h-screen">
{appFound.categories.map((category) => (
<div key={category.id} className="">
<h2 className="text-xl font-semibold">{category.name}</h2>
{category.subcategories ? (
category.subcategories.map((subcategory) => (
<div key={subcategory.id} className="pl-4">
<h3 className="text-lg">{subcategory.name}</h3>
<ul>
{category.products
?.filter(
(product) => product.categoryId === subcategory.id
)
.map((product) => (
<li key={product.name}>
{product.name} - ${product.price}{" "}
{product.isStock ? "En stock" : "Agotado"}
</li>
))}
</ul>
</div>
))
) : (
<ul>
{category.products && category.products.length > 0 ? (
category.products.map((product) => (
<li key={product.name}>
{product.name} - ${product.price}{" "}
{product.isStock ? "En stock" : "Agotado"}
</li>
))
) : (
<li>No hay productos disponibles</li>
)}
</ul>
)}
</div>
))}
</SectionContainer>
</main>
);
}
