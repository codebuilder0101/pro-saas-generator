"use client";

import { useReducer } from "react";

import BackLinkComponent from "@/components/BackLink";
import ButtonComponent from "@/components/Button";
import InputComponent from "@/components/Input";
import OAuth from "@/components/OAuth";
import PasswordStrengthIndicator from "@/components/PasswordStrength";
import FooterAuthScreenComponent from "@/components/FooterAuthScreen";
import { handleSignUp } from "@/handlers/auth";


const initialState = {
  isLoading: false,
  isTermsAccepted: false,
  isRegistrationComplete: false,
  inputValue: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  errors: {
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
    general: "",
  },
};

export type SignUpStateType = typeof initialState;

export type SignUpAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_INPUT_VALUE"; payload: { email?: string; password?: string; confirmPassword?: string } }
  | { type: "SET_ERRORS"; payload: { email?: string; password?: string; confirmPassword?: string; general?: string; terms?: string } }
  | { type: "SET_TERMS_ACCEPTED"; payload: boolean }
  | { type: "SET_REGISTRATION_COMPLETE"; payload: boolean };

function reducer(state: SignUpStateType, action: SignUpAction) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: { ...state.inputValue, ...action.payload } };
    case "SET_ERRORS":
      return { ...state, errors: { ...state.errors, ...action.payload } };
    case "SET_TERMS_ACCEPTED":
      return { ...state, isTermsAccepted: action.payload };
    case "SET_REGISTRATION_COMPLETE":
      return { ...state, isRegistrationComplete: action.payload };
    default:
      return state;
  }
}

export default function SignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
      {state.isRegistrationComplete ? (
        <>
          <BackLinkComponent href='/signin' label='Back To Login' />
          <div className="text-center">
            <p className="text-lg text-gray-700">Please check your email to confirm your account.</p>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-center text-gray-900">Sign Up</h2>
          <p className="text-center text-sm text-gray-600">Create your account to get started</p>
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignUp({ dispatch, state });
            }}> 
            <div>
              <InputComponent
                type="email"
                name="email"
                label="Email"
                placeholder=""
                value={state.inputValue.email}
                onChange={(e) =>
                  dispatch({ type: "SET_INPUT_VALUE", payload: { email: e.target.value } })
                }
              />
              {state.errors.email && (
                <p className="text-sm text-red-500 mt-1">{state.errors.email}</p>
              )}
            </div>

            <div>
              <InputComponent
                type="password"
                name="password"
                label="Password"
                placeholder=""
                value={state.inputValue.password}
                onChange={(e) =>
                  dispatch({ type: "SET_INPUT_VALUE", payload: { password: e.target.value } })
                }
              />
              <PasswordStrengthIndicator password={state.inputValue.password} />
              {state.errors.password && (
                <p className="text-sm text-red-500 mt-1">{state.errors.password}</p>
              )}
            </div>

            <div>
              <InputComponent
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder=""
                value={state.inputValue.confirmPassword}
                onChange={(e) =>
                  dispatch({ type: "SET_INPUT_VALUE", payload: { confirmPassword: e.target.value } })
                }
              />
              {state.errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">{state.errors.confirmPassword}</p>
              )}
            </div>

            {state.errors.general && (
              <p className="text-sm text-red-500 text-center mt-1">{state.errors.general}</p>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={state.isTermsAccepted}
                onChange={(e) =>
                  dispatch({ type: "SET_TERMS_ACCEPTED", payload: e.target.checked })
                }
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I accept the{" "}
                <a href="/terms-and-privacy" className="text-indigo-600 hover:text-indigo-800">
                  Terms and Privacy Policy
                </a>
              </label>
            </div>
            {state.errors.terms && (
              <p className="text-sm text-red-500 mt-1">{state.errors.terms}</p>
            )}

            <ButtonComponent isLoading={state.isLoading} type="submit" className="w-full">
              Sign Up
            </ButtonComponent>

          </form>
        </>
      )}
      <OAuth />
      <FooterAuthScreenComponent screen="signup" />
    </>
  );
}
