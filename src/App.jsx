import "./App.css";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import uuid from "react-uuid";

function App() {
	// localStorageに保存されているノートを取得する
	// json形式なのでparseする
	const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

	// activeNoteはノートを選択したときにtrueになる
	const [activeNote, setActiveNote] = useState(false);

	// localStorageにノートを保存する
	useEffect(() => {
		// notesはObject型なのでJSON.stringifyで文字列に変換する
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	// リロード時に1番目のノートが選択されている状態にする
	useEffect(() => {
		setActiveNote(notes[0].id);
	}, [notes]);

	const onAddNote = () => {
		const newNote = {
			id: uuid(),
			title: "新しいノート",
			content: "",
			modDate: Date.now(),
		};
		// 既存のノートに新しいノートを追加
		setNotes([...notes, newNote]);
	};

	const onDeleteNote = (idToDelete) => {
		// idToDelete = 「削除」を押したノートのid
		// idToDeleteと一致しないノートのみを抽出（条件式がtrueになってfilterされる）
		const filterNotes = notes.filter((note) => note.id !== idToDelete);
		// 既存のノートから削除するノートを除外
		setNotes(filterNotes);
	};

	const getActiveNote = () => {
		// activeNoteがtrueの場合、notesの中からidが一致するノートを返す
		return notes.find((note) => note.id === activeNote);
	};

	// mainで編集した内容をsidebarにリアルタイムで反映する
	// Main.jsxのonEditNoteで更新されたactiveNoteを受け取る
	const onUpdateNote = (updatedNote) => {
		// 修正された新しいノートの配列を返す
		const updatedNotesArray = notes.map((note) => {
			// 今触っているノート（activeNote）
			if (note.id === updatedNote.id) {
				return updatedNote;

				// それ以外のノート
			} else {
				return note;
			}
		});
		console.log(updatedNotesArray);
		setNotes(updatedNotesArray);
	};

	return (
		<>
			<div className="App">
				<Sidebar
					onAddNote={onAddNote}
					notes={notes}
					onDeleteNote={onDeleteNote}
					activeNote={activeNote}
					setActiveNote={setActiveNote}
				/>
				<Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
			</div>
		</>
	);
}

export default App;
