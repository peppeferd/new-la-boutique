"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Bubbler_One } from "next/font/google";
import { Suspense, useEffect, useState } from "react";
const firstFont = Bubbler_One({
  weight: ["400"],
  subsets: ["latin"],
});
const Profilo = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [products, setProducts] = useState<ProductModel[]>([]);

  const getCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data.data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const productsFetch = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.post("/api/categories", categoryPrompt).then((res) => {
        setCategories([...categories, res.data]);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitProducts = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.post("/api/products", categoryPrompt).then((res) => {
        setProducts([...products, res.data]);
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      productsFetch();
    }, []);
  };

  const [categoryPrompt, setCategoryPrompt] = useState<CategoryModel>({
    _id: "",
    name: "",
    description: "",
  });
  const [productPrompt, setProductPrompt] = useState<ProductModel>({
    name: "",
    description: "",
    category: categories,
    price: 0,
    imageUrl: "",
    sizes: [],
    TopProduct: "",
    NewArrival: "",
    countInStock: 0,
    features: [],
    rating: 0,
  });
  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className="md:mt-28 mt-24 bg-linear-to-r from-indigo-900 via-purple-200 to-pink-500 min-h-screen">
        <h1
          className={`text-5xl text-white text-center py-10 bg-amber-300 border-2 border-white rounded-md w-[50%] mx-auto ${firstFont.className}`}
        >
          Profilo
        </h1>
        <div>
          {user?.id === "user_34pzAxTzO3dIhPNeIAD7uwafG4I" ? (
            <div>
              <h1
                className={`p-2 text-white text-3xl ${firstFont.className} text-center mt-10 border-2 border-black rounded-md w-fit mx-auto`}
              >
                Benvenuto admin
              </h1>
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-4 mt-4 items-center"
                >
                  <h1 className="text-4xl font-bold text-center text-indigo-600">
                    Crea nuova categoria
                  </h1>
                  <div className="w-full flex flex-col gap-2 text-center">
                    <label
                      htmlFor="name"
                      className="text-gray-600 text-sm font-semibold"
                    >
                      Nome
                    </label>
                    <input
                      required
                      className="w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter the title of your post"
                      value={categoryPrompt.name}
                      onChange={(e) =>
                        setCategoryPrompt({
                          ...categoryPrompt,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="description"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Description
                    </label>
                    <textarea
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="description"
                      id="description"
                      placeholder="Enter a description for your post"
                      value={categoryPrompt.description}
                      onChange={(e) =>
                        setCategoryPrompt({
                          ...categoryPrompt,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-600 w-fit text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-500 transition-all cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div>
                {categories &&
                  categories.map((category) => (
                    <div key={category._id}>{category.name}</div>
                  ))}
              </div>
              <div>
                <form
                  onSubmit={handleSubmitProducts}
                  className="w-full flex flex-col gap-4 mt-4 items-center"
                >
                  <h1 className="text-4xl font-bold text-center text-indigo-600">
                    Crea nuovo prodotto
                  </h1>
                  <div className="w-full flex flex-col gap-2 text-center">
                    <label
                      htmlFor="name"
                      className="text-gray-600 text-sm font-semibold"
                    >
                      Nome
                    </label>
                    <input
                      required
                      className="w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Inerisci il nome del prodotto"
                      value={productPrompt.name}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="description"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Description
                    </label>
                    <textarea
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="description"
                      id="description"
                      placeholder="Enter a description for your post"
                      value={productPrompt.description}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="category"
                      className="text-gray-600 text-sm font-semibold"
                    >
                      Categoria
                    </label>
                    <select
                      className="w-full border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="category"
                      id="category"
                      value={categories.map((cat) => cat.name).toString()}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          name: e.target.value,
                        })
                      }
                    >
                      {categories.map((category, index) => (
                        <option key={index} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="price"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="price"
                      id="price"
                      placeholder="Inerisci il prezzo del prodotto"
                      value={productPrompt.price}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          price: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="imageUrl"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Immagini
                    </label>
                    <textarea
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="imageUrl"
                      id="imageUrl"
                      placeholder="Enter a description for your post"
                      value={productPrompt.imageUrl}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          imageUrl: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="sizes"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Sizes
                    </label>
                    <textarea
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="sizes"
                      id="sizes"
                      placeholder="Inserisci una taglia per il prodotto"
                      value={productPrompt.description}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="description"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Top product
                    </label>
                    <textarea
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="description"
                      id="description"
                      placeholder="Enter a description for your post"
                      value={productPrompt.description}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="newArrival"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      New arrival
                    </label>
                    <textarea
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="newArrival"
                      id="newArrival"
                      placeholder="Insirisci il valore qualora il prodotto sia un nuovo arrivo"
                      value={productPrompt.NewArrival}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          NewArrival: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="price"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Count in stock
                    </label>
                    <input
                      type="number"
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="countInStock"
                      id="countInStock"
                      placeholder="Inerisci il prezzo del prodotto"
                      value={productPrompt.countInStock}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          countInStock: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="features"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Feautures
                    </label>
                    <textarea
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="features"
                      id="features"
                      placeholder="Enter a description for your post"
                      value={productPrompt.features.toString()}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          features: e.target.value
                            .split(",")
                            .map((s) => s.trim()),
                        })
                      }
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="rating"
                      className="text-gray-600 text-sm font-semibold text-center"
                    >
                      Rating
                    </label>
                    <textarea
                      className="resize-none w-[500px] mx-auto border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      name="rating"
                      id="rating"
                      placeholder="Enter a description for your post"
                      value={productPrompt.rating}
                      onChange={(e) =>
                        setProductPrompt({
                          ...productPrompt,
                          rating: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-600 w-fit text-white px-4 py-2 rounded-md mt-4 hover:bg-indigo-500 transition-all cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div>Login customer</div>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Profilo;
