import PageLayout from "../components/PageLayout";
import UDMCmission from "../assets/writing-pieces/UDMCmission.pdf";
export default function CrewMission() {
	return (
		<PageLayout
			title="Mission Statement - UDMC"
			pathToFile={UDMCmission}
			intro="This piece was the result of a two part assignment. Part one was to choose an organization that does not already have a mission statement, and to create one for it, adhering to the principles of a good mission statement that we learned in class. The second part was to conduct an analysis of the mission statement we had just written, analyzing the strengths, weaknesses, structural and stylistic choices of the statement. I chose to write my mission statement on an organization that I am all too familiar with, the University of Delaware Men’s Club Crew team. I felt that this organization would be a good choice to write a mission statement for, as being a part of the organization, I am very familiar with its practices, views, and motivations. I also see how the organization is largely misunderstood by the University of Delaware community, often being discounted because of the label of being a ‘club’ sport. It also doesn’t help that the sport of rowing is largely misunderstood, so combining those two ideas creates an organization that nobody truly understands. I’m sure I commiserate with many of my teammates when I say that having to explain our organization to outsiders is quite the process, at no fault of the person inquiring. Writing a mission statement for the organization should serve as a way to circumvent these issues, which was what I attempted to accomplish in this piece.	"
		/>
	);
}
