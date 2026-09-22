const FeaturedCard = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      {icon}

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturedCard;
