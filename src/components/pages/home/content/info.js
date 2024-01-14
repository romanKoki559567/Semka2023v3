import InfoImg from "../../../../images/About.png";

const Info = () => {
	return (
		<div>
			<div class="item2">
				<img src={InfoImg}></img>
				<p class="italic-text center-text">
					“Táto webová stránka, vytvorená ako súčasť kurzu VAII na Žilinskej univerzite, kde momentálne študujem, slúži nielen ako prehľad
					môjho akademického pôsobenia, ale aj ako môj digitálny životopis. Vznikla pod odborným dohľadom môjho profesora ... a je
					inšpirovaná mojou bakalárskou prácou.”
				</p>
			</div>
		</div>
	);
};

export default Info;
