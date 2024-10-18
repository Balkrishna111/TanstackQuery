import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Products from "../pages/Products";
import Chats from "../pages/Chats";

const navItems = [
  {
    title: "Home",
    to: "/",
    component: <Home />,
  },
  {
    title: "Posts",
    to: "/posts",
    component: <Posts />,
  },
  {
    title: "Products",
    to: "/products",
    component: <Products />,
  },
  {
    title: "Chats",
    to: "/chats",
    component: <Chats />,
  },
];

const NavigationBar = () => {
  return (
    <BrowserRouter>
      <nav className='w-screen py-6 px-12 shadow-md flex justify-between items-center h-100 w-100'>
        {navItems.map(({ to, title }) => (
          <NavLink
            key={title}
            to={to}
            className={({ isActive }) =>
              isActive ? "active-link" : "inactive-link"
            }
          >
            {title}
          </NavLink>
        ))}
      </nav>
      <Routes>
        {navItems.map(({ to, title, component }) => (
          <Route key={title} path={to} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
export default NavigationBar;
