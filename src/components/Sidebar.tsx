import PageButton from "./PageButton";
import "../styles/sidebar.css";
import type { SideBarProps } from "../types";

export default function Sidebar(pages: SideBarProps) {
  return (
    <div id="sidebar-wrapper">
      {pages.pages.map((page) => (
        <PageButton text={page.text} path={page.path} />
      ))}
    </div>
  );
}
