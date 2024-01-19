import React, { useState } from "react";

const Location = () => {
	return (
		<div className="card-use-about">
			<div style={{ width: "100%" }}>
				<iframe
					style={{ width: "100%", height: "300px" }}
					src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Podlu%C5%BEany%20390+(podlu%C5%BEany)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
				>
					<a href="https://www.maps.ie/population/">Calculate population in area</a>
				</iframe>
			</div>
		</div>
	);
};
export default Location;
