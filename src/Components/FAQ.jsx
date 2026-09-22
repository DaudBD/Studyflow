import SectionHeader from "../Shared/SectionHeader";


const FAQ = () => {
    return (
        <section id="faq" className="container mx-auto px-5 py-16">
            <SectionHeader title={"Frequently Asked Questions"}/>

            <div className="mx-auto mt-6 w-full max-w-3xl">
                <div className="join join-vertical w-full bg-base-100">
  <div className="collapse collapse-arrow join-item border-base-300 border text-center">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title font-semibold">How do I create an account?</div>
    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border text-center">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border text-center">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title font-semibold">How do I update my profile information?</div>
    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
  </div>
</div>
            </div>
        </section>
    );
};

export default FAQ;
