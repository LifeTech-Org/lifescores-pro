"use client"
import type { Metadata } from 'next'
import './globals.css'
import { useState } from 'react';
import { PopupContext } from '@/app/utils/context';
import { Header } from '@/app/components';
import Popup from '@/app/components/popup';
import Filter from '@/app/components/filter';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useRouter } from 'next/navigation';
// export const metadata: Metadata = {
//   title: 'Blitz',
//   description: 'Fast and secure',
// }


export default function RootLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const [popup, setPopup] = useState<null | JSX.Element>(null);
    const router = useRouter();
    return (
        <html lang="en">
            <body className="bg-primary-background">
                <main>
                    <PopupContext.Provider value={setPopup}>
                        <div className="flex flex-col h-screen w-full bg-zinc-950">
                            {popup && <Popup element={popup} setPopup={setPopup} />}
                            {children}
                        </div>
                    </PopupContext.Provider>
                </main>
            </body>
        </html>
    )
}
