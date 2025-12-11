
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Resume from "./Resume/Resume.jsx";
import UDMissionState from "./UDMissionState/UDMissionState.jsx";
import UDMCMissionState from "./UDMCMissionState/UDMCMissionState.jsx";
import AppleAdAnalysis from "./AppleAdAnalysis/AppleAdAnalysis.jsx";
import ReturnOfficeMemo from "./ReturnOfficeMemo/ReturnOfficeMemo.jsx";
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/mission-statement-ud" element={<UDMissionState />} />
				<Route path="/apple-ad-analysis" element={<AppleAdAnalysis />} />
				<Route path="/memo-return-to-office" element={<ReturnOfficeMemo />} />
				<Route path="/mission-statement-udmc" element={<UDMCMissionState />} />
				{/* <Route path="/other-class-piece" element={<OtherClassPiece />} />*/}
			</Routes>
		</BrowserRouter>
	);
}

