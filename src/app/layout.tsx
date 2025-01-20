import { Poppins } from 'next/font/google'
// import localFont from 'next/font/local'

import Toast from '@/components/Toast';
import { ToastProvider } from '@/contexts/ToastContext';


import "@/styles/globals.css";
import '@/libs/datadog';

// const myFont = localFont({ src: '../../public/Satoshi.ttf' })
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
      <title>Sassy - powerful micro-saas template</title>
      <body className={poppins.className}>
        <ToastProvider>
          {children}
          <Toast />
        </ToastProvider>
      </body>
    </html>
  );
}
