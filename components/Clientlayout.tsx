"use client";
import { useState } from "react";
import Main from "@/components/Main";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePage, setActivePage] = useState("");

  return (
    <>
      <Main activePage={activePage} setActivePage={setActivePage} />
      {children}
    </>
  );
}
