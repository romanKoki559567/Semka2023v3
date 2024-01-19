import Priemer from "../../../images/ZPImages/priemer.png";
import Rozptyl from "../../../images/ZPImages/rozptyl.png";
import Sikmost from "../../../images/ZPImages/sikmost.png";
import Spicatost from "../../../images/ZPImages/spicatost.png";

const Content = () => {
	return (
		<div className="container">
			<h1 className="nadpis-hlavny">Základné pojmy štatistiky</h1>
			<div className="card-use">
				<h2 className="pod-nadpis center-text">ÚVOD</h2>
				<p className="italic-text center-text">
					“Žijeme v období technologického pokroku, kde strojové učenie a umelá inteligencia (AI) mení náš každodenný život a uľahčuje nám
					mnohé úlohy. Strojové učenie, srdce umelej inteligencie, je zaujímavou oblasťou, ktorá spája informatiku s matematikou a
					štatistikou. Práve tu sa štatistika ukazuje ako nevyhnutný základ. Prečo je to tak dôležité? Štatistika nám poskytuje nástroje a
					metódy na porozumenie a interpretáciu dát. Čiže aj zdanlivo nudné definície a poučky budú v budúcnosti kľúčovým hráčom pre lepšie
					pochopenie a efektívne riešenie rôznych problémov. Pomocou štatistiky dokážeme nielen analyzovať a spracovávať obrovské množstvá
					dát, ale tiež vyvíjať algoritmy, ktoré sú schopné učiť sa, adaptovať sa a robiť predpovede. Táto schopnosť strojového učenia má
					potenciál pomôcť nám v rôznych oblastiach, ako sú zdravotníctvo, finančníctvo, doprava a mnohé ďalšie odvetvia. Poďme na to !”
				</p>
				<h3 className="pod-nadpis">Pravdepodobnosť a štatistika</h3>
				<p>
					<strong className="modra">Pravdepodobnosť</strong> môžeme chápať ako matematický nástroj, ktorý sa opiera o teoretické znalosti a
					zákonitosti, podľa ktorých sa určité javy riadia. Ide o určenie mieri, s akou môžeme očakávať výskyt určitej udalosti alebo
					posúdiť, do akej miery je nejaké tvrdenie pravdivé.
				</p>
				<p>
					<strong className="modra">Štatistika</strong> (empíria) je vedná disciplína ktorá slúži ako nástroj na zbieranie, analýzu a
					interpretáciu dát, vrátane ich vizualizácie pomocou grafov. Jej základnou funkciou je poskytovať metódy a techniky na efektívne
					spracovanie numerických informácií, čo umožňuje lepšie porozumieť a interpretovať zložité súbory údajov získaných z reálneho
					sveta.
				</p>

				<p>
					V rámci štatistiky sa dáta zbierajú prostredníctvom pozorovaní, prieskumov alebo experimentov. Následne sú spracované a
					analyzované za účelom zistenia vzorcov, trendov alebo vzťahov. Štatistické metódy zahŕňajú deskriptívnu štatistiku, ktorá popisuje
					charakteristiky dátových súborov (napríklad priemer, medián, štandardnú odchýlku)
				</p>

				<h3 className="pod-nadpis">Základné pojmy štatistiky</h3>
				<p>
					<strong className="modra">Populácia </strong>(základný súbor) <strong>-</strong> označujeme ju ako Ω a predstavuje množinu
					všetkých možných prvkov daného skúmania, vyhovujúca naše mu záujmu.
				</p>

				<p>
					<strong className="modra">Náhodná premenná -</strong> je taká premenná, ktorá nadobúda hodnoty s určitou pravdepodobnosťou. Ako
					príklad si môžeme predstaviť hru s kockou. V tomto prípade je náš sledovaný štatistický znak číslo, ktoré padne na kocke a toto
					číslo označujeme ako náhodnú premennú.
				</p>

				<h3 className="pod-nadpis2">Typy Premenných (Typy Štatistických Znakov)</h3>
				<p>
					Rozdeľujeme ich na 2 základné kategórie. Kvalitatívne znaky tie sú často označované slovne a kvantitatívne znaky predstavuje jav
					ktorý si môžem zapísať číselne (predstavuje nejaké množstvo). Premenné rozlišujeme podľa toho, koľko informácií z nich vieme
					vyčítať. Podľa toho sa delia na nominálne, ordinálne, intervalové a pomerné.
				</p>

				<div>
					<div>
						<h4 className="pod-nadpis2">Kvalitatívne Dáta (Kategorické Dáta)</h4>
						<p>Tieto dáta opisujú vlastnosti, ktoré nie sú kvantifikovateľné, a sú založené skôr na kvalite než na množstve.</p>
						<h5 className="pod-nadpis2">1. Nominálne Dáta</h5>
						<p>
							<span className="podciarknutie-text modra">Popis:</span> Nominálne dáta sú základným typom kvalitatívnych dát. Tieto dáta
							kategorizujú bez akéhokoľvek prirodzeného poradia. Sú to v podstate menovky alebo kategórie.
						</p>
						<p>
							<span className="podciarknutie-text modra">Príklady:</span> Mená osôb, druhy živočíchov, značky áut, farby, národnosti,
							pohlavie.
						</p>
						<p>
							<span className="podciarknutie-text modra">Analýza:</span> Najčastejšie používanou štatistickou metódou je výpočet modusu
							alebo frekvencie jednotlivých kategórií. Tieto dáta sú vhodné pre porovnávacie štúdie, kde skúmame prevalenciu určitých
							kategórií.
						</p>

						<h5 className="pod-nadpis2">2. Ordinálne Dáta</h5>
						<p>
							<span className="podciarknutie-text modra">Popis:</span> Ordinálne dáta zahŕňajú kategórie s prirodzeným poradím, ale rozdiely
							medzi jednotlivými stupňami nie sú definované alebo rovnaké.
						</p>
						<p>
							<span className="podciarknutie-text modra">Príklady:</span> Vzdelanie (základné, stredné, vysoké), vojenské hodnosti, triedy
							hotelov, hodnotenie služieb alebo produktov (napríklad hodnotenie z 1 do 5 hviezdičiek).
						</p>
						<p>
							<span className="podciarknutie-text modra">Analýza:</span> Tieto dáta sú vhodné na výpočet mediánu alebo modusu. Porovnávajú
							sa cez frekvencie alebo distribúcie v rôznych kategóriách, môžu byť však použité aj v pokročilejších analýzach, ako je
							napríklad ordinal logistic regression.
						</p>
					</div>

					<div>
						<h4 className="pod-nadpis2">Kvantitatívne Dáta (Číselné Dáta) </h4>
						<p>Tieto dáta sú založené na množstvách a umožňujú výpočty a kvantitatívne analýzy.</p>
						<h5 className="modra">1. Intervalové Dáta</h5>
						<p>
							<span className="podciarknutie-text modra">Popis:</span> Intervalové dáta sú číselné dáta, kde sú intervaly medzi hodnotami
							konzistentné. Nemajú však pravý nulový bod, čo znamená, že nemôžeme hovoriť o pomerových vzťahoch.
						</p>
						<p>
							<span className="podciarknutie-text modra">Príklady:</span> Vek, dĺžka, hmotnosť, príjem, teplota v Kelvinoch, počet predmetov
						</p>
						<p>
							<span className="podciarknutie-text modra">Analýza:</span> Umožňujú výpočet priemeru, mediánu, modusu, rozptylu a štandardnej
							odchýlky. Nedá sa však použiť na výpočet pomeru, pretože absolútna nula chýba.
						</p>

						<h5 className="pod-nadpis2">2. Pomerné Dáta</h5>
						<p>
							<span className="podciarknutie-text modra">Popis:</span> Pomerné dáta sú najflexibilnejším a najinformačnejším typom
							kvantitatívnych dát. Majú skutočný nulový bod, čo umožňuje vyjadrovať významné pomery.
						</p>
						<p>
							<span className="podciarknutie-text modra">Príklady:</span> Vek, dĺžka, hmotnosť, príjem, teplota v Kelvinoch, počet
							predmetov.
						</p>
						<p>
							<span className="podciarknutie-text modra">Analýza:</span> Okrem štandardných štatistických metód, ako sú priemer, medián,
							modus, rozptyl a štandardná odchýlka, umožňujú aj výpočet pomerov a využitie v logaritmoch
						</p>
					</div>
				</div>

				<h3 className="pod-nadpis">Deskriptívna štatistika (popisná)</h3>
				<p>sú to číselné hodnoty ktoré charakterizujú celý súbor:</p>
				<p>
					<strong className="modra">Momenty - </strong>charakteristiky počítame pomocou jedného vzorca (sú základom nasledujúcich dvoch)
				</p>
				<p>
					<strong className="modra">Charakteristiky polohy - </strong>kde na číselnej osy sa zgrupujú údaje(dáta) (aritmetický priemer,
					modus(hodnota x s najväčšiu početnosťou), medián(udáva stred v našich dátach))
				</p>

				<p>
					<strong className="modra">Charakteristiky variability - </strong>ako moc sú „rozhádzané“ údaje(dáta) na číselnej osy (rozptyl -
					vychýlenie od priemeru, medzikvartilvý rozptyl vychýlenie oproti mediánu)
				</p>

				<h3 className="pod-nadpis">Momenty</h3>
				<p>
					<strong className="modra">Prvý moment/priemerná hodnota/stredná hodnota/μ/E(x)/ - </strong>je aritmetický priemer hodnôt v dátovej
					sade. Poskytuje centrálnu tendenciu dát, čo znemená že ukazuje, kde sa nachádza stredná hodnota alebo „centrum“ distribúcie dát.
				</p>

				<img src={Priemer} alt="Obrázok vzorca priemeru" style={{ width: "50%" }} />

				<p>
					<strong className="modra">Druhý moment/rozptyl/variancia/disperzia/σ2/D(x) - </strong>meria variabilitu(„rozhádzanosť“) hodnôt
					okolo priemernej hodnoty. Vyšší rozptyl naznačuje väčšiu variabilitu hodnôt v dátach.
				</p>

				<img src={Rozptyl} alt="Obrázok vzorca rozptylu" style={{ width: "50%" }} />

				<p>
					<strong className="modra">Tretí moment Šikmosť (Skewness) - </strong>Tretí moment, šikmosť, charakterizuje stupeň asymetrie
					distribúcie okolo jej strednej hodnoty. Kladná šikmosť naznačuje, že chvost distribúcie je viac vytiahnutý na pravej strane
					(vpravo od priemeru), zatiaľ čo záporná šikmosť ukazuje, že chvost je viac vytiahnutý na ľavej strane (vľavo od priemeru).
				</p>

				<img src={Sikmost} alt="Obrázok vzorca šikmosti" style={{ width: "50%" }} />

				<p>
					<strong className="modra">Štvrtý moment Špicatosť (Kurtosis) - </strong>Štvrtý moment, špicatosť, poskytuje informácie o
					"špičatosti" alebo koncentrácii hodnôt v rozdelení. Vyššia špicatosť znamená, že distribúcia má viac extrémnych hodnôt a je viac
					"špicatá" ako normálne rozdelenie. Nižšia špicatosť znamená, že distribúcia je "plochšia" (má menej extrémnych hodnôt).
				</p>

				<div className="center-image">
					<img src={Spicatost} alt="Obrázok vzorca špicatosti" style={{ width: "50%" }} />
				</div>

				<p>
					Tieto momenty sú dôležité pri analýze dát, pretože pomáhajú poskytovať komplexný pohľad na charakteristiky a tvar distribúcie dát.
					Pomocou momentov môžu štatistici a výskumníci lepšie pochopiť a interpretovať dáta, identifikovať vzory a trendy a robiť
					informované rozhodnutia alebo predpovede.
				</p>
			</div>
		</div>
	);
};

export default Content;
