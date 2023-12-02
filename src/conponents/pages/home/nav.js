import React from "react";

const Nav = () => {
	return (
		<div>
			<div className="navigacia flex flex-col gap-[50px]">
				<img src="/logo.png" alt="logo" className="w-[213px] h-[54px] cursor-pointer" />
				<div className="flex justify-start items-center w-full p-[15px] gap-[22px] hover:bg-white hover:rounded-[21px] hover:border-2 hover:border-[#000000]/50 hover:font-black duration-300 ease-in-out">
					<img src="/logo.png" alt="home" width={20} height={20} />
					<span className="pr-[10px]">Domov</span>

					<img src="/chart.svg" alt="chart" width={20} height={20} />
					<span className="pr-[10px]">Technológie</span>

					<img src="/personalcard.svg" alt="personalcard" width={20} height={20} />
					<span>O mne</span>
				</div>
			</div>
		</div>
	);
};

export default Nav;
