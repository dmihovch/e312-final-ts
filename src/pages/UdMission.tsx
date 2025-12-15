import PageLayout from "../components/PageLayout";
import UDmissionPDF from "../assets/writing-pieces/UDmission.pdf";
export default function UdMission() {
	return (
		<PageLayout
			title="Mission Statement - UD"
			pathToFile={UDmissionPDF}
			intro="
This assignment was part of a string of assignments analyzing and creating mission statements of companies and organizations. This assignment was a challenge because you had to analyze the mission statements very carefully, slowly picking apart the corporate jargon and false promises, and then referencing them against the actual actions of the company or organization. You can throw around baseless claims that a company isn’t doing what they have promised in their mission statement, but those aren’t much use and are doing more harm than good. This assignment really forced me to expand the scope of the class, bringing in more skills than just writing."
		/>
	);
}
