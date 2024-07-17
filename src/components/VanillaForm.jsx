import React, { useState } from "react";
import { isEmpty } from "lodash";
import validator from "validator";
import RenderCounter from "../utils/renderCounter";

const VanillaForm = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    profession: "0",
    privacyTerms: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
    passwordConfirmation: null,
    profession: null,
    privacyTerms: null,
  });

  const handleSubmit = () => {
    let formIsValid = true;
    let newErrors = {};

    if (isEmpty(userForm.name)) {
      newErrors.name = "Name is required.";
      formIsValid = false;
    }

    if (isEmpty(userForm.email)) {
      newErrors.email = "E-mail is required.";
      formIsValid = false;
    } else if (!validator.isEmail(userForm.email)) {
      newErrors.email = "Please enter a valid E-mail.";
      formIsValid = false;
    }

    if (isEmpty(userForm.password)) {
      newErrors.password = "Password is required.";
      formIsValid = false;
    } else if (!validator.isStrongPassword(userForm.password, {
      minLength: 6,
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    })) {
      newErrors.password = "The password must contain at least one number, one uppercase letter, and one special character.";
      formIsValid = false;
    }

    if (userForm.password.length < 6) {
      newErrors.password = "The password must be at least 6 characters long.";
      formIsValid = false;
    } else if (userForm.password.length > 15) {
      newErrors.password = "The password must be no more than 15 characters long.";
      formIsValid = false;
    }

    if (isEmpty(userForm.passwordConfirmation)) {
      newErrors.passwordConfirmation = "Password confirmation is required.";
      formIsValid = false;
    } else if (userForm.password !== userForm.passwordConfirmation) {
      newErrors.passwordConfirmation = "Passwords do not match.";
      formIsValid = false;
    }

    if (userForm.profession === "0") {
      newErrors.profession = "Please select a profession.";
      formIsValid = false;
    }

    if (!userForm.privacyTerms) {
      newErrors.privacyTerms = "You must agree with the privacy terms.";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      alert(JSON.stringify(userForm));
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Vanilla Form</h1>
      <RenderCounter />
      <div className="form-group">
        <label>Name</label>
        <input
          className={errors.name && "input-error"}
          type="text"
          placeholder="Your name"
          value={userForm.name}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          className={errors.email && "input-error"}
          type="email"
          placeholder="Your e-mail"
          value={userForm.email}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          className={errors.password && "input-error"}
          type="password"
          placeholder="Password"
          value={userForm.password}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          className={errors.passwordConfirmation && "input-error"}
          type="password"
          placeholder="Confirm password"
          value={userForm.passwordConfirmation}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, passwordConfirmation: e.target.value }))
          }
        />
        {errors.passwordConfirmation && <p className="error-message">{errors.passwordConfirmation}</p>}
      </div>

      <div className="form-group">
        <label>Profession</label>
        <select
          className={errors.profession && "input-error"}
          value={userForm.profession}
          onChange={(e) =>
            setUserForm((prev) => ({ ...prev, profession: e.target.value }))
          }
        >
          <option value="0">Select your profession...</option>
          <option value="developer">Developer</option>
          <option value="other">Other</option>
        </select>
        {errors.profession && <p className="error-message">{errors.profession}</p>}
      </div>

      <div className="form-group">
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="privacy-policy"
            checked={userForm.privacyTerms}
            onChange={() =>
              setUserForm((prev) => ({
                ...prev,
                privacyTerms: !prev.privacyTerms,
              }))
            }
          />
          <label>I agree with the privacy terms.</label>
        </div>
        {errors.privacyTerms && <p className="error-message">{errors.privacyTerms}</p>}
      </div>

      <div className="form-group">
        <button onClick={handleSubmit}>Create account</button>
      </div>
    </div>
  );
};

export default VanillaForm;
