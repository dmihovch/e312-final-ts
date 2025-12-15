import type { PageLayoutProps } from "../types";

export default function PageLayout(page: PageLayoutProps) {
  return (
    <div>
      <h1>{page.title}</h1>
      <iframe src={page.pathToFile}></iframe>
    </div>
  );
}
