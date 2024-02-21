import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import invoices from '../../api/invoices.json';
import Button from "../../../components/comman/Button.jsx";
import Badge from "../../../components/comman/Badge.jsx";
import Search from "../../../components/search/Search.jsx";
import Pagination from "../../../components/comman/Pagination.jsx";
import PageHeading from "../../components/partials/PageHeading.jsx";
import useSearch from '../../../components/customHooks/useSearch.jsx';
import useFileDownload from '../../../components/customHooks/useFileDownload.jsx';

const Payments = () => {
	const totalPages = 5;
	const [currentPage, setCurrentPage] = useState(1);
	const handleDownload = useFileDownload(invoices);
	const { query, setQuery, filteredData, search } = useSearch(invoices);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

   const handleSearchChange = (searchText) => {
    search(searchText);
  };

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
						          <th>Invoice#</th>
						          <th>Date</th>
						          <th>Payment ID</th>
						          <th>Payment Method</th>
						          <th>Amount</th>
						          <th>LC Revshare</th>
						          <th>Paid Amount</th>
						          <th>Paid Date</th>
						          <th>Status</th>
						        </tr>
						      </thead>
						      <tbody>
						        {filteredData.map((invoice, index) => (
						          <tr key={index}>
						            <td>#{invoice.invoiceNumber}</td>
						            <td>{invoice.date}</td>
						            <td>{invoice.paymentID}</td>
						            <td>{invoice.paymentMethod}</td>
						            <td>{invoice.amount}</td>
						            <td>{invoice.lcRevshare}</td>
						            <td>{invoice.paidAmount}</td>
						            <td>{invoice.paidDate}</td>
						            <td>
												  <Badge
												    label={invoice.status}
												    variant={
												      invoice.status.toLowerCase() === "unpaid"
												        ? "danger"
												        : invoice.status.toLowerCase() === "paid"
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

export default Payments