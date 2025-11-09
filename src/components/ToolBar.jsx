import { useNavigate } from "react-router-dom";

export default function ToolBar() {
	const navigate = useNavigate();
	return (
		<div className="text-3xl font-bold px-10 outline-2 py-5  text-center flex justify-center gap-8 ">
			<button
				type="button"
				className="text-2xl px-2 py-1 rounded bg-primary hover:bg-accent outline-gray-800 outline-2 transform transition-colors "
				onClick={() => navigate("/")}
			>
				Back
			</button>
			<button
				type="button"
				className="text-2xl px-2 py-1 rounded bg-primary hover:bg-accent outline-gray-800 outline-2 transform transition-colors"
			>
				Reload
			</button>
			<button
				type="button"
				className="text-2xl px-2 py-1 rounded bg-primary hover:bg-accent outline-gray-800 outline-2 transform transition-colors"
			>
				Save
			</button>
		</div>
	);
}
