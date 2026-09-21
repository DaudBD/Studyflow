import { LuListTodo, LuZap } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import SectionHeader from "./Shared/SectionHeader";
const Studing = () => {
  return (
    <section className="container max-w-6xl mx-auto px-5 py-20">
      <SectionHeader />
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Goals */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <GoGoal className="mb-5 text-3xl text-[#2563EB]" />

          <h3 className="text-xl font-semibold text-gray-900">
            Goals stay vague
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            "Get better at math" doesn't tell you what to open your laptop and
            do this afternoon.
          </p>
        </div>

        {/* Plans */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <LuListTodo className="mb-5 text-3xl text-[#2563EB]" />

          <h3 className="text-xl font-semibold text-gray-900">
            Plans live everywhere
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            A to-do app, a notes app, a calendar - and none of them talk to each
            other.
          </p>
        </div>

        {/* Motivation */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <LuZap className="mb-5 text-3xl text-[#2563EB]" />

          <h3 className="text-xl font-semibold text-gray-900">
            Motivation fades fast
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Without something to point at, it's hard to tell if this week
            actually went anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Studing;
