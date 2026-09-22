import { GoGoal } from "react-icons/go";
import {
  LuListTodo,
  LuZap,
  LuTimer,
  LuChartNoAxesCombined,
  LuBrain,
} from "react-icons/lu";

import SectionHeader from "../Shared/SectionHeader";
import FeaturedCard from "../Shared/FeaturedCard";

const Featured = () => {
  return (
    <section id="features" className="container mx-auto max-w-6xl px-5 py-20">
      <SectionHeader
        title="Everything a study session needs"
        subTitle="Nothing you don't need, nothing you have to configure for an hour first."
      />

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
        <FeaturedCard
          icon={<LuListTodo className="mb-5 text-3xl text-[#2563EB]" />}
          title="Daily task breakdown"
          description="Every goal splits into small tasks you can finish in one sitting."
        />

        <FeaturedCard
          icon={<GoGoal className="mb-5 text-3xl text-[#2563EB]" />}
          title="Goal tracking"
          description="See exactly how many tasks stand between you and each goal."
        />

        <FeaturedCard
          icon={
            <LuChartNoAxesCombined className="mb-5 text-3xl text-[#2563EB]" />
          }
          title="Subject insights"
          description="Color-coded subjects show where your time is actually going."
        />

        <FeaturedCard
          icon={<LuTimer className="mb-5 text-3xl text-[#2563EB]" />}
          title="Focus timer"
          description="A built-in Pomodoro timer to protect a block of real study time."
        />

        <FeaturedCard
          icon={<LuZap className="mb-5 text-3xl text-[#2563EB]" />}
          title="Visual progress"
          description="Streaks, charts and progress bars that move when you do the work."
        />

        <FeaturedCard
          icon={<LuBrain className="mb-5 text-3xl text-[#2563EB]" />}
          title="AI day planning"
          description="One click suggests a simple schedule for today's tasks."
        />
      </div>
    </section>
  );
};

export default Featured;
