export default function OAuth() {
    return (
        <>
            <div className="text-center text-sm text-gray-600">or</div>
            <div className="mt-4 flex justify-center space-x-4">
                <button
                    className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                        alt="Google logo"
                        className="inline-block w-5 h-5 mr-2"
                    />
                    Enter with Google
                </button>
            </div>
            <div className="mt-2 flex justify-center space-x-4">
                <button
                    className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        alt="Facebook logo"
                        className="inline-block w-5 h-5 mr-2"
                    />
                    Enter with Facebook
                </button>
            </div>

            <div className="mt-2 flex justify-center space-x-4">
                <button
                    className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/300px-X_logo_2023.svg.png"
                        alt="Twitter logo"
                        className="inline-block w-5 h-5 mr-2"
                    />
                    Enter with Twitter
                </button>
            </div>
        </>
    );
}
