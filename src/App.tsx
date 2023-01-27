import { useRef, useState } from "react";
import CreditCard from "./components/credit-card";
import DataReview from "./components/data-review";
import LoginStep from "./components/login-step";
import PersonalInfo from "./components/personal-info";
import SubscriptionStep from "./components/subscription";
import UserConsent from "./components/user-consent";

function App() {
  const formValues = useRef<FormData[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [index, setIndex] = useState(0);

  const formIds = [
    "login",
    "subscription",
    "personal-info",
    "credit-card",
    "user-consent",
  ];

  const handleNextStepClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let formData: FormData;
    if (e.currentTarget.form !== null) {
      formData = new FormData(e.currentTarget.form);

      formValues.current.push(formData);

      if (index !== 5) {
        setIndex(index + 1);
        if (index !== 4) setIsFormValid(false);
      }
    }
  };

  return (
    <div className="app">
      <div className="wizard-container">
        <div className="title-bar">
          <span className="witch-hat-container">
            <img alt="witch hat" src="witch-hat.png" width={32} height={32} />{" "}
            My Wizard
          </span>
          <span>Step {index + 1} of 6</span>
        </div>
        {
          [
            <LoginStep
              onValidityChange={(isValid: boolean) => setIsFormValid(isValid)}
            />,
            <SubscriptionStep
              onValidityChange={(isValid: boolean) => setIsFormValid(isValid)}
            />,
            <PersonalInfo
              onValidityChange={(isValid: boolean) => setIsFormValid(isValid)}
            />,
            <CreditCard
              onValidityChange={(isValid: boolean) => setIsFormValid(isValid)}
            />,
            <UserConsent
              getUserData={() => ({
                username: formValues.current[0].get("username") as string,
                email: formValues.current[2].get("email") as string,
              })}
              onValidityChange={(isValid: boolean) => setIsFormValid(isValid)}
            />,
            <DataReview formValues={formValues.current} />,
          ][index]
        }
        <div className="nav-steps-bar">
          <button
            form={formIds[index]}
            type="button"
            className="button-primary"
            disabled={!isFormValid}
            onClick={handleNextStepClick}
          >
            {index === 5 ? "Submit" : "Next step"}{" "}
            <img
              alt="Chevron right"
              src="chevron-right.png"
              height={16}
              width={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
