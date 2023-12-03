import React from "react";
import phone from "../../images/phone.png";
import email from "../../images/email.png";

const Hlavicka = () => {
	return (
		<div className="hlavicka">
			<div className="hlav-button">
				<img src={phone} alt="phone" width={20} height={20} />
				<span>0907 365 178</span>
			</div>

			<div className="hlav-button">
				<img src={email} alt="email" width={20} height={20} />
				<span>kolkor365@gmail.com</span>
			</div>
		</div>
	);
};

export default Hlavicka;
