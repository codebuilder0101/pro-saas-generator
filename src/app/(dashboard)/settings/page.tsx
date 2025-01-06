export default function Settings() {
    return (
        <>
            {/* Settings Content */}
            <main className="flex-1 flex justify-center p-6 bg-white pt-18">
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
                                    Resend confirmation email
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Additional Settings */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <div className="max-w-md">
                                <h2 className="text-lg font-medium text-gray-700">Change Password</h2>
                            </div>
                            <a href="/dashboard">
                                <button className="text-indigo-600 hover:underline border border-indigo-600 rounded px-4 py-2">Change Password</button>
                            </a>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="max-w-md">
                                <h2 className="text-lg font-medium text-gray-700">Current Plan</h2>
                                <p className="text-gray-700">Free</p>
                            </div>
                            <a href="/subscription">
                                <button className="text-indigo-600 hover:underline border border-indigo-600 rounded px-4 py-2">Manage Subscription</button>
                            </a>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="max-w-md">
                                <h2 className="text-lg font-medium text-gray-700">Two-Factor Authentication</h2>
                                <p className="text-gray-700">Disabled</p>
                            </div>
                            <a href="/dashboard">
                                <button className="text-indigo-600 hover:underline border border-indigo-600 rounded px-4 py-2">Add Two-Factor Authentication</button>
                            </a>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="max-w-md">
                                <h2 className="text-lg font-medium text-gray-700">Delete Account</h2>
                                <p className="text-gray-700">Deleting your account is permanent. You will no longer be able to create an account with this email.</p>
                            </div>
                            <a href="/dashboard">
                                <button className="text-red-600 hover:underline border border-red-600 rounded px-4 py-2">Delete Account</button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}