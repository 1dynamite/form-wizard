import { useState } from "react";

export default function SubscriptionStep({
  onValidityChange: setFormValidity,
  defaultValues,
}: {
  onValidityChange: (inValid: boolean) => void;
  defaultValues: undefined | FormData;
}) {
  const [checkedOption, setCheckedOption] = useState(
    defaultValues ? (defaultValues.get("subscription") as string) : ""
  );
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
            checked={checkedOption === "free"}
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
            checked={checkedOption === "monthly"}
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
            checked={checkedOption === "yearly"}
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
