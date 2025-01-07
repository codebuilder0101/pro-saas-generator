interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    isLoading?: boolean;
}

export default function ButtonComponent(props: ButtonProps) {
    return (
        <button
            type={props.type}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${props.className} ${props.isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={props.onClick}
            disabled={props.isLoading}
        >
            {props.isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
            ) : (
                props.children
            )}
        </button>
    );
}