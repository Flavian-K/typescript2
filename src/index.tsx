import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import Greeting from "./Greeting";
import Counter from "./Counter";

const App = () => (
	<div>
		<Greeting name="John" />
		<Counter />
	</div>
);

// Use ReactDOM.createRoot for React 18
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(<App />);
