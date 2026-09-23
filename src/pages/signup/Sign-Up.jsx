import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { LuArrowRight, LuLockKeyhole, LuMail, LuNotebookPen } from "react-icons/lu";

const Signup = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log("FunctionSubmittedTriggered", {
            email,
            passwordLength: password.length,
        });
    };

    return (
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-16">
            <section className="w-full max-w-md rounded-[24px] border border-[#D9DDD2] bg-white p-6 shadow-sm sm:p-9">
                <div className="text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#2563EB] text-white">
                        <LuNotebookPen className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                        Get started
                    </p>
                    <h1 className="mt-2 text-3xl font-bold text-[#071E2B]">
                        Create your StudyFlow account
                    </h1>
                    <p className="mt-3 text-[#64748B]">
                        Pick up where you left off and keep your progress moving.
                    </p>
                </div>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#071E2B]">
                            Email address
                        </span>
                        <span className="relative block">
                            <LuMail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#94A3B8]" aria-hidden="true" />
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                                className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] py-3 pl-11 pr-4 text-[#071E2B] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#DBEAFE]"
                            />
                        </span>
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#071E2B]">
                            Password
                        </span>
                        <span className="relative block">
                            <LuLockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#94A3B8]" aria-hidden="true" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                required
                                className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] py-3 pl-11 pr-4 text-[#071E2B] outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#DBEAFE]"
                            />
                        </span>
                    </label>

                    <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 font-semibold text-white transition-colors hover:bg-[#1D4ED8] cursor-pointer"
                    >
                        Sign Up
                        <LuArrowRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                </form>

                <div className="my-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
                    <span className="h-px flex-1 bg-[#E2E8F0]" />
                    <span>Or continue with</span>
                    <span className="h-px flex-1 bg-[#E2E8F0]" />
                </div>

                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#CBD5E1] bg-white px-5 py-3.5 font-semibold text-[#334155] transition-colors hover:bg-[#F8FAFC] cursor-pointer"
                    onClick={() => {
                        // Connect this action to Google OAuth when authentication is configured.
                    }}
                >
                    <FcGoogle className="h-5 w-5" aria-hidden="true" />
                    Continue with Google
                </button>

                <p className="mt-7 text-center text-sm text-[#64748B]">
                    Already have an account?{" "}
                    <Link to="/sign-in" className="font-semibold text-[#2563EB] hover:text-[#1D4ED8]">
                        Sign in
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Signup;