import { Contributor } from "@/components/contributor";
import { GridPattern } from "@/components/grid-pattern";
import { MouseGlow } from "@/components/mouse-glow";
import { ArrowRight, BookOpenText, Github, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col z-10 items-center justify-center text-center gap-12 overflow-hidden pb-16">
      <MouseGlow />

      <h1 className="text-4xl lg:text-6xl font-bold whitespace-nowrap">
        <span className="text-black dark:text-white">Crab</span>
        <span className="text-pink-500">Game</span>
        <span className="text-black dark:text-white">.Dev</span>
      </h1>

      <span className="text-sm lg:text-xl px-8 max-w-lg font-light text-fd-muted-foreground text-balance">
        The community wiki for{" "}
        <span className="font-semibold text-fd-foreground whitespace-nowrap">
          everything Crab Game
        </span>
      </span>

      <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
        <Link
          href="https://github.com/GZMOS/crabgame-wiki"
          target="_blank"
          className="flex items-center group border rounded-2xl px-4 py-1.5 gap-2 hover:bg-fd-accent transition-colors"
        >
          <Github className="size-4" />
          <span>Star on GitHub</span>
          <Star className="size-3.5 text-fd-muted-foreground transition-all duration-300 group-hover:text-yellow-400" />
        </Link>
        <Link
          href="/docs/general/faq"
          className="flex items-center group border rounded-2xl px-4 py-1.5 gap-2 hover:bg-fd-accent transition-colors"
        >
          <BookOpenText className="size-4" />
          <span>Read the docs</span>
          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <GridPattern
        width={60}
        height={60}
        className="mask-[linear-gradient(-160deg,white,transparent,transparent)]"
      />

      <footer className="absolute bottom-0 w-full border-t py-4 px-8 flex items-center justify-center gap-1 text-xs text-fd-muted-foreground">
        <span>
          © {new Date().getFullYear()} CrabGame.dev - Made with ❤️ by
        </span>
        <Contributor id="gzmos" />
        <span>and the Crab Game community</span>
      </footer>
    </main>
  );
}
