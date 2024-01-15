import React, { useState } from "react";
import Ja from "../../../images/ja.png";

// TODO - pridať fotku

const info = () => {
	return (
		<div className="container">
			<div>
				<div className="row ">
					<div className="card-use col-sm-3 d-flex flex-column align-items-center">
						<img src={Ja} alt="Roman Koki" />

						<div className="text-center mt-3">
							<p className="fs-4">
								<strong>Roman Koki</strong>
							</p>
							<p className="center-text ">
								Teším sa na možnosť využívať poznatky v praxi. Mám ambície sa neustále zlepšovať a prehlbovať svoje znalosti a zručnosti v
								nižšie uvedených oblastiach. Spoľahlivosť, dochvíľnosť a cieľavedomosť patria medzi moje silné stránky.
							</p>
						</div>
					</div>

					<div class="card-use col-sm">
						<div class="row">
							<div class="vzdelanie-skusenosti col-sm">
								<p>
									<strong class="modra">PRACOVNÉ SKÚSENOSTI</strong>
								</p>
								<p>
									<strong>FAKTURAČNÝ A KOMUNIKAČNÝ PRACOVNÍK</strong>
								</p>
								<p>MICHAELA ĎURIŠOVÁ MAGAELA / BRATISLAVA, SLOVENSKÁ REPUBLIKA / DECEMBER 2022 - DOTERAZ</p>
								<p>
									<strong>BARMAN</strong>
								</p>
								<p>REMYS / TRENČÍN, SLOVENSKÁ REPUBLIKA / JÚN 2021 - AUGUST 2021</p>
								<p>
									<strong class="modra">VZDELANIE</strong>
								</p>
								<p>
									<strong>FAKULTA RIADENIA A INFORMATIKY</strong>
								</p>
								<p>Informatika Žilinská univerzita / Žilina, Slovenská republika / September 2021 - Doteraz</p>
								<p>
									<strong>STREDNÁ ODBORNÁ ŠKOLA STROJNÍCKA</strong>
								</p>
								<p>Technické lýceum Bánovce nad Bebravou, Slovenská republika / September 2016 - Jún 2020</p>
							</div>

							<div class="jazyk-skills col-sm">
								<p class="modra">
									<strong>JAZYKY</strong>
								</p>
								<p>Mierne pokročilý (B1)</p>

								<p class="modra">
									<strong>Skills</strong>
								</p>
								<lu>
									<li>
										<strong>C++</strong>
									</li>
									<li>
										<strong>Java</strong>
									</li>
									<li>
										<strong>SQL</strong>
									</li>
									<li>
										<strong>R</strong>
									</li>
									<li>
										<strong>AnyLogic</strong>
									</li>
									<li>
										<strong>Optimalizácia</strong>
									</li>
									<li>
										<strong>Deskriptívna/induktívna štatistika</strong>
									</li>
									<li>
										<strong>Python</strong>
									</li>
									<li>
										<strong>React</strong>
									</li>
								</lu>
							</div>
						</div>
					</div>
				</div>
				<div class="row ">
					<div class="card-use col-sm">
						<div class="dopln-info ">
							<p>
								<strong class="nadpis-hlavny">DOPLŇUJÚCE INFORMÁCIE</strong>
							</p>
							<p>
								Plánujem využiť lineárnu regresiu na predikciu cien, oblasť, ktorá ma veľmi zaujíma. Cieľom je rozvíjať vlastný softvér, aby
								mi pomáhal pri rozhodnutiach založených na týchto predikciách. Môj projekt integruje technológie od zberu dát až po
								vizualizáciu pomocou grafov na vlastnej webovej stránke, umožňujúc efektívnu prácu s dátami a prezentáciu výsledkov.
							</p>
						</div>

						<div class="zaujmy">
							<p>
								<strong class="nadpis-hlavny">ZÁUJMY A KONÍČKY</strong>
							</p>
							<p>
								Plánujem využiť lineárnu regresiu na predikciu cien, oblasť, ktorá ma veľmi zaujíma. Cieľom je rozvíjať vlastný softvér, aby
								mi pomáhal pri rozhodnutiach založených na týchto predikciách. Môj projekt integruje technológie od zberu dát až po
								vizualizáciu pomocou grafov na vlastnej webovej stránke, umožňujúc efektívnu prácu s dátami a prezentáciu výsledkov.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default info;
