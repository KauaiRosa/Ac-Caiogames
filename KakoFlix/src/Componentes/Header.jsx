import Navbar from "./Navbar";


function Header() {
    return ( 
        <header className="flex bg-cyan-500 text-white p-4 mb-4 justify-between">
            <span>Olá, visitante!</span>
            <h1>Bem-vindo ao KakoFlix!</h1>
            <Navbar/>
        </header>
     );
}

export default Header;