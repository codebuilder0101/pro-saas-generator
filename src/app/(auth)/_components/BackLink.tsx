import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface BackLinkProps {
    href: string;
    label: string;
}

export default function BackLink({ href, label }: BackLinkProps) {
    return (
        <a href={href} className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium cursor-pointer">
            <ArrowLeftIcon className="h-5 w-5 mr-1" />
            {label}
        </a>
    );
}
