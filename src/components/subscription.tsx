import { useState } from "react";

export default function SubscriptionStep({
  onValidityChange: setFormValidity,
}: {
  onValidityChange: (inValid: boolean) => void;
}) {
  const [checkedOption, setCheckedOption] = useState("");
  return (
    <form id="subscription">
      <h2>Choose subscription</h2>
      <ul>
        <li>
          <label
            htmlFor="free"
            className={checkedOption === "free" ? "radio-checked" : ""}
          >
            Free
          </label>
          <input
            type="radio"
            id="free"
            name="subscription"
            value="free"
            onChange={(e) => {
              setCheckedOption(e.target.value);
              setFormValidity(true);
            }}
          />
        </li>
        <li>
          <label
            htmlFor="monthly"
            className={checkedOption === "monthly" ? "radio-checked" : ""}
          >
            Monthly
          </label>
          <input
            type="radio"
            id="monthly"
            name="subscription"
            value="monthly"
            onChange={(e) => {
              setCheckedOption(e.target.value);
              setFormValidity(true);
            }}
          />
        </li>
        <li>
          <label
            htmlFor="yearly"
            className={checkedOption === "yearly" ? "radio-checked" : ""}
          >
            Yearly
          </label>
          <input
            type="radio"
            id="yearly"
            name="subscription"
            value="yearly"
            onChange={(e) => {
              setCheckedOption(e.target.value);
              setFormValidity(true);
            }}
          />
        </li>
      </ul>
    </form>
  );
}
