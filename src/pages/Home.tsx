import "../styles/home.css";
import Sidebar from "../components/Sidebar";

type PageButtonProps = {
	text: string;
	path: string;
};
export default function Home() {
	const leftBarProps: PageButtonProps[] = [];
	leftBarProps.push({ text: "Resume", path: "/resume" });
	leftBarProps.push({
		text: "Mission Statement - UD",
		path: "/mission-statement-ud",
	});
	leftBarProps.push({
		text: "Mission Statement - UDMC",
		path: "/mission-statement-udmc",
	});

	const rightBarProps: PageButtonProps[] = [];
	rightBarProps.push({
		text: "Ad Analysis - Think Different ",
		path: "/apple-ad-analysis",
	});
	rightBarProps.push({
		text: "Memo - Return To Office",
		path: "/memo-return-to-office",
	});
	rightBarProps.push({
		text: "Outside E312",
		path: "/memo-return-to-office",
	});

	return (
		<div id="page">
			<div id="home-page-wrapper">
				<div id="left-column">
					<div id="name-box">
						<div id="name-row">
							<h1 id="first-name">Dan</h1>
							<p id="major">
								Junior Computer
								<br />
								Science Major @ UD
							</p>
						</div>
						<h1 id="last-name">Mihovch</h1>
					</div>

					<div id="pic-text-wrap">
						<div id="leia">
							<img src="src/assets/leia-pic.jpg" alt="Leia" />
						</div>
						<div id="leia-text">
							<p>
								I've been told my cat is easier on the eyes than myself, so she
								will be representing my likeness hereinafter
							</p>
						</div>
					</div>
				</div>

				<div id="about">
					<h3>Howdy!</h3>
					<p>
						As the big bold letters have told you already, my name is Dan
						Mihovch, and I am a junior Computer Science major at the University
						of Delaware. What the big bold letters didn't tell you, is what I'll
						tell you now.
					</p>
				</div>
			</div>
			<div id="left-sidebar">
				<Sidebar pages={leftBarProps} />
			</div>
			<div id="right-sidebar">
				<Sidebar pages={rightBarProps} />
			</div>

			<div id="footer-wrapper">
				<p id="footer">University of Delaware, English 312 Final</p>
			</div>
		</div>
	);
}
