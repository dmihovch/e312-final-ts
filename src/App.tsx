import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Resume from "./pages/Resume.tsx";
import UdMission from "./pages/UdMission.tsx";
import CrewMission from "./pages/CrewMission.tsx";
import AppleAd from "./pages/AppleAd.tsx";
import OfficeMemo from "./pages/OfficeMemo.tsx";
import DayAtTheRaces from "./pages/DayAtTheRaces.tsx";
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/mission-statement-ud" element={<UdMission />} />
				<Route path="/apple-ad-analysis" element={<AppleAd />} />
				<Route path="/memo-return-to-office" element={<OfficeMemo />} />
				<Route path="/mission-statement-udmc" element={<CrewMission />} />
				<Route path="/outside-e312" element={<DayAtTheRaces />} />
			</Routes>
		</BrowserRouter>
	);
}
