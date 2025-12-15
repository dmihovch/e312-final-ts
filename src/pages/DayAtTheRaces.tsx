import PageLayout from "../components/PageLayout";
import ADayAtRaces from "../assets/writing-pieces/ADayAtTheRaces.pdf";

export default function DayAtTheRaces() {
	return (
		<PageLayout
			title="Outside E312 - Algorithm Writeup"
			pathToFile={ADayAtRaces}
			intro="This assignment was the first of the algorithmic problems in my Introduction to Algorithms course, CISC320. In this assignment, we were given two problems: Given 25 horses, where the only way to rank them is by their relative finishing positions to each other, how many races does it take to find the 2nd fastest horse, if only 5 horses can race at a time? The second part being if you had 9 horses and only 3 can race at a time, how many races would it take to find the median (5th) fastest horse? I chose to showcase this assingment because it was the first time I had been forced to combine natural language, logic, and programming into one assingment. Explaining an algorithm, to me, is much easier to do with code, so explaining it clearly and as consisely as I could with natural language was a real struggle, but as you can see, I eventually got there, even if I didn't find the most optimal solution :("
		/>
	);
}
