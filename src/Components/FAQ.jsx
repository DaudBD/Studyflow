import SectionHeader from "../Shared/SectionHeader";

const questions = [
  {
    question: "How do I create an account?",
    answer: 'Click the "Sign Up" button in the top right corner and follow the registration process.',
  },
  {
    question: "I forgot my password. What should I do?",
    answer: 'Click "Forgot Password" on the login page and follow the instructions sent to your email.',
  },
  {
    question: "How do I update my profile information?",
    answer: 'Go to "My Account" settings and select "Edit Profile" to make changes.',
  },
];

const FAQ = () => (
  <section id="faq" className="container mx-auto px-5 py-16">
    <SectionHeader title="Frequently Asked Questions" />
    <div className="mx-auto mt-8 w-full max-w-3xl space-y-3">
      {questions.map(({ question, answer }) => (
        <details key={question} className="faq-item">
          <summary className="faq-question">{question}</summary>
          <p className="faq-answer">{answer}</p>
        </details>
      ))}
    </div>
  </section>
);

export default FAQ;
