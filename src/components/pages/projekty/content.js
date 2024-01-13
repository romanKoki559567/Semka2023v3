import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Content = () => {
	return (
		<div class="container">
			<h1>Základné pojmy štatistiky</h1>
			<h2>ÚVOD</h2>
			<p>
				“Žijeme v období technologického pokroku, kde strojové učenie a umelá inteligencia (AI) mení náš každodenný život a uľahčuje nám
				mnohé úlohy. Strojové učenie, srdce umelej inteligencie, je zaujímavou oblasťou, ktorá spája informatiku s matematikou a
				štatistikou. Práve tu sa štatistika ukazuje ako nevyhnutný základ. Prečo je to tak dôležité? Štatistika nám poskytuje nástroje a
				metódy na porozumenie a interpretáciu dát. Čiže aj zdanlivo nudné definície a poučky budú v budúcnosti kľúčovým hráčom pre lepšie
				pochopenie a efektívne riešenie rôznych problémov. Pomocou štatistiky dokážeme nielen analyzovať a spracovávať obrovské množstvá
				dát, ale tiež vyvíjať algoritmy, ktoré sú schopné učiť sa, adaptovať sa a robiť predpovede. Táto schopnosť strojového učenia má
				potenciál pomôcť nám v rôznych oblastiach, ako sú zdravotníctvo, finančníctvo, doprava a mnohé ďalšie odvetvia. Poďme na to !”
			</p>
			<h3>Pravdepodobnosť a štatistika</h3>
			<p>
				<strong>Pravdepodobnosť</strong> môžeme chápať ako matematický nástroj, ktorý sa opiera o teoretické znalosti a zákonitosti, podľa
				ktorých sa určité javy riadia. Ide o určenie mieri, s akou môžeme očakávať výskyt určitej udalosti alebo posúdiť, do akej miery je
				nejaké tvrdenie pravdivé.
			</p>
			<p>
				<strong>Štatistika</strong> (empíria) je vedná disciplína ktorá slúži ako nástroj na zbieranie, analýzu a interpretáciu dát, vrátane
				ich vizualizácie pomocou grafov. Jej základnou funkciou je poskytovať metódy a techniky na efektívne spracovanie numerických
				informácií, čo umožňuje lepšie porozumieť a interpretovať zložité súbory údajov získaných z reálneho sveta.
			</p>
			<p>
				V rámci štatistiky sa dáta zbierajú prostredníctvom pozorovaní, prieskumov alebo experimentov. Následne sú spracované a analyzované
				za účelom zistenia vzorcov, trendov alebo vzťahov.
			</p>
			<p>
				Štatistické metódy zahŕňajú deskriptívnu štatistiku, ktorá popisuje charakteristiky dátových súborov (napríklad priemer, medián,
				štandardnú odchýlku)
			</p>
			<h3>Základné pojmy štatistiky</h3>
			<p>
				<strong>Populácia </strong>(základný súbor) - označujeme ju ako Ω a predstavuje množinu všetkých možných prvkov daného skúmania,
				vyhovujúca naše mu záujmu.
			</p>
			<h3>Typy Premenných (Typy Štatistických Znakov)</h3>
			<p>
				Rozdeľujeme ich na 2 základné kategórie. Kvalitatívne znaky tie sú často označované slovne a kvantitatívne znaky predstavuje jav
				ktorý si môžem zapísať číselne (predstavuje nejaké množstvo). Premenné rozlišujeme podľa toho, koľko informácií z nich vieme
				vyčítať. Podľa toho sa delia na nominálne, ordinálne, intervalové a pomerné.
			</p>

			<div>
				<div>
					<h4>Kvalitatívne Dáta (Kategorické Dáta)</h4>
					<p>Tieto dáta opisujú vlastnosti, ktoré nie sú kvantifikovateľné, a sú založené skôr na kvalite než na množstve.</p>
					<h5>1. Nominálne Dáta</h5>
					<p>
						Popis: Nominálne dáta sú základným typom kvalitatívnych dát. Tieto dáta kategorizujú bez akéhokoľvek prirodzeného poradia. Sú to
						v podstate menovky alebo kategórie.
					</p>
					<p>Príklady: Mená osôb, druhy živočíchov, značky áut, farby, národnosti, pohlavie.</p>
					<p>
						Analýza: Najčastejšie používanou štatistickou metódou je výpočet modusu alebo frekvencie jednotlivých kategórií. Tieto dáta sú
						vhodné pre porovnávacie štúdie, kde skúmame prevalenciu určitých kategórií.
					</p>

					<h5>2. Ordinálne Dáta</h5>
					<p>
						Popis: Ordinálne dáta zahŕňajú kategórie s prirodzeným poradím, ale rozdiely medzi jednotlivými stupňami nie sú definované alebo
						rovnaké.
					</p>
					<p>
						Príklady: Vzdelanie (základné, stredné, vysoké), vojenské hodnosti, triedy hotelov, hodnotenie služieb alebo produktov
						(napríklad hodnotenie z 1 do 5 hviezdičiek).
					</p>
					<p>
						Analýza: Tieto dáta sú vhodné na výpočet mediánu alebo modusu. Porovnávajú sa cez frekvencie alebo distribúcie v rôznych
						kategóriách, môžu byť však použité aj v pokročilejších analýzach, ako je napríklad ordinal logistic regression.
					</p>
				</div>

				<div>
					<h4>Kvantitatívne Dáta (Číselné Dáta) </h4>
					<p>Tieto dáta sú založené na množstvách a umožňujú výpočty a kvantitatívne analýzy.</p>
					<h5>1. Intervalové Dáta</h5>
					<p>
						Popis: Intervalové dáta sú číselné dáta, kde sú intervaly medzi hodnotami konzistentné. Nemajú však pravý nulový bod, čo
						znamená, že nemôžeme hovoriť o pomerových vzťahoch.
					</p>
					<p>Príklady: Vek, dĺžka, hmotnosť, príjem, teplota v Kelvinoch, počet predmetov</p>
					<p>
						Analýza: Umožňujú výpočet priemeru, mediánu, modusu, rozptylu a štandardnej odchýlky. Nedá sa však použiť na výpočet pomeru,
						pretože absolútna nula chýba.
					</p>

					<h5>2. Pomerné Dáta</h5>
					<p>
						Popis: Pomerné dáta sú najflexibilnejším a najinformačnejším typom kvantitatívnych dát. Majú skutočný nulový bod, čo umožňuje
						vyjadrovať významné pomery.
					</p>
					<p>Príklady: Vek, dĺžka, hmotnosť, príjem, teplota v Kelvinoch, počet predmetov.</p>
					<p>
						Analýza: Okrem štandardných štatistických metód, ako sú priemer, medián, modus, rozptyl a štandardná odchýlka, umožňujú aj
						výpočet pomerov a využitie v logaritmoch
					</p>
				</div>
			</div>

			<h3>Deskriptívna štatistika (popisná)</h3>
			<p>sú to číselné hodnoty ktoré charakterizujú celý súbor:</p>
			<p>
				<strong>Momenty - </strong>charakteristiky počítame pomocou jedného vzorca (sú základom nasledujúcich dvoch)
			</p>
			<p>
				<strong>Charakteristiky polohy - </strong>kde na číselnej osy sa zgrupujú údaje(dáta) (aritmetický priemer, modus(hodnota x s
				najväčšiu početnosťou), medián(udáva stred v našich dátach))
			</p>

			<p>
				<strong>Charakteristiky variability - </strong>ako moc sú „rozhádzané“ údaje(dáta) na číselnej osy (rozptyl - vychýlenie od
				priemeru, medzikvartilvý rozptyl vychýlenie oproti mediánu)
			</p>

			<h3>Momenty</h3>
			<p>
				<strong>Prvý moment/priemerná hodnota/stredná hodnota/μ/E(x)/ - </strong>je aritmetický priemer hodnôt v dátovej sade. Poskytuje
				centrálnu tendenciu dát, čo znemená že ukazuje, kde sa nachádza stredná hodnota alebo „centrum“ distribúcie dát.
			</p>

			<img src="" alt="Popis obrázku" />

			<p>
				<strong>Druhý moment/rozptyl/variancia/disperzia/σ2/D(x) - </strong>meria variabilitu(„rozhádzanosť“) hodnôt okolo priemernej
				hodnoty. Vyšší rozptyl naznačuje väčšiu variabilitu hodnôt v dátach.
			</p>

			<img src="" alt="Popis obrázku" />

			<p>
				<strong>Tretí moment Šikmosť (Skewness) - </strong>Tretí moment, šikmosť, charakterizuje stupeň asymetrie distribúcie okolo jej
				strednej hodnoty. Kladná šikmosť naznačuje, že chvost distribúcie je viac vytiahnutý na pravej strane (vpravo od priemeru), zatiaľ
				čo záporná šikmosť ukazuje, že chvost je viac vytiahnutý na ľavej strane (vľavo od priemeru).
			</p>

			<img src="" alt="Popis obrázku" />

			<p>
				<strong>Štvrtý moment Špicatosť (Kurtosis) - </strong>Štvrtý moment, špicatosť, poskytuje informácie o "špičatosti" alebo
				koncentrácii hodnôt v rozdelení. Vyššia špicatosť znamená, že distribúcia má viac extrémnych hodnôt a je viac "špicatá" ako normálne
				rozdelenie. Nižšia špicatosť znamená, že distribúcia je "plochšia" (má menej extrémnych hodnôt).
			</p>

			<img src="" alt="Popis obrázku" />

			<img src="" alt="Popis obrázku" />

			<p>
				Tieto momenty sú dôležité pri analýze dát, pretože pomáhajú poskytovať komplexný pohľad na charakteristiky a tvar distribúcie dát.
				Pomocou momentov môžu štatistici a výskumníci lepšie pochopiť a interpretovať dáta, identifikovať vzory a trendy a robiť informované
				rozhodnutia alebo predpovede.
			</p>
		</div>
	);
};

export default Content;
