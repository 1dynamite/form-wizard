import { useState } from "react";
import LoginStep from "./components/login-step";

function App() {
  const [isFormValid, setIsFormValid] = useState(false);
  return (
    <div className="app">
      <div className="wizard-container">
        <div className="title-bar">
          <span className="witch-hat-container">
            <img alt="witch hat" src="witch-hat.png" width={32} height={32} />{" "}
            My Wizard
          </span>
          <span>Step 2 of 4</span>
        </div>
        <LoginStep
          onValidityChange={(isValid: boolean) => setIsFormValid(isValid)}
        />
        <div className="nav-steps-bar">
          <button type="button" className="button-text">
            Cancel
          </button>
          <div style={{ display: "flex", gap: "0.3rem" }}>
            <button type="button" className="button-text" disabled>
              <img
                alt="Chevron left"
                src="chevron-left.png"
                height={16}
                width={16}
                style={{ textAlign: "center" }}
              />{" "}
              Previous step
            </button>
            <button
              form="login-step"
              type="button"
              className="button-primary"
              disabled={!isFormValid}
              onClick={(e) => {
                let formData: FormData;
                if (e.currentTarget.form !== null) {
                  formData = new FormData(e.currentTarget.form);
                  console.log(formData.get("username"));
                }
              }}
            >
              Next step{" "}
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
    </div>
  );
}

export default App;
