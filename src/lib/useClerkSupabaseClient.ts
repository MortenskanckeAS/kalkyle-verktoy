"use client";

import { useSession } from "@clerk/nextjs";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase-types";

export type TypedSupabaseClient = SupabaseClient<Database>;

// This hook returns a typed Supabase client that uses Clerk for auth
export function useClerkSupabaseClient(): TypedSupabaseClient | null {
  const { session } = useSession();

  if (!session) return null;

  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_KEY!,
    {
      global: {
        fetch: async (url, options = {}) => {
          const clerkToken = await session.getToken({ template: "supabase" });

          const headers = new Headers(options.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);

          return fetch(url, {
            ...options,
            headers,
          });
        },
      },
    }
  );
}
