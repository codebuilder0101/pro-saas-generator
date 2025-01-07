export default function OAuthComponent() {
    const PROVIDERS_MAP = [
        {
            provider: 'Google',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png'
        },
        {
            provider: 'Facebook',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
        },
        {
            provider: 'Twitter',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/300px-X_logo_2023.svg.png'
        }
    ]
    return (
        <>
            <div className="text-center text-sm text-gray-600">or</div>

            <div className="mt-4 flex justify-center space-x-4">
                {PROVIDERS_MAP.map(({ provider, logo }) => (
                    <ProviderButton
                        key={provider}
                        provider={provider}
                        logo={logo}
                    />
                ))}
            </div>
        </>
    );
}

type ProviderButtonProps = {
    provider: string;
    logo: string;
}
function ProviderButton({ provider, logo }: ProviderButtonProps) {
    return (
        <button
            className="p-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <img
                src={logo}
                alt={provider}
                className="w-5 h-5"
            />
        </button>
    )
}