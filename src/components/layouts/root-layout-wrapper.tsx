"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { Toaster } from "../ui/sonner";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import RootProvider from "@/providers/root-provider";

/**
 * @param children - The children components.
 * @returns - The RootLayoutWrapper component.
 * RootLayoutWrapper is a wrapper component that provides a theme provider, a top navbar, a footer, and a toast.
 * It is used to wrap the root layout component.
 */
const RootLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const pathnameStartsWith = pathname.split("/")[1];

  const pathnameWhereLayoutWillBeHidden = [
    "login",
    "register",
    "forget-password",
    "reset-password",
    "verify-code",
    "dashboard",
  ];
  const hideNavFooter =
    pathnameWhereLayoutWillBeHidden.includes(pathnameStartsWith);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RootProvider>
        {!hideNavFooter && <Navbar />}
        <main>{children}</main>
        {!hideNavFooter && <Footer />}
        <Toaster />
      </RootProvider>
    </ThemeProvider>
  );
};

export default RootLayoutWrapper;
