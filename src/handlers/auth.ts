import { ActionDispatch } from "react";

import { ConfirmSignupAction } from "@/app/(domains)/(auth)/confirm-signup/page";
import { ForgotPasswordAction, ForgotPasswordStateType } from "@/app/(domains)/(auth)/forgot-password/page";
import { NewPasswordAction, NewPasswordStateType } from "@/app/(domains)/(auth)/new-password/page";
import { SignInAction, SignInStateType, } from "@/app/(domains)/(auth)/signin/page";
import { SignUpAction, SignUpStateType } from "@/app/(domains)/(auth)/signup/page";
import { supabase } from "@/libs/supabase/client";
import AuthService from "@/services/auth";
import RegexValidation from "@/utils/RegexValidation";

interface ConfirmSignupProps {
    dispatch: ActionDispatch<[action: ConfirmSignupAction]>
    token: string;
}

interface ForgotPasswordProps {
    dispatch: ActionDispatch<[action: ForgotPasswordAction]>;
    state: ForgotPasswordStateType
}

interface NewPasswordProps {
    dispatch: ActionDispatch<[action: NewPasswordAction]>;
    state: NewPasswordStateType
}

interface SignInProps {
    dispatch: ActionDispatch<[action: SignInAction]>;
    state: SignInStateType
    router: {
        push: (path: string) => void;
    }
}

interface SignUpProps {
    dispatch: ActionDispatch<[action: SignUpAction]>;
    state: SignUpStateType
}

export async function handleConfirmSignup({ token, dispatch }: ConfirmSignupProps) {
    dispatch({ type: "SET_LOADING", isLoading: true });
    const AuthServiceInstance = new AuthService(supabase);

    try {
        const response = await AuthServiceInstance.confirmEmail(token, 'signup');
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

export async function handleForgotPassword({ dispatch, state }: ForgotPasswordProps) {
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

        if (response) {
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

export async function handleNewPassword({ dispatch, state }: NewPasswordProps) {
    try {
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_ERRORS", payload: { password: "", confirmPassword: "", general: "" } });

        const isPasswordValid = state.inputValue.password.length >= 6;
        const isPasswordsMatch = state.inputValue.password === state.inputValue.confirmPassword;

        if (!isPasswordValid || !isPasswordsMatch) {
            dispatch({
                type: "SET_ERRORS",
                payload: {
                    password: isPasswordValid ? "" : "Password must be at least 6 characters long.",
                    confirmPassword: isPasswordsMatch ? "" : "Passwords do not match.",
                },
            });
            throw new Error("Validation Error");
        }

        const AuthServiceInstance = new AuthService(supabase);

        const response = await AuthServiceInstance.newPassword(state.inputValue.password);

        if (response) {
            dispatch({ type: "SET_PASSWORD_CHANGED", payload: true });
        } else {
            dispatch({ type: "SET_ERRORS", payload: { general: "Failed to change the password. Please try again." } });
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

export async function handleSignIn({ dispatch, state, router }: SignInProps) {
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

export async function handleSignUp({ dispatch, state }: SignUpProps) {
    try {
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "SET_ERRORS", payload: { email: "", password: "", confirmPassword: "", general: "", terms: "" } });

        const isValidEmail = RegexValidation.validateEmail(state.inputValue.email);
        const isPasswordValid = state.inputValue.password.length >= 6;
        const isPasswordsMatch = state.inputValue.password === state.inputValue.confirmPassword;

        if (!isValidEmail || !isPasswordValid || !isPasswordsMatch) {
            dispatch({
                type: "SET_ERRORS",
                payload: {
                    email: isValidEmail ? "" : "Invalid email format.",
                    password: isPasswordValid ? "" : "Password must be at least 6 characters long.",
                    confirmPassword: isPasswordsMatch ? "" : "Passwords do not match.",
                },
            });
            throw new Error("Validation Error");
        }

        if (!state.isTermsAccepted) {
            dispatch({
                type: "SET_ERRORS",
                payload: { terms: "You must accept the terms and conditions." },
            });
            throw new Error("Terms not accepted");
        }

        const AuthServiceInstance = new AuthService(supabase);
        const response = await AuthServiceInstance.signUp(state.inputValue.email, state.inputValue.password);

        if (response?.id) {
            dispatch({ type: "SET_REGISTRATION_COMPLETE", payload: true });
        } else {
            dispatch({ type: "SET_ERRORS", payload: { general: "Failed to create an account. Please try again." } });
        }
    } catch (err) {
        console.log("Error", err);
        if (err instanceof Error && err.message !== "Validation Error" && err.message !== "Terms not accepted") {
            dispatch({ type: "SET_ERRORS", payload: { general: "Something went wrong. Please try again." } });
        }
    } finally {
        dispatch({ type: "SET_LOADING", payload: false });
    }
}
