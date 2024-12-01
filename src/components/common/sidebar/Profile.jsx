import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useAccount } from "../../../store/auth/hooks";
import { PiDotsThreeCircle } from "react-icons/pi";

const Profile = () => {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <PopoverButton className="mt-3 mb-1 xl:hover:bg-[--hover] transition-colors w-full flex px-2 py-3 rounded-full items-center focus:outline-none">
          <div className="flex items-center gap-1 flex-1">
            <img
              src={account.avatar}
              alt="avatar"
              className="xl:w-10 xl:h-10 rounded-full"
            />
            <div className="xl:flex flex-col items-starts hidden gap-0.5">
              <h1 className="font-semibold">{account.fullName}</h1>
              <div className="text-xs">{account.username}</div>
            </div>
          </div>
          <PiDotsThreeCircle className="hidden xl:block text-xl" />
        </PopoverButton>
        <PopoverPanel className="fixed w-[300px] bottom-20 bg-[color:var(--background-primary)] shadow-box rounded-xl py-3">
          <button className="py-2 hover:bg-[--hover] w-full transition-colors">
            Add an existing account
          </button>
          <button className="py-2 hover:bg-[--hover] w-full transition-colors">
            Log out @{account.username}
          </button>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

export default Profile;
