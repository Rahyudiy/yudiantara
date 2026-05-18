import { supabaseAdmin } from "@/lib/supabase-admin";
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const live_url = formData.get("live_url") as string;
    const tech_stack = formData.get("tech_stack") as string;
    const file = formData.get("image") as File;
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!file || !title) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const fileName = `${Date.now()}-${file.name}`;

    // upload image
    const { error: uploadError } = await supabaseAdmin.storage
      .from("portfolio-images")
      .upload(fileName, file);

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    // public url
    const { data } = supabaseAdmin.storage
      .from("portfolio-images")
      .getPublicUrl(fileName);

    // insert database
    const { error: dbError } = await supabaseAdmin.from("projects").insert({
      title,
      description,
      image_url: data.publicUrl,
      live_url,
      tech_stack: tech_stack.split(","),
    });

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
