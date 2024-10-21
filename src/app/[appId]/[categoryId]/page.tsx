import ListProducts from "@/components/restaurants/list-products";
import SectionContainer from "@/components/yourcard-landing/section-container";
import prisma from "@/libs/prisma";

interface Params {
  appId: string;
  categoryId: string;
}

export default async function CategoryPage({ params }: { params: Params }) {
  const appFound = await prisma.app.findUnique({
    where: { id: params.appId },
    include: { categories: true },
  });

  if (!appFound) {
    return <div>No se encontró ninguna carta con ese nombre</div>;
  }

  const categoryFound = await prisma.category.findUnique({
    where: { id: params.categoryId },
  });

  if (!categoryFound) {
    return <div>No se encontró la categoría</div>;
  }

  return (
    <SectionContainer>
      <h2
        className="text-4xl font-bold text-center mb-12"
        style={{ color: appFound.textColor }}
      >
        {categoryFound.name}
      </h2>
      <div className="flex flex-col" style={{ color: appFound.textColor }}>
        {categoryFound.subcategories ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {categoryFound.subcategories.map((subcategory) => (
              <details key={subcategory.id} className="w-full">
                <summary
                  style={{
                    border: `2px solid ${appFound.primaryColor}`,
                    backgroundColor: appFound.primaryColor,
                  }}
                  className="text-lg py-1 mb-6 font-semibold rounded-lg shadow-xl text-center cursor-pointer hover:!bg-transparent md:focus:!bg-transparent transition duration-300"
                >
                  {subcategory.name}
                </summary>
                <ul className="w-full flex flex-col gap-6">
                  {categoryFound.products
                    ?.filter((product) => product.categoryId === subcategory.id)
                    .map((product) => (
                      <ListProducts
                        product={product}
                        color={appFound.textColor}
                      />
                    ))}
                </ul>
              </details>
            ))}
          </div>
        ) : (
          <ul className="w-full flex flex-col gap-6">
            {categoryFound.products && categoryFound.products.length > 0 ? (
              categoryFound.products.map((product) => (
                <ListProducts product={product} color={appFound.textColor} />
              ))
            ) : (
              <li className="px-6">No hay productos disponibles</li>
            )}
          </ul>
        )}
      </div>
    </SectionContainer>
  );
}
