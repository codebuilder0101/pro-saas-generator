import localFont from 'next/font/local'

import Toast from '@/components/Toast';
import { ToastProvider } from '@/contexts/ToastContext';


import "@/styles/globals.css";


const myFont = localFont({ src: '../../public/Satoshi.ttf' })

type Props = {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="hOwFMK8Nm7tKqU6eOyDCH3EUk6u6kht_Zpzqoucazgw" />
      <body className={myFont.className}>
        <ToastProvider>
          {children}
          <Toast />
        </ToastProvider>
      </body>
    </html>
  );
}
