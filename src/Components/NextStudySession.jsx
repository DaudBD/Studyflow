import { Link } from "react-router";

const NextStudySession = () => {
  return (
    <section className="container mx-auto rounded-[20px] border border-[#D9DDD2] bg-white px-5 py-10 text-center">
      <div className="mx-auto max-w-175">
        <h2 className="text-[36px] font-bold leading-tight text-[#071E2B]">
          Your next study session could be the one that sticks
        </h2>

        <p className="mx-auto mt-4 max-w-150 text-[20px] leading-7 text-[#667781]">
          Set your first goal in under two minutes. No credit card required.
        </p>

        <Link to="/sign-in" className="mt-6 inline-flex items-center gap-3 rounded-[14px] bg-[#2563EB] px-7 py-4 text-[18px] font-semibold text-white hover:bg-[#1D4ED8]">
          Start for free
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default NextStudySession;
