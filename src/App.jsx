import { useEffect, useState } from "react";
import "./App.css";

function App() {
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
	const capital = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	const special = [
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

	const [lunghezza, setlunghezza] = useState(0);
	const [checkboxState, setCheckboxState] = useState({
		capital: false,
		numbers: false,
		special: false,
	});
	const [result, setResult] = useState("");

	const generatePassword = (source) => {
		let password = "";

		for (let i = 0; i < lunghezza; i++) {
			let arr = Math.floor(Math.random() * source.length);
			let index = Math.floor(Math.random() * source[arr].length);
			password += source[arr][index];
		}
		return password;
	};

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		setCheckboxState((prevState) => ({
			...prevState,
			[name]: checked,
		}));
	};

	const getSources = () => {
		const source = [letters];
		if (checkboxState.capital) {
			source.push(capital);
		}
		if (checkboxState.numbers) {
			source.push(numbers);
		}
		if (checkboxState.special) {
			source.push(special);
		}
		return source;
	};

	const handleGeneration = () => {
		const source = getSources();
		const passPronto = generatePassword(source);
		setResult(passPronto);
	};

	return (
		<>
			<h1>PASSWORD GENERATOR</h1>
			<h3>Lunghezza</h3>
			<input
				type="number"
				name="lunghezza"
				onChange={(e) => setlunghezza(e.target.value)}
			/>
			<form action="dop-functional">
				<div>
					<label htmlFor="">Lettere maiuscule</label>
					<input
						type="checkbox"
						name="capital"
						checked={checkboxState.capital}
						onChange={handleCheckboxChange}
					/>
				</div>
				<div>
					<label htmlFor="">Numeri</label>
					<input
						type="checkbox"
						name="numbers"
						checked={checkboxState.numbers}
						onChange={handleCheckboxChange}
					/>
				</div>
				<div>
					<label htmlFor="">Car speciali</label>
					<input
						type="checkbox"
						name="special"
						checked={checkboxState.special}
						onChange={handleCheckboxChange}
					/>
				</div>
			</form>
			<button onClick={handleGeneration}>Generation</button>
			<hr />
			<h2>PASSWORD:</h2>
			<div>
				<input type="text" value={result} />
				<button>Copy</button>
			</div>
		</>
	);
}

export default App;
