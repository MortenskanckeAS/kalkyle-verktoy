import { SignOutButton } from "@clerk/nextjs";

export default function CalculationTool() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Calculation Tool</h1>

      <SignOutButton />
    </div>
  );
}
