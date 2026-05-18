"use client";

import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();

    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-xl border border-zinc-700 px-4 py-2"
    >
      Logout
    </button>
  );
}
