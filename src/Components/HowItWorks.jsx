import HowItWorksCard from "../Shared/HowItWorksCard";
import SectionHeader from "../Shared/SectionHeader";

const HowItWorks = () => {
  const steps = [
    {
      title: "Set a goal",
      description: "Finish Calculus II with an A. Big, specific, and yours.",
    },
    {
      title: "Break it into daily tasks",
      description: "Turn your big goal into small, manageable daily tasks.",
    },
    {
      title: "Watch your progress move",
      description: "Every task you check off fills the bar a little more.",
    },
  ];

  return (
    <section className="container mx-auto max-w-6xl px-5 py-20">
      <SectionHeader title="How it works" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((step, index) => {
          return <HowItWorksCard key={index} index={index} step={step} />;
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
