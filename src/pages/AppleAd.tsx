import PageLayout from "../components/PageLayout";
import AppleAdPDF from "../assets/writing-pieces/AppleAd.pdf";
export default function AppleAd() {
	return (
		<PageLayout
			title="Rhetorical Analysis - Apple Ad"
			pathToFile={AppleAdPDF}
			intro="
			This piece was a bit of a challenge to me as a writer. It was my first introduction to a writing assignment where the style and format was not strictly dictated. It was the first time I felt ‘free’ as a writer, and you can certainly see where I succeed and fail in breaking free from the shackles of academic writing in this piece. The purpose of this assignment was to take an ad, and identify and analyze the rhetorical situation of it: the audience, purpose, and context. I chose to analyze Apple’s ‘Think Different’ campaign from the late 90s, as I found the fact that it wasn’t explicitly advertising a product or service, and rather a mentality, was very interesting. Going back and reading this piece again, it is clear to me where I took ‘risks’ and experimented breaking free from the traditional, rigid style of academic writing, and included my own voice. You can also clearly see where I got a bit stuck, and sunk back down into that dreaded monotonic style. While I don’t consider this to be my best writing of the semester, not even in the top four, I still chose to showcase it because I feel it was an important milestone in my journey as a writer. It was my first foray into a new style of writing that (at least I and seemingly Professor White seem to think) I am much better at.
			"
		/>
	);
}
