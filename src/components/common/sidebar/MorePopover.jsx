import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import PropTypes from "prop-types";
import PopoverPanelContent from "./PopoverPanelContent";
import { morePopoverLinks } from "../../../constant";

const MorePopover = ({ icon: Icon }) => {
  return (
    <Popover className="relative outline-none">
      <PopoverButton className="inline-flex text-start w-full group focus:outline-none">
        <div className="inline-flex items-center group-hover:bg-[--hover] gap-4 p-2.5 rounded-full">
          <Icon className="text-2xl" />
          <span className="hidden xl:block text-xl">More</span>
        </div>
      </PopoverButton>
      <PopoverPanel className="fixed bottom-48 z-50 overflow-hidden flex flex-col items-center w-[318px] bg-[color:var(--background-primary)] rounded-xl shadow-box">
        {morePopoverLinks.map((link) => (
          <PopoverPanelContent key={link.id} {...link} />
        ))}
      </PopoverPanel>
    </Popover>
  );
};

MorePopover.propTypes = {
  icon: PropTypes.elementType.isRequired,
};

export default MorePopover;
