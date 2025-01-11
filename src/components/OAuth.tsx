import { ProvidersImageURL } from "@/constants/Url";
import { supabase } from "@/libs/supabase/client";
import AuthService from "@/services/auth";

export default function OAuth() {
    const AuthServiceInstance = new AuthService(supabase);

    const PROVIDERS_MAP = [
        {
            provider: 'Google',
            logo: ProvidersImageURL.Google,
            onClick: () => AuthServiceInstance.signInProvider('google')
        },
        {
            provider: 'Facebook',
            logo: ProvidersImageURL.Facebook,
            onClick: () => AuthServiceInstance.signInProvider('facebook')
        },
        {
            provider: 'Twitter',
            logo: ProvidersImageURL.Twitter,
            onClick: () => AuthServiceInstance.signInProvider('twitter')
        }
    ]
    return (
        <>
            <div className="text-center text-sm text-gray-600">or</div>

            <div className="mt-4 flex justify-center space-x-4">
                {PROVIDERS_MAP.map(({ provider, logo, onClick }) => (
                    <ProviderButton
                        key={provider}
                        provider={provider}
                        logo={logo}
                        onClick={onClick}
                    />
                ))}
            </div>
        </>
    );
}

type ProviderButtonProps = {
    provider: string;
    logo: string;
    onClick: () => void;
}
function ProviderButton({ provider, logo, onClick }: ProviderButtonProps) {
    return (
        <button
            className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClick}
        >
            <img
                src={logo}
                alt={provider}
                className="w-5 h-5"
            />
        </button>
    )
}