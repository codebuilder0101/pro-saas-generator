type ToggleScreenProps = {
    screen: 'signin' | 'signup';
}

export default function ToggleScreenComponent({ screen }: ToggleScreenProps) {
    return (
        <div className="mt-4 text-center text-sm text-gray-600">
            {screen === 'signin' ? (
                <>
                    {"Don't have an account? "}
                    <a href="/signup" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        Create an account
                    </a>
                </>
            ) : (
                <>
                    Already have an account?{' '}
                    <a href="/signin" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        Go back to login
                    </a>
                </>
            )}
        </div>
    );
}