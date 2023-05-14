import React from "react";
import "./Main.css";
import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
	const onEditNote = (key, value) => {
		onUpdateNote({
			// activeNoteの中身を展開、前の状態を保持しつつ更新する
			...activeNote,
			// titleかcontentのどちらかを更新する、動的なので[ ]で囲む
			[key]: value,
			modDate: Date.now(),
		});
	};

	if (!activeNote) return <div className="no-active-note">ノートを選択してください</div>;

	return (
		<div className="app-main">
			<div className="app-main-note-edit">
				<input
					id="title"
					type="text"
					value={activeNote.title}
					placeholder="ノートのタイトルを入力"
					onChange={(e) => onEditNote("title", e.target.value)}
				/>
				<textarea
					id="content"
					placeholder="ノートの内容を記入"
					value={activeNote.content}
					onChange={(e) => onEditNote("content", e.target.value)}
				></textarea>
			</div>
			<div className="app-main-note-preview">
				<h1 className="preview-title">{activeNote.title}</h1>
				<ReactMarkdown className="markdown-preview">{activeNote.content}</ReactMarkdown>
			</div>
		</div>
	);
};

export default Main;
