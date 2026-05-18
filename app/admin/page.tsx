import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminForm from "./AdminForm";
import { LogoutButton } from "./Logout";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-black text-white p-5">
      <div className="mx-auto max-w-md">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Portfolio CMS
            </p>

            <h1 className="mt-2 text-3xl font-semibold">Admin Dashboard</h1>
          </div>

          <LogoutButton />
        </div>

        <AdminForm />
      </div>
    </div>
  );
}
