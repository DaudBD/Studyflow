const InfoPage = ({ title, description }) => (
  <main className="mx-auto flex min-h-[55vh] max-w-6xl items-center px-5 py-20">
    <section className="w-full rounded-[24px] border border-[#D9DDD2] bg-white p-8 shadow-sm sm:p-12">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#2563EB]">StudyFlow</p>
      <h1 className="mt-3 text-3xl font-bold text-[#071E2B] sm:text-4xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#64748B]">{description}</p>
    </section>
  </main>
);

export default InfoPage;
