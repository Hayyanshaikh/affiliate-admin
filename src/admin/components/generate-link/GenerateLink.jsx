import React, { useState } from "react";
import SelectOption from "../../../components/comman/SelectOption.jsx";
import * as Icons from "react-icons/tb";
import Input from "../../../components/comman/Input.jsx";
import Button from "../../../components/comman/Button.jsx";
import Badge from "../../../components/comman/Badge.jsx";
import AdvertiserLinks from '../../api/AdvertiserLinks.json';

const GenerateLink = () => {
  const [fields, setFields] = useState({
    links: [],
    landingPage: "",
  });

  const advertiserLinkOptions = AdvertiserLinks.map((link) => ({
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
    <div className="link_generator">
      <h2 className="sub_heading">Link Generator</h2>
      <div className="link_generate">
        <SelectOption
          label="Country"
          isMulti={false}
          placeholder="links"
          options={advertiserLinkOptions}
          selectedValue={fields.links}
          onChange={(value) => handleSelectChange("link", value)}
        />
        <Input
          variant="outline"
          placeholder="Enter a Landing Page Optional"
          value={fields.landingPage}
          onChange={(value) => handleInputChange("landingPage", value)}
        />
        <div className="link_generate_footer">
          <Button>
            <Icons.TbPlus />
            <span>create</span>
          </Button>
          <Badge variant="secondary" label="Advanced" />
        </div>
      </div>
    </div>
  );
};

export default GenerateLink;
