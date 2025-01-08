"use client";

import { useRouter } from 'next/navigation';

import { useReducer } from "react";

import BackLinkComponent from "@/app/(auth)/_components/BackLink";
import OAuth from "@/app/(auth)/_components/OAuth";
import ToggleScreenComponent from "@/app/(auth)/_components/ToggleScreen";
import ButtonComponent from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import { supabase } from '@/lib/supabase/client';
import AuthService from "@/services/auth";
import RegexValidation from "@/utils/RegexValidation";


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

type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_INPUT_VALUE"; payload: { email?: string; password?: string } }
  | { type: "SET_ERRORS"; payload: { email?: string; password?: string; general?: string } };

function reducer(state: typeof initialState, action: Action) {
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

  async function handleSubmit() {

    
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERRORS", payload: { email: "", password: "", general: "" } });

      const isValidEmail = RegexValidation.validateEmail(state.inputValue.email);
      const isPasswordValid = state.inputValue.password.length >= 6;

      if (!isValidEmail || !isPasswordValid) {
        dispatch({
          type: "SET_ERRORS",
          payload: {
            email: isValidEmail ? "" : "Invalid email format.",
            password: isPasswordValid ? "" : "Password must be at least 6 characters long.",
          },
        });
        throw new Error("Validation Error");
      }

      const AuthServiceInstance = new AuthService(supabase);
      
      const response = await AuthServiceInstance.signIn(state.inputValue.email, state.inputValue.password);
      
      if (response?.id) {
        router.push("/dashboard");
      } else {
        dispatch({ type: "SET_ERRORS", payload: { general: "Invalid email or password." } });
      }
    } catch (err) {
      console.log("Error", err);
      if (err instanceof Error && err.message !== "Validation Error") {
        dispatch({ type: "SET_ERRORS", payload: { general: "Something went wrong. Please try again." } });
      }
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  return (
    <>
      <BackLinkComponent href='/' label='Back To Home' />
      <h2 className="text-2xl font-semibold text-center text-gray-900">Sign In</h2>
      <p className="text-center text-sm text-gray-600">Enter your details to use an account</p>
      <form className="mt-8 space-y-6"  onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
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

        <ButtonComponent isLoading={state.isLoading} type="submit">
          Sign In
        </ButtonComponent>
      </form>
      <OAuth />
      <ToggleScreenComponent screen="signin" />
    </>
  );
}
