import { useTab } from "../../store/tabs//hooks";
import Button from "../UI/Button";

const Followings = () => {
  const { activeTab } = useTab();

  return (
    activeTab === "following" && (
      <>
        <div className="border-t border-neutral-500/50">
          <div className="max-w-xs flex flex-col items-start gap-2 p-4 mx-auto mt-8 w-full">
            <h1 className="font-semibold text-[--text-color] text-3xl">
              Welcome to X
            </h1>
            <p className="text-[--text-color-secondary]">
              This is the best place to see what’s happening in your world. Find
              some people and topics to follow now.
            </p>
            <div>
              <Button>Let’s go</Button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Followings;
