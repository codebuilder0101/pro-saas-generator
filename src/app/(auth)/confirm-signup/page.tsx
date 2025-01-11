"use client";

import { useEffect, useReducer } from "react";

import BackLink from "@/app/(auth)/_components/BackLink";
import Spinner from "@/components/Spinner";
import { handleConfirmSignup } from "@/handlers/auth";

type State = {
    isLoading: boolean;
    error: string | null;
    isConfirmed: boolean;
    isConfirmedOAuh: boolean;
};

export type ConfirmSignupAction =
    | { type: "CONFIRMATION_OAUTH" }
    | { type: "CONFIRMATION_SUCCESS" }
    | { type: "CONFIRMATION_FAILURE"; error: string }
    | { type: "SET_LOADING"; isLoading: boolean };

function confirmationReducer(state: State, action: ConfirmSignupAction): State {
    switch (action.type) {
        case "CONFIRMATION_SUCCESS":
            return { ...state, isLoading: false, isConfirmed: true, isConfirmedOAuh: true, error: null };
        case "CONFIRMATION_OAUTH":
            return { ...state, isLoading: false, isConfirmed: false, isConfirmedOAuh: true, error: null, };
        case "CONFIRMATION_FAILURE":
            return { ...state, isLoading: false, isConfirmed: false, isConfirmedOAuh: true, error: action.error };
        case "SET_LOADING":
            return { ...state, isLoading: action.isLoading };
        default:
            return state;
    }
}

export default function ConfirmSignUp() {
    const [state, dispatch] = useReducer(confirmationReducer, {
        isLoading: true,
        error: null,
        isConfirmed: false,
        isConfirmedOAuh: false,
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get("token");
        const oauth = queryParams.get("oauth");

        if (token) {
            handleConfirmSignup({ token, dispatch });
        } else if (!token && oauth) {
            dispatch({ type: "CONFIRMATION_OAUTH" });
        } else {
            dispatch({ type: "CONFIRMATION_FAILURE", error: "Invalid or missing token." });
        }
    }, []);



    const { isLoading, error, isConfirmed, isConfirmedOAuh } = state;

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : isConfirmed ? (
                <ConfirmationMessage />
            ) : isConfirmedOAuh ? (
                <ConfirmationOAuthMessage />
            ) : null}
        </>
    );
}

const ErrorMessage = ({ message }: { message: string }) => (
    <div className="text-red-600">
        <h2 className="text-2xl font-semibold text-center">Error</h2>
        <p className="text-center text-sm">{message}</p>
    </div>
);

const ConfirmationMessage = () => (
    <>
        <BackLink href='/signin' label='Back To Login' />
        <h2 className="text-2xl font-semibold text-center text-gray-900">Email Confirmed</h2>
        <p className="text-center text-sm text-gray-600">Your email has been successfully confirmed.</p>
    </>
);

const ConfirmationOAuthMessage = () => (
    <>
        <BackLink href='/dashboard' label='Go To Dashboard' />
        <h2 className="text-2xl font-semibold text-center text-gray-900">OAuth Successfully</h2>
        <p className="text-center text-sm text-gray-600">Your provider has been confirmed register.</p>
    </>
);
