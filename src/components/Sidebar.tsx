import PageButton from "./PageButton";
import PageButtonProps from "./PageButton";
import "../styles/sidebar.css";

type SideBarProps = {
	pages: PageButtonProps[];
};

type PageButtonProps = {
	text: string;
	path: string;
};
export default function Sidebar(pages: SideBarProps) {
	return (
		<div id="sidebar-wrapper">
			{pages.pages.map((page) => (
				<PageButton text={page.text} path={page.path} />
			))}
		</div>
	);
}
