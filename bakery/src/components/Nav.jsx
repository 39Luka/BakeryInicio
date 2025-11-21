import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="flex gap-12">
            <NavLink 
                className={({ isActive }) => `text-base text-bold ${isActive ? "text-(--color-primary)" : "text-black hover:text-(--color-primary)"}`}
                to="/home"
            >
                Home
            </NavLink>
            <NavLink 
                className={({ isActive }) => `text-base text-bold ${isActive ? "text-(--color-primary)" : "text-black hover:text-(--color-primary)"}`}
                to="/productos"
            >
                Productos
            </NavLink>
        </nav>
    );
}

export default Nav;
