"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const supabase = createClient();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white font-poppins">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-5 rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Portfolio
          </p>

          <h1 className="mt-2 text-3xl font-semibold">Admin Login</h1>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-4 outline-none focus:border-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-4 outline-none focus:border-white"
        />

        <button
          disabled={loading}
          className="w-full rounded-lg bg-white py-4 font-medium text-black transition hover:opacity-80"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
