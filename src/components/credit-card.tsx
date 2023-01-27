import Cleave from "cleave.js/react";
import { useState } from "react";

export default function CreditCard({
  onValidityChange: setFormValidity,
}: {
  onValidityChange: (inValid: boolean) => void;
}) {
  const [cardNumber, setCardNumber] = useState({
    valid: false,
    untouched: true,
  });

  return (
    <form id="credit-card">
      <h2>Enter credit card number</h2>
      <div>
        <div id="card-field">
          <Cleave
            name="card-number"
            className={
              cardNumber.untouched || cardNumber.valid
                ? "cleave valid-input"
                : "cleave invalid-input"
            }
            placeholder="Enter your credit card number"
            options={{ creditCard: true }}
            required
            onChange={(e) => {
              setCardNumber({
                ...cardNumber,
                valid:
                  e.target.validity.valid && e.target.rawValue.length === 16,
              });
              setFormValidity(
                e.target.validity.valid && e.target.rawValue.length === 16
              );
            }}
            onBlur={() =>
              setCardNumber({
                ...cardNumber,
                untouched: false,
              })
            }
          />
          <div
            className="info"
            style={
              cardNumber.untouched || cardNumber.valid
                ? undefined
                : { color: "#ef4444" }
            }
          >
            Card number is required and must be a valid credit card number
          </div>
        </div>
      </div>
    </form>
  );
}
