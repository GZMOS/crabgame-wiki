"use client";

import { icons } from "lucide-react";
import { createElement } from "react";
import {
  contributors,
  type ContributorData,
  type ContributorId,
} from "@/data/contributors";

interface ContributorProps {
  id: ContributorId;
}

export function Contributor({ id }: ContributorProps) {
  const {
    username,
    displayName,
    avatarUrl,
    bannerColor = "#5865F2",
    links,
  } = contributors[id] as ContributorData;
  const label = displayName ?? username;

  return (
    <span className="not-prose group/mention relative inline-block leading-none">
      <span className="cursor-default rounded px-1 py-0.5 text-sm font-medium text-[#5865F2] bg-[#5865F2]/15 transition-colors hover:bg-[#5865F2] hover:text-white">
        @{label}
      </span>

      <span className="absolute bottom-full left-0 h-2 w-full" />

      <span className="pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-60 opacity-0 transition-opacity group-hover/mention:opacity-100 group-hover/mention:pointer-events-auto">
        <span
          className="block overflow-hidden rounded-lg border border-fd-border bg-fd-popover shadow-xl"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${bannerColor}33 0%, ${bannerColor}00 48px)`,
          }}
        >
          <span className="flex items-center gap-2 px-4 py-3">
            <img
              src={avatarUrl}
              alt={username}
              width={36}
              height={36}
              className="shrink-0 rounded-full"
            />

            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate font-semibold text-fd-popover-foreground text-base leading-tight">
                {label}
              </span>
              <span className="truncate text-fd-muted-foreground text-sm leading-tight">
                @{username}
              </span>
            </span>

            {links && links.length > 0 && (
              <span className="flex shrink-0 items-center gap-1">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1.5 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                    aria-label={link.label}
                  >
                    {createElement(icons[link.iconName], { size: 22 })}
                  </a>
                ))}
              </span>
            )}
          </span>
        </span>
      </span>
    </span>
  );
}
