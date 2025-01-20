import { Poppins } from 'next/font/google'

import Toast from '@/components/Toast';
import { DatadogProvider } from '@/contexts/DatadogContext';
import { ToastProvider } from '@/contexts/ToastContext';


import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900',]
})

type Props = {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <title>Sassy - powerful micro-saas template</title>
      <body className={poppins.className}>
        <DatadogProvider>
          <ToastProvider>
            {children}
            <Toast />
          </ToastProvider>
        </DatadogProvider>

      </body>
    </html>
  );
}
