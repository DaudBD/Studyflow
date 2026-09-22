import { LuSparkles } from "react-icons/lu";

const AiDayPlanning = () => {
  return (
    <section className="container mx-auto max-w-6xl px-5 py-20">
      <div className="rounded-3xl bg-[#14231F] px-8 py-12 md:px-16 md:py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <LuSparkles className="text-2xl text-[#FBBF24]" />

              <span className="text-sm font-semibold uppercase tracking-wide text-[#FBBF24]">
                AI Day Planning
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white md:text-4xl">
              Not sure where to start? Let StudyFlow suggest a plan
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
              One click on "Plan my day" turns your open tasks into a simple,
              realistic schedule, so the hardest part, starting, is already
              done for you.
            </p>
          </div>

          {/* Right Suggested Plan */}
          <div className="rounded-2xl border border-[#34433F] bg-[#1D302B] p-6 md:p-7">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white">
              Today's Suggested Plan
            </h3>

            <ul className="space-y-4">
              <li className="rounded-lg bg-[#263A35] px-4 py-3 text-sm text-gray-200">
                <span className="font-semibold text-white">9:00 - 9:45</span>
                <span className="mx-2 text-gray-500">&#8226;</span>
                Deep work on your hardest task
              </li>

              <li className="rounded-lg bg-[#263A35] px-4 py-3 text-sm text-gray-200">
                <span className="font-semibold text-white">10:00 - 10:45</span>
                <span className="mx-2 text-gray-500">&#8226;</span>
                Next task, same subject
              </li>

              <li className="rounded-lg bg-[#263A35] px-4 py-3 text-sm text-gray-200">
                <span className="font-semibold text-white">11:00 - 11:30</span>
                <span className="mx-2 text-gray-500">&#8226;</span>
                Quick review and recall
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDayPlanning;
