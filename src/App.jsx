import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>PASSWORD GENERATOR</h1>
			<h3>Lunghezza</h3>
			<input type="number" />
			<form action="dop-functional">
				<div>
          <label htmlFor="">Lettere maiuscule</label>
          <input type="checkbox" name="maiuscule" />
        </div>
				<div>
          <label htmlFor="">Numeri</label>
          <input type="checkbox" name="numeri" />
        </div>
				<div>
          <label htmlFor="">Car speciali</label>
          <input type="checkbox" name="speciali" />
        </div>
			</form>
		</>
	);
}

export default App;
