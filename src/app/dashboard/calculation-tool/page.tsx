"use client";

import { useQuery } from "@tanstack/react-query";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { useClerkSupabaseClient } from "@/lib/useClerkSupabaseClient";
import { getOffersForUser } from "@/services/offers";

export default function CalculationTool() {
  const { user } = useUser();
  const supabase = useClerkSupabaseClient();

  const {
    data: offers,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["offers", user?.id],
    queryFn: async () => {
      if (!user?.id || !supabase) return [];
      return getOffersForUser(supabase, user.id);
    },
    enabled: Boolean(user?.id && supabase),
  });

  if (isLoading) {
    return <p>Loading offers...</p>;
  }

  if (isError) {
    return (
      <p className="text-red-500">
        Error: {(error as Error)?.message || "An unknown error occurred."}
      </p>
    );
  }

  if (!offers?.length) {
    return <p>No offers found.</p>;
  }

  return (
    <div className="flex flex-col gap-2 items-center mt-4">
      <h1>Calculation Tool</h1>
      <SignOutButton />
      <ul>
        {offers.map((offer) => (
          <li key={offer.id} className="border p-2 rounded">
            <h2>{offer.title ?? "Untitled"}</h2>
            <p>{offer.description ?? "No description"}</p>
            <p className="text-gray-500">
              {new Date(offer.created_at).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
