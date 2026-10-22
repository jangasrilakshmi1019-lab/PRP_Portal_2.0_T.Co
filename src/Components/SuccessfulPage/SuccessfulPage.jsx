import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessfulPage.css";
import logo from "../../assets/SuccessfulPageAssets/EduhireBrandIcon.png";
import illustration from "../../assets/SuccessfulPageAssets/PasswordResetIllustration.png";
import shield from "../../assets/SuccessfulPageAssets/SecurityShieldIcon.png";
import successMark from "../../assets/SuccessfulPageAssets/SuccessConfirmationIcon.png";

const SuccessfulPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/Login");
  };

  return (
    <main className="SuccessfulPage-resetPage">
      <section className="SuccessfulPage-resetPageStory">
        <header className="SuccessfulPage-brand">
          <span className="SuccessfulPage-brandLogoFrame">
            <img src={logo} alt="" className="SuccessfulPage-brandLogo" />
          </span>
          <div>
            <h2>Placement &amp; Recruitment Platform</h2>
            <p className="SuccessfulPage-brandTagline">
              <span className="SuccessfulPage-brandTaglineItem">Connect</span>
              <span className="SuccessfulPage-brandTaglineItem">Discover</span>
              <span className="SuccessfulPage-brandTaglineItem">Succeed</span>
            </p>
          </div>
        </header>

        <div className="SuccessfulPage-storyContent">
          <p className="SuccessfulPage-subtitle">New beginning awaits</p>
          <h1 id="success-heading">
            Your Password Has
            <br />
            Been Reset Successfully!
          </h1>
          <p className="SuccessfulPage-storyCopy">
            You're all set! Your account is now secure.<br />
            Log in and continue your journey towards a brighter future.
          </p>

          <div className="SuccessfulPage-storyIllustrationStage">
            <img
              src={illustration}
              alt="A person celebrating a successful account update"
              className="SuccessfulPage-storyIllustration"
            />
          </div>
        </div>

        <div className="SuccessfulPage-testimonial">
          <span className="SuccessfulPage-testimonialIcon">
            <img src={shield} alt="" />
          </span>
          <div>
            <p>
              “A unified platform that simplifies training, placements, and
              recruitment management.”
            </p>
            <p>
              Dr. Elena Vance — Dean of Experiential Education, Northeastern Consortium
            </p>
          </div>
        </div>
      </section>

      <section className="SuccessfulPage-resetPageAction" aria-labelledby="confirmation-title">
        <div className="SuccessfulPage-confirmationCard">
          <img src={successMark} alt="" className="SuccessfulPage-confirmationCardIcon" />
          <h2 id="confirmation-title">Password Reset Successfully!</h2>
          <p>
            Your password has been reset. You can now log in with your new password
            and continue exploring all the opportunities on EduHire.
          </p>
          <button type="button" onClick={handleBackToLogin}>
            Back to Login
          </button>

          <div className="SuccessfulPage-helpRow">
            <span className="SuccessfulPage-helpRowLine" />
            <p>
              Need help? <a href="mailto:support@eduhire.example">Contact Support</a>
            </p>
            <span className="SuccessfulPage-helpRowLine" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuccessfulPage;