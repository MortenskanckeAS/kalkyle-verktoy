import { TypedSupabaseClient } from "@/lib/useClerkSupabaseClient";
import { Tables } from "@/types/supabase-types";

type OfferRow = Tables<"offers">;

/**
 * Get all offers that belong to a specific user.
 * @param client - A typed Supabase client
 * @param userId - The ID of the user
 * @returns An array of OfferRow objects
 */
export async function getOffersForUser(
  client: TypedSupabaseClient,
  userId: string
): Promise<OfferRow[]> {
  const { data, error } = await client
    .from("offers")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw error;
  }

  return data ?? [];
}
