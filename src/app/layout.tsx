import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { ReactQueryClientProvider } from "@/components/providers/ReactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ReactQueryClientProvider>
        <html lang="en">
          <body>
            <header>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            <main>{children}</main>
          </body>
        </html>
      </ReactQueryClientProvider>
    </ClerkProvider>
  );
}
