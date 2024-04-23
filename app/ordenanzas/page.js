import React from "react";
import Card from "../components/ui/Card";

const Ordenanzas = async () => {
  const response = await fetch("http://localhost:3000/api/ordenanzas",{cache: "no-cache"});
  const ordenanzas = await response.json();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <h1 className="text-4xl m-10">Ordenanzas</h1>

      {ordenanzas.map(({ id, number, description, fileUrl }) => (
        <Card key={id} title={number} description={description} url={fileUrl} />
      ))}
    </main>
  );
};



export default Ordenanzas;
