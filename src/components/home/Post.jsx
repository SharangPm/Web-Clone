import { useEffect, useState, useRef } from "react";
import { BiCheck } from "react-icons/bi";
import { replyPopover, headerIcons } from "../../constant";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { FaEarthAfrica } from "react-icons/fa6";
import { useAccount } from "../../store/auth/hooks";
import Button from "../UI/Button";
import classNames from "classnames";
import { useAppearance } from "../../store/appearance/hooks";

const Post = () => {
  const [text, setText] = useState("");

  const textAreaRef = useRef(null);

  const autoResize = () => {
    const textarea = textAreaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  useEffect(() => {
    autoResize();
  }, [text]);

  const [reply, setReply] = useState(() => {
    const savedReply = localStorage.getItem("replyChoice");
    return savedReply ? parseInt(savedReply, 10) || 1 : 1;
  });

  useEffect(() => {
    try {
      localStorage.setItem("replyChoice", reply.toString());
    } catch (error) {
      console.error(error);
    }
  }, [reply]);

  const saveChoice = (choice) => {
    setReply(choice);
  };
  const account = useAccount();
  const { fontSize } = useAppearance();

  const CurrentIcon =
    replyPopover.find((item) => item.id === reply)?.icon || FaEarthAfrica;

  const getIconClass = (icon) => {
    const baseClass = "hidden sm:flex";
    if ((icon.id === 5 || icon.id === 6) && fontSize >= 16) {
      return `${baseClass}`;
    }
    return "";
  };

  return (
    <div className="p-3.5 flex flex-col">
      <div className="flex items-start gap-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg"
          alt="sharang"
          className="w-11 h-11 rounded-full"
        />
        <div className="flex-1 flex border-neutral-500/50 pb-4 flex-col group">
          <textarea
            placeholder="What is happening?!"
            ref={textAreaRef}
            value={text}
            spellCheck={false}
            onChange={(e) => setText(e.target.value)}
            rows={2}
            className="bg-transparent outline-none text-[--text-color] overflow-hidden resize-none placeholder:text-[1rem]"
          >
            What&apos;s happening
          </textarea>
          <Popover className="relative">
            <PopoverButton className="px-2 text-sm hidden hover:bg-[--color-primary-alpha] rounded-full outline-none text-[--color-primary] items-center gap-1 group-focus-within:flex">
              {CurrentIcon && <CurrentIcon />}
              <span className="font-medium">
                {replyPopover.find((item) => item.id === reply)?.text ||
                  "Everyone can reply"}
              </span>
            </PopoverButton>
            <PopoverPanel className="rounded-2xl bg-[--background-primary] shadow-box-shadow absolute z-40 top-10 -left-14 w-[290px]">
              <div className="p-2.5">
                <h1 className="text-[--text-color]">Who can reply?</h1>
                <p className="text-[--text-color-secondary]">
                  Choose who can reply to this post. Anyone mentioned can always
                  reply.
                </p>
              </div>
              <div className="mt-4">
                {replyPopover.map((button) => (
                  <button
                    key={button.id}
                    className="w-full flex items-center justify-between p-2.5 hover-effect font-medium"
                    onClick={() => saveChoice(button.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[--color-primary] text-white">
                        <button.icon className="text-[18px]" />
                      </div>
                      <span className="text-[--text-color] font-medium">
                        {button.text}
                      </span>
                    </div>
                    {reply === button.id && (
                      <div className="text-[17px] text-[--color-primary]">
                        <BiCheck />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <div className="w-full h-[0.5px] bg-neutral-500/50 my-3" />
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap items-center gap-1">
              {headerIcons.map((icon) => (
                <button
                  key={icon.id}
                  className={classNames(
                    "w-8 h-8 text-[--color-primary] flex items-center justify-center rounded-full text-base",
                    icon.id === 6
                      ? "opacity-50 cursor-default"
                      : "hover:bg-[--color-primary-alpha]",
                    icon.id === 3 ? "hidden md:flex" : "",
                    getIconClass(icon)
                  )}
                >
                  {icon.icon}
                </button>
              ))}
            </div>
            <Button
              className={classNames(
                text === "" ? "cursor-default opacity-50" : ""
              )}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
