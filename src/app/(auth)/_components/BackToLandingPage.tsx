import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function BackToLandingPage() {
    return (
        <a
            href="/"
            className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
        >
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            Back to Home
        </a>
    );
}