import { LuListTodo, LuZap } from "react-icons/lu";
import { GoGoal } from "react-icons/go";

import SectionHeader from "../Shared/SectionHeader";
import FeaturedCard from "../Shared/FeaturedCard";

const Studing = () => {
  return (
    <section className="container mx-auto max-w-6xl px-5 py-20">
      <SectionHeader
        title="Studying without a system is exhausting"
        subTitle="You're not lacking discipline. You're lacking a place where your goals turn into today's tasks."
      />

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeaturedCard
          icon={<GoGoal className="mb-5 text-3xl text-[#2563EB]" />}
          title="Goals stay vague"
          description={`"Get better at math" doesn't tell you what to open your laptop and do this afternoon.`}
        />

        <FeaturedCard
          icon={<LuListTodo className="mb-5 text-3xl text-[#2563EB]" />}
          title="Plans live everywhere"
          description="A to-do app, a notes app, a calendar - and none of them talk to each other."
        />

        <FeaturedCard
          icon={<LuZap className="mb-5 text-3xl text-[#2563EB]" />}
          title="Motivation fades fast"
          description="Without something to point at, it's hard to tell if this week actually went anywhere."
        />
      </div>
    </section>
  );
};

export default Studing;
