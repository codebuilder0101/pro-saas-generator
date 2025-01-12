"use client";

import { useRouter } from 'next/navigation';

import { useReducer } from "react";

import BackLinkComponent from "@/components/BackLink";
import ButtonComponent from "@/components/Button";
import InputComponent from "@/components/Input";
import OAuth from "@/components/OAuth";
import FooterAuthScreenComponent from "@/components/FooterAuthScreen";
import { handleSignIn } from '@/handlers/auth';

const initialState = {
  isLoading: false,
  inputValue: {
    email: "",
    password: "",
  },
  errors: {
    email: "",
    password: "",
    general: "",
  },
};

export type SignInStateType = typeof initialState;

export type SignInAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_INPUT_VALUE"; payload: { email?: string; password?: string } }
  | { type: "SET_ERRORS"; payload: { email?: string; password?: string; general?: string } };

function reducer(state: SignInStateType, action: SignInAction) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: { ...state.inputValue, ...action.payload } };
    case "SET_ERRORS":
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
}

export default function SignIn() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();


  return (
    <>
      <BackLinkComponent href='/' label='Back To Home' />
      <h2 className="text-2xl font-semibold text-center text-gray-900">Sign In</h2>
      <p className="text-center text-sm text-gray-600">Enter your details to use an account</p>
      <form
        className="mt-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn({ state, dispatch, router });
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
          {state.errors.password && (
            <p className="text-sm text-red-500 mt-1">{state.errors.password}</p>
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="text-right mt-0">
          <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
            Forgot your password?
          </a>
        </div>

        {state.errors.general && (
          <p className="text-sm text-red-500 text-center mt-1">{state.errors.general}</p>
        )}

        <ButtonComponent isLoading={state.isLoading} type="submit" className="w-full">
          Sign In
        </ButtonComponent>
      </form>
      <OAuth />
      <FooterAuthScreenComponent screen="signin" />
    </>
  );
}
