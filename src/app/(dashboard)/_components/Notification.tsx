"use client";

import { BellIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';


function Notification() {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Notification 1', description: 'Description 1', read: false },
        { id: 2, message: 'Notification 2', description: 'Description 2', read: false },
        { id: 3, message: 'Notification 3', description: 'Description 3', read: true },
    ]);

    const unreadCount = notifications.filter(notification => !notification.read).length;

    const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };

    return (
        <div className="relative cursor-pointer">
            <BellIcon
                className="h-6 w-6 text-gray-700 hover:text-indigo-600"
                onClick={toggleNotifications}
            />
            <span className="absolute bottom-3 left-3 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
                {unreadCount}
            </span>
            {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg p-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Notifications</h2>
                    <ul className="max-h-48 overflow-y-auto custom-scrollbar">
                        {notifications.map(notification => (
                            <li
                                key={notification.id}
                                className={`p-2 rounded-md ${notification.read ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 cursor-pointer flex justify-between items-center`}
                                onClick={() => markAsRead(notification.id)}
                            >
                                <div>
                                    <p className="font-semibold">{notification.message}</p>
                                    <p className="text-sm text-gray-600">{notification.description}</p>
                                </div>
                                {!notification.read && (
                                    <span className="h-2 w-2 bg-blue-500 rounded-full ml-2 mt-1"></span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Notification;