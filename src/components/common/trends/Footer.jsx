import { NavLink } from "react-router-dom";
import { trendsFooterLinks } from "../../../constant";
import { footerPopoverLinks } from "../../../constant";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Footer = () => {
  return (
    <footer className="mt-2 mb-4 px-4 text-[color:var(--text-color-secondary)] text-[.8125rem] text-start">
      {trendsFooterLinks.map((link) =>
        link.path ? (
          <NavLink
            to={link.path}
            key={link.id}
            className="m-1 hover:underline"  
          >
            {link.text}
          </NavLink>
        ) : (
          <Popover key={link.id} className="relative">
            <PopoverButton>
              {link.text}
            </PopoverButton>
            <PopoverPanel className="absolute -top-48 left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] w-48 max-w-[24rem] rounded-2xl shadow-box overflow-hidden">
              {footerPopoverLinks.map((link) => (
                <NavLink
                  key={link.id}
                  className="w-full block text-base text-[color:var(--text-color)] hover-effect py-2 px-3"
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              ))}
            </PopoverPanel>
          </Popover>
        )
      )}
      <div className="text-xs my-2">
      &copy; 2024 cemwebdev Corp.
      </div>
    </footer>
  );
};

export default Footer;
