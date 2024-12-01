import { useTab } from "../../store/tabs/hooks";

const Verified = () => {
  const { activeTab } = useTab("notifications");

  return (
    activeTab === "verified" && (
      <div className="max-w-96 mx-auto mt-20 p-2">
        <img
          src="https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png"
          alt="verified tab hero image"
          loading="lazy"
        />
        <h1 className="text-[--text-color] font-semibold text-xl xl:text-2xl">
          Nothing to see here — <br /> yet
        </h1>
        <div className="w-full text-sm mt-2 text-[--text-color-secondary]">
          Likes, mentions, reposts, and a whole lot more —<br /> when it comes
          from a verified account, you’ll find it here.{" "}
          <a
            href="#"
            target="_blank"
            className="text-[--text-color] hover:underline"
          >
            Learn more
          </a>
        </div>
      </div>
    )
  );
};

export default Verified;
