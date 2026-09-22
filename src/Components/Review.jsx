import SectionHeader from "../Shared/SectionHeader";

const Review = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      name: "Maya R.",
      role: "Pre-med, sophomore",
      description:
        "I stopped rewriting the same to-do list every morning. Now I just open StudyFlow and my day is already there.",
    },
    {
      id: 2,
      rating: 5,
      name: "Devon L.",
      role: "Computer Science, junior",
      description:
        "Seeing the progress bar move is honestly the reason I keep coming back. It's a small thing but it works on me.",
    },
    {
      id: 3,
      rating: 5,
      name: "Priya S.",
      role: "Engineering, freshman",
      description:
        "The focus timer plus subject tracking finally showed me I was neglecting Physics. Fixed that in two weeks.",
    },
  ];

  return (
    <section className="bg-[#F8F9F4] px-5 py-12">
      <SectionHeader title="Students are getting more done" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="min-h-58.75 rounded-[20px] border border-[#D9DDD2] bg-white p-7 shadow-sm"
          >
            {/* Stars */}
            <div className="mb-5 flex gap-1 text-[20px] text-[#D99117]">
              {Array.from({ length: review.rating }).map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>

            {/* Review */}
            <p className="mb-6 text-[17px] leading-[1.4] text-[#111111]">
              "{review.description}"
            </p>

            {/* User */}
            <div>
              <h3 className="text-[17px] font-bold text-[#111111]">
                {review.name}
              </h3>

              <p className="text-[15px] text-[#777777]">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
