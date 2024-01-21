import binomVz from "../../../images/rozdelenia/binomVz.png";
import binomMom from "../../../images/rozdelenia/binomMom.png";
import binomHist from "../../../images/rozdelenia/binomHist.png";
// TODO pridať pravdepodobnostnú funkciu
// pridať jej odhad strednej hodnoty a disperzie

const Content = () => {
	return (
		<div className="container">
			<h1 className="nadpis-hlavny">Rozdelenie pravdepodobností</h1>
			<div className="card-use">
				<p>
					<strong className="modra">Na čo nám slúži rozdelenie pravdepodobností?</strong>
				</p>
				<p>
					Rozdelenia pravdepodobností vznikli ako nástroj na modelovanie a pochopenie rôznych druhov náhodných javov a procesov, ktoré sa
					vyskytujú v všade okolo nás. Tieto rozdelenia pravdepodobností nám umožnujú lepšie pochopiť a matematicky popísať tieto javy. Pod
					náhodným javom si môžeme predstaviť hocičo čo nadobúda pravdepodobnosť... Napríklad počet zákazníkov ktorý prídu do nášho podniku
					(diskrétna náhodná premenná), alebo intervaly medzi tým, ako často nám mama chodí do izby. Rozdelenia pravdepodobnosti umožňujú
					popisovať rôzne situácie, kde sa vyskytujú pravdepodobnostné javy.
				</p>

				<p>
					Nutné si je uvedomiť, že rozdelenia pravdepodobnosti, ktoré budú popisované v nasledujúcom texte popísané, vznikli ako odpoveď na
					pozorovanie náhodných javov, a nie len ako teoretické koncepty vymyslené bez praktického základu a následne aplikované na dáta.
				</p>
				<p>
					<strong className="modra">Pravdepodobnosť</strong> môžeme rozdeliť na dva základné typy:{" "}
					<strong className="modra italic-text podciarknutie-text">spojité a diskrétne</strong>
				</p>
				<h2 className="pod-nadpis">Diskrétne rozdelenia</h2>
				<ul>
					<li className="odsad">
						<strong>Binomické rozdelenie</strong> (binomial distribution)
					</li>
					<li className="odsad">
						<strong>Poissonovo rozdelenie</strong> (Poisson distribution)
					</li>
					<li className="odsad">
						<strong>Hypergeometrické rozdelenie</strong> (hypergeometric distribution)
					</li>
					<li className="odsad">
						<strong>Negatívne binomické rozdelenie</strong> (negative binomial distribution)
					</li>
					<li className="odsad">
						<strong>Geometrické rozdelenie</strong> (geometric distribution)
					</li>
					<li className="odsad">
						<strong>Multinomické rozdelenie</strong> (multinomial distribution)
					</li>
				</ul>

				<h2 className="pod-nadpis">Spojité rozdelenia</h2>
				<ul>
					<li className="odsad">
						<strong>Normálne rozdelenie</strong> (normal distribution)
					</li>
					<li className="odsad">
						<strong>Exponenciálne rozdelenie</strong> (exponential distribution)
					</li>
					<li className="odsad">
						<strong>Gama rozdelenie</strong> (gamma distribution)
					</li>
					<li className="odsad">
						<strong>Beta rozdelenie</strong> (beta distribution)
					</li>
					<li className="odsad">
						<strong>Chi-kvadrát</strong> rozdelenie (chi-squared distribution)
					</li>
					<li className="odsad">
						<strong>Studentovo t-rozdelenie</strong> (Student's t-distribution)
					</li>
					<li className="odsad">
						<strong>F-rozdelenie</strong> (F-distribution)
					</li>
					<li className="odsad">
						<strong>Log-normálne rozdelenie</strong> (log-normal distribution)
					</li>
					<li className="odsad">
						<strong>Weibullovo rozdelenie</strong> (Weibull distribution)
					</li>
					<li className="odsad">
						<strong>Cauchyho rozdelenie</strong> (Cauchy distribution)
					</li>
					<li className="odsad">
						<strong>Dirichletovo rozdelenie</strong> (Dirichlet distribution)
					</li>
					<li className="odsad">
						<strong>Pareto rozdelenie</strong> (Pareto distribution)
					</li>
				</ul>

				<h3 className="pod-nadpis2">
					ROVNOMERNÉ <strong>DISKRÉTNE</strong> rozdelenie pravdepodobnosti
				</h3>
				<p>
					<span className="podciarknutie-text modra">Popis:</span> pre náhodné javy, pri ktorých má každá hodnota ROVNAKÚ pravdepodobnosť.
				</p>

				<p>
					<span className="podciarknutie-text modra">Využitie:</span>
				</p>

				<p>Tak tiež sa používa v tedy ak vieme o tom aké realizácie môže nadobúdať náhodná premenná ale nevieme jej rozdelenie.</p>
				<p>
					<span className="podciarknutie-text modra">Rozsah:</span> určený je počtom možných realizáci.{" "}
				</p>
				<p>Pravdepodobnostná Funkcia:</p>

				<img className="" alt="vzorec DRR rozdelenia" style={{ width: "50%" }} />

				<h4 className="pod-nadpis2">Parametre:</h4>
				<ul>
					<li>
						<strong>a: </strong>začiatok intervalu
					</li>
					<li>
						<strong>b: </strong> koniec intervalu
					</li>
				</ul>

				<img alt="Momenty DRR rozdelenia" style={{ width: "20%" }} />

				<h4 className="pod-nadpis2">Vzhľad funkcie:</h4>

				<img src={binomHist} alt="Histogram binomického rozdelenia" style={{ width: "40%" }} />

				<h3 className="pod-nadpis2">ALTERNATÍVNE (Bernulliho) rozdelenie pravdepodobnosti</h3>
				<p>
					<span className="podciarknutie-text modra">Popis:</span> Pre náhodné javy, ktoré majú <strong>2 rôzne výsledky - </strong> úspech
					alebo neúspech.
				</p>

				<p>
					<span className="podciarknutie-text modra">Využitie:</span> Napríklad pri testovaní účinnosti nového lieku alebo terapie. Úspech
					môže znamenať, že pacient reaguje na liečbu, zatiaľ čo neúspech znamená opak.
				</p>

				<p>Tak tiež sa používa v tedy ak vieme o tom aké realizácie môže nadobúdať náhodná premenná ale nevieme jej rozdelenie.</p>
				<p>
					<span className="podciarknutie-text modra">Rozsah:</span> určený je počtom možných realizáci.{" "}
				</p>
				<p>Pravdepodobnostná Funkcia:</p>

				<img className="" alt="vzorec DRR rozdelenia" style={{ width: "50%" }} />

				<h4 className="pod-nadpis2">Parametre:</h4>
				<ul>
					<li>
						<strong>a: </strong>začiatok intervalu
					</li>
					<li>
						<strong>b: </strong> koniec intervalu
					</li>
				</ul>

				<img src="" alt="Momenty DRR rozdelenia" style={{ width: "20%" }} />

				<h4 className="pod-nadpis2">Vzhľad funkcie:</h4>

				<img src="" alt="Histogram binomického rozdelenia" style={{ width: "40%" }} />

				<h3 className="pod-nadpis2">Binomické rozdelenie pravdepodobností</h3>
				<p>
					Popis: Binomické rozdelenie sa využíva na modelovanie počtu úspechov v pevnom počte nezávislých pokusov, kde každý
					pokus má len dva možné výsledky (často označované ako úspech a neúspech). Toto rozdelenie bolo vymyslené na štúdium
					pravdepodobnostných procesov, kde je zaujímavé vedieť, ako často sa môže vyskytnúť určitý počet úspechov pri opakovaných pokusoch,
					ako napríklad pri hodoch mincou alebo v medicínskych testoch.
				</p>
				<p>Rozsah: Binomické rozdelenie je definované pre diskrétne hodnoty. Jeho rozsah je od 0 do nn, kde nn je počet pokusov.</p>
				<p>Pravdepodobnostná Funkcia:</p>

				<img className="" src={binomVz} alt="vzorec binomického rozdelenia" style={{ width: "50%" }} />

				<h4 className="pod-nadpis2">Parametre:</h4>
				<ul>
					<li>n: počet pokusov (celé číslo)</li>
					<li>p: pravdepodobnosť úspechu v jednom pokuse (číslo medzi 0 a 1)</li>
				</ul>

				<img src={binomMom} alt="Momenty binomického rozdelenia" style={{ width: "20%" }} />

				<h4 className="pod-nadpis2">Vzhľad funkcie:</h4>

				<img src={binomHist} alt="Histogram binomického rozdelenia" style={{ width: "40%" }} />
			</div>











			
		</div>
	);
};
export default Content;
