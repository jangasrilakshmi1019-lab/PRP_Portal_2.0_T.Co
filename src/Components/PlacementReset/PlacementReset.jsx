import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useData } from "../../DataProvider";
import "./PlacementReset.css";
import Placement from "../../assets/PlacementResetAssets/Placement.png";
import ResearchPaper from "../../assets/PlacementResetAssets/ResearchPaper.png";
import UnifiedPlatform from "../../assets/PlacementResetAssets/UnifiedPlatform.png";
import ResetLink from "../../assets/PlacementResetAssets/ResetLink.png";
import EmailLink from "../../assets/PlacementResetAssets/EmailLink.png";
import Arrow from "../../assets/PlacementResetAssets/Arrow.png";
import ResendLink from "../../assets/PlacementResetAssets/ResendLink.png";

const resendWaitSeconds = 30;

const PlacementReset = () => {
  const navigate = useNavigate();
  const { resetEmail } = useData();
  const email = resetEmail;
  const [secondsLeft, setSecondsLeft] = useState(resendWaitSeconds);

  useEffect(() => {
    if (secondsLeft === 0) return undefined;

    const timerId = window.setTimeout(() => {
      setSecondsLeft((previous) => previous - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [secondsLeft]);

  const handleBackToLogin = () => {
    navigate("/Login");
  };

  const handleResendLink = () => {
    if (secondsLeft > 0) return;

    window.alert("Reset link has been resent.");
    setSecondsLeft(resendWaitSeconds);
  };

  if (!email) {
    return <Navigate to="/ForgotPassword" replace />;
  }

  return (
    <main className="PlacementReset-page">
      <section className="PlacementReset-left">
        <div className="PlacementReset-brand">
          <div className="PlacementReset-brandLogo">
            <img src={Placement} alt="Placement platform logo" />
          </div>

          <div className="PlacementReset-brandText">
            <h3>Placement & Recruitment Platform</h3>
            <div className="PlacementReset-brandMeta">
              <span>Connect</span>
              <span className="PlacementReset-metaDot" aria-hidden="true" />
              <span>Discover</span>
              <span className="PlacementReset-metaDot" aria-hidden="true" />
              <span>Succeed</span>
            </div>
          </div>
        </div>

        <div className="PlacementReset-heading">
          <h1>Check Your Inbox</h1>

          <p>
            We've sent a password reset link to your registered email address.
            <br />
            Follow the link to securely create a new password.
          </p>
        </div>

        <div className="PlacementReset-imageArea">
          <div className="PlacementReset-paperBox">
            <img
              src={ResearchPaper}
              alt="Password reset illustration"
              className="PlacementReset-researchPaper"
            />
          </div>
        </div>

        <div className="PlacementReset-quote">
          <div className="PlacementReset-quoteIcon">
            <img src={UnifiedPlatform} alt="" aria-hidden="true" />
          </div>

          <p>
            "A unified platform that simplifies training, placements,
            and recruitment management."
          </p>
        </div>
      </section>

      <section className="PlacementReset-right">
        <div className="PlacementReset-content">
          <div className="PlacementReset-iconWrapper">
            <img
              src={ResetLink}
              alt="Reset link sent"
              className="PlacementReset-icon"
            />
          </div>

          <h2>Reset Link Sent!</h2>

          <p className="PlacementReset-description">
            We've sent a password reset link to your email address.
          </p>

          <a
            className="PlacementReset-email"
            href={`mailto:${email}`}
            aria-label={`Send email to ${email}`}
          >
            <img src={EmailLink} alt="" aria-hidden="true" />
            <span>{email}</span>
          </a>

          <p className="PlacementReset-inboxText">
            Check your inbox for the reset link.
          </p>

          <button
            type="button"
            className="PlacementReset-loginBtn"
            onClick={handleBackToLogin}
          >
            <span>Back to Login</span>
            <img src={Arrow} alt="" aria-hidden="true" />
          </button>

          <div className="PlacementReset-resendRow">
            <span className="PlacementReset-divider" aria-hidden="true" />

            <button
              type="button"
              className="PlacementReset-resendBtn"
              onClick={handleResendLink}
              disabled={secondsLeft > 0}
              aria-disabled={secondsLeft > 0}
            >
              <img src={ResendLink} alt="" aria-hidden="true" />

              <span>Resend Reset Link</span>
            </button>

            <span className="PlacementReset-divider" aria-hidden="true" />
          </div>

          <p className="PlacementReset-timer" aria-live="polite">
            {secondsLeft > 0
              ? `You can request a new link in ${secondsLeft} seconds.`
              : "You can request a new link now."}
          </p>

          <footer className="PlacementReset-footer">
            <button type="button">Help</button>

            <span className="PlacementReset-footerDot" aria-hidden="true" />

            <button type="button">Privacy</button>

            <span className="PlacementReset-footerDot" aria-hidden="true" />

            <button type="button">Terms</button>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default PlacementReset;