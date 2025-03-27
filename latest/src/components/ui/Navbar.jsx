import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Teacher Assistant</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/features" className="hover:text-gray-300">Features</Link></li>
          <li><Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
}
