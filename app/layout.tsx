import Navbar from "@/components/Navbar";
import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";
import ClientLayout from "@/components/Clientlayout";
import QueryProvider from "@/hooks/QueryProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "GoldXchange",
  description: "Get the latest gold and currency exchange rates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-poppins">
        <QueryProvider>
          <Navbar />
          <ClientLayout>{children}</ClientLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
