import React from 'react';

interface ProfileProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

function MyAccount({ isOpen, toggleMenu }: ProfileProps) {
    return (
        <>
            <div className="relative">
                <button
                    onClick={toggleMenu}
                    className="text-gray-700 hover:text-indigo-600 font-medium focus:outline-none"
                >
                    My Account
                </button>
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                        <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Profile
                        </a>
                        <a href="/subscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Subscription
                        </a>

                        <a href="/subscription" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Terms and Privacy
                        </a>
                        <a href="./" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Sign Out
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}

export default MyAccount;