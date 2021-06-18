import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [game, setGame] = useState([
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" ",
		" "
	]);

	const [player, setPlayer] = useState("X");
	const [winner, setWinner] = useState("");
	const [playerone, setPlayerone] = useState("");
	const [playertwo, setPlayertwo] = useState("");
	const [playerlist, setPlayerlist] = useState([]);

	useEffect(() => {
		validarGanador();
		if (winner == "X") {
			alert("Winner is: " + playerlist[0]);
		} else if (winner == "O") {
			alert("winner is: " + playerlist[1]);
		}
	});

	const names = e => {
		e.preventDefault();
		setPlayerlist([playerone, playertwo]);
	};

	function validarGanador() {
		for (let i = 0; i < game.length; i = i + 3) {
			if (
				game[i] != " " &&
				game[i] == game[i + 1] &&
				game[i] == game[i + 2]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 0; i < game.length; i = i + 1) {
			if (
				game[i] != " " &&
				game[i] == game[i + 4] &&
				game[i] == game[i + 8]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 0; i < game.length; i = i + 3) {
			if (
				game[i] != " " &&
				game[i] == game[i + 4] &&
				game[i] == game[i + 6]
			) {
				setWinner(game[i]);
			}
		}
		for (let i = 0; i < game.length; i = i + 1) {
			if (
				game[i] != " " &&
				game[i] == game[i + 3] &&
				game[i] == game[i + 6]
			) {
				setWinner(game[i]);
			}
		}
	}

	const marcar = i => {
		let cambioTurno = false;
		let newGame = game.map((e, index) => {
			if (i == index && e == " ") {
				cambioTurno = true;
				return player;
			} else return e;
		});
		if (cambioTurno) {
			player === "X" ? setPlayer("O") : setPlayer("X");
		}

		setGame(newGame);
	};

	return (
		<div>
			<br></br>
			<div className="container">
				{/* Titulo principal del juego */}
				<div className="titulo_principal">
					<h1>Tres en línea en React.js</h1>
				</div>
				{/* Elegir x o circulo */}
				<div>
					<div className="row">
						<div className="col-12 d-flex mt-3">
							<form
								className="form  d-flexjustify-content-center"
								onSubmit={names}>
								<div className="form-group mx-sm-3 mb-2">
									<input
										type="text"
										className="form-control"
										placeholder="Player X name"
										onChange={e =>
											setPlayerone(e.target.value)
										}
										value={playerone}
									/>
								</div>

								<div className="form-group mx-sm-3 mb-2">
									<input
										type="text"
										className="form-control"
										placeholder="Player O name"
										onChange={e =>
											setPlayertwo(e.target.value)
										}
										value={playertwo}
									/>
								</div>
								<button type="submit" className="btn ">
									Go!
								</button>
							</form>
						</div>
					</div>
				</div>
				{/* Estado del juego */}
				<div className="estados">
					<h3>Es el turno de {player}</h3>
				</div>
				{/* Tablero de juego */}
				<div className="container-fluid content">
					<div className="row">
						{game.map((e, i) => {
							return (
								<div
									key={i}
									className="col-4 tic-box border"
									onClick={() => {
										marcar(i);
									}}>
									<p>{e}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
