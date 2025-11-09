import { Route, Routes } from "react-router-dom";
import CreateCV from "./pages/CreateCV";
import LandingPage from "./pages/Landing";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />}></Route>
			<Route path="/new" element={<CreateCV />}></Route>
		</Routes>
	);
};

export default App;
