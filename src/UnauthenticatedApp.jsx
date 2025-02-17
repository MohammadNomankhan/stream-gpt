import { useState } from "react";

export const FormHeading = ({ headingText }) => {
  return (
    <h1
      id="form-title"
      className="text-2xl font-semibold text-center mb-6 leading-relaxed"
    >
      {headingText}
    </h1>
  );
};

export const InputFeild = ({ label, type, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-medium text-gray-50 pb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full px-4 py-3 text-white rounded-md bg-black/50 border border-gray-600 focus:ring focus:ring-primary focus:outline-none transition-shadow"
        placeholder="Enter your email"
        aria-required="true"
        required
      />
    </div>
  );
};

export const Button = ({ btnText }) => {
  return (
    <button
      type="submit"
      className="w-full py-3 bg-primary text-white rounded-md hover:bg-opacity-90 transition-all focus:ring focus:ring-primary"
      aria-label="Sign up"
    >
      {btnText}
    </button>
  );
};

export const Login = () => {
  return (
    <form className="flex flex-col gap-4 w-full" aria-labelledby="form-title">
      {/* What is form for? */}
      <FormHeading headingText="Sign In to your account" />

      {/* Email Field */}
      <InputFeild label="Email" type="email" name="username" />

      {/* Password Field */}
      <InputFeild label="Password" type="password" name="password" />

      {/* Submit Button */}
      <Button btnText="Sign In" />
    </form>
  );
};

export const Register = () => {
  return (
    <form className="flex flex-col gap-4 w-full" aria-labelledby="form-title">
      <FormHeading headingText="Create a free account" />

      {/* Display Name Field */}
      <InputFeild label="Username" type="text" name="display-name" />

      {/* Email Field */}
      <InputFeild label="Email" type="email" name="username" />

      {/* Password Field */}
      <InputFeild label="Password" type="password" name="password" />

      {/* Submit Button */}
      <Button btnText="Sign Up" />
    </form>
  );
};

export const Logo = () => {
  return (
    <img
      src="https://i.ibb.co/QQqChzh/Logo.png"
      alt="Stream Vibe - Your ultimate streaming guide"
      className="motion-safe:animate-fade-in"
      loading="lazy"
    />
  );
};

const UnauthenticatedApp = () => {
  const [auth, setAuth] = useState("login");

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-hero text-gray-50 font-manrope"
      role="main"
    >
      <div className="w-full px-6 py-8 flex justify-between" aria-label="Logo">
        {/* Logo Section */}
        <Logo />

        <div>
          <select
            name="language"
            id="language"
            className="p-3 w-32 bg-black/50 border border-gray-400 rounded"
          >
            <option lang="en" value="en-IN" label="English">
              English
            </option>
            <option lang="hi" value="hi-IN" label="हिन्दी">
              हिन्दी
            </option>
          </select>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md px-4 sm:px-6 flex-1 flex flex-col justify-center items-center text-white">
        {auth === "login" && <Login />}
        {auth === "register" && <Register />}

        {auth === "login" && (
          <p className="text-sm text-gray-400 text-center mt-4">
            New to Stream Vibe?{" "}
            <span
              className="text-primary hover:underline focus:underline cursor-pointer"
              onClick={() => setAuth("register")}
            >
              Sign up now.
            </span>
          </p>
        )}

        {auth === "register" && (
          <p className="text-sm text-gray-400 text-center mt-4">
            Already have Stream Vibe account?{" "}
            <span
              className="text-primary hover:underline focus:underline cursor-pointer"
              onClick={() => setAuth("login")}
            >
              Sign in now.
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UnauthenticatedApp;
