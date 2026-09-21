import { FaCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="container mx-auto px-5 py-20 text-center">
      <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
        Built for students who like to see progress
      </span>

      <h2 className="mx-auto mt-6 max-w-175 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
        Turn big goals into daily tasks you'll actually finish
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
        Set a goal, break it into tasks, and watch a progress bar move every
        time you check one off. No spreadsheets, no guessing what to study next.
      </p>

      <div className="mt-8 flex justify-center gap-3 mb-4">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
          Start For Free
        </button>

        <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
          See How It Works
        </button>
      </div>
      <div className="card mx-auto w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          {/* Header */}
          <h2 className="flex items-center justify-between text-lg font-medium">
            <span className="text-base-content/70">Today's progress</span>

            <span className="text-2xl font-bold">72%</span>
          </h2>

          {/* Progress Bar */}
          <progress
            className="progress progress-primary w-full"
            value="72"
            max="100"
          ></progress>

          {/* Tasks */}
          <ul className="mt-3 space-y-3">
            <li className="flex items-center gap-3 rounded-2xl border border-base-300 p-4">
              <FaCheck className="text-primary" size={10} />

              <span className="text-base-content/70 line-through">
                Solve 10 integration problems
              </span>
            </li>

            <li className="flex items-center gap-3 rounded-2xl border border-base-300 p-4">
              <FaCheck className="text-primary" size={10} />

              <span className="text-base-content/70 line-through">
                Read Chapter 4: Cell Structure
              </span>
            </li>

            <li className="flex items-center gap-3 rounded-2xl border border-base-300 p-4">
              <FaCheck className="text-base-content/20" size={10} />

              <span className="text-base-content/80">Write essay outline</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
