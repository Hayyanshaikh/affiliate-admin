import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import { Link } from "react-router-dom";
import DeepLinkData from '../../api/DeepLinkData.json';
import Button from "../../../components/comman/Button.jsx";
import copy from 'clipboard-copy';
import Search from "../../../components/search/Search.jsx";
import Alert from "../../../components/comman/Alert.jsx";
import Pagination from "../../../components/comman/Pagination.jsx";
import PageHeading from "../../components/partials/PageHeading.jsx";
import useSearch from '../../../components/customHooks/useSearch.jsx';
import useFileDownload from '../../../components/customHooks/useFileDownload.jsx';

const DeepLinks = () => {
	const [alertVisible, setAlertVisible] = useState(false);
	const handleDownload = useFileDownload(DeepLinkData);
	const [currentPage, setCurrentPage] = useState(1);
	const { query, setQuery, filteredData, search } = useSearch(DeepLinkData);
	const totalPages = 5;

	const handleAlertDismiss = () => {
    setAlertVisible(false);
  };

  const handleLinkCopy = (link) => {
  	copy(link);
  	setAlertVisible(true)
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
   const handleSearchChange = (searchText) => {
    search(searchText);
  };
	return (
		<section>
			<PageHeading heading={`Deep Links`}>
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
					          <th>Landing Page</th>
					          <th>Tracking Link</th>
					          <th>Sud ID</th>
					          <th></th>
					        </tr>
					      </thead>
					      <tbody>
					        {filteredData.map((row) => (
					          <tr key={row.advertiser}>
					            <td>
					            	<span>
					            		{row.advertiser}
					            	</span>
					            </td>
					            <td>
					            	<Link to={row.landingPage}>
					            		{row.landingPage}
					            	</Link>
					            </td>
					            <td>
					            	<Link to={row.trackingLink}>
					            		{row.trackingLink}
					            	</Link>
					            </td>
					            <td>
					            	<span>
					            		{row.sudID}
					            	</span>
					            </td>
					            <td>
						            <Alert
									        type="success"
									        message="Tracking link Copied"
									        visible={alertVisible}
									        onDismiss={handleAlertDismiss}
									      />
					            	<Button className="bg_light_secondary" onClick={() => handleLinkCopy(row.trackingLink)}>
					            		<span>copy link</span>
					            	</Button>
					            </td>
					          </tr>
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

export default DeepLinks