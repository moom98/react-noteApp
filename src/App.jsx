import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

function App() {
	const [notes, setNotes] = useState([]);

	const onAddNote = () => {
		const newNote {
			id: 1,
			title: "新しいノート",
			content: "新しいノートの内容",
			modDate: Date.now(),
		}
		setNotes(newNote);
	};

	return (
		<>
			<div className="App">
				<Sidebar onAddNote={onAddNote} />
				<Main />
			</div>
		</>
	);
}

export default App;
