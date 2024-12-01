import Button from "../../UI/Button";

const Subscribe = () => {
  return (
    <div className="bg-[color:var(--background-primary)] border border-neutral-500/50 rounded-2xl p-4 w-full">
      <h1 className="text-xl text-[color:var(--text-color)] font-semibold">
        Subscribe to Premium
      </h1>
      <p className="text-sm text-[color:var(--text-color)] font-light my-1.5">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <Button variant="basic">Subscribe</Button>
    </div>
  );
};

export default Subscribe;
