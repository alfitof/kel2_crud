import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="bg-slate-500">
      <Header />
      <div className="mt-20  px-[3.6rem] py-10">
        <h2 className="text-4xl text-white font-bold">{id}</h2>
      </div>
    </div>
  );
};

export default EditPage;
