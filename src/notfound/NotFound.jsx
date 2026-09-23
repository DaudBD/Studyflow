import { Link } from "react-router";
import { LuArrowLeft, LuCompass } from "react-icons/lu";

const NotFound = () => {
    return (
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-16">
            <section className="relative w-full max-w-2xl overflow-hidden rounded-[24px] border border-[#D9DDD2] bg-white px-6 py-14 text-center shadow-sm sm:px-12">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DBEAFE]" />
                <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-[#DCFCE7]" />

                <div className="relative">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-200">
                        <LuCompass className="h-8 w-8" aria-hidden="true" />
                    </div>

                    <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#2563EB]">
                        Error 404
                    </p>
                    <h1 className="mt-3 text-4xl font-bold leading-tight text-[#071E2B] sm:text-5xl">
                        This page went off track
                    </h1>
                    <p className="mx-auto mt-5 max-w-md text-lg leading-7 text-[#64748B]">
                        We could not find the study space you were looking for. Let us get
                        you back to your daily progress.
                    </p>

                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center gap-2 rounded-[14px] bg-[#2563EB] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                    >
                        <LuArrowLeft className="h-5 w-5" aria-hidden="true" />
                        Back to StudyFlow
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default NotFound;