import { ROUTES } from "@/constants/Routes";

type FooterAuthScreenProps = {
    screen: 'signin' | 'signup';
}

export default function FooterAuthScreen({ screen }: FooterAuthScreenProps) {
    return (
        <div className="mt-4 text-center text-sm text-gray-600">
            {screen === 'signin' ? (
                <>
                    {"Don't have an account? "}
                    <a href={ROUTES.signup} className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        Create an account
                    </a>
                </>
            ) : (
                <>
                    Already have an account?{' '}
                    <a href={ROUTES.signin} className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        Go back to login
                    </a>
                </>
            )}
        </div>
    );
}