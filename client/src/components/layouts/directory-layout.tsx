
import { ReactNode } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

interface DirectoryLayoutProps {
  children: ReactNode;
}

export function DirectoryLayout({ children }: DirectoryLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-90 z-0"></div>
        <main className="relative z-10">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
