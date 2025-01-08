import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';
import AuthService from '@/services/auth';

import MyAccount from "./_components/MyAccount";
import Notification from "./_components/Notification";

type Props = {
    children: React.ReactNode;
}

export default async function DashboardLayout({ children }: Props) {
    
    const supabase = await createClient();
    const AuthServiceInstance = new AuthService(supabase);

    const userId = await AuthServiceInstance.getUserSessionId();
    if (!userId) {
        redirect('/signin');
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="flex-1 flex flex-col">
                <header className="bg-white border-b border-gray-200 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <a href="/dashboard" className="cursor-pointer">
                                    <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <MyAccount />
                                <Notification />
                            </div>
                        </div>
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
}
