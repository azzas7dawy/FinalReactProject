import React from "react";


const faqs = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "Our instructors provide support through Q&A forums, live sessions, and direct messaging for premium users.",
  },
  {
    question: "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Most courses are self-paced, allowing you to learn at your own speed. Some live courses may have set schedules.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Prerequisites vary by course. Some beginner courses require no prior knowledge, while advanced ones may have specific requirements.",
  },
  {
    question: "Can I download the course materials for offline access?",
    answer:
      "Yes! Premium members can download course materials for offline viewing.",
  },
];

const Ask = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">❓ Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <p>Still have any questions? Contact our team via <a href="mailto:support@skillbridge.com">support@skillbridge.com</a></p>
        <button className="btn btn-primary">See All FAQ’s</button>
      </div>
    </div>
  );
};

export default Ask ;
