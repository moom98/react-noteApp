// import React from "react";
import "./Sidebar.css";

const Sidebar = ({ onAddNote }) => {
	return (
		<div className="app-sidebar">
			<div className="app-sidebar-header">
				<h1>ノート</h1>
				<button onClick={onAddNote}>追加</button>
			</div>
			<div className="app-sidebar-notes">
				<div className="app-sidebar-note">
					<div className="sidebar-note-title">
						<strong>タイトル</strong>
						<button>削除</button>
					</div>
					<p>ノートの本文</p>
					<small className="note-meta">最後の修正日: xx/xx</small>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
