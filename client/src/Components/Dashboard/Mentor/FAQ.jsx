import React from "react";
import "./FAQ.css";
import file from "./FAQs/mentors_faqs.pdf";
const FAQ = () => {
  const contStyle = {
    width: "100%",
  };
  return (
    <div
      className="accordion container mt-5 mb-5"
      id="accordionExample"
      style={contStyle}
    >
      <div className="h3 ">FAQs and Information</div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <strong>FAQs</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="pdf-container">
              <a href={file} download>
                <i className="fa fa-download"></i> Download PDF
              </a>
              <embed src={file} type="application/pdf" />
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <strong>Terms and Conditions</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Terms and Conditions for Mentor Registration with Connect Dot Corp.
            <br />
            <strong>Mentor Eligibility:</strong>
            <br />
            By registering as a mentor with Connect Dot Corp., you confirm that
            you meet the eligibility criteria set forth by the company. This
            includes having relevant professional experience, expertise in the
            desired mentorship areas, and a commitment to providing guidance and
            support to students.
            <br />
            <strong>Mentorship Commitment:</strong>
            <br />
            As a mentor, you agree to dedicate the necessary time and effort to
            guide and mentor students effectively. This involves actively
            engaging with mentees, providing valuable insights, and assisting
            them in achieving their career goals.
            <br />
            <strong>Confidentiality: </strong>
            <br />
            You understand and acknowledge the importance of maintaining
            confidentiality regarding any sensitive information shared by the
            students or the company during the mentorship process. You agree not
            to disclose or misuse any confidential information received through
            the mentorship program.
            <br />
            <strong>Professional Conduct: </strong>
            <br />
            As a mentor, you commit to conducting yourself in a professional and
            respectful manner. You will refrain from engaging in any
            discriminatory, offensive, or unethical behavior that may harm the
            mentees or the reputation of Connect Dot Corp.
            <br />
            <strong>Compliance with Policies: </strong>
            <br />
            By joining Connect Dot Corp. as a mentor, you agree to comply with
            all the policies, guidelines, and regulations set forth by the
            company. This includes adhering to the code of conduct, mentorship
            protocols, and any other requirements outlined by Connect Dot Corp.
            <br />
            <strong>Termination of Mentorship:</strong>
            <br />
            Connect Dot Corp. reserves the right to terminate the mentorship
            agreement at any time if the mentor fails to fulfill their
            responsibilities, violates the terms and conditions, or engages in
            any behavior detrimental to the mentees or the company's objectives.
            <br />
            <strong>Indemnification:</strong>
            <br />
            You agree to indemnify and hold Connect Dot Corp., its affiliates,
            employees, and representatives harmless from any claims, damages, or
            liabilities arising out of your mentorship activities or any breach
            of these terms and conditions.
            <br />
            <strong>Modifications:</strong>
            <br />
            Connect Dot Corp. may modify these terms and conditions from time to
            time, and the updated version will be effective upon posting on the
            company's website. It is your responsibility to review and comply
            with the most current version of the terms and conditions.
            <br />
            By registering as a mentor with Connect Dot Corp., you acknowledge
            that you have read, understood, and agreed to abide by these terms
            and conditions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
