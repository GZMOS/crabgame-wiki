import type { icons } from "lucide-react";

interface LinkItem {
  url: string;
  iconName: keyof typeof icons;
  label: string;
}

export interface ContributorData {
  username: string;
  displayName?: string;
  avatarUrl: string;
  bannerColor?: string;
  links?: LinkItem[];
}

export const contributors = {
  lammas123: {
    username: "lammas123",
    avatarUrl:
      "https://cdn.discordapp.com/avatars/394347954900697108/bae3e4f5ea6fe30ea7d4b2db71308bfd.webp?size=1024",
    links: [
      {
        url: "https://github.com/lammas321",
        iconName: "Github",
        label: "GitHub",
      },
    ],
  },
  o7moon: {
    username: "o7moon",
    displayName: "o7Moon",
    bannerColor: "#FE8007",
    avatarUrl: "https://avatars.githubusercontent.com/u/91579431?v=4",
    links: [
      {
        url: "https://github.com/o7Moon",
        iconName: "Github",
        label: "GitHub",
      },
    ],
  },
  lualt: {
    username: "lualt",
    displayName: "Lualt",
    bannerColor: "#FFC8DB",
    avatarUrl:
      "https://cdn.discordapp.com/avatars/538770131359236105/ed3c6c2c189dad069dd29c2089ff27f7.webp?size=1024",
    links: [
      {
        url: "https://github.com/Lualttt",
        iconName: "Github",
        label: "GitHub",
      },
    ],
  },
  gzmos: {
    username: "gzmos",
    displayName: "GZMOS",
    avatarUrl: "https://avatars.githubusercontent.com/u/82267564?v=4",
    links: [
      {
        url: "https://github.com/GZMOS",
        iconName: "Github",
        label: "GitHub",
      },
    ],
  },
} satisfies Record<string, ContributorData>;

export type ContributorId = keyof typeof contributors;
