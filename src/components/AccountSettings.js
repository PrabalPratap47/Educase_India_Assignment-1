import React from "react";
import { useLocation } from "react-router-dom";

export default function AccountSettings() {
  const location = useLocation();
  const { email } = location.state || {};

  return (
    <div className="account-wrapper">
      <div className="account-container">
        <h2 className="account-settings-title">Account Settings</h2>

        <div className="account-box">
          <div className="profile-section">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="profile-pic"
            />
            <div>
              <p className="account-name">Marry Doe</p>
              <p className="account-email">{email || "Marry@Gmail.Com"}</p>
            </div>
          </div>

          <p className="account-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="account-empty-space"></div>
      </div>
    </div>
  );
}
