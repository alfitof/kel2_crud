import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEditContext } from "@/context/EditContext";

const ProductList = ({ products, handleModalDeleteOpen }) => {
  const { editedProduct } = useEditContext();
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-[4.5rem] py-5 gap-8 w-full">
      {products.map((item) => (
        <div key={item.id} className="p-4 bg-slate-600 rounded-lg">
          <div className="mb-4">
            <div className="w-96 h-56 mx-auto w-full">
              <Image
                src={item.thumbnail}
                width={2000}
                height={2000}
                className="object-cover rounded-lg w-full h-full max-h-lg mx-auto lg:max-w-full"
              />
            </div>
          </div>
          <div>
            {editedProduct && editedProduct.id == item.id ? (
              <>
                <h1 className="text-xl text-white font-semibold">
                  {editedProduct.title}
                </h1>
                <h1 className="text-md text-white mb-5">
                  Rp. {editedProduct.price}
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-xl text-white font-semibold ">
                  {item.title}
                </h1>
                <h1 className="text-md text-white mb-5">Rp. {item.price}</h1>
              </>
            )}
            <div className="flex justify-between">
              <button
                className="border border-red-500 hover:bg-red-500 text-red-500 w-[45%] hover:text-white font-bold py-2 px-4 rounded"
                onClick={() => handleModalDeleteOpen()}
              >
                Remove
              </button>
              <button
                className="border border-green-500 hover:bg-green-500 text-green-500 w-[45%] hover:text-white font-bold py-2 px-4 rounded mr-2"
                onClick={() => router.push(`/products/${item.id}`)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
