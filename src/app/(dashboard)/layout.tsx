"use client";

import { useState } from 'react';
import Notification from './_components/Notification';
import MyAccount from './_components/MyAccount';

type Props = {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Notification 1', description: 'Description 1', read: false },
        { id: 2, message: 'Notification 2', description: 'Description 2', read: false },
        { id: 3, message: 'Notification 3', description: 'Description 3', read: true },
    ]);

    const unreadCount = notifications.filter(notification => !notification.read).length;


    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const toggleDropdown = () => {
        if (notificationsOpen) setNotificationsOpen(false);
        setDropdownOpen(!dropdownOpen);
    };

    const toggleNotifications = () => {
        if (dropdownOpen) setDropdownOpen(false);
        setNotificationsOpen(!notificationsOpen);
    };

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
                                <MyAccount isOpen={dropdownOpen} toggleMenu={toggleDropdown} />
                                <Notification
                                    unreadCount={unreadCount}
                                    notificationsOpen={notificationsOpen}
                                    notifications={notifications}
                                    toggleNotifications={toggleNotifications}
                                    markAsRead={markAsRead}
                                />
                            </div>
                        </div>
                    </div>
                </header>
                {children}
            </div>
        </div>
    );
}