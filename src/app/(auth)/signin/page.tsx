"use client";

import { useReducer } from "react";

import OAuth from "@/app/(auth)/_components/OAuth";
import ButtonComponent from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import { isEmailExist, signUp } from "@/lib/auth";
import RegexValidation from "@/utils/RegexValidation";

import BackComponent from "../_components/Back";

const initialState = {
  pageState: "STEP_1",
  isLoading: false,
  inputValue: {
    email: "",
    password: "",
  },
};


type Action =
  | { type: "SET_PAGE_STATE"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_INPUT_VALUE"; payload: { email?: string; password?: string } };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "SET_PAGE_STATE":
      return { ...state, pageState: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: { ...state.inputValue, ...action.payload } };
    default:
      return state;
  }
}

export default function SignUpPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function handleEmailValidaton() {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const isValidEmail = RegexValidation.validateEmail(state.inputValue.email);
      if (!isValidEmail) {
        throw new Error("Invalid Data");
      }
      const response = await isEmailExist(state.inputValue.email);
      if (!response) {
        dispatch({ type: "SET_PAGE_STATE", payload: "STEP_2" });
      }
    } catch (err) {
      console.error("Error", err);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  async function handleRegister() {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const isValidEmail = RegexValidation.validateEmail(state.inputValue.email);
      if (!isValidEmail || state.inputValue.password.length < 6) {
        throw new Error("Invalid Data");
      }
      const responseIsEmailExist = await isEmailExist(state.inputValue.email);
      if (!responseIsEmailExist) {
        const responseSignUp = await signUp(state.inputValue.email, state.inputValue.password);
        console.log(responseSignUp);
      }
    } catch (err) {
      console.error("Error", err);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <BackComponent />
        <h2 className="text-2xl font-semibold text-center text-gray-900">Sign In</h2>
        <p className="text-center text-sm text-gray-600">Enter your details to use an account</p>
        <form className="mt-8 space-y-6">
          <InputComponent
            type="email"
            name="email"
            label="Email"
            placeholder=""
            value={state.inputValue.email}
            onChange={(e) => dispatch({ type: "SET_INPUT_VALUE", payload: { email: e.target.value } })}
          />
          {state.pageState === "STEP_2" && (
            <InputComponent
              type="password"
              name="password"
              label="Password"
              placeholder=""
              value={state.inputValue.password}
              onChange={(e) => dispatch({ type: "SET_INPUT_VALUE", payload: { password: e.target.value } })}
            />
          )}
          <ButtonComponent isLoading={state.isLoading} type="button" onClick={state.pageState === "STEP_1" ? handleEmailValidaton : handleRegister}>
            {state.pageState === "STEP_1" ? 'SignUp with Email' : 'Register'}
          </ButtonComponent>
        </form>
        <OAuth />
      </div>
    </div>
  );
}