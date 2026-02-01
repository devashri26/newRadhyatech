import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout component that wraps all pages
 * Provides consistent header, footer, and chat widget
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};
