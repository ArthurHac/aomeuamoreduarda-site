import { useState } from "react";
import CARTAS from "../../letters/carta";

const PrincipalPage = () => {
  const [selectedText, setSelectedText] = useState("Selecione um novo texto");
  const [imageSelected, setImageSelected] = useState("");

  const handleSelection = (texto: string, imagem?: string) => {
    setSelectedText(texto);
    if(!imagem) {
      setImageSelected("");
      return
    }
      
    setImageSelected(imagem)
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Menu lateral */}
      <aside className="w-full md:w-64 bg-indigo-200 text-white p-4">
        <h2 className="text-xl mb-4 text-gray-700 text-center">
          Cartinhas de amor
        </h2>
        <ul className="space-y-2">
          {CARTAS.map((letter, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 rounded-lg text-center text-gray-700 hover:bg-gray-600 hover:text-fuchsia-200"
              onClick={() => handleSelection(letter.texto, letter.imagem)}
            >
              {letter.titulo}
            </li>
          ))}
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 flex justify-center items-center bg-gray-100 p-4 md:p-20">
        <div className="max-w-full max-h-full overflow-auto md:max-w-2xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <p className="text-lg text-center text-gray-800 break-words">
            {selectedText}
          </p>
          {imageSelected && (
            <img
              src={imageSelected}
              alt="Imagem da carta"
              className="mt-4 rounded-lg shadow max-w-full h-auto"
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default PrincipalPage;
