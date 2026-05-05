"use client";

import { FormEvent, useMemo, useState } from "react";
import { Copy, Eye, Lock, LogOut, Save, Wand2 } from "lucide-react";

type DraftPost = {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string;
  body: string;
};

const emptyDraft: DraftPost = {
  title: "",
  slug: "",
  description: "",
  date: new Date().toISOString().slice(0, 10),
  tags: "Node.js, Backend",
  body: "",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toPostObject(draft: DraftPost) {
  const paragraphs = draft.body
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    slug: draft.slug || slugify(draft.title),
    title: draft.title.trim(),
    description: draft.description.trim(),
    date: draft.date,
    tags: draft.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    paragraphs,
  };
}

export function BlogStudio() {
  const [unlocked, setUnlocked] = useState(() =>
    typeof window === "undefined" ? false : window.localStorage.getItem("blog-studio-unlocked") === "yes",
  );
  const [key, setKey] = useState("");
  const [draft, setDraft] = useState<DraftPost>(() => {
    if (typeof window === "undefined") {
      return emptyDraft;
    }
    const saved = window.localStorage.getItem("blog-studio-draft");
    return saved ? (JSON.parse(saved) as DraftPost) : emptyDraft;
  });
  const [savedAt, setSavedAt] = useState("");
  const [copied, setCopied] = useState(false);

  const postObject = useMemo(() => toPostObject(draft), [draft]);
  const exportText = useMemo(() => JSON.stringify(postObject, null, 2), [postObject]);

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (key.trim().length < 6) {
      return;
    }
    window.localStorage.setItem("blog-studio-unlocked", "yes");
    setUnlocked(true);
  }

  function logout() {
    window.localStorage.removeItem("blog-studio-unlocked");
    setUnlocked(false);
    setKey("");
  }

  function update(field: keyof DraftPost, value: string) {
    setDraft((current) => {
      const next = { ...current, [field]: value };
      if (field === "title" && !current.slug) {
        next.slug = slugify(value);
      }
      return next;
    });
  }

  function saveDraft() {
    window.localStorage.setItem("blog-studio-draft", JSON.stringify(draft));
    setSavedAt(new Date().toLocaleTimeString());
  }

  async function copyPost() {
    await navigator.clipboard.writeText(`${exportText},`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  if (!unlocked) {
    return (
      <section className="container-shell section-space">
        <div className="mx-auto max-w-md border-y border-[color:var(--line)] py-8">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-[color:var(--charcoal)] text-white dark:text-[#101214]">
              <Lock className="h-5 w-5" />
            </span>
            <div>
              <p className="section-kicker text-xs">Owner Area</p>
              <h1 className="text-2xl font-semibold text-[color:var(--ink)]">Blog Studio</h1>
            </div>
          </div>
          <form onSubmit={login} className="mt-6 grid gap-4">
            <input
              type="password"
              value={key}
              onChange={(event) => setKey(event.target.value)}
              placeholder="Enter owner passphrase"
              className="min-h-11 border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-sm text-[color:var(--ink)] outline-none focus:border-[color:var(--accent)]"
            />
            <button type="submit" className="button-primary">
              Unlock Studio
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="container-shell section-space">
      <div className="flex flex-col justify-between gap-5 border-b border-[color:var(--line)] pb-6 sm:flex-row sm:items-end">
        <div>
          <p className="section-kicker">Blog Studio</p>
          <h1 className="mt-3 text-3xl font-semibold text-[color:var(--ink)] sm:text-4xl">Write technical posts</h1>
        </div>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={saveDraft} className="button-secondary">
            <Save className="mr-2 h-4 w-4" /> Save Draft
          </button>
          <button type="button" onClick={copyPost} className="button-primary">
            <Copy className="mr-2 h-4 w-4" /> {copied ? "Copied" : "Copy Post"}
          </button>
          <button type="button" onClick={logout} className="button-secondary">
            <LogOut className="mr-2 h-4 w-4" /> Lock
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
        <div className="grid gap-4">
          <input
            value={draft.title}
            onChange={(event) => update("title", event.target.value)}
            placeholder="Title"
            className="min-h-12 border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-lg font-semibold text-[color:var(--ink)] outline-none focus:border-[color:var(--accent)]"
          />
          <div className="grid gap-4 sm:grid-cols-[1fr_150px]">
            <input
              value={draft.slug}
              onChange={(event) => update("slug", slugify(event.target.value))}
              placeholder="slug"
              className="min-h-11 border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-sm text-[color:var(--ink)] outline-none focus:border-[color:var(--accent)]"
            />
            <input
              type="date"
              value={draft.date}
              onChange={(event) => update("date", event.target.value)}
              className="min-h-11 border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-sm text-[color:var(--ink)] outline-none focus:border-[color:var(--accent)]"
            />
          </div>
          <input
            value={draft.tags}
            onChange={(event) => update("tags", event.target.value)}
            placeholder="Tags separated by commas"
            className="min-h-11 border border-[color:var(--line)] bg-[color:var(--card)] px-4 text-sm text-[color:var(--ink)] outline-none focus:border-[color:var(--accent)]"
          />
          <textarea
            value={draft.description}
            onChange={(event) => update("description", event.target.value)}
            placeholder="Short SEO description"
            rows={3}
            className="border border-[color:var(--line)] bg-[color:var(--card)] p-4 text-sm leading-6 text-[color:var(--ink)] outline-none focus:border-[color:var(--accent)]"
          />
          <textarea
            value={draft.body}
            onChange={(event) => update("body", event.target.value)}
            placeholder="Write the article. Use a blank line between paragraphs."
            rows={18}
            className="border border-[color:var(--line)] bg-[color:var(--card)] p-4 text-sm leading-7 text-[color:var(--ink)] outline-none focus:border-[color:var(--accent)]"
          />
          {savedAt ? <p className="text-sm text-[color:var(--muted)]">Draft saved at {savedAt}</p> : null}
        </div>

        <aside className="grid gap-5 lg:sticky lg:top-24 lg:self-start">
          <article className="border border-[color:var(--line)] bg-[color:var(--card)] p-5">
            <div className="flex items-center gap-2 text-[color:var(--muted)]">
              <Eye className="h-4 w-4" />
              <p className="text-sm font-semibold">Preview</p>
            </div>
            <p className="mt-5 section-kicker text-xs">{postObject.tags.join(" / ") || "Tags"}</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-[color:var(--ink)]">{postObject.title || "Post title"}</h2>
            <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">{postObject.description || "Post description"}</p>
            <div className="mt-5 grid gap-4 border-t border-[color:var(--line)] pt-5 text-sm leading-7 text-[color:var(--muted)]">
              {postObject.paragraphs.slice(0, 3).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="border border-[color:var(--line)] bg-[color:var(--card)] p-5">
            <div className="flex items-center gap-2 text-[color:var(--muted)]">
              <Wand2 className="h-4 w-4" />
              <p className="text-sm font-semibold">Export</p>
            </div>
            <pre className="mt-4 max-h-[360px] overflow-auto bg-[color:var(--soft)] p-4 text-xs leading-5 text-[color:var(--muted)]">
              {exportText}
            </pre>
          </article>
        </aside>
      </div>
    </section>
  );
}
