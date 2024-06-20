import React from 'react';

// Dados fictícios de filmes
const data = [
    {
        title: 'Twister',
        image: 'https://media.fstatic.com/Igg4H80CRsXM1CUXXYpZU1Q7zWk=/322x478/smart/filters:format(webp)/media/movies/covers/2014/11/twister_t1144_1.jpg',
        tags: ['Ação', 'Aventura'],
        text: ['"Twister" é um filme de 1996 que segue um grupo de caçadores de tempestades liderados por Jo Harding (Helen Hunt) e Bill (Bill Paxton). Eles enfrentam tornados devastadores enquanto tentam implantar sensores para melhorar a previsão meteorológica. Com efeitos especiais impressionantes, o filme combina ação intensa com drama pessoal, tornando-se um clássico do gênero de desastres naturais.']
    },
    {
        title: 'Esposa de Mentirinha',
        image: 'https://m.media-amazon.com/images/S/pv-target-images/b27eaebc29f97831ca43bf4cd401b4871928ee908fbd800cb2f6ab11aab5d7c2.jpg',
        tags: ['Comédia', 'Romance'],
        text: ['"Esposa de Mentirinha" é uma comédia romântica de 2011 estrelada por Adam Sandler e Jennifer Aniston. A trama gira em torno de um cirurgião plástico (Sandler) que convence sua assistente (Aniston) a se passar por sua esposa para ajudá-lo a cobrir uma mentira. O filme é marcado por situações hilárias e um desenvolvimento de relacionamentos inesperado entre os personagens principais.']
    },
    {
        title: 'O Jardim secreto',
        image: 'https://br.web.img3.acsta.net/medias/nmedia/18/93/94/02/20287510.jpg',
        tags: ['Drama', 'Fantasia'],
        text: ['"O Jardim Secreto" é um filme de 1993 baseado no romance infantil clássico de Frances Hodgson Burnett. A história segue uma menina britânica órfã chamada Mary Lennox, que é enviada para viver com seu tio em uma mansão sombria. Lá, ela descobre um jardim abandonado que se torna um símbolo de esperança e renovação, trazendo mudanças tanto para ela quanto para sua família. O filme é conhecido por sua atmosfera encantadora, explorando temas de amizade, cura emocional e o poder da natureza.']
    }
];

function Home() {
    return ( 
        <div className='grid grid-cols-3 gap-4 p-4'>
            {
                data.map((filme, index) => (
                    <div className="card" key={index}>
                        <h1>{filme.title}</h1>
                        <img className='w-full' src={filme.image} alt={filme.title}/>
                        <div className='tags mt-2'>
                            {
                                filme.tags.map(tag => (
                                    <span className="bg-purple-800 text-white py-1 px-2 rounded-full mr-2 mb-2" key={tag}>{tag}</span>
                                ))
                            }
                        </div>
                        <div className='text mt-2'>
                            {
                                filme.text.map((text, idx) => (
                                   <p className='mb-1' key={idx}>{text}</p> 
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
     );
}

export default Home;
