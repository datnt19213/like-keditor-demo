import React from "react";

import {SmartLayout} from "@kumodefe/rc-smart-layout";

const Examples = () => {
	return (
		<SmartLayout direction="horizontal" className="h-screen ">
			<SmartLayout.Header
				resizable
				showToggle
				collapsible
				minSize="50px"
				maxSize="300px"
				className="bg-red-100"
				resizeBarClass={() => "hover:bg-red-500 cursor-default hover:cursor-col-resize"}
			>
				<h1>Header</h1>
			</SmartLayout.Header>
			<SmartLayout.Body>
				<p>body</p>
			</SmartLayout.Body>
			<SmartLayout.Footer>
				<p>Footer</p>
			</SmartLayout.Footer>
		</SmartLayout>
	);
};

export default Examples;
