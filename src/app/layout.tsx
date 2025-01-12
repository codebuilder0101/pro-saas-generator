import localFont from 'next/font/local'

import Toast from '@/components/Toast';
import { ToastProvider } from '@/contexts/ToastContext';


import "@/styles/globals.css";
import Footer from './(domains)/(home)/_sections/Footer';


const myFont = localFont({ src: '../../public/Satoshi.ttf' })

type Props = {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ToastProvider>
          {children}
          <Toast />
        </ToastProvider>
        <Footer />
      </body>
    </html>
  );
}
