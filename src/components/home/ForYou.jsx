import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useTab } from "../../store/tabs/hooks";
import { useEffect, useRef, useState, useCallback } from "react";
import { PiDotsThreeCircle } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import PostActions from "./PostActions";
import PostPopover from "./PostPopover";
import { mockPosts } from "../../constant";
import { relativeTimeFormat } from "../../utils/format";
import { FaArrowUpLong } from "react-icons/fa6";

const ForYou = () => {
  const [posts, setPosts] = useState([...mockPosts]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const sentinelRef = useRef(null);
  const scrollBtnRef = useRef(null);
  const { activeTab } = useTab();

  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newPosts = mockPosts.map((post) => ({
        ...post,
        id: `${Date.now()}-${Math.random().toString(36)}`,
        image: `https://picsum.photos/600/400?random=${Math.random()}`,
        profileImage: `https://i.pravatar.cc/150?img=${Math.random()}`,
      }));
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 1000);
  }, [loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, [loadMore, loading]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollBtnRef.current.classList.remove("hidden");
        scrollBtnRef.current.classList.add("flex");
      } else {
        scrollBtnRef.current.classList.remove("flex");
        scrollBtnRef.current.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    activeTab === "for-you" && (
      <>
        <button
          onClick={scrollToTop}
          className="fixed  z-50 bottom-4 right-4 w-8 h-8 items-center justify-center bg-[--color-primary] text-white rounded-full hidden"
          ref={scrollBtnRef}
          id="scroll-to-top"
        >
          <FaArrowUpLong />
        </button>
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-1 sm:p-3 border-y border-neutral-500/50 hover:bg-[--hover] fade-in"
          >
            <div className="flex gap-2">
              <img
                src={post.profileImage}
                alt="avatar"
                className="w-10 h-10 object-cover bg-center rounded-full"
                loading="lazy"
              />
              <div className="flex-1 flex flex-col gap-1">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <Link className="group flex items-center gap-1">
                      <div className="group-hover:underline text-[--text-color] font-medium">
                        <span className="inline-block sm:hidden">
                          {post.username.slice(0, 5)}
                        </span>
                        <span className="hidden sm:inline-block">
                          {post.username}
                        </span>
                      </div>
                      {post.verified && (
                        <RiVerifiedBadgeFill className="text-[--color-primary]" />
                      )}
                      <span className="text-[--text-color-secondary] text-sm">
                        {post.handle}
                      </span>
                      <span className="text-[--text-color-secondary]">
                        &bull;
                      </span>
                      <span className="ml-1 text-xs text-[--text-color-secondary]">
                        {relativeTimeFormat(post.time)}
                      </span>
                    </Link>
                    <Popover className="relative">
                      <PopoverButton className="outline-none">
                        <PiDotsThreeCircle className="text-xl hover:text-[--color-primary] text-[--text-color-secondary]" />
                      </PopoverButton>
                      <PopoverPanel className="absolute overflow-hidden w-[22.688rem] text-base z-50 right-full rounded-2xl shadow-box bg-[--background-primary]">
                        <PostPopover username={post.handle} />
                      </PopoverPanel>
                    </Popover>
                  </div>
                  <div className="text-[--text-color]">{post.content}</div>
                </div>
                <div className="rounded-2xl overflow-hidden mx-auto border border-neutral-700">
                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 flex-wrap flex items-center text-[--text-color-secondary] text-[.85rem] justify-between gap-1">
                  <PostActions
                    key={post.id}
                    likes={post.likes}
                    comments={post.comments}
                    views={post.views}
                    retweets={post.retweets}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={sentinelRef} style={{ height: 10 }} />
        {loading && (
          <div
            role="status"
            className="w-full flex items-center justify-center py-4"
          >
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-[--color-secondary] animate-spin fill-[--color-primary]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </>
    )
  );
};

export default ForYou;
