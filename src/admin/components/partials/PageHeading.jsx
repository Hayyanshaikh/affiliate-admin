import React from 'react';


const PageHeading = ({heading,children}) => {
	return (
		<div className="container">
			<div className="heading_wrapper">
				<h2 className="page_heading">{heading}</h2>
				<div className="page_buttons">
					{children}
				</div>
			</div>
		</div>
	)
}

export default PageHeading