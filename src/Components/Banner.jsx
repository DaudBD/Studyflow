const Banner = () => {
  return (
    <section className="container mx-auto px-5 py-20 text-center">
      <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
        Built for students who like to see progress
      </span>

      <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
        Turn big goals into daily tasks you'll actually finish
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
        Set a goal, break it into tasks, and watch a progress bar move every
        time you check one off. No spreadsheets, no guessing what to study next.
      </p>

      <div className="mt-8 flex justify-center gap-3">
        <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
          Start For Free
        </button>

        <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
          See How It Works
        </button>
      </div>
    </section>
  );
};

export default Banner;
