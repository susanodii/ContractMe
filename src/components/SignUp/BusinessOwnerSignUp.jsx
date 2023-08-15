import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import { UserContext } from "../../context/user-context";
import useInput from "../../hooks/use-input";

const BusinessOwnerSignUp = () => {
  let navigate = useNavigate();
 const location = useLocation()
 
 
 
 
  const { updateLoggedIn } = useContext(UserContext);
  const isNotEmpty = (value) => value.trim() !== "";
  const validatePassword = (value) => value.trim().length >= 9;

  const validateEmail = (value) =>
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  const validatePhone = (value) =>
    value
      .toLowerCase()
      .match(
        /((^090)([23589]))|((^070)([1-9]))|((^080)([2-9]))|((^081)([0-9]))(\d{7})/
      );

  const {
    value: enteredName,
    isValid: NameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredPhoneNumber,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumberInput,
  } = useInput(validatePhone);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(validateEmail);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(validatePassword);

  const {
    value: enteredState,
    isValid: stateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetStateInput,
  } = useInput(isNotEmpty);

  const [termsAgreed, setTermsAgreed] = useState("");

  const checkBoxHandler = (e) => {
    setTermsAgreed(e.target.checked);
  };

  let formIsValid = false;
  if (
    NameIsValid &&
    emailIsValid &&
    phoneNumberIsValid &&
    passwordIsValid &&
    termsAgreed
  )
    formIsValid = true;

  const disabledBtn =
    !NameIsValid ||
    !phoneNumberIsValid ||
    !emailIsValid ||
    !passwordIsValid ||
    !stateIsValid ||
    !termsAgreed;
  const nameClasses = nameHasError
    ? "py-3 px-4 rounded focus:outline-none border border-red focus:border-yellow100"
    : "py-3 px-4 rounded focus:outline-none border border-grey100";
  const phoneNumberClasses = phoneNumberHasError
    ? "py-3 px-4 rounded focus:outline-none border border-red focus:border-yellow100"
    : "py-3 px-4 rounded focus:outline-none border border-grey100";
  const emailClasses = emailHasError
    ? "py-3 px-4 rounded focus:outline-none border border-red focus:border-yellow100"
    : "py-3 px-4 rounded focus:outline-none border border-grey100";
  const passwordClasses = passwordHasError
    ? "py-3 px-4 rounded focus:outline-none border border-red focus:border-yellow100"
    : "py-3 px-4 rounded focus:outline-none border border-grey100";
  const stateClasses = stateHasError
    ? "py-3 px-4 rounded focus:outline-none border border-red focus:border-yellow100"
    : "py-3 px-4 rounded focus:outline-none border border-grey100";

  const userData = {
    name: enteredName,
    password: enteredPassword,
    emailAddress: enteredEmail,
    phoneNumber: enteredPhoneNumber,
    state: enteredState,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    localStorage.setItem("userData", JSON.stringify(userData));

    resetName();
    resetPhoneNumberInput();
    resetEmailInput();
    resetPasswordInput();
    resetStateInput();
    setTermsAgreed(false);
    updateLoggedIn(true);
    
     navigate("/VerificationOne ");
  };

  return (
    <section className="container mx-auto mt-10 mb-6 text-black200">
      <h2 className="font-bodoni font-extrabold text-blue500 text-3xl">
        ContractMe
      </h2>

      <div className="w-[70%] mx-auto mt-16">
        <form className="" onSubmit={submitHandler}>
          <h3 className="text-center mb-6 font-inter font-extrabold text-3xl">
            Business owner sign up
          </h3>

          <div className="mb-4 flex flex-col gap-2">
            <label className="font-medium text-lg" htmlFor="name">
              First Name
            </label>
            <input
              className={`${nameClasses} bg-offWhite`}
              value={enteredName}
              type="text"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <p className="text-red text-sm"> Name cannot be empty</p>
            )}
          </div>

          <div className="mb-4 flex flex-col gap-2">
            <label className="font-medium text-lg" htmlFor="name">
              Phone Number
            </label>
            <input
              className={`${phoneNumberClasses} bg-offWhite`}
              value={enteredPhoneNumber}
              type="text"
              id="name"
              onChange={phoneNumberChangeHandler}
              onBlur={phoneNumberBlurHandler}
            />
            {phoneNumberHasError && (
              <p className="text-red text-sm">Phone number cannot be empty</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label className="font-medium text-lg" htmlFor="name">
              E-Mail Address
            </label>
            <input
              className={`${emailClasses} bg-offWhite`}
              value={enteredEmail}
              type="text"
              id="name"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className="text-red text-sm"> Please enter a valid email</p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label className="font-medium text-lg" htmlFor="name">
              Password
            </label>
            <input
              className={`${passwordClasses} bg-offWhite`}
              value={enteredPassword}
              type="text"
              id="name"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && (
              <p className="text-red text-sm">
                Please enter a valid password. Password cannot be less than 8
                characters
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <label className="font-medium text-lg" htmlFor="name">
              State
            </label>
            <input
              className={`${stateClasses} bg-offWhite`}
              value={enteredState}
              type="text"
              id="name"
              onChange={stateChangeHandler}
              onBlur={stateBlurHandler}
            />
            {stateHasError && (
              <p className="text-red text-sm">Please enter a state.</p>
            )}
          </div>
          <div className="pb-8">
            <input
              className=""
              type="checkbox"
              name="terms"
              id="terms"
              onChange={checkBoxHandler}
            />
            <label className="text-sm ml-3" htmlFor="terms">
              I have reviewed and I agree to the{" "}
              <span className="font-inter underline">terms and conditions</span>
            </label>
          </div>

          <div className="mb-3 text-center">
            <Button
              className={` text-white font-semibold ${
                !formIsValid ? "cursor-not-allowed bg-blue50" : "bg-blue500"
              }`}
              disabled={disabledBtn}
            >
              Sign up on ContractMe
            </Button>
          </div>
          <div className="text-center">
            <span className="text-sm">Already have an account? </span>
            <a className="text-base font-medium text-blue500">Sign in</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BusinessOwnerSignUp;
