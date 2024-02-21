import React, { useState, Fragment } from "react";
import * as Icons from "react-icons/tb";
import copy from 'clipboard-copy';
import CouponData from '../../api/Coupons.json';
import Input from "../../../components/comman/Input.jsx";
import Button from "../../../components/comman/Button.jsx";
import Search from "../../../components/search/Search.jsx";
import Textarea from "../../../components/comman/Textarea.jsx";
import Pagination from "../../../components/comman/Pagination.jsx";
import PageHeading from "../../components/partials/PageHeading.jsx";
import useSearch from '../../../components/customHooks/useSearch.jsx';
import useFileDownload from '../../../components/customHooks/useFileDownload.jsx';

const Coupons = () => {
	const totalPages = 5;
	const [currentPage, setCurrentPage] = useState(1);
	const handleDownload = useFileDownload(CouponData);
	const { query, setQuery, filteredData, search } = useSearch(CouponData);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
   const handleSearchChange = (searchText) => {
    search(searchText);
  };

  const [detail, setDetail] = useState(null);

  const handleCouponDetail = (id) => {
  	filteredData.find(advertiser =>{
  		if (advertiser.id === id) {
  			setDetail(advertiser);
  		}
  	});

  	if (detail.id === id) {
  		setDetail(null);
  	}
  }

  const handleCopyHTML = (link) => {
  	copy(link);
  }

	return (
		<section>
			<PageHeading heading={`Coupons`}>
				<Search
          variant="fill"
          value={query}
          icon={<Icons.TbSearch />}
          onChange={handleSearchChange}
        />
        <Button variant="fill" onClick={handleDownload}>
          <Icons.TbDownload />
          <span>Export</span>
        </Button>
      </PageHeading>
			<div className="container">
				<div className="wrapper">
					<div className="main">
						<div className="advertiser_section">
							<div className="table_responsive">
								<table>
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
					        {filteredData.map((row) => (
					          <Fragment key={row.advertiser}>
					          	<tr>
						            <td>
						            	<span>
						            		{row.advertiser}
						            	</span>
						            </td>
						            <td>
						            	<span>
						            		{row.offerName}
						            	</span>
						            </td>
						            <td>
						            	<span>
						            		{row.code}
						            	</span>
						            </td>
						            <td>
						            	<span>
						            		{row.startEndDates}
						            	</span>
						            </td>
						            <td>
						            	<Button className="bg_light_secondary" onClick={()=> handleCouponDetail(row.id)}>
						            		<span>{detail && detail.id === row.id ?  "close" : "view"}</span>
						            	</Button>
						            </td>
						          </tr>
						          {
						          	detail && row.id === detail.id ? (
						          		<tr>
								          	<td colSpan="5">
								          		<div className="coupon_details">
								          			<h2 className="sub_heading w-full">{`${detail.advertiser} - ${detail.offerName}`}:</h2>
								          			<div className="coupon_detail">
									          			<Input
									          				label="Coupon Code:"
									          				placeholder=""
									          				variant="fill"
									          				readOnly={true}
									          				value={detail.code}
									          			/>
									          			<Input
									          				label="Tracking Link:"
									          				placeholder=""
									          				readOnly={true}
									          				value={detail.trackingLink}
									          				variant="fill"
									          			/>
									          			<p><strong>Terms:</strong>{detail.termsAndConditions}</p>
								          			</div>
								          			<div className="coupon_detail">
									          			<Textarea
									          				label="HTML Code:"
									          				readOnly={true}
									          				placeholder=""
									          				variant="fill"
									          				value={`<a href="${detail.trackingLink}">${detail.advertiser} - ${detail.offerName}</a>`}
									          			/>
									          			<Button onClick={()=>handleCopyHTML(`<a href="${detail.trackingLink}">${detail.advertiser} - ${detail.offerName}</a>`)}>
									          				<span>copy html</span>
									          			</Button>		
								          			</div>
								          		</div>
								          	</td>
								          </tr>
						          	): ""
						          }
						          
					          </Fragment>
					        ))}
					      </tbody>
					    </table>
							</div>
							
					    <Pagination
	              currentPage={currentPage}
	              totalPages={totalPages}
	              onPageChange={handlePageChange}
	            />
						</div>	
					</div>
				</div>
			</div>
		</section>
	)
}

export default Coupons