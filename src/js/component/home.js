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

	useEffect(() => {
		validarGanador();
		if (winner != "") {
			alert("Winner is: " + winner);
		}
	});

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
		<div className="container">
			{/* Titulo principal del juego */}
			<div className="titulo_principal">
				<h1>Tres en línea en React.js</h1>
			</div>
			{/* Estado del juego */}
			<div className="estados">
				<h3>Es el turno de {player}</h3>
			</div>
			{/* Botón volver a empezar */}
			<div>
				<button className="boton_volver" onClick={setGame}>
					Start Over
				</button>
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
	);
}
