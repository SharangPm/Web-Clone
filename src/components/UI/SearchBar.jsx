import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import PropTypes from "prop-types";

const SearchBar = ({ popoverContent, inputPlaceholder }) => {
  const [value, setValue] = useState("");
  const [tooltip, setTooltip] = useState(false);

  const ref = useRef();
  const tooltipRef = useRef();

  useClickAway(ref, (event) => {
    if (tooltipRef.current && tooltipRef.current.contains(event.target)) {
      return;
    }
    setTooltip(false);
  });

  return (
    <div
      className="sticky top-0 z-50 bg-[color:var(--background-primary)] min-h-8 h-[53px] mb-3 flex items-center w-full"
      ref={ref}
    >
      <label className="bg-[color:var(--background-secondary)] flex w-full rounded-full h-[44px] group relative focus-within:bg-[color:var(--background-primary)] border border-transparent focus-within:border-[color:var(--color-primary)]">
        <button className="w-[56px] h-full z-50 flex items-center justify-center absolute top-0 left-0 pointer-events-none">
          <FaSearch className="min-w-8 text-[color:var(--text-color-secondary)] group-focus-within:text-[color:var(--color-primary)]" />
        </button>
        <input
          type="text"
          id="search-input"
          className="w-full h-full bg-transparent rounded-full px-12 outline-none text-[color:var(--text-color)] text-sm placeholder:text-[color:var(--text-color-secondary)]"
          placeholder={inputPlaceholder}
          autoComplete="off"
          onFocus={() => setTooltip(true)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value && (
          <button
            className="h-full absolute top-0 right-2 rounded-full flex items-center justify-center invisible group-focus-within:visible"
            type="button"
            onClick={() => setValue("")}
          >
            <div className="bg-[color:var(--color-primary)] w-5 h-5 flex items-center justify-center rounded-full text-[color:var(--background-primary)]">
              <IoClose />
            </div>
          </button>
        )}
        {tooltip && (
          <div
            ref={tooltipRef}
            className="bg-[color:var(--background-primary)] absolute overflow-hidden top-full w-full min-h-[100px] max-h-48 rounded-lg shadow-box py-5 px-4"
          >
            <p className="text-sm text-[color:var(--text-color)]">
              {value ? (
                <>
                  Search for{" "}
                  <span className="italic">
                    "
                    {value.trim().length > 25
                      ? `${value.slice(0, 25)}...`
                      : value}
                    "
                  </span>
                </>
              ) : (
                <span>{popoverContent}</span>
              )}
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

SearchBar.propTypes = {
  popoverContent: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

export default SearchBar;
