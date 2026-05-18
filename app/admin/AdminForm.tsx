"use client";

import { useState } from "react";

export default function AdminForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [liveUrl, setLiveUrl] = useState("");

  const [techStack, setTechStack] = useState("");

  const [image, setImage] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) return;

    setLoading(true);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);

    formData.append("live_url", liveUrl);

    formData.append("tech_stack", techStack);

    formData.append("image", image);

    const res = await fetch("/api/projects", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    console.log(data);

    setLoading(false);
  };

  return (
    <div className="">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Thumbnail */}
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Project Thumbnail
          </label>

          <label className="flex h-44 w-full cursor-pointer items-center justify-center rounded-3xl border border-dashed border-zinc-700 bg-zinc-950 transition hover:border-white">
            <div className="text-center">
              <p className="text-sm text-zinc-400">Click to upload image</p>

              <p className="mt-1 text-xs text-zinc-600">PNG, JPG, WEBP</p>
            </div>

            <input
              type="file"
              className="hidden"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </label>

          {image && <p className="mt-3 text-sm text-zinc-500">{image.name}</p>}
        </div>

        {/* Title */}
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Project Title
          </label>

          <input
            type="text"
            placeholder="Realtime Counter App"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-white"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm text-zinc-400">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Write your project description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-white"
          />
        </div>

        {/* Live URL */}
        <div>
          <label className="mb-2 block text-sm text-zinc-400">Live URL</label>

          <input
            type="text"
            placeholder="https://yourproject.vercel.app"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-white"
          />
        </div>

        {/* Tech Stack */}
        <div>
          <label className="mb-2 block text-sm text-zinc-400">Tech Stack</label>

          <input
            type="text"
            placeholder="Next.js, Tailwind, Supabase"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4 text-sm outline-none transition placeholder:text-zinc-600 focus:border-white"
          />

          <p className="mt-2 text-xs text-zinc-600">Separate with commas</p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-2xl border border-white bg-white px-4 py-4 text-sm font-medium text-black transition hover:bg-transparent hover:text-white"
        >
          Publish Project
        </button>
      </form>
    </div>
  );
}
