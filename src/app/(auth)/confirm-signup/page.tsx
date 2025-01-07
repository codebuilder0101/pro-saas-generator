"use client";

import { useEffect, useState } from "react";

import { confirmEmail } from "@/lib/auth";

export default function ConfirmSignUpPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { token } = Object.fromEntries(new URLSearchParams(window.location.search));
        if (token) {
            handleEmailConfirmation(token, 'email')
        }
    }, []);

    async function handleEmailConfirmation(token: string, email: string) {
        const response = await confirmEmail({ token, type: 'email', email });
        if(response?.id) {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg text-center">
                {isLoading ? (
                    <div className="flex justify-center items-center">
                        <svg className="animate-spin h-5 w-5 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                        </svg>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-semibold text-center text-gray-900">Email Confirmed</h2>
                        <p className="text-center text-sm text-gray-600">Your email has been successfully confirmed.</p>
                    </>
                )}
            </div>
        </div>
    );
}