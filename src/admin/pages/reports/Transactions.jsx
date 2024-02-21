import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import { Link } from 'react-router-dom';
import Advertisers from '../../api/Advertisers.json';
import Badge from "../../../components/comman/Badge.jsx";
import Button from "../../../components/comman/Button.jsx";
import Search from "../../../components/search/Search.jsx";
import TransactionsData from '../../api/transactionsData.json';
import Pagination from "../../../components/comman/Pagination.jsx";
import PageHeading from "../../components/partials/PageHeading.jsx";
import useSearch from '../../../components/customHooks/useSearch.jsx';
import useFileDownload from '../../../components/customHooks/useFileDownload.jsx';

const Transactions = () => {
	const totalPages = 5;
	const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
   const handleSearchChange = (searchText) => {
    search(searchText);
  };

  const transactionsdata = TransactionsData.map((sale) => {
    const advertiser = Advertisers.find((advertiser) => sale.advertiser_id === advertiser.id);
    return { ...sale, advertiser: advertiser.title };
  });

	const { query, setQuery, filteredData, search } = useSearch(transactionsdata);
	const handleDownload = useFileDownload(transactionsdata);

	return (
		<section>
			<PageHeading heading={`Transactions`}>
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
						          <th>ID</th>
						          <th>Date</th>
						          <th>Advertiser</th>
						          <th>Transaction ID</th>
						          <th>Sale Amount</th>
						          <th>Commission</th>
						          <th>Status</th>
						        </tr>
						      </thead>
						      <tbody>
						        {filteredData.map((row) => (
						          <tr key={row.id}>
						            <td>{row.id}</td>
						            <td>{row.date}</td>
						            <td>
						            	<Link to={`/admin/advertisers/new-advertisers/${row.advertiser_id}`}>
						            		{row.advertiser}
						            	</Link>
						            </td>
						            <td>{row.transactionid}</td>
						            <td>{row.saleamount}</td>
						            <td>{row.commission}</td>
						            <td>
												  <Badge
												    label={row.status}
												    variant={
												      row.status.toLowerCase() === "pending"
												        ? "info"
												        : row.status.toLowerCase() === "completed"
												        ? "primary"
												        : "fill"
												    }
												  />
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

export default Transactions