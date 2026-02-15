import type { Metadata } from "next";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { icons } from "lucide-react";
import Image from "next/image";
import { createElement } from "react";
import {
  contributors,
  type ContributorData,
  type ContributorId,
} from "@/data/contributors";

const contributorRoles: Record<ContributorId, string[]> = {
  gzmos: ["Modder", "Docs"],
  lualt: ["Modder", "Snowflake Dev"],
  lammas123: ["Modder", "Docs", "Snowflake Dev"],
  o7moon: ["Modder", "Snowflake Dev"],
  antropomeda: ["Modder"],
};

function ContributorCard({ id }: { id: ContributorId }) {
  const {
    username,
    displayName,
    avatarUrl,
    bannerColor = "#5865F2",
    links,
  } = contributors[id] as ContributorData;
  const label = displayName ?? username;
  const roles = contributorRoles[id] ?? [];

  return (
    <div className="overflow-hidden rounded-xl border bg-fd-card">
      <div className="h-16 w-full" style={{ backgroundColor: bannerColor }} />

      <div className="px-4">
        <div className="-mt-8 mb-2">
          <Image
            src={avatarUrl}
            alt={label}
            width={56}
            height={56}
            className="rounded-full border-4 border-fd-card"
          />
        </div>

        <div className="mb-2">
          <p className="font-semibold text-fd-foreground leading-tight">
            {label}
          </p>
          <p className="text-xs text-fd-muted-foreground">@{username}</p>
        </div>

        {roles.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {roles.map((role) => (
              <span
                key={role}
                className="rounded-full bg-fd-accent px-2 py-0.5 text-xs text-fd-muted-foreground"
              >
                {role}
              </span>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex gap-2 pb-4">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground transition-colors"
              >
                {createElement(icons[link.iconName], { size: 13 })}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContributorsPage() {
  return (
    <DocsPage>
      <DocsTitle>Contributors</DocsTitle>
      <DocsDescription>
        Notable contributors to the Crab Game community.
      </DocsDescription>
      <DocsBody>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(Object.keys(contributorRoles) as ContributorId[]).map((id) => (
            <ContributorCard key={id} id={id} />
          ))}
        </div>
      </DocsBody>
    </DocsPage>
  );
}

export const metadata: Metadata = {
  title: "Contributors",
  description: "Notable contributors to the Crab Game community.",
};
