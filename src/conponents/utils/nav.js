import logo from "../../images/logo.png";
import home from "../../images/home.svg";
import chart from "../../images/chart.svg";
import personalcard from "../../images/personalcard.svg";
import frame from "../../images/frame.svg";
import settings from "../../images/settings.svg";
import lock from "../../images/lock.svg";
import user from "../../images/male.png";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="lavy-nav">
			<Link to="/">
				<div className="">
					<img src={logo} alt="logo" className="" />
				</div>
			</Link>

			<Link to="/">
				<div className="nav-button">
					<img src={home} alt="home" width={20} height={20} />
					<span>Domov</span>
				</div>
			</Link>

			<Link to="/technologie">
				<div className="nav-button">
					<img src={chart} alt="chart" width={20} height={20} />
					<span>Techonologie</span>
				</div>
			</Link>

			<Link to="/o-mne">
				<div className="nav-button">
					<img src={personalcard} alt="personalcard" width={20} height={20} />
					<span>O mne</span>
				</div>
			</Link>

			<Link to="/nastavenia-uctu">
				<div className="nav-button">
					<img src={settings} alt="settings" width={20} height={20} />
					<span>Nastavenia</span>
				</div>
			</Link>

			<Link to="/">
				<div className="nav-button">
					<img src={lock} alt="lock" width={20} height={20} />
					<span>Projekty</span>
				</div>
			</Link>

			<Link to="/login" className="user-button">
				<div className="user-button">
					<img src={user} alt="lock" width={50} height={50} />
					<span>Username</span>
				</div>
			</Link>
		</div>
	);
};

export default Nav;
