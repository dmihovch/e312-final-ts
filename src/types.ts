export type PageButtonProps = {
	text: string;
	path: string;
};

export type SideBarProps = {
	pages: PageButtonProps[];
};

export type PageLayoutProps = {
	title: string;
	pathToFile: string;
	intro: string;
};
