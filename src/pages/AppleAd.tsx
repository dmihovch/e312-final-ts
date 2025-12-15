import PageLayout from "../components/PageLayout";
import AppleAdPDF from "../assets/writing-pieces/AppleAd.pdf";
export default function AppleAd() {
	return (
		<PageLayout
			title="Rhetorical Analysis - Apple Ad"
			pathToFile={AppleAdPDF}
			pathToPage=""
		/>
	);
}
