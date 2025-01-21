"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      router.push("/dashboard/calculation-tool");
    } else {
      router.push("/sign-in");
    }
  }, [userId, router]);

  return null;
}
