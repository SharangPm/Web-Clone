import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/common/sidebar/index";
import TrendsBar from "../components/common/trends/index";
import { useEffect } from "react";
import { useAppearance } from "../store/appearance/hooks";

const Root = () => {
  const appearance = useAppearance();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--background-secondary",
      appearance.backgroundColor.secondary
    );

    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );

    document.documentElement.style.setProperty(
      "--color-primary-alpha",
      appearance.color.primary + "30"
    );

    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.secondary
    );

    document.documentElement.style.setProperty(
      "--text-color",
      appearance.color.textColor
    );

    document.documentElement.style.setProperty(
      "--text-color-secondary",
      appearance.color.textColorSecondary
    );

    document.documentElement.style.setProperty(
      "--box-shadow",
      appearance.boxShadow
    );

    document.documentElement.style.setProperty(
      "--font-size",
      appearance.fontSize + "px"
    );

    document.documentElement.style.setProperty("--hover", appearance.hover);
  }, [appearance]);

  const location = useLocation();

  const hiddenTrendsBar = ["/settings"];
  const visibleTrendsBar = !hiddenTrendsBar.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <div className="max-w-screen-xl mx-auto flex font-poppins">
      <Sidebar />
      <div className="flex-1 flex">
        <main className="flex-1 pt-2 border-neutral-500/50 border-x">
          <Outlet />
        </main>
        {visibleTrendsBar && (
          <div className="">
            <TrendsBar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Root;
