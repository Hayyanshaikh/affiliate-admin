import * as Icons from "react-icons/tb";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Advertisers from "../../api/Advertisers.json";
import Modal from "../../../components/modal/Modal.jsx";
import Input from "../../../components/comman/Input.jsx";
import Alert from "../../../components/comman/Alert.jsx";
import Button from "../../../components/comman/Button.jsx";
import { Link as ScrollLink, Element } from "react-scroll";
import AdvertiserLinks from "../../api/AdvertiserLinks.json";
import LinkCopy from "../../components/link-copy/LinkCopy.jsx";
import Textarea from "../../../components/comman/Textarea.jsx";
import SelectOption from "../../../components/comman/SelectOption.jsx";
import GenerateLink from '../../components/generate-link/GenerateLink.jsx';

const AdvertisersDetail = () => {
  const [alertData, setAlertData] = useState({
    message: "",
    type: "",
    visible: false,
  });
  const [fields, setFields] = useState({
    selectLink:"",
    landingPageText:"",
    from: "",
    to: "",
    subject: "",
    comments: "",
  });

  const handleInputChange = (key, value) => {
    setFields({
      ...fields,
      [key]: value,
    });
  };

  const { advertiserId } = useParams();
  const advertiser = Advertisers.find(
    (advertiser) => advertiser.id.toString() === advertiserId
  );

  const sectionOffset = -120;
  const [activeSection, setActiveSection] = useState(null);
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const navigationMenu = [
    {
      id: 1,
      label: "Overview",
      target: "overview",
    },
    {
      id: 2,
      label: "Commission Rates",
      target: "commission-rates",
    },
    {
      id: 3,
      label: "Tracking Links",
      target: "tracking-links",
    },
    {
      id: 4,
      label: "Terms",
      target: "terms",
    },
    {
      id: 5,
      label: "Creative",
      target: "creative",
    },
    {
      id: 6,
      label: "About",
      target: "about",
    }
  ];

  const AdvertiserLinksOptions = AdvertiserLinks.map((link) => ({
    label: link.label,
    value: link.label,
  }));

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(!isModalOpen);
  };

  const alert = (message, type) => {
    setAlertData({
      message: message,
      type: type,
      visible: true,
    });
  };

  const handleDismiss = () => {
    setAlertData({ ...alertData, visible: false })
  }

  return (
    <section className="advertiser_details">

      <Alert
        message={alertData.message}
        type={alertData.type}
        onDismiss={handleDismiss}
        visible={alertData.visible}
      />
      <div className="container">
        <div className="advertiser_profile">
          <div className="advertiser_section_profile">
            <figure className="advertiser_profile_bg">
              <img src={`https://picsum.photos/1600/1000`} alt="" />
            </figure>
          </div>
        </div>
        <div className="wrapper sticky">
          <div className="sidebar">
            <div className="sidebar_item">
              <div className="sidebar_profile">
                <figure className="sidebar_profile_img advertiser_profile_img">
                  <img src={advertiser.imgSrc} alt="" />
                </figure>
                <div className="sidebar_profile_content">
                  <h4 className="sidebar_profile_title">{advertiser.title}</h4>
                  <span className="sidebar_profile_slogan">ID: 000{advertiser.id}</span>
                </div>
              </div>
              <div className="advertiser_profile_overviews">
                <div className="advertiser_profile_overview">
                  <span>{advertiser.region}</span>
                  <h3>Region</h3>
                </div>
                <div className="advertiser_profile_overview">
                  <span>{advertiser.apc}</span>
                  <h3>apc</h3>
                </div>
                <div className="advertiser_profile_overview">
                  <span>{advertiser.commission}</span>
                  <h3>commission</h3>
                </div>
              </div>
              <ul>
                <Button onClick={()=> alert(`${advertiser.isJoined ? "You have already joined for affiliation." : "Successfully applied for affiliation. Please wait for approval."}`, "success")} variant="outline" className={`advertiser_add_btn ${advertiser.isJoined ? "joined" : ""}`}>
                  {advertiser.isJoined ? <Icons.TbCircleCheck /> : <Icons.TbUserPlus />}
                  <span>{advertiser.isJoined ? "Joined" : "Apply"}</span>
                </Button>
                <Button variant="fill" className="bg_light_primary" onClick={openModal}>
                  <Icons.TbMail/>
                  <span>Message</span>
                </Button>
              </ul>
            </div>
            <div className="sidebar_item">
              <h2 className="sub_heading">contact info</h2>
              <ul>
                {advertiser.contact_info.map((info, key) => (
                  <li key={key}>{info}</li>
                ))}
              </ul>
            </div>
            <div className="sidebar_item">
              <GenerateLink/>
            </div>
            <div className="sidebar_item">
              <h2 className="sub_heading">Primary Regions</h2>

              <div className="advertiser_tags">
                {advertiser.primary_regions.map((method, key) => (
                  <span className="advertiser_tag" key={key}>
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div className="sidebar_item">
              <h2 className="sub_heading">Supported Regions</h2>
              <div className="advertiser_tags">
                {advertiser.supported_regions.map((method, key) => (
                  <span className="advertiser_tag" key={key}>
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div className="sidebar_item">
              <h2 className="sub_heading">Categories</h2>

              <div className="advertiser_tags">
                {advertiser.categories.map((method, key) => (
                  <span className="advertiser_tag" key={key}>
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="main">
            <Element className="advertiser_section" name="overview">
              <div className="advertiser_section_item">
                <h2 className="sub_heading">overview</h2>
                <div className="advertiser_wrapper column_2">
                  <div className="advertiser_wrapper_item full_width">
                    <h2 className="sub_heading">Detailed Introduction</h2>
                    <p className="advertiser_text">{advertiser.about}</p>
                    <ol>
                      <li>Gratisversand innerhalb DE ab 89 € </li>
                      <li>Kauf auf Rechnung </li>
                      <li>Nachhaltig und umweltbewusst </li>
                      <li>1 Monat Widerrufsfrist für Verbraucher </li>
                    </ol>
                  </div>
                  <div className="advertiser_wrapper_item">
                    <h2 className="sub_heading">
                      Preferred Promotional Methods
                    </h2>
                    <div className="advertiser_tags">
                      {advertiser.preferred_promotional.map((method, key) => (
                        <span className="advertiser_tag" key={key}>
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="advertiser_wrapper_item">
                    <h2 className="sub_heading">Restricted Methods</h2>
                    <div className="advertiser_tags">
                      {advertiser.restricted.map((method, key) => (
                        <span className="advertiser_tag" key={key}>
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Element>
            <Element
              className="advertiser_section advertiser_about"
              name="commission-rates"
            >
              <div className="advertiser_section_item">
                <h3 className="sub_heading">commission rates</h3>
                <div className="table_responsive">
                  <table className="bordered">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Condition</th>
                        <th>Commission Rate</th>
                        <th>Additional Info</th>
                      </tr>
                    </thead>
                    <tbody>
                      {advertiser.commission_rates.map((rate, key) => (
                        <tr key={key}>
                          <td>{rate.date}</td>
                          <td>{rate.condition}</td>
                          <td>{rate.commission_rate}</td>
                          <td>{rate.additional_info}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Element>
            <Element
              className="advertiser_section advertiser_introduction"
              name="tracking-links"
            >
              <div className="advertiser_section_item">
                <h2 className="sub_heading">tracking links</h2>
                <div className="advertiser_wrapper column_2">
                  <div className="advertiser_wrapper_item">
                    <h2 className="sub_heading">Normal Tracking link</h2>
                    <LinkCopy initialLink={advertiser.normal_link} />
                  </div>
                  <div className="advertiser_wrapper_item">
                    <h2 className="sub_heading">Short Tracking link</h2>
                    <LinkCopy initialLink={advertiser.short_link} />
                  </div>
                </div>
              </div>
            </Element>
            <Element
              className="advertiser_section advertiser_contact_info"
              name="terms"
            >
              <div className="advertiser_section_item">
                <h2 className="sub_heading">terms</h2>
              </div>
            </Element>
            <Element
              className="advertiser_section advertiser_commission_terms"
              name="creative"
            >
              <div className="advertiser_section_item">
                <h2 className="sub_heading">creative</h2>
                <div className="table_responsive">
                  <table className="bordered">
                    <thead>
                      <tr>
                        <th>Advertiser</th>
                        <th>Offer Name</th>
                        <th>Code</th>
                        <th>Start-End Dates</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {advertiser.creative_table.map((creative, key) => (
                        <tr key={key}>
                          <td>{creative.advertiser}</td>
                          <td>{creative.offer_name}</td>
                          <td>{creative.creative_name}</td>
                          <td>
                            {creative.start_date} - {creative.end_date}
                          </td>
                          <td>
                            <Button variant="fill" className="bg_light_primary">
                              <span>view</span>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>  
                </div>
              </div>
            </Element>
            <Element
              className="advertiser_section advertiser_program_terms"
              name="about"
            >
              <div className="advertiser_section_item">
                <h2 className="sub_heading">About {advertiser.title}</h2>
                <div className="advertiser_about">
                  <p className="advertiser_text">{advertiser.about}</p>
                  <br />
                  <small>Read More To Detail Introduction</small>
                </div>
              </div>
            </Element>
            <ul className="advertiser_navigation">
              {navigationMenu.map((item, key) => (
                <li key={key}>
                  <ScrollLink
                    spy={true}
                    to={item.target}
                    offset={sectionOffset}
                    className="advertiser_nav_link"
                    hashSpy={true}
                    activeClass={item.id === 1 ? 'active' : ''}
                    onSetActive={handleSetActive}
                  >
                    <Icons.TbPoint/>
                    <span>{item.label}</span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
         <Modal isOpen={isModalOpen} onClose={openModal}>
            <div className="modal-header">
              <h2 className="modal-title">Send Message To The Advertiser</h2>
            </div>
            <div className="modal-body">
              <div className="modal-form">
                <Input
                  variant="outline"
                  placeholder="From"
                  label="From"
                  value={fields.from}
                  onChange={(value) => handleInputChange("from", value)}
                />
                <Input
                  variant="outline"
                  placeholder="To"
                  label="To"
                  value={fields.to}
                  onChange={(value) => handleInputChange("to", value)}
                />
                <Input
                  variant="outline"
                  placeholder="Subject"
                  label="Subject"
                  value={fields.subject}
                  onChange={(value) => handleInputChange("subject", value)}
                />
                <Textarea
                  placeholder="Your Question or Comments"
                  label="Your Question or Comments"
                  value={fields.comments}
                  onChange={(e) => handleInputChange("comments", e.target.value)}
                />
              
              </div>
            </div>
            <div className="modal-footer">
              <Button className="primary">
                <span>Send</span>
                <Icons.TbSend/>
              </Button>
            </div>
          </Modal>
      </div>
    </section>
  );
};

export default AdvertisersDetail;
