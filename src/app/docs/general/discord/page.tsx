"use client";

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { Circle, ExternalLink, Loader2, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const inviteCodes = ["jBGMZqndT3", "4PVJQqXxRA", "R2h3GYzrT7", "xVTd9XtzR5"];

interface DiscordInvite {
  code: string;
  guild: {
    id: string;
    name: string;
    icon: string | null;
    description: string | null;
  };
  approximate_member_count: number;
  approximate_presence_count: number;
}

async function fetchInvite(code: string): Promise<DiscordInvite | null> {
  try {
    const res = await fetch(
      `https://discord.com/api/v10/invites/${code}?with_counts=true`,
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function ServerCard({ invite }: { invite: DiscordInvite }) {
  const iconUrl = invite.guild.icon
    ? `https://cdn.discordapp.com/icons/${invite.guild.id}/${invite.guild.icon}.png?size=128`
    : null;
  return (
    <div className="flex items-center gap-4 rounded-xl border bg-fd-card px-4 py-3">
      {iconUrl ? (
        <Image
          src={iconUrl}
          alt={invite.guild.name}
          width={48}
          height={48}
          className="rounded-full shrink-0"
        />
      ) : (
        <div className="size-12 rounded-full bg-fd-accent shrink-0 flex items-center justify-center text-lg font-bold text-fd-muted-foreground">
          {invite.guild.name[0]}
        </div>
      )}

      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <p className="font-semibold text-fd-foreground leading-tight">
          {invite.guild.name}
        </p>
        {invite.guild.description && (
          <p className="text-xs text-fd-muted-foreground truncate">
            {invite.guild.description}
          </p>
        )}
        <div className="flex items-center gap-3 text-xs text-fd-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="size-3" />
            {invite.approximate_member_count.toLocaleString()} members
          </span>
          <span className="flex items-center gap-1">
            <Circle className="size-2 fill-green-500 text-green-500" />
            {invite.approximate_presence_count.toLocaleString()} online
          </span>
        </div>
      </div>

      <a
        href={`https://discord.gg/${invite.code}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 shrink-0 rounded-lg border px-3 py-1.5 text-xs text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground transition-colors"
      >
        <ExternalLink className="size-3" />
        Join
      </a>
    </div>
  );
}

export default function DiscordPage() {
  const [invites, setInvites] = useState<DiscordInvite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(inviteCodes.map(fetchInvite)).then((results) => {
      setInvites(results.filter((i): i is DiscordInvite => i !== null));
      setLoading(false);
    });
  }, []);

  return (
    <DocsPage>
      <DocsTitle>Discord Servers</DocsTitle>
      <DocsDescription>
        Community Discord servers related to Crab Game.
      </DocsDescription>
      <DocsBody>
        {loading ? (
          <div className="flex items-center justify-center py-12 text-fd-muted-foreground">
            <Loader2 className="size-5 animate-spin" />
          </div>
        ) : (
          <div className="not-prose flex flex-col gap-4">
            {invites.map((invite) => (
              <ServerCard key={invite.code} invite={invite} />
            ))}
          </div>
        )}
      </DocsBody>
    </DocsPage>
  );
}
