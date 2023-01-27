import { useState } from "react";

const getMaxDate = (() => {
  let mount = false;
  let maxDate = "";
  return () => {
    if (mount) return maxDate;

    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 18);
    maxDate = `${currentDate.getFullYear().toString()}-${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

    mount = true;
    return maxDate;
  };
})();

export default function PersonalInfo({
  onValidityChange: setFormValidity,
}: {
  onValidityChange: (inValid: boolean) => void;
}) {
  const [firstName, setFirstName] = useState({ valid: false, untouched: true });
  const [lastName, setLastName] = useState({ valid: false, untouched: true });
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState({ valid: false, untouched: true });
  const [gender, setGender] = useState({ valid: false, untouched: true });
  const [age, setAge] = useState({
    valid: false,
    untouched: true,
    checked: false,
  });

  return (
    <form id="personal-info">
      <h2>Personal information</h2>
      <ul>
        <li className="text-input">
          <label htmlFor="first-name">* First name:</label>
          <div>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              className={
                firstName.untouched || firstName.valid ? "" : "invalid-input"
              }
              onChange={(e) => {
                setFirstName({ ...firstName, valid: e.target.validity.valid });
                setFormValidity(
                  e.target.validity.valid &&
                    lastName.valid &&
                    email.valid &&
                    gender.valid &&
                    age.valid
                );
              }}
              onBlur={() =>
                setFirstName({
                  ...firstName,
                  untouched: false,
                })
              }
            />
            <div
              className="info"
              style={
                firstName.untouched || firstName.valid
                  ? undefined
                  : { color: "#ef4444" }
              }
            >
              First name is required
            </div>
          </div>
        </li>
        <br />
        <li className="text-input">
          <label htmlFor="last-name">* Last name:</label>
          <div>
            <input
              type="text"
              id="last-name"
              name="last-name"
              required
              className={
                lastName.untouched || lastName.valid ? "" : "invalid-input"
              }
              onChange={(e) => {
                setLastName({ ...lastName, valid: e.target.validity.valid });
                setFormValidity(
                  e.target.validity.valid &&
                    firstName.valid &&
                    email.valid &&
                    gender.valid &&
                    age.valid
                );
              }}
              onBlur={() =>
                setLastName({
                  ...lastName,
                  untouched: false,
                })
              }
            />
            <div
              className="info"
              style={
                lastName.untouched || lastName.valid
                  ? undefined
                  : { color: "#ef4444" }
              }
            >
              Last name is required
            </div>
          </div>
        </li>
        <br />
        <li className="text-input">
          <label htmlFor="middle-name">Middle name:</label>
          <div>
            <input type="text" id="middle-name" name="middle-name" />
          </div>
        </li>
        <br />
        <li className="text-input">
          <label htmlFor="birthdate">Birth date:</label>
          <input
            id="birthdate"
            type="date"
            name="birthdate"
            value={birthDate}
            max={getMaxDate()}
            onChange={(e) => {
              setBirthDate(e.target.value);
              setAge({
                ...age,
                checked: e.target.value !== "",
                valid: e.target.value !== "",
              });

              setFormValidity(
                e.target.value !== "" &&
                  lastName.valid &&
                  email.valid &&
                  gender.valid &&
                  firstName.valid
              );
            }}
          />
        </li>
        <br />
        <li className="text-input">
          <label htmlFor="email">* Email:</label>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={email.untouched || email.valid ? "" : "invalid-input"}
              onChange={(e) => {
                setEmail({ ...email, valid: e.target.validity.valid });
                setFormValidity(
                  e.target.validity.valid &&
                    lastName.valid &&
                    firstName.valid &&
                    gender.valid &&
                    age.valid
                );
              }}
              onBlur={() =>
                setEmail({
                  ...email,
                  untouched: false,
                })
              }
            />
            <div
              className="info"
              style={
                email.untouched || email.valid
                  ? undefined
                  : { color: "#ef4444" }
              }
            >
              Email is required and must be a valid email address
            </div>
          </div>
        </li>
        <br />
        <li className="text-input">
          <label htmlFor="gender">* Gender:</label>
          <div>
            <select
              id="gender"
              name="gender"
              required
              className={
                gender.untouched || gender.valid ? "" : "invalid-input"
              }
              onChange={(e) => {
                setGender({ ...gender, valid: e.target.validity.valid });
                setFormValidity(
                  e.target.validity.valid &&
                    lastName.valid &&
                    email.valid &&
                    firstName.valid &&
                    age.valid
                );
              }}
              onBlur={() =>
                setGender({
                  ...gender,
                  untouched: false,
                })
              }
            >
              <option value="">--Please choose an option--</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
            <div
              className="info"
              style={
                gender.untouched || gender.valid
                  ? undefined
                  : { color: "#ef4444" }
              }
            >
              Gender information is required
            </div>
          </div>
        </li>
        <br />
        <li className="text-input">
          <label htmlFor="age">* I am at least 18 years old:</label>
          <div>
            <input
              type="checkbox"
              id="age"
              name="age"
              required
              checked={age.checked}
              disabled={birthDate !== ""}
              className={age.untouched || age.valid ? "" : "invalid-input"}
              onChange={(e) => {
                setAge({
                  ...age,
                  valid: e.target.validity.valid,
                  checked: e.target.checked,
                });
                setFormValidity(
                  e.target.validity.valid &&
                    lastName.valid &&
                    email.valid &&
                    gender.valid &&
                    firstName.valid
                );
              }}
              onBlur={() =>
                setAge({
                  ...age,
                  untouched: false,
                })
              }
            />
            <div
              className="info"
              style={
                age.untouched || age.valid ? undefined : { color: "#ef4444" }
              }
            >
              Please confirm that you are at least 18 years old
            </div>
          </div>
        </li>
      </ul>
    </form>
  );
}
