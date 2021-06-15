import React, { useState, useEffect } from "react";
import Input from "./Input";
import { FormValidations } from "./index.validations";
import useValidation from "./../../hooks/useValidation";

const initialFormState = {
  name: "",
  email: "",
  password: ""
};

const UserForm = () => {
  const [form, setForm] = useState(initialFormState);
  const { errors } = useValidation(form, FormValidations);

  function setInput(inputName) {
    return (e) => {
      const newValue = { [inputName]: e.target.value };
      return setForm((form) => ({ ...form, ...newValue }));
    };
  }

  return (
    <>
      <h3>Form Controlled</h3>
      <form>
        <div className="form-group">
          <Input
            name="name"
            onChange={setInput("name")}
            label="Name"
            value={form.name}
            error={errors.name}
          />
        </div>
        <div className="form-group">
          <Input
            name="email"
            onChange={setInput("email")}
            label="E-mail"
            value={form.email}
            error={errors.email}
          />
        </div>
        <div className="form-group">
          <Input
            name="password"
            onChange={setInput("password")}
            label="Password"
            value={form.password}
            error={errors.password}
          />
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
