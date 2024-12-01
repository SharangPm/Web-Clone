import { IoArrowBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useAppearance } from "../store/appearance/hooks";
import {
  setColor,
  setBackgroundColor,
  setFontsize,
  setBoxShadow,
  setHover,
} from "../store/appearance/actions";
import ThemeButton from "../components/UI/ThemeButton";
import { themes } from "../themes";
import { colors, fontSizes } from "../constant";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from "react";

const Appearance = () => {
  const { backgroundColor, color, fontSize } = useAppearance();
  const [selectedFontSizeIndex, setSelectedFontSizeIndex] = useState(
    fontSizes.indexOf(fontSize)
  );

  const handleFontSizeChange = (index) => {
    setSelectedFontSizeIndex(index);
    setFontsize(fontSizes[index]);
  };

  return (
    <section className="border-r lg:border-transparent border-neutral-500/50 min-h-screen">
      <div className="pt-2 pl-4">
        <h1 className="flex items-center gap-10 text-xl text-[color:var(--text-color)]">
          <NavLink
            className="w-8 h-8 relative flex items-center justify-center hover:bg-[--hover] rounded-full group"
            to="/settings/display"
          >
            <IoArrowBack />
            <div className="text-xs bg-[color:var(--background-secondary)] text-[color:var(--text-color)] p-1 rounded-md absolute top-full mt-1 opacity-0 visibility-hidden transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
              Back
            </div>
          </NavLink>
          <span>Display</span>
        </h1>
        <p className="text-xs mt-5 text-[color:var(--text-color-secondary)]">
          Manage your font size, color, and background. These settings affect
          all the X accounts on this browser.
        </p>
      </div>

      <div className="mt-10">
        <h1 className="border-y">
          <div className="p-3">
            <h1 className="text-lg font-semibold text-[color:var(--text-color)]">
              Font size
            </h1>
            <div className="flex items-center">
              <div className="text-[0.813rem] font-light text-[color:var(--text-color)]">
                Aa
              </div>

              <div className="relative flex items-center justify-between w-full max-w-md mx-auto my-4">
                <div className="absolute top-1/2 left-0 rounded-full overflow-hidden right-0 h-1 bg-[--color-secondary] -translate-y-1/2" />
                <div
                  className="absolute rounded-full top-1/2 left-0 h-1 bg-[--color-primary] -translate-y-1/2"
                  style={{
                    width: `${
                      (selectedFontSizeIndex / (fontSizes.length - 1)) * 100
                    }%`,
                  }}
                />
                {fontSizes.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleFontSizeChange(index)}
                    className="flex items-center mx-2 justify-center"
                  >
                    <button
                      key={index}
                      className={`relative w-4 h-4 rounded-full ${
                        index <= selectedFontSizeIndex
                          ? "bg-[--color-primary]"
                          : "bg-[--color-secondary]"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="text-[1.25rem] font-light text-[color:var(--text-color)]">
                Aa
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div>
        <div className="p-3 border-b">
          <h1 className="text-lg text-[color:var(--text-color)] font-semibold">
            Colors
          </h1>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6 place-items-center">
            {colors.map((colors, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full flex items-center justify-center hover:ring-2 hover:ring-neutral-600 transition-all"
              >
                <button
                  style={{ "--bg": colors.primary }}
                  className="w-[40px] h-[40px] rounded-full bg-[color:var(--bg)] flex items-center justify-center text-white text-xl"
                  onClick={() => {
                    setColor({
                      ...color,
                      ...colors,
                    });
                  }}
                >
                  {color.primary === colors.primary && <IoMdCheckmark />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="p-3">
          <h1 className="text-lg text-[color:var(--text-color)] font-semibold">
            Background
          </h1>
          <div className="grid sm:grid-cols-3 gap-2 mt-3 text-sm">
            {themes.map((theme) => (
              <ThemeButton
                key={theme.name}
                label={theme.label}
                color={theme}
                backgroundColor={theme}
                active={backgroundColor.name === theme.name}
                onClick={() => {
                  const newColor = {
                    ...color,
                    textColor: theme.textColor,
                    textColorSecondary: theme.textColorSecondary,
                  };
                  const newBackgroundColor = {
                    name: theme.name,
                    primary: theme.backgroundPrimary,
                    secondary: theme.backgroundSecondary,
                  };
                  setColor(newColor);
                  setBackgroundColor(newBackgroundColor);
                  setBoxShadow(
                    "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px"
                  );
                  setHover(theme.hover);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appearance;
