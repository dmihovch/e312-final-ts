import type { PageLayoutProps } from "../types";
import "../styles/page-layout.css";
import BackButton from "./BackButton";
export default function PageLayout(page: PageLayoutProps) {
	return (
		<div id="page-layout-wrapper">
			<h1 id="title">{page.title}</h1>
			<BackButton></BackButton>
			<div id="para-pdf-wrapper">
				<div id="para-wrapper">
					<p id="para">{page.intro}</p>
				</div>
				<iframe id="pdf-viewer" src={page.pathToFile}></iframe>
			</div>
		</div>
	);
}
