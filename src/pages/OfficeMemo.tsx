import PageLayout from "../components/PageLayout";
import OfficeMemoPDF from "../assets/writing-pieces/MemoReturn.pdf";
export default function OfficeMemo() {
	return (
		<PageLayout
			title="Memo - Return to Office"
			pathToFile={OfficeMemoPDF}
			pathToPage=""
		/>
	);
}
