import { settingsLinks } from "../constant";
import { CgArrowTopRight } from "react-icons/cg";
import { IoChevronForward } from "react-icons/io5";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import SearchBar from "../components/UI/SearchBar";

const popoverContent = "Try searching for notifications, privacy, etc.";
const inputPlaceholder = "Search settings";

const Settings = () => {
  const location = useLocation();

  const isDisplayPage = location.pathname.includes("/settings/display");

  return (
    <div className="flex">
      <section className={`lg:block ${isDisplayPage ? "hidden lg:block" : ""}`}>
        <div className="lg:w-[450px] w-full border-r border-neutral-500/50 min-h-screen text-base">
          <div className="pl-2">
            <h1 className="text-[color:var(--text-color)] text-xl font-semibold">
              Settings
            </h1>
            <div className="mt-5 pr-2">
              <SearchBar
                backgroundColor="bg-transparent"
                popoverContent={popoverContent}
                labelBorder="border-neutral-600"
                inputPlaceholder={inputPlaceholder}
              />
            </div>
          </div>
          {settingsLinks.map((link) =>
            link.href ? (
              <NavLink
                to={link.href}
                key={link.id}
                className={({ isActive }) =>
                  `w-full transition-colors flex text-[color:var(--text-color)] items-center justify-between border-r-2 p-3.5 hover:bg-[--hover] ${
                    isActive ? " border-[color:var(--color-primary)]" : "border-transparent"
                  }`
                }
              >
                <span>{link.text}</span>
                <span className="text-neutral-500">
                  {link.id === 10 ? <CgArrowTopRight /> : <IoChevronForward />}
                </span>
              </NavLink>
            ) : (
              <div
                key={link.id}
                className="w-full text-[color:var(--text-color)] flex items-center justify-between p-3.5 opacity-50 cursor-not-allowed"
              >
                <span>{link.text}</span>
                <span className="text-neutral-500">
                  {link.id === 10 ? <CgArrowTopRight /> : <IoChevronForward />}
                </span>
              </div>
            )
          )}
        </div>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Settings;
