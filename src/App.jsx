import { useEffect, useState } from "react";
import "./App.css";
import { capital, numbers, special, letters } from "../helpers";

function App() {
	const [passLength, setpassLength] = useState(16);
	const [checkboxStatus, setCheckboxStatus] = useState({
		capital: false,
		numbers: false,
		special: false,
	});
	const [result, setResult] = useState("");
	const [copyText, setCopyText] = useState("Copy");

	const generatePassword = (sources) => {
		let password = "";

		for (let i = 0; i < passLength; i++) {
			let source = Math.floor(Math.random() * sources.length);
			let index = Math.floor(Math.random() * sources[source].length);
			password += sources[source][index];
		}
		return password;
	};

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		setCheckboxStatus((prevStatus) => ({
			...prevStatus,
			[name]: checked,
		}));
	};

	const getSources = () => {
		const sources = [letters];
		if (checkboxStatus.capital) {
			sources.push(capital);
		}
		if (checkboxStatus.numbers) {
			sources.push(numbers);
		}
		if (checkboxStatus.special) {
			sources.push(special);
		}
		return sources;
	};

	const handleGeneration = () => {
		const sources = getSources();
		const newPassword = generatePassword(sources);
		setResult(newPassword);
	};

	const handleCopy = () => {
		/*const inputField = document.getElementById("passwordInput");
		inputField.select();
		document.execCommand("copy");*/

		navigator.clipboard.writeText(result);

		setCopyText("Copied!");
		setTimeout(() => {
			setCopyText("Copy");
		}, "1500");
	};

	return (
		<>
			<h1>PASSWORD GENERATOR</h1>
			<div className="output">
				<input type="text" value={result} id="passwordInput" />
				<button onClick={handleCopy}>{copyText}</button>
			</div>

			<form action="dop-functional">
				<div className="checkbox">
					<p>Length of password</p>
					<select
						name="passLength"
						onChange={(e) => setpassLength(e.target.value)}
						value={passLength}
					>
						<optgroup label="Weak">
							<option>6</option>
							<option>7</option>
							<option>8</option>
						</optgroup>
						<optgroup label="Medium">
							<option>9</option>
							<option>10</option>
							<option>11</option>
							<option>12</option>
							<option>13</option>
							<option>14</option>
							<option>15</option>
						</optgroup>
						<optgroup label="Strong">
							<option>16</option>
							<option>17</option>
							<option>18</option>
							<option>19</option>
							<option>20</option>
							<option>21</option>
							<option>22</option>
							<option>23</option>
							<option>24</option>
						</optgroup>
					</select>
				</div>
				<div className="">
					<label className="checkbox">
						Uppercase letters
						<input
							type="checkbox"
							name="capital"
							checked={checkboxStatus.capital}
							onChange={handleCheckboxChange}
						/>
						<span class="checkmark"></span>
					</label>
				</div>
				<div className="checkbox">
					<label htmlFor="">Numbers</label>
					<input
						type="checkbox"
						name="numbers"
						checked={checkboxStatus.numbers}
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="checkbox">
					<label htmlFor="">Special characters</label>
					<input
						type="checkbox"
						name="special"
						checked={checkboxStatus.special}
						onChange={handleCheckboxChange}
					/>
				</div>
			</form>
			<button type="button" className="btn generate" onClick={handleGeneration}>
				Generate password
			</button>
		</>
	);
}

export default App;
