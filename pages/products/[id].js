import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { useEditContext } from "@/context/EditContext";
import { useAddContext } from "@/context/AddContext";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { setEditedProduct } = useEditContext();
  const { setAddedProduct, addedProduct } = useAddContext();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setPrice(data.price);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const updatedProductData = {
      title: title,
      price: parseFloat(price),
    };

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProductData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setEditedProduct({
          id: id,
          title: updatedProductData.title,
          price: updatedProductData.price,
        });
        router.push("/");
      });
  };

  return (
    <div className="bg-slate-500">
      <Header />
      <div className="mt-20  px-[3.6rem] py-10">
        <div className="fixed top-10 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-6 mt-3 text-3xl font-medium text-gray-900 dark:text-white">
                  Edit Product
                </h3>
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-lg  font-medium text-gray-900 dark:text-white"
                    >
                      Title
                    </label>
                    {addedProduct ? (
                      <input
                      type="text"
                      name="title"
                      id="title"
                      value={addedProduct.title}
                      onChange={(e) => setAddedProduct(e.target.value)}
                      className="bg-gray-50 mt-5 border pl-5 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter title here.."
                      required
                    />
                    ) : (
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="bg-gray-50 mt-5 border pl-5 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter title here.."
                      required
                    />
                  )}
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-lg mb-2 mt-5  font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    {addedProduct ? (
                      <input
                      type="text"
                      name="price"
                      id="price"
                      value={addedProduct.price}
                      onChange={(e) => setAddedProduct(e.target.value)}
                      className="bg-gray-50 mt-5 border pl-5 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter price here.."
                      required
                    />
                    ) : (
                    <input
                      type="text"
                      name="price"
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="bg-gray-50 mt-5 border pl-5 border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter price here.."
                      required
                    />
                  )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-lg mt-10 mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {isLoading ? "Saving..." : "Save Edit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
