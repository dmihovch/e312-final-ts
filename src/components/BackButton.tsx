import { useNavigate } from "react-router-dom";

export default function BackButton() {
	const arrow = "<==";
	const nav = useNavigate();
	return (
		<div>
			<button
				onClick={() => {
					nav("/");
				}}
			>
				{arrow}
			</button>
		</div>
	);
}
