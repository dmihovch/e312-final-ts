import "../styles/resume.css";
import resume from "../assets/daniel-mihovch-resume.pdf";
import BackButton from "../components/BackButton";
export default function Resume() {
	return (
		<div id="resume-page-wrapper">
			<h1>Resume</h1>
			<BackButton></BackButton>
			<iframe id="pdf-viewer" src={resume}></iframe>
		</div>
	);
}
