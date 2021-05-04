import React from "react";

//create your first component
export function Home() {
	return (
		<div className="container">
			{/* Titulo principal del juego */}
			<div className="titulo_principal">
				<h1>Tres en línea en React.js</h1>
			</div>

			{/* Estado del juego */}
			<div className="estados">
				<h3>Aqui se vera el estado de la partida</h3>
			</div>

			{/* Botón volver a empezar */}
			<div>
				<button className="boton_volver">Start Over</button>
			</div>

			{/* Tablero de juego */}
			<div className="container-fluid content">
				<div className="row">
					{gamepad.map((e, i) => {
						retunr(
							<div
								key={i}
								className="col-4 itc-box border"
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
