import React, { useState } from "react";
import copy from 'clipboard-copy';
import * as Icons from "react-icons/tb";
import { Link } from "react-router-dom";
import TextLinkData from '../../api/TextLinkData.json';
import Button from "../../../components/comman/Button.jsx";
import Alert from "../../../components/comman/Alert.jsx";
import Search from "../../../components/search/Search.jsx";
import Pagination from "../../../components/comman/Pagination.jsx";
import PageHeading from "../../components/partials/PageHeading.jsx";
import useSearch from '../../../components/customHooks/useSearch.jsx';
import useFileDownload from '../../../components/customHooks/useFileDownload.jsx';

const TextLinks = () => {
	const [alertVisible, setAlertVisible] = useState(false);
	const handleDownload = useFileDownload(TextLinkData);
	const [currentPage, setCurrentPage] = useState(1);
	const { query, setQuery, filteredData, search } = useSearch(TextLinkData);
	const totalPages = 5;

	const handleAlertDismiss = () => {
    setAlertVisible(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
   const handleSearchChange = (searchText) => {
    search(searchText);
  };

  const handleLinkCopy = (link) => {
  	copy(link);
  	setAlertVisible(true)
  }
	return (
		<section>
			<PageHeading heading={`Text Links`}>
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

export default TextLinks