import Parrafos from "../ui/parrafos";

interface Product {
  categoryId?: string;
  name: string;
  price: number;
  isStock: boolean;
  description?: string;
}

export default function ListProducts({
  product,
  color,
}: {
  product: Product;
  color: string;
}) {
  return (
    <li
      key={product.name}
      className={`flex flex-col p-4 gap-4 ${
        !product.isStock && "opacity-20 line-through"
      }`}
      style={{ color: "inherit" }}
    >
      <div className="w-full flex items-center justify-between">
        <h4 className="text-balance font-semibold sm:text-lg">
          {product.name}
        </h4>

        <span className="bg-green-500/20 max-w-24 sm:max-w-28 w-fit tracking-wider text-center font-mono rounded-lg py-1 px-2">
          ${product.price}
        </span>
      </div>
      {product.description && (
        <Parrafos className="!text-start !text-xs sm:!text-sm ">
          {product.description}
        </Parrafos>
      )}
      <hr className="mt-4" style={{ borderColor: color }} />
    </li>
  );
}
