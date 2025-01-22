import { SignOutButton } from "@clerk/nextjs";

export default function CalculationTool() {
  return (
    <div className="flex flex-col gap-2 items-center mt-4">
      <h1>Calculation Tool</h1>
      <SignOutButton />
    </div>
  );
}
