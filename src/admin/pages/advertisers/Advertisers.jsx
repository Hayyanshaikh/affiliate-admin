import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import { useParams } from "react-router-dom";
import Country from '../../api/Country.json';
import AdvertisersData from "../../api/Advertisers.json";
import Search from "../../../components/search/Search.jsx";
import Button from "../../../components/comman/Button.jsx";
import Pagination from "../../../components/comman/Pagination.jsx";
import PageHeading from "../../components/partials/PageHeading.jsx";
import SelectOption from "../../../components/comman/SelectOption.jsx";
import AdvertiserCard from "../../components/advertiser/AdvertiserCard.jsx";

const Advertisers = () => {
  const { advertiser } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedValue, setSelectedValue] = useState({
  	countries: [],
  	advertiserType: [],
  	categoryOptions: [],
  	promotionalMethodsOptions: [],
  });
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSelectChange = (label, options) => {
  	if (label === "country") {
    	setSelectedValue({
    		...selectedValue,
    		countries: options,
    	});
  	}
  	else if(label === "advertiserType"){
    	setSelectedValue({
    		...selectedValue,
    		advertiserType: options,
    	});
  	}
  	else if(label === "categoryOptions"){
    	setSelectedValue({
    		...selectedValue,
    		categoryOptions: options,
    	});
  	}
  	else if(label === "promotionalMethodsOptions"){
    	setSelectedValue({
    		...selectedValue,
    		promotionalMethodsOptions: options,
    	});
  	}
  };

  const countryOption = Country.map(country => ({
  	label: `(${country.code}) ${country.name}`,
  	value: country.name,
  }));

  const advertiserType = [
  	{label:"All Advertisers", value:"allAdvertisers"},
  	{label:"Third-Party Advertisers", value:"thirdPartyAdvertisers"},
  	{label:"Managed by LinksCircle", value:"managedByLinksCircle"},
  ];

  const categoryOptions = [
	  { label: "Technology", value: "technology" },
	  { label: "Fashion", value: "fashion" },
	  { label: "Health", value: "health" },
	  { label: "Food & Drink", value: "food-drink" },
	  { label: "Travel", value: "travel" },
	  { label: "Sports", value: "sports" },
	  { label: "Education", value: "education" },
	  { label: "Home & Garden", value: "home-garden" },
	  { label: "Books", value: "books" },
	  { label: "Movies", value: "movies" },
	  { label: "Music", value: "music" },
	];

	const promotionalMethodsOptions = [
	  { label: "Social Media Marketing", value: "social-media-marketing" },
	  { label: "Email Marketing", value: "email-marketing" },
	  { label: "Search Engine Optimization (SEO)", value: "seo" },
	  { label: "Pay-Per-Click Advertising (PPC)", value: "ppc" },
	  { label: "Content Marketing", value: "content-marketing" },
	  { label: "Influencer Marketing", value: "influencer-marketing" },
	  { label: "Affiliate Marketing", value: "affiliate-marketing" },
	  { label: "Event Sponsorship", value: "event-sponsorship" },
	  { label: "Promotional Discounts/Coupons", value: "discounts-coupons" },
	  { label: "TV/Radio Advertising", value: "tv-radio-advertising" },
	  { label: "Guerrilla Marketing", value: "guerrilla-marketing" },
	];

  return (
    <section className="advertisers">
      <PageHeading heading={`Advertisers`}>
        <Button variant="outline">
          <Icons.TbDownload />
          <span>Export</span>
        </Button>
      </PageHeading>
      <div className="container">
        <div className="wrapper">
          <div className="sidebar">
            <h4 className="sub_heading">
            	<span>Filters</span>
            	<Icons.TbAdjustmentsAlt/>
            </h4>
            <div className="sidebar_item">
              <Search
                variant="outline"
                label="search"
                icon={<Icons.TbSearch />}
              />
            </div>
            <div className="sidebar_item">
              <SelectOption
                label="Country"
                isMulti={true}
                placeholder="countries"
                options={countryOption}
                selectedValue={selectedValue.countries}
                onChange={(value)=>handleSelectChange("country", value)}
              />
            </div>
            <div className="sidebar_item">
              <SelectOption
                label="Advertiser Type"
                isMulti={false}
                options={advertiserType}
                placeholder="Advertiser type"
                selectedValue={selectedValue.advertiserType}
                onChange={(value)=>handleSelectChange("advertiserType", value)}
              />
            </div>
            <div className="sidebar_item">
              <SelectOption
                label="categories"
                isMulti={true}
                options={categoryOptions}
                placeholder="Advertiser type"
                selectedValue={selectedValue.categoryOptions}
                onChange={(value)=>handleSelectChange("categoryOptions", value)}
              />
            </div>
            <div className="sidebar_item">
              <SelectOption
                label="promotional Methods"
                isMulti={true}
                options={promotionalMethodsOptions}
                placeholder="Advertiser type"
                selectedValue={selectedValue.promotionalMethodsOptions}
                onChange={(value)=>handleSelectChange("promotionalMethodsOptions", value)}
              />
            </div>
          </div>
          <div className="main">
            <div className="advertiser_header">
              <div className="normal_filters_group">
                <Button variant="fill">
                  <span>All brands</span>
                </Button>
                <Button variant="text">
                  <span>New</span>
                </Button>
                <Button variant="text">
                  <span>Not Joined</span>
                </Button>
                <Button variant="text">
                  <span>Pending</span>
                </Button>
              </div>
            </div>
            <div className="advertiser_body">
              {AdvertisersData.map((advertiser, key) => (
                <AdvertiserCard
                  key={key}
                  imgSrc={advertiser.imgSrc}
                  title={advertiser.title}
                  commission={advertiser.commission}
                  region={advertiser.region}
                  apc={advertiser.apc}
                  isJoined={advertiser.isJoined}
                  link={advertiser.id}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="your-custom-class"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisers;
