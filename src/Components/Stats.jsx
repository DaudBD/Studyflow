

const Stats = () => {
    return (
      <section className="bg-white px-5 py-12">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 gap-y-10 text-center md:grid-cols-4 md:gap-y-0">
          <div>
            <h2 className="text-3xl font-bold text-[#2563EB]">12,400+</h2>
            <p className="mt-2 text-base text-[#64748B]">
              students using StudyFlow
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2563EB]">1.2M+</h2>
            <p className="mt-2 text-base text-[#64748B]">tasks checked off</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2563EB]">89%</h2>
            <p className="mt-2 text-base text-[#64748B]">report better focus</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2563EB]">4.5/5</h2>
            <p className="mt-2 text-base text-[#64748B]">average rating</p>
          </div>
        </div>
      </section>
    );
};

export default Stats;