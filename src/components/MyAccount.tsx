'use client';

import { useState, useEffect, useRef } from 'react';

import { supabase } from '@/libs/supabase/client';
import AuthService from '@/services/auth';

const AuthServiceInstance = new AuthService(supabase);

function MyAccount() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-indigo-600 font-medium focus:outline-none"
            >
                My Account
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <a href="/dashboard/settings" className="font-bold block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Profile
                    </a>
                    <hr />
                    <a href="/dashboard/subscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Subscription
                    </a>
                    <hr />
                    <a href="/terms-and-privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Terms and Privacy
                    </a>
                    <hr />
                    <a
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        onClick={async () => {
                            await AuthServiceInstance.signOut();
                            window.location.reload();
                        }}
                    >
                        Sign Out
                    </a>
                </div>
            )}
        </div>
    );
}

export default MyAccount;
