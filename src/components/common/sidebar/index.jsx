import { FaXTwitter } from "react-icons/fa6";
import { sidebarLinks } from "../../../constant/index";
import { Link } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import Button from "../../UI/Button";
import Profile from "./Profile";
import { FaFeather } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="overflow-y-auto overflow-x-hidden min-h-screen text-[color:var(--text-color)] sticky top-0 max-h-screen flex flex-col w-20 xl:w-64 pl-3 pr-4 z-50">
      <div className="mt-3 text-3xl pl-2.5 inline-flex">
        <Link
          to="/"
          className="hover:text-[color:var(--color-secondary)] transition-colors"
        >
          <FaXTwitter />
        </Link>
      </div>
      <nav>
        <ul className="my-1.5 flex flex-col items-start gap-1">
          {sidebarLinks.map((link) => (
            <SidebarLink key={link.id} {...link} />
          ))}
        </ul>
      </nav>
        <Button size="large">
          <span className="hidden xl:block">Post</span>
          <span className="block xl:hidden">
            <FaFeather />
          </span>
        </Button>
      <Profile />
    </aside>
  );
};

export default Sidebar;
