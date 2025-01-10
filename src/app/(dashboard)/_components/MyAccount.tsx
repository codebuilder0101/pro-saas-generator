'use client';

import { useState } from 'react';

import { supabase } from '@/lib/supabase/client';
import AuthService from '@/services/auth';

const AuthServiceInstance = new AuthService(supabase);

function MyAccount() {
    const [isOpen, toggleMenu] = useState(false);

    return (
        <>
            <div className="relative">
                <button
                    onClick={() => toggleMenu(!isOpen)}
                    className="text-gray-700 hover:text-indigo-600 font-medium focus:outline-none"
                >
                    My Account
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                        <a href="/settings" className="font-bold block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Profile
                        </a>
                        <hr />
                        <a href="/subscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Subscription
                        </a>
                        <hr />

                        <a href="/terms-and-privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Terms and Privacy
                        </a>
                        <hr />
                        <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={async () => {
                            await AuthServiceInstance.signOut()
                            window.location.reload();
                        }}>
                            Sign Out
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}

export default MyAccount;