import type { Metadata } from "next";
import "./globals.scss";

import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import { ModalProvider } from "@/context";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { Suspense } from "react";
import { FacebookPixelEvents } from "@/components/FacebookPixel";

export const metadata: Metadata = {
   title: "Wepro - Первая IT-школа в Самарканде",
   description: "Обучение IT-профессиям в центре «Wepro»: теория, практика и помощь в трудоустройстве.",
   icons: {
      icon: '/images/mini-logo.svg',
   },
};

const defaultFont = localFont({
   src: "../../public/fonts/HelveticaNeueCyr-Roman.woff",
   display: "swap",
   variable: "--font-helveticaNeue",
});

const fontBold = localFont({
   src: "../../public/fonts/HelveticaNeueCyr-Bold.woff",
   display: "swap",
   variable: "--font-helveticaNeueBold",
});

const fontMedium = localFont({
   src: "../../public/fonts/HelveticaNeueCyr-Medium.woff",
   display: "swap",
   variable: "--font-helveticaNeueMedium",
});

export default async function RootLayout({
   children,
   params: { lang },
}: {
   children: React.ReactNode;
   params: { lang: Locale };
}) {
   const { header, homePage } = await getDictionary(lang);

   return (
      <html lang="en">
         <body className={cn(defaultFont.variable, fontBold.variable, fontMedium.variable)}>
            <ModalProvider>
               <Modal />
               <div className="wrapper">
                  <Header lang={header} />
                  {children}
                  <Footer homePage={homePage} />
               </div>
               <Suspense fallback={null}>
                  <FacebookPixelEvents />
               </Suspense>
            </ModalProvider>
         </body>
      </html>
   );
}
