import React from "react";
import "./Main.css";
import MainBody from "./MainBody";
import Sidebar from "./Sidebar";

function Main() {
	return (
		<div className="main">
			<Sidebar />
			<MainBody />
		</div>
	);
}

export default Main;
