'use client';
import { useSearchParams } from 'next/navigation';

import BackLink from "@/components/BackLink";

const PaymentStatus = () => {
    const searchParams = useSearchParams();
    const status = searchParams && searchParams.get('status');

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                {status === 'success' ? (
                    <>
                        <BackLink href='/dashboard/subscription' label='Back To Billing' />
                        <h2 className="text-2xl font-semibold text-center text-gray-900">Purchase Confirmed</h2>
                        <p className="text-center text-sm text-gray-600">Your purchase has been successfully confirmed.</p>
                    </>
                ) : status === 'cancel' ? (
                    <>
                        <BackLink href='/dashboard/subscription' label='Back To Settings' />
                        <h2 className="text-2xl font-semibold text-center text-gray-900">Purchase Cancelled</h2>
                        <p className="text-center text-sm text-gray-600">Your purchase has been cancelled.</p>
                    </>
                ) : (
                    <>
                        <BackLink href='./' label='Back To Home' />
                        <h2 className="text-2xl font-semibold text-center text-gray-900">Unknown Status</h2>
                        <p className="text-center text-sm text-gray-600">The status of your purchase is unknown.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentStatus;