import { useState } from "react";

export default function UserConsent({
  getUserData,
  onValidityChange: setFormValidity,
}: {
  getUserData: () => { username: string; email: string };
  onValidityChange: (inValid: boolean) => void;
}) {
  const [cookieChecked, setCookieChecked] = useState(false);
  const [personalDataChecked, setPersonalDataChecked] = useState(false);

  return (
    <form id="user-consent">
      <h2>My data</h2>
      <ul>
        <li className="text-data">
          <span>Username:</span>
          <span>{getUserData().username}</span>
        </li>
        <br />
        <li className="text-data">
          <span>Email:</span>
          <span>{getUserData().email}</span>
        </li>
      </ul>

      <h2>User agreement</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <span>You must check both of these boxes to continue</span>
          <li>
            <input
              id="personal-data"
              name="personal-data"
              type="checkbox"
              style={{ marginRight: "1rem" }}
              onChange={(e) => {
                setCookieChecked(e.target.checked);
                setFormValidity(e.target.checked && personalDataChecked);
              }}
            />
            <label htmlFor="personal-data">
              I consent to personal data processing
            </label>
          </li>
          <li>
            <input
              id="cookie"
              name="cookie"
              type="checkbox"
              onChange={(e) => {
                setPersonalDataChecked(e.target.checked);
                setFormValidity(e.target.checked && cookieChecked);
              }}
              style={{ marginRight: "1rem" }}
            />
            <label htmlFor="cookie">I consent to site cookie use</label>
          </li>
        </ul>
      </div>
    </form>
  );
}
