

const HowItWorksCard = ({index,step}) => {
    return (
      <div>
        <div key={index} className="text-center">
          <h1 className="text-4xl font-bold text-[#2563EB]">
            {String(index + 1).padStart(2, "0")}
          </h1>

          <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

          <p className="mt-2 text-gray-600">{step.description}</p>
        </div>
      </div>
    );
};

export default HowItWorksCard;