import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import ModalDelete from "@/components/ModalDelete";
import ProductList from "@/components/ProductList";

function Home() {
  const [products, setProducts] = useState();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
  });

  const router = useRouter();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products", {
        params: { limit: 12 },
      });
      setProducts(response.data.products);
    } catch (err) {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleModalDeleteOpen = (productId, productName) => {
    setIsDeleteModalOpen(true);
    setFormData({ ...formData, title: productName, id: productId });
    document.body.style.overflow = "hidden";
  };

  const handleModalDeleteClose = () => {
    setIsDeleteModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleDeleteProduct = () => {
    axios
      .delete(`https://dummyjson.com/products/${formData.id}`)
      .then((res) => {
        const updatedProduct = {
          ...res.data,
          isDeleted: true,
        };
        console.log("Product deleted successfully", updatedProduct);
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== formData.id)
        );
        handleModalDeleteClose();
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
      });
  };

  return (
    <div className="bg-slate-500">
      <Header />
      <div className="flex items-center justify-between mt-20 pt-10 px-[3.6rem] py-4">
        <h2 className="text-4xl text-white font-bold">Products</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/add")} //
        >
          Add new Product
        </button>
      </div>
      <div className="flex flex-wrap -mx-4 mb-10">
        {products ? (
          <ProductList
            handleModalDeleteOpen={handleModalDeleteOpen}
            products={products}
          />
        ) : (
          <Loading />
        )}

        {isDeleteModalOpen && (
          <ModalDelete
            handleModalDeleteClose={handleModalDeleteClose}
            formData={formData}
            handleDeleteProduct={handleDeleteProduct}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
