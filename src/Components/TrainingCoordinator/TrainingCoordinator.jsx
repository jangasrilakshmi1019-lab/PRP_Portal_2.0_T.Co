import React, { useState } from "react";
import "./TrainingCoordinator.css";
import platformLogo from "../../assets/TrainingCoordinatorAssets/platformLogo.png";
import trainingCoordinatorIllustration from "../../assets/TrainingCoordinatorAssets/trainingCoordinatorIllustration.png";
import dropdownArrow from "../../assets/TrainingCoordinatorAssets/dropdownArrow.png";
import trustBadgeIcon from "../../assets/TrainingCoordinatorAssets/trustBadgeIcon.png";

const TrainingCoordinator = () => {
  const [formData, setFormData] = useState({
    role: "Training Coordinator",
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    organizationName: "",
    departmentName: "",
    employeeId: "",
    password: "",
    confirmPassword: "",
    isAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="Prp-Training-Coordinator-Container">
      <div className="Prp-Training-Coordinator-Left-Section">
        <div className="Prp-Training-Coordinator-Brand">
          <img
            src={platformLogo}
            alt="platformLogo"
            className="Prp-Training-Coordinator-Brand-Logo"
          />
          <div className="Prp-Training-Coordinator-Brand-Text">
            <h3 className="Prp-Training-Coordinator-Brand-Title">
              AI Education & Workforce Development Platform
            </h3>
            <p className="Prp-Training-Coordinator-Brand-Tagline">
              Connect <span className="Prp-Training-Coordinator-Dot"></span>{" "}
              Discover <span className="Prp-Training-Coordinator-Dot"></span>{" "}
              Succeed
            </p>
          </div>
        </div>

        <div className="Prp-Training-Coordinator-Hero">
          <h1 className="Prp-Training-Coordinator-Hero-Title">
            Manage Training.
            <br />
            Build Better Careers.
          </h1>
          <p className="Prp-Training-Coordinator-Hero-Description">
            Coordinate training programs, track student progress and work
            closely with placement teams - all in one platform..
          </p>
        </div>

        <img
          src={trainingCoordinatorIllustration}
          alt="trainingCoordinatorIllustration"
          className="Prp-Training-Coordinator-Illustration"
        />

        <div className="Prp-Training-Coordinator-Trust-Card">
          <img
            src={trustBadgeIcon}
            alt="trustBadgeIcon"
            className="Prp-Training-Coordinator-Trust-Icon"
          />
          <div className="Prp-Training-Coordinator-Trust-Divider"></div>
          <div className="Prp-Training-Coordinator-Trust-Text">
            <p className="Prp-Training-Coordinator-Trust-Title">
              Built for Trust,Designed for Success
            </p>
            <p className="Prp-Training-Coordinator-Trust-Subtitle">
              Reliable tools and secure solutions for your institution.
            </p>
          </div>
        </div>
      </div>

      <div className="Prp-Training-Coordinator-Right-Section">
        <div className="Prp-Training-Coordinator-Form-Wrapper">
          <h2 className="Prp-Training-Coordinator-Form-Title">
            Your Journey Starts Here
          </h2>
          <p className="Prp-Training-Coordinator-Form-Subtitle">
            Join our ecosystem of professional employers.
          </p>

          <div className="Prp-Training-Coordinator-Field-Container Prp-Training-Coordinator-Role-Field">
            <label className="Prp-Training-Coordinator-Label">
              Select your role
            </label>
            <div className="Prp-Training-Coordinator-Select-Container">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="Prp-Training-Coordinator-Select"
              >
                <option value="Training Coordinator">Training Coordinator</option>
                <option value="Placement Officer">Placement Officer</option>
              </select>
              <img
                src={dropdownArrow}
                alt="dropdownArrow"
                className="Prp-Training-Coordinator-Select-Arrow"
              />
            </div>
          </div>

          <div className="Prp-Training-Coordinator-Form-Grid">
            <div className="Prp-Training-Coordinator-Field-Container">
              <label className="Prp-Training-Coordinator-Label">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="Prp-Training-Coordinator-Input"
              />
            </div>

            <div className="Prp-Training-Coordinator-Field-Container">
              <label className="Prp-Training-Coordinator-Label">
                Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="Prp-Training-Coordinator-Input"
              />
            </div>

            <div className="Prp-Training-Coordinator-Field-Container">
              <label className="Prp-Training-Coordinator-Label">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="123567890"
                className="Prp-Training-Coordinator-Input"
              />
            </div>

            <div className="Prp-Training-Coordinator-Field-Container">
              <label className="Prp-Training-Coordinator-Label">
                Organization / Institution Name
              </label>
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                placeholder="University of Excellence"
                className="Prp-Training-Coordinator-Input"
              />
            </div>

            <div className="Prp-Training-Coordinator-Field-Container">
              <label className="Prp-Training-Coordinator-Label">
                Department / Training Cell
              </label>
              <input
                type="text"
                name="departmentName"
                value={formData.departmentName}
                onChange={handleChange}
                placeholder="Career Services"
                className="Prp-Training-Coordinator-Input"
              />
            </div>

            <div className="Prp-Training-Coordinator-Field-Container">
              <label className="Prp-Training-Coordinator-Label">
                Employee ID / Staff ID
              </label>
              <input
                type="text"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleChange}
                placeholder="EMP-2001-2026"
                className="Prp-Training-Coordinator-Input"
              />
            </div>

            <div className="Prp-Training-Coordinator-Field-Container">
              <label className="Prp-Training-Coordinator-Label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="**********"
                className="Prp-Training-Coordinator-Input"
              />
            </div>

            <div className="Prp-Training-Coordinator-Field-Container">
              <label className="Prp-Training-Coordinator-Label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="**********"
                className="Prp-Training-Coordinator-Input"
              />
            </div>
          </div>

          <div className="Prp-Training-Coordinator-Agreement">
            <input
              type="checkbox"
              id="isAgreed"
              name="isAgreed"
              checked={formData.isAgreed}
              onChange={handleChange}
              className="Prp-Training-Coordinator-Checkbox"
            />
            <label
              htmlFor="isAgreed"
              className="Prp-Training-Coordinator-Agreement-Text"
            >
              I agree to the{" "}
              <span className="Prp-Training-Coordinator-Link">
                Terms of service
              </span>{" "}
              and{" "}
              <span className="Prp-Training-Coordinator-Link">
                privacy policy
              </span>{" "}
              regarding my administrative access.
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="Prp-Training-Coordinator-Submit-Button"
          >
            Complete Registration
          </button>

          <p className="Prp-Training-Coordinator-Login-Text">
            Already have an account?
            <span className="Prp-Training-Coordinator-Login-Link">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingCoordinator;