import { Routes } from "@/constants/Routes";

type ToggleScreenProps = {
    screen: 'signin' | 'signup';
}

export default function ToggleScreen({ screen }: ToggleScreenProps) {
    return (
        <div className="mt-4 text-center text-sm text-gray-600">
            {screen === 'signin' ? (
                <>
                    {"Don't have an account? "}
                    <a href={Routes.signup} className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        Create an account
                    </a>
                </>
            ) : (
                <>
                    Already have an account?{' '}
                    <a href={Routes.signin} className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        Go back to login
                    </a>
                </>
            )}
        </div>
    );
}