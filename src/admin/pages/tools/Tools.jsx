import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import Input from "../../../components/comman/Input.jsx";
import Button from "../../../components/comman/Button.jsx";
import Badge from "../../../components/comman/Badge.jsx";
import AdvertiserLinks from '../../api/AdvertiserLinks.json';
import LinkCopy from "../../components/link-copy/LinkCopy.jsx";
import PageHeading from "../../components/partials/PageHeading.jsx";
import GenerateLink from '../../components/generate-link/GenerateLink.jsx';

const Tools = () => {
	const [fields, setFields] = useState({
  	links: [],
    landingPage: "",
    token: "qnIsWF1K11BheXrIQyNuyY0117UQS0",
  });

  const advertiserLinkOptions = AdvertiserLinks.map(link => ({
  	label: link.label,
  	value: link.label,
  }));

  const handleInputChange = (key, value) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };

  const handleSelectChange = (label, options) => {
  	if (label === "link") {
    	setFields({
    		...fields,
    		links: options,
    	});
  	}
  };
	return (
		<section>
			<PageHeading heading={`Tools`}/>
			<div className="container">
				<div className="tools">
					<div className="tools_item">
						
					<GenerateLink/>
					</div>
					<div className="tools_item">
						<h2 className="sub_heading">API Token</h2>
						<div className="link_generate">
			        <LinkCopy initialLink={fields.token} />
			        <div className="link_generate_footer">
			        	<Button className="bg_light_secondary">
			        		<Icons.TbTicket/>
			          	<span>Regenerate Token</span>
			          </Button>
			        	<Button className="bg_light_secondary">
			        		<Icons.TbBookUpload/>
			          	<span>View Documentation</span>
			          </Button>
			        </div>
						</div>
					</div>
				</div>
			</div>		
		</section>
	)
}

export default Tools