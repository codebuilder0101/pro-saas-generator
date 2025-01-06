export default function Settings() {
    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <header className="bg-white border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <h1 className="text-xl font-bold text-gray-900">Settings</h1>
                            </div>
                            <div className="flex items-center space-x-4">
                                <a href="/dashboard" className="text-gray-700 hover:text-indigo-600 font-medium">
                                    Dashboard
                                </a>
                                <a href="/settings" className="text-gray-700 hover:text-indigo-600 font-medium">
                                    Settings
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Settings Content */}
                <main className="flex-1 flex justify-center p-6 bg-gray-50 pt-18">
                    <div className="w-full max-w-3xl space-y-6">
                        {/* User Info */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    value="John Doe"
                                    readOnly
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none sm:text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    value="johndoe@example.com"
                                    readOnly
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none sm:text-sm"
                                />
                                <div className="mt-2 flex items-center space-x-2">
                                    <p className="text-sm text-red-600">Email not confirmed</p>
                                    <a
                                        href="#"
                                        className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                                    >
                                        Resend email
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Change Password */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-medium text-gray-900">Change Password</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                                <input
                                    type="password"
                                    placeholder="Confirm new password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Update Password
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Logout Button */}
                <footer className="bg-white border-t border-gray-200 p-4 fixed bottom-0 w-full">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <a href="./">
                            <button
                                type="button"
                                className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                            >
                                Logout
                            </button>
                        </a >
                    </div>
                </footer>
            </div>
        </div>
    );
}
