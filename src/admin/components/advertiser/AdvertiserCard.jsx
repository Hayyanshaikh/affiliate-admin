import React from "react";
import * as Icons from "react-icons/tb";
import { Link } from "react-router-dom";
import Button from "../../../components/comman/Button.jsx";

const AdvertiserCard = (props) => {
  const { imgSrc, title, commission, region, apc, isJoined, link } = props;

  return (
    <div className="advertiser_card">
      <div className="advertiser_card_top">
        <Button variant="link" className="advertiser_msg p-0">
          <Icons.TbMessage />
        </Button>
        <figure className="advertiser_card_img">
          <img src={imgSrc} alt="" />
        </figure>
        <div className="advertiser_card_content">
          <Link to={link} className="button button-link p-0">
            <Icons.TbLink />
            <span>Visit Website</span>
          </Link>
          <Link to={link.toString().replace(/ /g, '-').toLowerCase()}>
            <h4 className="advertiser_card_title">{title}</h4>
          </Link>
          <div className="advertiser_card_overviews">
            <div className="advertiser_card_overview">
              <h5>{commission}</h5>
              <span>Commission</span>
            </div>
            <div className="advertiser_card_overview">
              <h5>{region}</h5>
              <span>Region</span>
            </div>
            <div className="advertiser_card_overview">
              <h5>{apc}</h5>
              <span>APC</span>
            </div>
          </div>
        </div>
      </div>
      <div className="advertiser_card_footer">
        <Link to={link.toString().replace(/ /g, '-').toLowerCase()} className="button button-link p-0">
          <span>Read More</span>
          <Icons.TbChevronRight />
        </Link>
        <Button
          variant="outline"
          className={`advertiser_add_btn ${isJoined ? "joined" : ""}`}
        >
          {isJoined ? <Icons.TbCircleCheck /> : <Icons.TbUserPlus />}
          <span>{isJoined ? "Joined" : "Apply"}</span>
        </Button>
      </div>
    </div>
  );
};

export default AdvertiserCard;
