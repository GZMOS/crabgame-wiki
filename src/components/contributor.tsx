"use client";

import { icons } from "lucide-react";
import { createElement } from "react";
import {
  type ContributorData,
  type ContributorId,
  contributors,
} from "@/data/contributors";

export const ThunderstoreIcon = ({ size = 24 }: { size?: string | number }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
  >
    <title>Thunderstore</title>
    <path d="m.322 13.174 4.706 8.192L7.2 16.855 4.824 12.72a1.416 1.416 0 0 1 0-1.444l2.965-5.16c.265-.46.718-.723 1.245-.723h1.595l-3.086 6.953h3.812L6.171 22.403 16.583 9.914h-3.201l2.184-4.52h6.052L24 1.25H7.175c-.86 0-1.598.428-2.028 1.174l-4.825 8.4a2.306 2.306 0 0 0 0 2.35m7.213 9.576h9.29a2.29 2.29 0 0 0 2.03-1.176l4.825-8.4a2.317 2.317 0 0 0 0-2.35l-1.93-3.36h-4.763l2.19 3.813c.262.46.262.987 0 1.444l-2.964 5.162a1.41 1.41 0 0 1-1.248.723h-2.154l-1.497-.017z" />
  </svg>
);

const customIcons = {
  ...icons,
  Thunderstore: ThunderstoreIcon,
};

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

      <span className="pointer-events-none absolute bottom-full left-0 z-50 mb-2 w-max opacity-0 transition-opacity group-hover/mention:opacity-100 group-hover/mention:pointer-events-auto">
        <span
          className="block overflow-hidden rounded-lg border border-fd-border bg-fd-popover shadow-xl"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${bannerColor}33 0%, ${bannerColor}00 48px)`,
          }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-3">
            <img
              src={avatarUrl}
              alt={username}
              width={36}
              height={36}
              className="shrink-0 rounded-full"
            />

            <span className="flex flex-col">
              <span className="font-semibold text-fd-popover-foreground text-base leading-tight whitespace-nowrap">
                {label}
              </span>
              <span className="text-fd-muted-foreground text-sm leading-tight whitespace-nowrap">
                @{username}
              </span>
            </span>

            {links && links.length > 0 && (
              <span className="flex shrink-0 items-center gap-1 ml-auto">
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1.5 text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                    aria-label={link.label}
                  >
                    {createElement(customIcons[link.iconName], { size: 20 })}
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
