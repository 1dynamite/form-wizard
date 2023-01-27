export default function DataReview({ formValues }: { formValues: FormData[] }) {
  return (
    <form id="data-review">
      <h2>Review your data</h2>

      <ul style={{ paddingTop: "0" }}>
        <h3>Login information</h3>
        <li className="text-data">
          <span>Username:</span>
          <span>{formValues[0].get("username") as string}</span>
        </li>
        <br />
        <h3>Subscription</h3>
        <li style={{ justifyContent: "center" }}>
          <span>
            <input type="checkbox" disabled defaultChecked />
            <span style={{ marginLeft: "0.3rem" }}>
              {formValues[1].get("subscription") as string}
            </span>
          </span>
        </li>
        <br />
        <h3>Personal data</h3>
        <li className="text-data">
          <span>First name:</span>
          <span>{formValues[2].get("first-name") as string}</span>
        </li>
        <br />
        <li className="text-data">
          <span>Last name:</span>
          <span>{formValues[2].get("last-name") as string}</span>
        </li>
        <br />
        <li className="text-data">
          <span>Middle name:</span>
          <span>{formValues[2].get("middle-name") as string}</span>
        </li>
        <br />
        <li className="text-data">
          <span>Birth date:</span>
          <span>{formValues[2].get("birthdate") as string}</span>
        </li>
        <br />
        <li className="text-data">
          <span>Email:</span>
          <span>{formValues[2].get("email") as string}</span>
        </li>
        <br />
        <li className="text-data">
          <span>Gender:</span>
          <span>{formValues[2].get("gender") as string}</span>
        </li>
        <br />
        <li className="text-data">
          <span>I am at least 18 years old:</span>
          <span>Yes</span>
        </li>
        <br />
        <h3>Credit card number</h3>
        <li style={{ justifyContent: "center" }}>
          <span>{formValues[3].get("card-number") as string}</span>
        </li>
        <br />
        <h3>User agreement</h3>
        <li style={{ justifyContent: "center" }}>
          <div>
            <div>
              <input type="checkbox" disabled defaultChecked />
              <span style={{ marginLeft: "0.3rem" }}>
                I consent to personal data processing
              </span>
            </div>
            <br />
            <div>
              <input type="checkbox" disabled defaultChecked />
              <span style={{ marginLeft: "0.3rem" }}>
                I consent to site cookie use
              </span>
            </div>
          </div>
        </li>
        <br />
      </ul>
    </form>
  );
}
