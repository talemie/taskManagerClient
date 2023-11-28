import { useState } from "react";
import AddTask from "./Components/AddTask/AddTask";
import ShowTask from "./Components/ShowTask/ShowTask";
import { Routes, Route } from "react-router-dom";
import EditTask from "./Components/EditTask/EditTask";
import "../src/CommonResources/commonCss.css";
import SharedLayer from "./Components/SharedLayer/SharedLayer";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayer />}>
					<Route path="edit/:taskId" element={<EditTask />} />
					<Route path="show" element={<ShowTask />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
