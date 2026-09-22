

const SectionHeader = ({title,subTitle}) => {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          {title}
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600 md:text-xl">
        {subTitle}
        </p>
      </div>
    );
};

export default SectionHeader;