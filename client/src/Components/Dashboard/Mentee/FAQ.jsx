import React from "react";
import "./FAQ.css";
import fms from "./FAQs/mentorship.pdf";
import fis from "./FAQs/internship.pdf";
import fsd from "./FAQs/skill_devlopment.pdf";

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
      <div className="mnit-title-underline mb-4">
        <div className="inner"></div>
      </div>
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
            <strong>FAQs for Mentorship</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {" "}
            <div className="pdf-container">
              <a href={fms} download>
                <i className="fa fa-download"></i> Download PDF
              </a>
              <embed src={fms} type="application/pdf" />
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
            <strong>FAQs for Internship</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {" "}
            <div className="pdf-container">
              <a href={fis} download>
                <i className="fa fa-download"></i> Download PDF
              </a>
              <embed src={fis} type="application/pdf" />
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <strong>FAQs for Skill Development</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {" "}
            <div className="pdf-container">
              <a href={fsd} download>
                <i className="fa fa-download"></i> Download PDF
              </a>
              <embed src={fsd} type="application/pdf" />
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFourth">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFourth"
            aria-expanded="false"
            aria-controls="collapseFourth"
          >
            <strong>T&Cs for Skill Development Program</strong>
          </button>
        </h2>
        <div
          id="collapseFourth"
          className="accordion-collapse collapse"
          aria-labelledby="headingFourth"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Terms and Conditions for Apprentices - Skill Development Program
            <br />
            These terms and conditions (the "Agreement") govern the
            participation of Apprentices in the skill development program
            facilitated through the collaboration between [The Connect Dot
            Corp.] and the Federations.
            <br />
            <strong>Program Overview:</strong>
            <br />
            The Program aims to provide apprentices with skill development
            opportunities in collaboration with the Federation. The Program
            Organizer and the Federation will jointly facilitate the delivery of
            courses, training materials, and resources. The Apprentice will have
            access to the skill development program's curriculum, mentorship (if
            applicable), and other relevant support.
            <br />
            <strong>Eligibility:</strong>
            <br />
            The Apprentice must meet the eligibility criteria set by the Program
            Organizer and the Federation. The Apprentice acknowledges that
            meeting the eligibility criteria does not guarantee selection or
            participation in the Program.
            <br />
            <strong>Program Details:</strong>
            <br />
            The Program duration, course offerings, and any associated fees will
            be communicated by the Program Organizer and the Federation. The
            Apprentice agrees to comply with the rules, regulations, and
            guidelines set forth by the Program Organizer and the Federation
            throughout the Program.
            <br />
            <strong>Responsibilities:</strong>
            <br />
            The Apprentice will actively participate in the Program, attend
            training sessions, complete assignments, and abide by the code of
            conduct. The Apprentice understands that the successful completion
            of the Program may require meeting specific performance standards or
            criteria.
            <br />
            <strong>Intellectual Property:</strong>
            <br />
            All intellectual property rights related to the Program's
            curriculum, training materials, and resources provided by the
            Program Organizer and the Federation shall remain with the
            respective parties. The Apprentice agrees not to reproduce,
            distribute, or use any program materials without prior written
            consent.
            <br />
            <strong>Confidentiality:</strong>
            <br />
            The Apprentice agrees to maintain the confidentiality of any
            confidential information disclosed during the Program, including
            proprietary information shared by the Program Organizer and the
            Federation.
            <br />
            <strong>Limitation of Liability:</strong>
            <br />
            The Program Organizer and the Federation are not liable for any
            direct or indirect damages or losses incurred by the Apprentice
            during or as a result of the Program. The Apprentice acknowledges
            that the Program's success relies on their active participation,
            commitment, and implementation of the knowledge and skills gained.
            <br />
            <strong>Termination:</strong>
            <br />
            The Program Organizer and the Federation reserve the right to
            terminate the Apprentice's participation in the Program due to
            violation of terms, inappropriate behavior, or failure to meet
            performance standards. By participating in the Program, the
            Apprentice acknowledges their understanding and agreement to comply
            with the terms and conditions outlined in this Agreement.
            <br />
            <strong>Program Organizer</strong>: [The Connect Dot Corp.]
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFifth">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFifth"
            aria-expanded="false"
            aria-controls="collapseFifth"
          >
            <strong>T&Cs for Internship Program</strong>
          </button>
        </h2>
        <div
          id="collapseFifth"
          className="accordion-collapse collapse"
          aria-labelledby="headingFifth"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Terms and Conditions for The Internship:
            <br />
            <strong>a) </strong> The Intern must meet the eligibility criteria
            for the internship, which could include being enrolled in a degree
            program or meeting certain academic requirements as per mentioned by
            the organization.
            <br />
            <strong>b) </strong> The length of the internship should be clearly
            defined, including the start and end dates. The number of hours the
            intern is expected to work should be specified, and the intern must
            agree to the mentioned criteria by the organization to ensure that
            students and the organization end on the same page.
            <br />
            <strong>c)</strong> The intern’s responsibilities and duties are
            outlined, including any tasks or projects they will be expected to
            complete. The intern may be required to sign a confidentiality
            agreement, agreeing to keep any sensitive or confidential
            information they encounter during their internship confidential.
            <br />
            <strong>d)</strong> The terms and conditions for terminating the
            internship should be clearly defined, including the circumstances
            under which either party may terminate the agreement. The intern may
            be expected to adhere to a code of conduct or set of ethical
            guidelines during their internship. The intern may be evaluated on
            their performance during the internship, and the criteria for
            evaluation should be clearly stated.
            <br />
            <strong>e) </strong> Internship mentor feedback is a crucial
            component because it gives the intern insight into their performance
            and areas for development. The intern should receive specific
            examples of what they are doing well and where they can improve
            along with constructive criticism that can be put into practice. In
            order to build a stronger foundation for lasting relationships
            between the institutions and the organization, this endeavor
            continues to solicit feedback on a regular basis from the
            organization about the students and the institutions taking part in
            this process.
            <br />
            <strong>f)</strong> The intern must pay a security deposit of Rs.
            2000 for the registration process, which is partially refunded based
            on the guidelines listed below.
            <br />
            <strong>•</strong> If the intern completes the internship
            successfully and in accordance with the stated guidelines, he or she
            will be eligible to receive Complete Refund.
            <br />
            <strong>•</strong> Only 50% of the amount will be refunded if the
            intern receives unfavorable feedback from their mentor during their
            internship or fails to follow the stated code of conduct or set of
            ethical guidelines. This rule was added to encourage students to
            work to the best of their abilities during their internships, which
            could lead to a long-lasting partnership between the institution and
            the organization.
            <br />
            <strong>•</strong> No Money will be returned to the intern if the
            intern declines the internship offer letter or leaves the internship
            before it has been approved by the organization because this will
            have a negative effect on the institution's relationship with the
            organization.
            <br />
            <strong>•</strong> If the intern has already paid for the internship
            and in case, they didn’t receive any intern offer letter then a
            Complete Refund will be provided to the intern.
            <br />
            <strong>g)</strong> The payment charged by the firm is for the use
            of their platform and the services they provide to connect students
            with mentors, rather than being a fee charged by the organization
            where the students are completing their internship. It's important
            for students to understand the terms and conditions of the platform
            they are using and what services they are paying for. If there are
            any concerns or questions about the payment or the internship
            itself, it's always a good idea to reach out to the platform for
            clarification.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingsixth">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsesixth"
            aria-expanded="false"
            aria-controls="collapsesixth"
          >
            <strong>T&Cs for Mentorship Program</strong>
          </button>
        </h2>
        <div
          id="collapsesixth"
          className="accordion-collapse collapse"
          aria-labelledby="headingsixth"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            This Mentorship Program Agreement (the "Agreement") is entered into
            between <strong>[The Connect Dot Corp.]</strong> and the{" "}
            <strong>mentee</strong>.
            <br />
            <strong>Program Overview:</strong>
            <br />
            The Mentorship Program aims to provide guidance, support, and
            knowledge-sharing opportunities to the Mentee. The Mentee will be
            paired with a suitable mentor based on their goals, interests, and
            availability. The Program Organizer will facilitate the mentorship
            process, including mentor-mentee introductions, monitoring progress,
            and providing resources.
            <br />
            <strong>Roles and Responsibilities:</strong>
            <br />
            The Mentee agrees to actively participate in the mentorship program,
            attend scheduled meetings, and complete any assigned tasks or
            activities. The Mentee acknowledges that the mentor's role is to
            provide guidance, share insights, and offer support but does not
            guarantee specific outcomes or results.
            <br />
            The Mentee understands that they are responsible for their own
            decisions and actions throughout the mentorship program.
            <br />
            <strong>Confidentiality:</strong>
            <br />
            Both the Program Organizer and the Mentee agree to treat any
            confidential information shared during the mentorship program as
            strictly confidential.
            <br />
            The Mentee will not disclose any confidential information about the
            mentor, the Program Organizer, or other participants without prior
            written consent.
            <br />
            <strong>Duration and Termination:</strong>
            <br />
            The mentorship program will have a specific duration as agreed upon
            by both parties. Either party may terminate the mentorship
            relationship by providing written notice to the other party. The
            Program Organizer reserves the right to terminate the mentorship
            program if the Mentee violates any terms of this Agreement or
            engages in inappropriate behavior.
            <br />
            <strong>Limitation of Liability:</strong>
            <br />
            The Program Organizer and the Mentor are not liable for any direct
            or indirect damages or losses incurred by the Mentee during or as a
            result of the mentorship program. The Mentee acknowledges that the
            mentorship program's success relies on the Mentee's active
            participation, commitment, and implementation of the advice or
            guidance provided by the mentor.
            <br />
            By accepting below, the Program Organizer and the Mentee acknowledge
            their understanding and agreement to the terms and conditions
            outlined in this Mentorship Program Agreement.
            <br />
            <strong>Program Organizer: </strong>[The Connect Dot Corp.]
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
