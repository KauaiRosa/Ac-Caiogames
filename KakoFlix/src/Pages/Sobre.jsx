import React from 'react';

const Sobre = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <header className="text-3xl font-bold mb-8">Sobre o Kakofilx de Cinema</header>
      <div className="max-w-2xl p-6 bg-gray-100 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed">
          O Kakofilx de Cinema é um site dedicado aos amantes da sétima arte. Aqui você encontra informações
          detalhadas sobre os filmes mais recentes, clássicos atemporais e tudo o que envolve o mundo do cinema.
          Explore nossa coleção, leia críticas, descubra curiosidades e muito mais.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
