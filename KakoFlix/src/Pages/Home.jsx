import data from '../../artigos.json'

function Home() {
    return ( 
        <>      {
        data.map(
            (filme, index) => (
                <div className='card' key={index}>
                    <h1>{filme.title}</h1>
                    <img src={filme.image}/>
                 </div>
                )
            )
        } 
        </>   
     );
}

export default Home;