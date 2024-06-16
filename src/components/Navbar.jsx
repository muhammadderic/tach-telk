import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "px-3 py-2 bg-blue-800 text-white hover:bg-blue-600 hover:text-white rounded-md"
      : "px-3 py-2 hover:bg-blue-600 hover:text-white text-blue-800 rounded-md";

  return (
    <nav className="mx-auto max-w-screen-lg p-4 sm:px-6 sm:py-4 lg:px-8 lg:py-6 flex justify-between items-center bg-lime-200">
      <div className="w-full flex flex-1 justify-between items-center md:items-stretch md:justify-start">
        <NavLink
          to="/"
          className="flex flex-shrink-0 items-center font-bold text-xl text-blue-800 uppercase"
        >
          tach telk
        </NavLink>
        <div className="md:ml-auto flex space-x-2">
          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/add-article"
            className={navLinkClass}
          >
            Add Article
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;