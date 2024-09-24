
const Navbar = () => {
    return (
        <nav className="bg-slate-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-3xl font-bold">CRUD App</h1>
                <ul className="flex space-x-4">
                    <li><a href="/" className="text-white hover:underline">Home</a></li>
                    <li><a href="/about" className="text-white hover:underline">About</a></li>
                    <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar