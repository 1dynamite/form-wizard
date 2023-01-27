import { useEffect, useState } from "react";

export default function LoginStep({
  onValidityChange: setFormValidity,
  defaultValues,
}: {
  onValidityChange: (inValid: boolean) => void;
  defaultValues: undefined | FormData;
}) {
  const [username, setUsername] = useState({ valid: false, untouched: true });
  const [password, setPassword] = useState({
    valid: false,
    value: defaultValues ? (defaultValues.get("password") as string) : "",
    untouched: true,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    valid: false,
    value: defaultValues
      ? (defaultValues.get("confirm-password") as string)
      : "",
    untouched: true,
  });

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername({
      ...username,
      valid: e.target.validity.valid,
    });

    setFormValidity(
      e.target.validity.valid && password.valid && confirmPassword.valid
    );
  };

  const handlePwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isConfirmPwdValid =
      confirmPassword.value !== "" && e.target.value === confirmPassword.value;

    setPassword({
      ...password,
      valid: e.target.validity.valid,
      value: e.target.value,
    });
    setConfirmPassword({
      ...confirmPassword,
      valid: isConfirmPwdValid,
    });

    setFormValidity(
      username.valid && e.target.validity.valid && isConfirmPwdValid
    );
  };

  const handleConfirmPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword({
      ...confirmPassword,
      valid: e.target.validity.valid,
      value: e.target.value,
    });

    setFormValidity(
      username.valid && password.valid && e.target.validity.valid
    );
  };

  return (
    <form id="login">
      <h2>Login information</h2>
      <ul>
        <li className="text-input">
          <label htmlFor="username">* Username:</label>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={
                defaultValues ? (defaultValues.get("username") as string) : ""
              }
              required
              pattern="^[^A-Z]*$"
              className={
                username.untouched || username.valid ? "" : "invalid-input"
              }
              onChange={handleUsernameChange}
              onBlur={() =>
                setUsername({
                  ...username,
                  untouched: false,
                })
              }
            />
            <div
              className="info"
              style={
                username.untouched || username.valid
                  ? undefined
                  : { color: "#ef4444" }
              }
            >
              Username is required and must be in lowercase
            </div>
          </div>
        </li>
        <br />
        <li className="text-input">
          <label htmlFor="password">* Password:</label>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password.value}
              required
              minLength={5}
              pattern="(?=.*[a-zA-Z])(?=.*\d).*"
              className={
                password.untouched || password.valid ? "" : "invalid-input"
              }
              onChange={handlePwdChange}
              onBlur={() => {
                setPassword({
                  ...password,
                  untouched: false,
                });
              }}
            />
            <div
              className="info"
              style={
                password.untouched || password.valid
                  ? undefined
                  : { color: "#ef4444" }
              }
            >
              Password is required and must be at least 5 characters long and
              contain at least one number and one letter
            </div>
          </div>
        </li>
        <br />
        <li className="text-input">
          <label htmlFor="confirm-password">* Confirm password:</label>
          <div>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword.value}
              required
              pattern={password.value}
              className={
                confirmPassword.untouched || confirmPassword.valid
                  ? ""
                  : "invalid-input"
              }
              onChange={handleConfirmPwdChange}
              onBlur={() =>
                setConfirmPassword({
                  ...confirmPassword,
                  untouched: false,
                })
              }
            />
            <div
              className="info"
              style={
                confirmPassword.untouched || confirmPassword.valid
                  ? undefined
                  : { color: "#ef4444" }
              }
            >
              This field is required and passwords should match
            </div>
          </div>
        </li>
      </ul>
    </form>
  );
}
