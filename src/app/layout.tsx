import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'

import Toast from '@/components/Toast';
import { ToastProvider } from '@/contexts/ToastContext';


import "@/styles/globals.css";


const myFont = localFont({ src: '../../public/Satoshi.ttf' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900',]
})

type Props = {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="hOwFMK8Nm7tKqU6eOyDCH3EUk6u6kht_Zpzqoucazgw" />
      <body className={myFont.className || poppins.className}>
        <ToastProvider>
          {children}
          <Toast />
        </ToastProvider>
      </body>
    </html>
  );
}
