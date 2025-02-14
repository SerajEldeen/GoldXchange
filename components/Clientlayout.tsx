"use client";
import { useState } from "react";
import Main from "@/components/Main";
import { SessionProvider } from "next-auth/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePage, setActivePage] = useState("");

  return (
    <SessionProvider>
      <Main activePage={activePage} setActivePage={setActivePage} />
      {children}
    </SessionProvider>
  );
}
