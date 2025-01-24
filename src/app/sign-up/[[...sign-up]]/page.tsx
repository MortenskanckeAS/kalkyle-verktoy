import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignUp
        path="/sign-up"
        routing="path"
        forceRedirectUrl="/dashboard/calculation-tool"
      />
    </div>
  );
}
