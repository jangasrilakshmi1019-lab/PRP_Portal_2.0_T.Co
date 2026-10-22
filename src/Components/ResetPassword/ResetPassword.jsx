import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import placementLogo from "../../assets/ResetPasswordAssets/PlacementLogo.png";
import resetPasswordImage from "../../assets/ResetPasswordAssets/ResetPasswordIllustration.png";
import lockIcon from "../../assets/ResetPasswordAssets/LockIcon.png";
import eyeIcon from "../../assets/ResetPasswordAssets/EyeIcon.png";
import googleIcon from "../../assets/ResetPasswordAssets/GoogleIcon.png";
import shieldIcon from "../../assets/ResetPasswordAssets/ShieldIcon.png";
import backArrow from "../../assets/ResetPasswordAssets/ArrowLeftIcon.png";
import rightArrow from "../../assets/ResetPasswordAssets/ArrowRightIcon.png";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const getPasswordStrength = () => {
    if (password.length === 0) {
      return { text: "Weak", width: "0%", className: "ResetPassword-strengthWeak" };
    }
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 1) {
      return { text: "Weak", width: "25%", className: "ResetPassword-strengthWeak" };
    }
    if (score === 2) {
      return { text: "Medium", width: "50%", className: "ResetPassword-strengthMedium" };
    }
    if (score === 3) {
      return { text: "Good", width: "75%", className: "ResetPassword-strengthGood" };
    }
    return { text: "Strong", width: "100%", className: "ResetPassword-strengthStrong" };
  };

  const strength = getPasswordStrength();

  const validatePassword = () => {
    let isValid = true;

    setPasswordError("");
    setConfirmPasswordError("");

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must contain at least 8 characters");
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least 1 uppercase letter");
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("Password must contain at least 1 number");
      isValid = false;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      setPasswordError("Password must contain at least 1 special character");
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handleResetPassword = () => {
    if (validatePassword()) {
      navigate("/PasswordResetSuccess");
    }
  };

  return (
    <div className="ResetPassword-container">
      <section className="ResetPassword-leftSection">
        <div className="ResetPassword-brand">
          <img src={placementLogo} alt="Placement and Recruitment" className="ResetPassword-placementLogo" />
          <div className="ResetPassword-brandText">
            <h3>Placement & Recruitment Platform</h3>
            <p>Connect • Discover • Succeed</p>
          </div>
        </div>
        <div className="ResetPassword-leftContent">
          <p className="ResetPassword-smallTitle">RESET YOUR PASSWORD</p>
          <h1>
            Reset your Password?
            <br />
            Get Back on Track.
          </h1>
          <p className="ResetPassword-description">
            Enter your registered email address and we'll send you a link to reset your password.
          </p>
          <div className="ResetPassword-illustrationContainer">
            <img src={resetPasswordImage} alt="Reset Password" className="ResetPassword-illustration" />
          </div>
          <div className="ResetPassword-quoteBox">
            <div className="ResetPassword-quoteIcon">
              <img src={shieldIcon} alt="Security" />
            </div>
            <div className="ResetPassword-quoteContent">
              <strong>“A unified platform that simplifies training, placements, and recruitment management.”</strong>
              <p>Dr. Elena Vance — Dean of Experiential Education, Northeastern Consortium</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ResetPassword-rightSection">
        <div className="ResetPassword-backLogin">
          <img src={backArrow} alt="Back" className="ResetPassword-backArrow" />
          <Link to="/Login">Back to Login</Link>
        </div>
        <div className="ResetPassword-formContainer">
          <h2>Reset Password</h2>
          <p className="ResetPassword-formSubtitle">Choose a strong password to keep your account secure</p>
          <form>
            <div className="ResetPassword-formGroup">
              <label htmlFor="password">New Password</label>
              <div className="ResetPassword-inputWrapper">
                <img src={lockIcon} alt="Lock" className="ResetPassword-lockIcon" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setPasswordError("");
                  }}
                />
                <button type="button" className="ResetPassword-eyeButton" onClick={() => setShowPassword(!showPassword)}>
                  <img src={eyeIcon} alt="Show Password" />
                </button>
              </div>
              <div className="ResetPassword-strengthRow">
                <div className="ResetPassword-strengthBar">
                  <div
                    className={`ResetPassword-strengthProgress ${strength.className}`}
                    style={{ width: strength.width }}
                  ></div>
                </div>
                <p className="ResetPassword-strengthText">
                  Password strength:
                  <span className={strength.className}> {strength.text}</span>
                </p>
              </div>
              {passwordError && <p className="ResetPassword-inputError">{passwordError}</p>}
            </div>

            <div className="ResetPassword-formGroup ResetPassword-confirmGroup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="ResetPassword-inputWrapper">
                <img src={lockIcon} alt="Lock" className="ResetPassword-lockIcon" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    setConfirmPasswordError("");
                  }}
                />
                <button type="button" className="ResetPassword-eyeButton" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <img src={eyeIcon} alt="Show Password" />
                </button>
              </div>
              {confirmPasswordError && <p className="ResetPassword-inputError">{confirmPasswordError}</p>}
            </div>

            <div className="ResetPassword-signedIn">
              <input type="checkbox" id="signedIn" />
              <label htmlFor="signedIn">Keep me signed in</label>
            </div>

            <button type="button" className="ResetPassword-resetBtn" onClick={handleResetPassword}>
              <span>Reset Password</span>
              <img src={rightArrow} alt="Reset" className="ResetPassword-buttonArrow" />
            </button>

            <div className="ResetPassword-orSection">
              <div className="ResetPassword-orLine"></div>
              <span>OR CONTINUE WITH</span>
              <div className="ResetPassword-orLine"></div>
            </div>

            <button type="button" className="ResetPassword-googleBtn">
              <img src={googleIcon} alt="Google" className="ResetPassword-googleIcon" />
              <span>Google</span>
            </button>

            <p className="ResetPassword-createAccount">
              Don't have an account?
              <a href="#register"> Create Account</a>
            </p>
          </form>

          <div className="ResetPassword-footerLinks">
            <a href="#help">Help</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResetPassword;