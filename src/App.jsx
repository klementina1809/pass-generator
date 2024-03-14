import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [result, setResult] = useState("");

	const letters = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	const specialCharacters = [
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")",
		"-",
		"_",
		"=",
		"+",
		"[",
		"]",
		"{",
		"}",
		"|",
		";",
		":",
		"'",
		'"',
		",",
		".",
		"/",
		"<",
		">",
		"?",
		"`",
		"~",
	];

  

	const handleGeneration = () => {
		const passPronto = generatePassword();
		setResult(passPronto);
	};

	return (
		<>
			<h1>PASSWORD GENERATOR</h1>
			<h3>Lunghezza</h3>
			<input type="number" name="lunghezza" />
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
			<button onClick={handleGeneration}>Generation</button>
			<hr />
			<h2>PASSWORD:</h2>
			<div>
				<input type="text" />
				<button>Copy</button>
			</div>
		</>
	);
}

export default App;
