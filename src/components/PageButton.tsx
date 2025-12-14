import "../styles/pagebutton.css";
import { useNavigate } from "react-router-dom";
export type PageButtonProps = {
	text: string;
	path: string;
};

export default function PageButton({ text, path }: PageButtonProps) {
	const nav = useNavigate();

	return (
		<div id="page-button-wrapper">
			<button
				id="page-button-button"
				onClick={() => {
					nav(path);
				}}
			>
				{text}
			</button>
		</div>
	);
}
