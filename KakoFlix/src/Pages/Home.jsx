import React from 'react';

// Dados fictícios de filmes
const data = [
    {
        title: 'Filme 1',
        image: 'https://via.placeholder.com/300',
        tags: ['Ação', 'Aventura'],
        text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.']
    },
    {
        title: 'Filme 2',
        image: 'https://via.placeholder.com/300',
        tags: ['Comédia', 'Romance'],
        text: ['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.']
    },
    {
        title: 'Filme 3',
        image: 'https://via.placeholder.com/300',
        tags: ['Drama', 'Fantasia'],
        text: ['Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.']
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
