import { useState } from "react";
import CARTAS from "../../letters/carta";

const PrincipalPage = () => {
  const [selectedText, setSelectedText] = useState("Selecione um novo texto");

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-indigo-200 text-white p-4">
        <h2 className="text-xl mb-4 text-gray-700 text-center">
          Cartinhas de amor
        </h2>
        <ul>
          {CARTAS.map((letters, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 rounded-full text-center text-gray-700 hover:bg-gray-600 hover:text-fuchsia-200"
              onClick={() => setSelectedText(letters.texto)}
            >
              {letters.titulo}
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex justify-center items-center flex-1 bg-gray-100 p-20">
        <div className="max-h-full max-w-2xl p-8 bg-white rounded-2xl shadow-lg overflow-auto">
          <p className="text-lg text-center text-gray-800">{selectedText}</p>
        </div>
      </main>
    </div>
  );
};

export default PrincipalPage;
