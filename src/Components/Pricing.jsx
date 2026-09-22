import SectionHeader from "../Shared/SectionHeader";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      pricingType: "Free",
      description: "Everything you need to get organized.",
      price: 0,
      expiration: "forever",
      features: [
        "Unlimited tasks and goals",
        "5 subjects",
        "Focus timer",
        "7-day history",
      ],
    },
    {
      id: 2,
      pricingType: "Pro",
      description: "For students who want the full picture.",
      price: 6,
      expiration: "per month",
      features: [
        "Everything in Free",
        "Unlimited subjects",
        "AI day planning",
        "Full history and insights",
        "Priority support",
      ],
    },
  ];

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-16">
  <SectionHeader
    title={"Simple pricing"}
    subTitle={"Start free. Upgrade if you outgrow it."}
  />
  <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
  {plans.map((plan) => (
    <div
      key={plan.id}
      className={`flex h-full flex-col rounded-[20px] bg-white p-7 ${
        plan.pricingType === "Pro"
          ? "border-2 border-[#2563EB]"
          : "border border-[#D9DDD2]"
      }`}
    >
      <h3 className="text-[21px] font-bold text-[#111111]">
        {plan.pricingType}
      </h3>

      <p className="mt-2 text-[16px] text-[#667781]">
        {plan.description}
      </p>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-[38px] font-bold text-[#071E2B]">
          ${plan.price}
        </span>

        <span className="text-[16px] text-[#667781]">
          / {plan.expiration}
        </span>
      </div>

      <ul className="mt-7 flex-1 space-y-4">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-[16px]"
          >
            <span className="font-bold text-[#11866F]" aria-hidden="true">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full rounded-[14px] py-3 text-[16px] font-semibold ${
          plan.pricingType === "Pro"
            ? "bg-[#2563EB] text-white"
            : "border border-[#D9DDD2] bg-white text-[#111111]"
        }`}
      >
        Get started
      </button>
    </div>
  ))}
      </div>
    </section>
  );
};

export default Pricing;
