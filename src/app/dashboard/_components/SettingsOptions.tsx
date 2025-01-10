'use client';

import { useState } from "react";

import ButtonComponent from "@/components/ui/Button";
import { useToast } from "@/context/ToastContext";
import { supabase } from "@/lib/supabase/client";
import AuthService from "@/services/auth";

type SettingsOptionsProps = {
    userEmail?: string;
}

function SettingsOptions({ userEmail }: SettingsOptionsProps) {
    const AuthServiceInstance = new AuthService(supabase);
    const { addToast } = useToast();
    const [isLoading, setIsLoading] = useState({
        forgotPassword: false,
    });

    const handleForgotPassword = async (userEmail: string) => {
        setIsLoading((data) => ({ ...data, forgotPassword: true }));
        const response = await AuthServiceInstance.forgotPassword(userEmail);

        if (response) {
            await addToast({
                id: Date.now().toString(),
                message: 'Password Change Request Sent!',
                description: 'Please check your inbox for an email to complete the process.',
                type: 'info',
            });
        } else {
            await addToast({
                id: Date.now().toString(),
                message: 'Password Change Failed',
                description: 'An error occurred while processing your request. Please try again later.',
                type: 'error',
            });
        }
        setIsLoading((data) => ({ ...data, forgotPassword: false }));
    };

    return (
        <div className="space-y-6">
            {userEmail && <div className="flex justify-between items-start">
                <div className="max-w-md">
                    <h2 className="text-lg font-medium text-gray-700">Change Password</h2>
                </div>
                <a>
                    <ButtonComponent isLoading={isLoading.forgotPassword} onClick={() => handleForgotPassword(userEmail)} type="button" variant="outlined">Change Password</ButtonComponent>
                </a>
            </div>
            }
            <div className="flex justify-between items-start">
                <div className="max-w-md">
                    <h2 className="text-lg font-medium text-gray-700">Current Plan</h2>
                    <p className="text-gray-700">Free</p>
                </div>
                <a href="/dashboard/subscription">
                    <ButtonComponent type="button" variant="filled">Manage Subscription</ButtonComponent>
                </a>
            </div>
            {/* <div className="flex justify-between items-start">
                <div className="max-w-md">
                    <h2 className="text-lg font-medium text-gray-700">Two-Factor Authentication</h2>
                    <p className="text-gray-700">Disabled</p>
                </div>
                <a href="/dashboard">
                    <button className="text-indigo-600 hover:underline border border-indigo-600 rounded px-4 py-2">Add Two-Factor Authentication</button>
                </a>
            </div> */}
            {/* <div className="flex justify-between items-start">
                <div className="max-w-md">
                    <h2 className="text-lg font-medium text-gray-700">Delete Account</h2>
                    <p className="text-gray-700">Deleting your account is permanent. You will no longer be able to create an account with this email.</p>
                </div>
                <a href="/dashboard">
                    <button className="text-red-600 hover:underline border border-red-600 rounded px-4 py-2">Delete Account</button>
                </a>
            </div> */}
        </div>
    );
}

export default SettingsOptions;