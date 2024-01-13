import React, { useState } from "react";

const Content = () => {
	return (
		<div>
			<h1>Rozdelenie pravdepodobností</h1>
			<p>Pravdepodobnosť môžeme rozdeliť na dva základné typy: spojité a diskrétne</p>
			<p>Tu je zoznam rozdelení pravdepodobností, kde každé je zaradené do jednej z týchto kategórií:</p>
			<h2>Diskrétne rozdelenia</h2>
			<ul>
				<li>Binomické rozdelenie (binomial distribution)</li>
				<li>Poissonovo rozdelenie (Poisson distribution)</li>
				<li>Hypergeometrické rozdelenie (hypergeometric distribution)</li>
				<li>Negatívne binomické rozdelenie (negative binomial distribution)</li>
				<li>Geometrické rozdelenie (geometric distribution)</li>
				<li>Multinomické rozdelenie (multinomial distribution)</li>
			</ul>

			<h2>Spojité rozdelenia</h2>
			<ul>
				<li>Normálne rozdelenie (normal distribution)</li>
				<li>Exponenciálne rozdelenie (exponential distribution)</li>
				<li>Gama rozdelenie (gamma distribution)</li>
				<li>Beta rozdelenie (beta distribution)</li>
				<li>Chi-kvadrát rozdelenie (chi-squared distribution)</li>
				<li>Studentovo t-rozdelenie (Student's t-distribution)</li>
				<li>F-rozdelenie (F-distribution)</li>
				<li>Log-normálne rozdelenie (log-normal distribution)</li>
				<li>Weibullovo rozdelenie (Weibull distribution)</li>
				<li>Cauchyho rozdelenie (Cauchy distribution)</li>
				<li>Dirichletovo rozdelenie (Dirichlet distribution)</li>
				<li>Pareto rozdelenie (Pareto distribution)</li>
			</ul>

			<h3>Binomické rozdelenie pravdepodobností</h3>
			<p>
				Popis a využitie: Binomické rozdelenie sa využíva na modelovanie počtu úspechov v pevnom počte nezávislých pokusov, kde každý pokus
				má len dva možné výsledky (často označované ako úspech a neúspech). Toto rozdelenie bolo vymyslené na štúdium pravdepodobnostných
				procesov, kde je zaujímavé vedieť, ako často sa môže vyskytnúť určitý počet úspechov pri opakovaných pokusoch, ako napríklad pri
				hodoch mincou alebo v medicínskych testoch.
			</p>
			<p>Rozsah: Binomické rozdelenie je definované pre diskrétne hodnoty. Jeho rozsah je od 0 do nn, kde nn je počet pokusov.</p>
			<p>Pravdepodobnostná Funkcia:</p>

			<img src="" alt="Popis obrázku" />

			<h4>Parametre:</h4>
			<ul>
				<li>n: počet pokusov (celé číslo)</li>
				<li>p: pravdepodobnosť úspechu v jednom pokuse (číslo medzi 0 a 1)</li>
			</ul>

			<img src="" alt="Popis obrázku" />

			<h4>Vzhľad funkcie:</h4>

			<img src="" alt="Popis obrázku" />
		</div>
	);
};
export default Content;
