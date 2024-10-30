"use client";
import { useEffect, useState } from "react";
import SectionContainer from "@/components/yourcard-landing/section-container";
import { useRouter } from "next/navigation";
import { alerts } from "@/utils/alerts";
import { useSession } from "next-auth/react";

interface Category {
  name: string;
  subcategories: string[];
  link?: string;
  image?: File | null;
}

const AddCategories = () => {
  const [categories, setCategories] = useState<Category[]>([
    { name: "", subcategories: [], link: "", image: null },
  ]);

  const { data, update } = useSession();

  useEffect(() => {
    (async () => {
      await update();
    })();
  }, []);

  console.log(data);

  const router = useRouter();

  const handleCategoryChange = (index: number, value: string) => {
    const updatedCategories = [...categories];
    updatedCategories[index].name = value;
    setCategories(updatedCategories);
  };

  const handleSubcategoryChange = (
    catIndex: number,
    subIndex: number,
    value: string
  ) => {
    const updatedCategories = [...categories];
    updatedCategories[catIndex].subcategories[subIndex] = value;
    setCategories(updatedCategories);
  };

  const handleLinkChange = (index: number, value: string) => {
    const updatedCategories = [...categories];
    updatedCategories[index].link = value;
    setCategories(updatedCategories);
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (
    catIndex: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const updatedCategories = [...categories];
      updatedCategories[catIndex].image = e.target.files[0];
      setCategories(updatedCategories);
    } else {
      const updatedCategories = [...categories];
      updatedCategories[catIndex].image = null;
      setCategories(updatedCategories);
    }
  };

  const addCategory = () => {
    setCategories([
      ...categories,
      { name: "", subcategories: [], link: "", image: null },
    ]);
  };

  const addSubcategory = (index: number) => {
    const updatedCategories = [...categories];
    updatedCategories[index].subcategories.push("");
    setCategories(updatedCategories);
  };

  const removeCategory = (index: number) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const removeSubcategory = (catIndex: number, subIndex: number) => {
    const updatedCategories = [...categories];
    updatedCategories[catIndex].subcategories = updatedCategories[
      catIndex
    ].subcategories.filter((_, i) => i !== subIndex);
    setCategories(updatedCategories);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    categories.forEach((category, index) => {
      if (category.name) {
        formData.append(`categories[${index}][name]`, category.name);
      }
      if (category.link) {
        formData.append(`categories[${index}][link]`, category.link);
      }
      if (category.image) {
        formData.append(`categories[${index}][image]`, category.image);
      }
      category.subcategories.forEach((subcategory, subIndex) => {
        if (subcategory) {
          formData.append(
            `categories[${index}][subcategories][${subIndex}]`,
            subcategory
          );
        }
      });
    });

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success === false) {
        data.errors.map((error: any) => {
          alerts("error", error);
        });
      } else if (data.success === true) {
        alerts("success", "Categorias creadas correctamente");
      }
    } catch (error) {
      console.error("Error al enviar las categorías:", error);
    }
  };

  const returnPage = () => {
    router.push("/create-card");
  };

  return (
    <SectionContainer
      className="text-white"
      title="Agrega Categorías y Subcategorías"
    >
      <form onSubmit={handleSubmit} className="flex flex-col">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="mb-4 flex flex-col">
            <div className="flex flex-col justify-center m-2">
              <div className="flex mb-2">
                <input
                  type="text"
                  placeholder="Nombre de la categoría"
                  value={category.name}
                  onChange={(e) =>
                    handleCategoryChange(catIndex, e.target.value)
                  }
                  className="border p-2 mr-2 placeholder:text-black text-black"
                />
                <button
                  type="button"
                  onClick={() => removeCategory(catIndex)}
                  className="text-red-500"
                >
                  Eliminar categoría
                </button>
              </div>

              <p>Subir imagen (Opcional)</p>
              <input
                type="text"
                placeholder="Link (opcional)"
                value={category.link || ""}
                onChange={(e) => handleLinkChange(catIndex, e.target.value)}
                className="border p-2 mb-2 placeholder:text-black text-black"
              />

              <input
                type="file"
                onChange={(e) => handleFileChange(catIndex, e)}
              />

              {category.subcategories.length > 0 && (
                <div>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div key={subIndex} className="flex">
                      <input
                        type="text"
                        placeholder="Nombre de la subcategoría"
                        value={subcategory}
                        onChange={(e) =>
                          handleSubcategoryChange(
                            catIndex,
                            subIndex,
                            e.target.value
                          )
                        }
                        className="border p-2 mr-2 placeholder:text-black text-black"
                      />
                      <button
                        type="button"
                        onClick={() => removeSubcategory(catIndex, subIndex)}
                        className="text-red-500"
                      >
                        Eliminar subcategoría
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => addSubcategory(catIndex)}
              className="text-blue-500"
            >
              Agregar subcategoría
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addCategory}
          className="text-blue-500 mb-4"
        >
          Agregar categoría
        </button>

        <button type="submit" className="bg-blue-500 p-2 text-white">
          Guardar
        </button>
        <button
          onClick={returnPage}
          className="relative my-12 w-full sm:w-1/3 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-pink-800"
          aria-label="Volver"
        >
          <span className="mx-auto px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 w-full rounded-md group-hover:bg-opacity-0">
            Volver atrás
          </span>
        </button>
      </form>
    </SectionContainer>
  );
};

export default AddCategories;
