"use client";

import { useEffect, useReducer } from "react";

import BackLink from "@/app/(auth)/_components/BackLink";
import Spinner from "@/components/Spinner";
import { supabase } from "@/lib/supabase/client";
import AuthService from "@/services/auth";


type State = {
    isLoading: boolean;
    error: string | null;
    isConfirmed: boolean;
};

type Action =
    | { type: "CONFIRMATION_SUCCESS" }
    | { type: "CONFIRMATION_FAILURE"; error: string }
    | { type: "SET_LOADING"; isLoading: boolean };

function confirmationReducer(state: State, action: Action): State {
    switch (action.type) {
        case "CONFIRMATION_SUCCESS":
            return { ...state, isLoading: false, isConfirmed: true, error: null };
        case "CONFIRMATION_FAILURE":
            return { ...state, isLoading: false, isConfirmed: false, error: action.error };
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
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get("token");
        const email = queryParams.get("email");

        if (token && email) {
            confirmEmailToken(token, email);
        } else {
            dispatch({ type: "CONFIRMATION_FAILURE", error: "Invalid or missing token." });
        }
    }, []);

    const confirmEmailToken = async (token: string, email: string) => {
        dispatch({ type: "SET_LOADING", isLoading: true });
        const AuthServiceInstance = new AuthService(supabase);
        
        try {
            const response = await AuthServiceInstance.confirmEmail({ token, type: 'email', email });
            if (response?.id) {
                dispatch({ type: "CONFIRMATION_SUCCESS" });
            } else {
                throw new Error("Email confirmation failed. Please try again.");
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                dispatch({ type: "CONFIRMATION_FAILURE", error: error.message });
            } else {
                dispatch({ type: "CONFIRMATION_FAILURE", error: "An unexpected error occurred." });
            }
        }
    };

    const { isLoading, error, isConfirmed } = state;

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : error ? (
                <ErrorMessage message={error} />
            ) : isConfirmed ? (
                <ConfirmationMessage />
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
