import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import "./globals.css";
import SignInPage from "./sign-in/[[...sign-in]]/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedIn>{children}</SignedIn>
          <SignedOut>
            <SignInPage />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
