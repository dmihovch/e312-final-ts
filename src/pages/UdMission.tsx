import PageLayout from "../components/PageLayout";
import UDmissionPDF from "../assets/writing-pieces/UDmission.pdf";
export default function UdMission() {
	return (
		<PageLayout
			title="Mission Statement - UD"
			pathToFile={UDmissionPDF}
			pathToPage=""
		/>
	);
}
