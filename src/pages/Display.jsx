import { NavLink, Outlet, useLocation } from "react-router-dom";
import { displayLinks } from "../constant";
import { IoChevronForward } from "react-icons/io5";

const Display = () => {
  const location = useLocation();
  const isAppearancePage = location.pathname.includes(
    "/settings/display/appearance"
  );

  return (
    <section>
      <div
        className={`max-w-[600px] w-full lg:max-w-max lg:w-auto border-r border-neutral-500/50 min-h-screen ${
          isAppearancePage ? "hidden" : "block"
        }`}
      >
        <div className="pt-2 px-4">
          <h1 className="text-[color:var(--text-color)] text-xl font-semibold">
            Accessibility, display and languages
          </h1>
          <p className="mt-5 text-sm text-[color:var(--text-color-secondary)]">
            Manage how X content is displayed to you.
          </p>
        </div>
        <nav className="mt-8 flex flex-col">
          {displayLinks.map((link) =>
            link.id === 2 ? (
              <NavLink
                to={link.path}
                key={link.id}
                className="flex sm:h-[4.5rem] items-center hover:bg-[--hover] transition-colors"
              >
                <div className="w-16 flex items-center justify-center">
                  <link.icon className="text-[color:var(--text-color-secondary)] text-xl" />
                </div>
                <div className="flex flex-col flex-1 items-start mx-auto">
                  <h1 className="text-xs sm:text-sm text-[color:var(--text-color)]">
                    {link.title}
                  </h1>
                  <p className="text-xs tracking-wide text-start text-[color:var(--text-color-secondary)]">
                    {link.subtitle}
                  </p>
                </div>
                <IoChevronForward className="mx-3 text-[color:var(--text-color-secondary)]" />
              </NavLink>
            ) : (
              <button
                key={link.id}
                className="flex sm:h-[4.5rem] items-center transition-colors cursor-not-allowed opacity-45"
              >
                <div className="w-16 flex items-center justify-center">
                  <link.icon className="text-[color:var(--text-color-secondary)] text-xl" />
                </div>
                <div className="flex flex-col flex-1 items-start mx-auto">
                  <h1 className="text-xs sm:text-sm text-[color:var(--text-color)]">
                    {link.title}
                  </h1>
                  <p className="text-xs tracking-wide text-start text-[color:var(--text-color-secondary)]">
                    {link.subtitle}
                  </p>
                </div>
                <IoChevronForward className="mx-3 text-neutral-500" />
              </button>
            )
          )}
        </nav>
      </div>
      <Outlet />
    </section>
  );
};

export default Display;
