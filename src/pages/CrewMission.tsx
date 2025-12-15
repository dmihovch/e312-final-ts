import PageLayout from "../components/PageLayout";
import UDMCmission from "../assets/writing-pieces/UDMCmission.pdf";
export default function CrewMission() {
	return (
		<PageLayout
			title="Mission Statement - UDMC"
			pathToFile={UDMCmission}
			pathToPage=""
		/>
	);
}
