import { useTab } from "../../store/tabs/hooks";

const Mention = () => {
  const { activeTab } = useTab("notifications");

  return (
    activeTab === "mentions" && (
      <div className="max-w-80 mx-auto mt-10">
        <h1 className="text-[--text-color] font-medium text-xl xl:text-2xl">
          Nothing to see here — <br /> yet
        </h1>
        <p className="text-[--text-color-secondary] text-sm">When someone mentions you, you’ll find it here.</p>
      </div>
    )
  );
};

export default Mention;
