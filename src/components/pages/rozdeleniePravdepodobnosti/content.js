import binomVz from "../../../images/rozdelenia/binomVz.png";
import binomMom from "../../../images/rozdelenia/binomMom.png";
import binomHist from "../../../images/rozdelenia/binomHist.png";

const Content = () => {
	return (
		<div class="container">
			<h1 class="nadpis-hlavny">Rozdelenie pravdepodobností</h1>
			<div class="card-use">
				<p>
					<strong class="modra">Pravdepodobnosť</strong> môžeme rozdeliť na dva základné typy:{" "}
					<strong class="modra italic-text podciarknutie-text">spojité a diskrétne</strong>
				</p>
				<p>Tu je zoznam rozdelení pravdepodobností, kde každé je zaradené do jednej z týchto kategórií:</p>
				<h2 class="pod-nadpis">Diskrétne rozdelenia</h2>
				<ul>
					<li class="odsad">
						<strong>Binomické rozdelenie</strong> (binomial distribution)
					</li>
					<li class="odsad">
						<strong>Poissonovo rozdelenie</strong> (Poisson distribution)
					</li>
					<li class="odsad">
						<strong>Hypergeometrické rozdelenie</strong> (hypergeometric distribution)
					</li>
					<li class="odsad">
						<strong>Negatívne binomické rozdelenie</strong> (negative binomial distribution)
					</li>
					<li class="odsad">
						<strong>Geometrické rozdelenie</strong> (geometric distribution)
					</li>
					<li class="odsad">
						<strong>Multinomické rozdelenie</strong> (multinomial distribution)
					</li>
				</ul>

				<h2 class="pod-nadpis">Spojité rozdelenia</h2>
				<ul>
					<li class="odsad">
						<strong>Normálne rozdelenie</strong> (normal distribution)
					</li>
					<li class="odsad">
						<strong>Exponenciálne rozdelenie</strong> (exponential distribution)
					</li>
					<li class="odsad">
						<strong>Gama rozdelenie</strong> (gamma distribution)
					</li>
					<li class="odsad">
						<strong>Beta rozdelenie</strong> (beta distribution)
					</li>
					<li class="odsad">
						<strong>Chi-kvadrát</strong> rozdelenie (chi-squared distribution)
					</li>
					<li class="odsad">
						<strong>Studentovo t-rozdelenie</strong> (Student's t-distribution)
					</li>
					<li class="odsad">
						<strong>F-rozdelenie</strong> (F-distribution)
					</li>
					<li class="odsad">
						<strong>Log-normálne rozdelenie</strong> (log-normal distribution)
					</li>
					<li class="odsad">
						<strong>Weibullovo rozdelenie</strong> (Weibull distribution)
					</li>
					<li class="odsad">
						<strong>Cauchyho rozdelenie</strong> (Cauchy distribution)
					</li>
					<li class="odsad">
						<strong>Dirichletovo rozdelenie</strong> (Dirichlet distribution)
					</li>
					<li class="odsad">
						<strong>Pareto rozdelenie</strong> (Pareto distribution)
					</li>
				</ul>

				<h3 class="pod-nadpis2">Binomické rozdelenie pravdepodobností</h3>
				<p>
					Popis a využitie: Binomické rozdelenie sa využíva na modelovanie počtu úspechov v pevnom počte nezávislých pokusov, kde každý
					pokus má len dva možné výsledky (často označované ako úspech a neúspech). Toto rozdelenie bolo vymyslené na štúdium
					pravdepodobnostných procesov, kde je zaujímavé vedieť, ako často sa môže vyskytnúť určitý počet úspechov pri opakovaných pokusoch,
					ako napríklad pri hodoch mincou alebo v medicínskych testoch.
				</p>
				<p>Rozsah: Binomické rozdelenie je definované pre diskrétne hodnoty. Jeho rozsah je od 0 do nn, kde nn je počet pokusov.</p>
				<p>Pravdepodobnostná Funkcia:</p>

				<img src={binomVz} alt="vzorec binomického rozdelenia" />

				<h4 class="pod-nadpis2">Parametre:</h4>
				<ul>
					<li>n: počet pokusov (celé číslo)</li>
					<li>p: pravdepodobnosť úspechu v jednom pokuse (číslo medzi 0 a 1)</li>
				</ul>

				<img src={binomMom} alt="Momenty binomického rozdelenia" />

				<h4 class="pod-nadpis2">Vzhľad funkcie:</h4>

				<img src={binomHist} alt="Histogram binomického rozdelenia" />
			</div>
		</div>
	);
};
export default Content;
