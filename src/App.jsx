import { useEffect, useState } from "react";
import "./App.css";
import { capital, numbers, special, letters } from "../helpers";

function App() {
	const [passLength, setpassLength] = useState(0);
	const [checkboxStatus, setCheckboxStatus] = useState({
		capital: false,
		numbers: false,
		special: false,
	});
	const [result, setResult] = useState("");

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

	return (
		<>
              <h1>PASSWORD GENERATOR</h1>
      <div className="app">
        <div>
              <h3>Length of password</h3>
              <input
                type="number"
                name="passLength"
                onChange={(e) => setpassLength(e.target.value)}
              />
              <form action="dop-functional">
                <div>
                  <label htmlFor="">Uppercase letters</label>
                  <input
                    type="checkbox"
                    name="capital"
                    checked={checkboxStatus.capital}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div>
                  <label htmlFor="">Numbers</label>
                  <input
                    type="checkbox"
                    name="numbers"
                    checked={checkboxStatus.numbers}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <div>
                  <label htmlFor="">Special characters</label>
                  <input
                    type="checkbox"
                    name="special"
                    checked={checkboxStatus.special}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </form>
              <button type="button" className="btn btn-danger" onClick={handleGeneration}>Generation</button>
            </div>
        <hr />
        <div>
              <h2>PASSWORD:</h2>
              <div>
                <input type="text" value={result} />
                <button>Copy</button>
              </div>
            </div>
      </div>
    </>
	);
}

export default App;
