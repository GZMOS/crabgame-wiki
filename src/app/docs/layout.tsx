import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { GridPattern } from "@/components/grid-pattern";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      <GridPattern
        width={60}
        height={60}
        className="fixed inset-0 -z-10 mask-[linear-gradient(-160deg,white,transparent,transparent)]"
      />
      {children}
    </DocsLayout>
  );
}
