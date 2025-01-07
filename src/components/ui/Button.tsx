interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export default function ButtonComponent(props: ButtonProps) {
    return (
        <button
            type={props.type}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}