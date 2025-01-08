"use client";

import { useReducer } from "react";

import ButtonComponent from "@/components/ui/Button";
import InputComponent from "@/components/ui/Input";
import { supabase } from "@/lib/supabase/client";
import AuthService from "@/services/auth"
import RegexValidation from "@/utils/RegexValidation";

import BackLinkComponent from "../_components/BackLink";

const initialState = {
    isLoading: false,
    isSuccess: false,
    inputValue: {
        email: "",
    },
    errors: {
        email: "",
        general: "",
    },
};

type Action =
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_INPUT_VALUE"; payload: { email?: string } }
    | { type: "SET_ERRORS"; payload: { email?: string; general?: string } }
    | { type: "SET_SUCCESS"; payload: boolean };

function reducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: action.payload };
        case "SET_INPUT_VALUE":
            return { ...state, inputValue: { ...state.inputValue, ...action.payload } };
        case "SET_ERRORS":
            return { ...state, errors: { ...state.errors, ...action.payload } };
        case "SET_SUCCESS":
            return { ...state, isSuccess: action.payload };
        default:
            return state;
    }
}

export default function ForgotPassword() {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function handleSubmit() {
        try {
            dispatch({ type: "SET_LOADING", payload: true });
            dispatch({ type: "SET_ERRORS", payload: { email: "", general: "" } });

            const isValidEmail = RegexValidation.validateEmail(state.inputValue.email);

            if (!isValidEmail) {
                dispatch({
                    type: "SET_ERRORS",
                    payload: {
                        email: "Invalid email format.",
                    },
                });
                throw new Error("Validation Error");
            }

            const AuthServiceInstance = new AuthService(supabase);
            const response = await AuthServiceInstance.forgotPassword(state.inputValue.email);

            console.log(response);
            if (true) {
                dispatch({ type: "SET_SUCCESS", payload: true });
            } else {
                dispatch({ type: "SET_ERRORS", payload: { general: "Something went wrong. Please try again." } });
            }
        } catch (err) {
            if (err instanceof Error && err.message !== "Validation Error") {
                dispatch({ type: "SET_ERRORS", payload: { general: "Something went wrong. Please try again." } });
            }
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    }
    
    if (state.isSuccess) {
        return (
            <>
                <BackLinkComponent href='/signin' label='Back To Login' />
                <h2 className="text-2xl font-semibold text-center text-gray-900">Check Your Inbox</h2>
                <p className="text-center text-sm text-gray-600">A password reset link has been sent to your email. Please check your inbox.</p>
            </>
        );
    }

    return (
        <>
            <BackLinkComponent href='/signin' label='Back To Login' />
            <h2 className="text-2xl font-semibold text-center text-gray-900">Forgot Password</h2>
            <p className="text-center text-sm text-gray-600">Enter your email to receive a password reset link.</p>
            <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div>
                    <InputComponent
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        value={state.inputValue.email}
                        onChange={(e) =>
                            dispatch({ type: "SET_INPUT_VALUE", payload: { email: e.target.value } })
                        }
                    />
                    {state.errors.email && (
                        <p className="text-sm text-red-500 mt-1">{state.errors.email}</p>
                    )}
                </div>

                {state.errors.general && (
                    <p className="text-sm text-red-500 text-center mt-1">{state.errors.general}</p>
                )}

                <ButtonComponent isLoading={state.isLoading} type="submit">
                    Send Reset Link
                </ButtonComponent>
            </form>
        </>
    );
}
