import { useTab } from "../../store/tabs/hooks";
import { FaUserLarge } from "react-icons/fa6";
import { notificationData } from "../../constant";

const All = () => {
  const { activeTab } = useTab("notifications");

  return (
    activeTab == "all" && (
      <div className="min-h-screen">
        {notificationData.map((data) => (
          <div
            key={data.id}
            className="w-full border-b border-neutral-500/50 hover-effect p-4 flex items-start gap-3 cursor-pointer"
          >
            <FaUserLarge className="text-xl text-[#1DA1F2]" />
            <div className="flex-1 flex flex-col">
              <img
                src={data.profileImage}
                alt={data.username}
                className="w-9 h-9 rounded-full object-cover"
                loading="lazy"
              />
              <div className="text-[--text-color] text-[.9rem]">
                <span className="font-medium">{data.username}</span> followed
                you
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default All;
