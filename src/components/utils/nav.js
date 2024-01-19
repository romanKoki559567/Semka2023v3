import user from "../../images/male.png";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/logo2.png";

const Nav = () => {
	const [isMenuOpen, setMenuOpen] = React.useState(true);
	const [isTechnologieOpen, setTechnologieOpen] = React.useState(false); // New state
	const isAuthenticated = !!localStorage.getItem("token");
	const navigate = useNavigate();

	const [values, setValues] = React.useState({
		name: "",
	});

	const toggleTechnologie = () => {
		setTechnologieOpen((prev) => !prev);
	};

	const [errors, setErrors] = React.useState({});

	const [currentlyOpen, setCurrentlyOpen] = React.useState("");

	const handleInput = (event) => {
		setValues((prev) => ({ ...prev, [event.target.name]: [event.target.value] }));
	};

	const toggleMenu = () => {
		if (isMenuOpen) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	};

	const logout = () => {
		localStorage.removeItem("token");
		window.alert("Odhlasene");
		navigate("/login");
	};

	React.useEffect(() => {
		const fetchUserData = async () => {
			try {
				const token = localStorage.getItem("token"); // Assuming you store the token in localStorage during login
				const response = await axios.get("http://localhost:8081/getUserData", {
					headers: {
						Authorization: `${token}`,
					},
				});
				setValues(response.data);
			} catch (error) {
				//console.error("Error fetching user data", error);
			}
		};

		fetchUserData();
	}, []);

	return (
		<>
			<div className="nav-burger">
				<div className="mobile-menu-toggle " onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={`lavy-nav ${isMenuOpen ? "menu-open" : ""}`}>
				<Link to="/" onClick={() => setCurrentlyOpen("Domov")}>
					<img src={Logo}></img>
				</Link>

				<div className={`menu-container ${isMenuOpen ? "show" : ""}`}>
					<Link className="link" to="/" onClick={() => setCurrentlyOpen("Domov")}>
						<div className="nav-button">
							<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M22.316 14.8077H17.5302C15.1491 14.8077 14 13.706 14 11.4315V3.37615C14 1.10169 15.1609 0 17.5302 0H22.316C24.6971 0 25.8462 1.10169 25.8462 3.37615V11.4315C25.8462 13.706 24.6852 14.8077 22.316 14.8077ZM17.5302 1.77692C16.0257 1.77692 15.7769 2.17969 15.7769 3.37615V11.4315C15.7769 12.628 16.0257 13.0308 17.5302 13.0308H22.316C23.8205 13.0308 24.0692 12.628 24.0692 11.4315V3.37615C24.0692 2.17969 23.8205 1.77692 22.316 1.77692H17.5302Z"
									fill="#555555"
								/>
								<path
									d="M22.316 25.8846H17.5302C15.1491 25.8846 14 24.7829 14 22.5085V20.3762C14 18.1017 15.1609 17 17.5302 17H22.316C24.6971 17 25.8462 18.1017 25.8462 20.3762V22.5085C25.8462 24.7829 24.6852 25.8846 22.316 25.8846ZM17.5302 18.7769C16.0257 18.7769 15.7769 19.1797 15.7769 20.3762V22.5085C15.7769 23.7049 16.0257 24.1077 17.5302 24.1077H22.316C23.8205 24.1077 24.0692 23.7049 24.0692 22.5085V20.3762C24.0692 19.1797 23.8205 18.7769 22.316 18.7769H17.5302Z"
									fill="#555555"
								/>
								<path
									d="M8.424 26H3.576C1.164 26 0 24.8753 0 22.5535V3.44651C0 1.12465 1.176 0 3.576 0H8.424C10.836 0 12 1.12465 12 3.44651V22.5535C12 24.8753 10.824 26 8.424 26ZM3.576 1.81395C2.052 1.81395 1.8 2.22512 1.8 3.44651V22.5535C1.8 23.7749 2.052 24.186 3.576 24.186H8.424C9.948 24.186 10.2 23.7749 10.2 22.5535V3.44651C10.2 2.22512 9.948 1.81395 8.424 1.81395H3.576Z"
									fill="#555555"
								/>
							</svg>

							<span>Domov</span>
						</div>
					</Link>

					<Link className="link" to="" onClick={toggleTechnologie}>
						<div className="nav-button">
							<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.12917 20.9733H21.8588C24.1546 20.9733 25.3629 19.7649 25.3629 17.4691V2.84827H3.61292V17.4691C3.625 19.7649 4.83334 20.9733 7.12917 20.9733Z"
									stroke="#555555"
									strokeWidth="1.8125"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2.41736 2.84827H26.584"
									stroke="#555555"
									strokeWidth="1.8125"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.66736 27.0149L14.5007 24.5983V20.9733"
									stroke="#555555"
									strokeWidth="1.8125"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M19.3333 27.0149L14.5 24.5983"
									stroke="#555555"
									strokeWidth="1.8125"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9.0625 13.7233L12.8687 10.5453C13.1708 10.2916 13.5696 10.3641 13.775 10.7024L15.225 13.1191C15.4304 13.4574 15.8292 13.5179 16.1313 13.2762L19.9375 10.0983"
									stroke="#555555"
									strokeWidth="1.8125"
									strokeMiterlimit="10"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							<span>Technologie</span>
						</div>
					</Link>

					{isTechnologieOpen && (
						<div className="card-menu">
							<ul>
								<li className="">
									<Link to="/zakl-pojmy" onClick={() => setCurrentlyOpen("#")} className="text-decoration-none">
										<p>Základné štatistické pojmy</p>
									</Link>
								</li>
								<li>
									<Link to="/roz-pravd" onClick={() => setCurrentlyOpen("#")} className="text-decoration-none">
										<p>Rozdelenie Pravdepodobnosti</p>
									</Link>
								</li>
								
							</ul>
						</div>
					)}

					<Link className="link" to="/o-mne" onClick={() => setCurrentlyOpen("o-mne")}>
						<div className="nav-button">
							<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M19.8334 24.9309H8.16671C3.50004 24.9309 2.33337 23.7642 2.33337 19.0976V9.76424C2.33337 5.09757 3.50004 3.93091 8.16671 3.93091H19.8334C24.5 3.93091 25.6667 5.09757 25.6667 9.76424V19.0976C25.6667 23.7642 24.5 24.9309 19.8334 24.9309Z"
									stroke="#555555"
									strokeWidth="1.75"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path d="M16.3334 9.76428H22.1667" stroke="#555555" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M17.5 14.4309H22.1667" stroke="#555555" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M19.8334 19.0975H22.1667" stroke="#555555" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
								<path
									d="M9.91721 13.6025C11.0835 13.6025 12.0289 12.6571 12.0289 11.4908C12.0289 10.3246 11.0835 9.37915 9.91721 9.37915C8.75097 9.37915 7.80554 10.3246 7.80554 11.4908C7.80554 12.6571 8.75097 13.6025 9.91721 13.6025Z"
									stroke="#555555"
									strokeWidth="1.75"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M14 19.4823C13.8367 17.7907 12.495 16.4607 10.8034 16.309C10.22 16.2507 9.62504 16.2507 9.03004 16.309C7.33837 16.4723 5.99671 17.7907 5.83337 19.4823"
									stroke="#555555"
									strokeWidth="1.75"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							<span>O mne</span>
						</div>
					</Link>
					{isAuthenticated ? (
						<Link className="link" to="/nastavenia-uctu" onClick={() => setCurrentlyOpen("nastavenia-uctu")}>
							<div className="nav-button">
								<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M13.551 18.3183C11.2134 18.3183 9.31628 16.4212 9.31628 14.0837C9.31628 11.7461 11.2134 9.849 13.551 9.849C15.8885 9.849 17.7856 11.7461 17.7856 14.0837C17.7856 16.4212 15.8885 18.3183 13.551 18.3183ZM13.551 11.5429C12.1507 11.5429 11.0102 12.6834 11.0102 14.0837C11.0102 15.4839 12.1507 16.6245 13.551 16.6245C14.9512 16.6245 16.0918 15.4839 16.0918 14.0837C16.0918 12.6834 14.9512 11.5429 13.551 11.5429Z"
										fill="#555555"
									/>
									<path
										d="M17.1758 25.5908C16.9386 25.5908 16.7015 25.5569 16.4643 25.5004C15.7642 25.3084 15.177 24.868 14.8044 24.247L14.6688 24.0211C14.0026 22.8693 13.0879 22.8693 12.4216 24.0211L12.2974 24.2357C11.9248 24.868 11.3376 25.3197 10.6374 25.5004C9.92601 25.6924 9.192 25.5908 8.57092 25.2181L6.62862 24.1002C5.93978 23.7049 5.44291 23.0612 5.22835 22.2821C5.02509 21.5029 5.12672 20.7011 5.52195 20.0123C5.84944 19.4364 5.93978 18.9169 5.7478 18.5894C5.55583 18.262 5.07026 18.07 4.404 18.07C2.7553 18.07 1.4115 16.7262 1.4115 15.0775V13.09C1.4115 11.4413 2.7553 10.0975 4.404 10.0975C5.07026 10.0975 5.55583 9.90553 5.7478 9.57805C5.93978 9.25057 5.86073 8.73111 5.52195 8.1552C5.12672 7.46636 5.02509 6.6533 5.22835 5.88541C5.43161 5.10623 5.92848 4.46256 6.62862 4.06733L8.58221 2.94938C9.85826 2.19278 11.5408 2.63319 12.3087 3.93182L12.4442 4.15767C13.1105 5.3095 14.0252 5.3095 14.6914 4.15767L14.8156 3.94311C15.5835 2.63319 17.2661 2.19278 18.5535 2.96067L20.4958 4.07862C21.1846 4.47386 21.6815 5.11753 21.896 5.89671C22.0993 6.67589 21.9977 7.47765 21.6024 8.16649C21.2749 8.74241 21.1846 9.26186 21.3766 9.58934C21.5685 9.91682 22.0541 10.1088 22.7204 10.1088C24.3691 10.1088 25.7129 11.4526 25.7129 13.1013V15.0888C25.7129 16.7375 24.3691 18.0813 22.7204 18.0813C22.0541 18.0813 21.5685 18.2732 21.3766 18.6007C21.1846 18.9282 21.2636 19.4477 21.6024 20.0236C21.9977 20.7124 22.1106 21.5255 21.896 22.2934C21.6928 23.0725 21.1959 23.7162 20.4958 24.1114L18.5422 25.2294C18.113 25.4665 17.6501 25.5908 17.1758 25.5908ZM13.5509 21.4125C14.5559 21.4125 15.4932 22.0449 16.1369 23.1629L16.2611 23.3774C16.3966 23.6146 16.6224 23.784 16.8935 23.8517C17.1645 23.9195 17.4355 23.8856 17.6614 23.7501L19.6149 22.6208C19.9086 22.4515 20.1344 22.1691 20.2247 21.8304C20.3151 21.4916 20.2699 21.1415 20.1005 20.8479C19.4569 19.7413 19.3778 18.6007 19.8747 17.7312C20.3715 16.8617 21.3992 16.3648 22.6865 16.3648C23.4092 16.3648 23.9851 15.7889 23.9851 15.0662V13.0787C23.9851 12.3673 23.4092 11.7801 22.6865 11.7801C21.3992 11.7801 20.3715 11.2832 19.8747 10.4137C19.3778 9.54417 19.4569 8.40363 20.1005 7.29697C20.2699 7.00337 20.3151 6.6533 20.2247 6.31453C20.1344 5.97575 19.9198 5.70474 19.6262 5.52406L17.6726 4.4061C17.1871 4.1125 16.5434 4.28189 16.2498 4.77875L16.1256 4.99331C15.4819 6.11126 14.5446 6.74364 13.5396 6.74364C12.5346 6.74364 11.5973 6.11126 10.9536 4.99331L10.8294 4.76746C10.5471 4.29318 9.91472 4.12379 9.42915 4.4061L7.47555 5.53535C7.18195 5.70474 6.9561 5.98705 6.86576 6.32582C6.77542 6.66459 6.82059 7.01466 6.98997 7.30826C7.63364 8.41493 7.71269 9.55546 7.21582 10.425C6.71896 11.2945 5.69134 11.7914 4.404 11.7914C3.68128 11.7914 3.10537 12.3673 3.10537 13.09V15.0775C3.10537 15.7889 3.68128 16.3761 4.404 16.3761C5.69134 16.3761 6.71896 16.873 7.21582 17.7425C7.71269 18.612 7.63364 19.7526 6.98997 20.8592C6.82059 21.1528 6.77542 21.5029 6.86576 21.8417C6.9561 22.1804 7.17065 22.4515 7.46426 22.6321L9.41785 23.7501C9.65499 23.8969 9.93731 23.9308 10.197 23.863C10.4681 23.7953 10.6939 23.6146 10.8407 23.3774L10.9649 23.1629C11.6086 22.0562 12.5459 21.4125 13.5509 21.4125Z"
										fill="#555555"
									/>
								</svg>

								<span>Nastavenia</span>
							</div>
						</Link>
					) : null}
					{isAuthenticated ? <div className="nav-line"></div> : null}
					{isAuthenticated ? (
						<Link className="link" to="/projekty" onClick={() => setCurrentlyOpen("projekty")}>
							<div className="nav-button">
								<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M22.0187 8.89214H18.2078V5.92808C18.2078 4.69275 17.7171 3.50801 16.8435 2.63451C15.97 1.761 14.7853 1.27026 13.55 1.27026C12.3146 1.27026 11.1299 1.761 10.2564 2.63451C9.3829 3.50801 8.89216 4.69275 8.89216 5.92808V8.89214H5.08123C4.74432 8.89214 4.42121 9.02598 4.18298 9.2642C3.94475 9.50243 3.81091 9.82554 3.81091 10.1625V22.0187C3.81091 22.3556 3.94475 22.6787 4.18298 22.9169C4.42121 23.1552 4.74432 23.289 5.08123 23.289H22.0187C22.3556 23.289 22.6787 23.1552 22.917 22.9169C23.1552 22.6787 23.289 22.3556 23.289 22.0187V10.1625C23.289 9.82554 23.1552 9.50243 22.917 9.2642C22.6787 9.02598 22.3556 8.89214 22.0187 8.89214ZM9.73904 5.92808C9.73904 4.91735 10.1405 3.94803 10.8552 3.23334C11.5699 2.51865 12.5393 2.11714 13.55 2.11714C14.5607 2.11714 15.53 2.51865 16.2447 3.23334C16.9594 3.94803 17.3609 4.91735 17.3609 5.92808V8.89214H9.73904V5.92808ZM22.4422 22.0187C22.4422 22.131 22.3976 22.2387 22.3181 22.3181C22.2387 22.3975 22.131 22.4421 22.0187 22.4421H5.08123C4.96892 22.4421 4.86122 22.3975 4.78181 22.3181C4.7024 22.2387 4.65779 22.131 4.65779 22.0187V10.1625C4.65779 10.0501 4.7024 9.94245 4.78181 9.86304C4.86122 9.78363 4.96892 9.73901 5.08123 9.73901H22.0187C22.131 9.73901 22.2387 9.78363 22.3181 9.86304C22.3976 9.94245 22.4422 10.0501 22.4422 10.1625V22.0187ZM14.3969 16.0906C14.3969 16.2581 14.3472 16.4218 14.2541 16.5611C14.1611 16.7003 14.0288 16.8089 13.8741 16.873C13.7193 16.9371 13.549 16.9539 13.3848 16.9212C13.2205 16.8885 13.0696 16.8078 12.9511 16.6894C12.8327 16.571 12.7521 16.4201 12.7194 16.2558C12.6867 16.0915 12.7035 15.9212 12.7676 15.7665C12.8317 15.6117 12.9402 15.4795 13.0795 15.3864C13.2187 15.2934 13.3825 15.2437 13.55 15.2437C13.7746 15.2437 13.99 15.3329 14.1488 15.4917C14.3076 15.6506 14.3969 15.866 14.3969 16.0906Z"
										fill="#555555"
									/>
								</svg>

								<span>Projekty</span>
							</div>
						</Link>
					) : null}
				</div>

				<Link className="user-button" to={isAuthenticated ? "/" : "/login"} onClick={() => setCurrentlyOpen("projekty")}>
					<div className="user-button" onClick={isAuthenticated ? logout : null}>
						<img src={user} alt="lock" width={50} height={50} />
						<span>{isAuthenticated ? "Odhlasit" : "Prihlasit"}</span>
						<span>{isAuthenticated ? "(" + values.name + ")" : ""}</span>
						{errors.name && <span className="text-danger">{errors.name}</span>}
					</div>
				</Link>
			</div>
		</>
	);
};

export default Nav;
