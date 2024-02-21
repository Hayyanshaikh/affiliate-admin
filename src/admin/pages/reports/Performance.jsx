import React, { useState } from 'react';
import * as Icons from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Bar from '../../components/charts/Bar.jsx';
import Button from '../../../components/comman/Button.jsx';
import AdvertisersSales from '../../api/AdvertisersSales.json';
import Search from '../../../components/search/Search.jsx';
import AdvertisersClicks from '../../api/AdvertisersClicks.json';
import PageHeading from '../../components/partials/PageHeading.jsx';
import Advertisers from '../../api/Advertisers.json';
import useSearch from '../../../components/customHooks/useSearch.jsx';
import useFileDownload from '../../../components/customHooks/useFileDownload.jsx';

const Performance = () => {
  const [saleSearchQuery, setSaleSearchQuery] = useState('');
  const [clickSearchQuery, setClickSearchQuery] = useState('');
  const [performanceOverview, setPerformanceOverview] = useState([
    {
      name: "Current Period",
      data: [
        { year: "01", value: Math.floor(Math.random() * 100) },
        { year: "02", value: Math.floor(Math.random() * 100) },
        { year: "03", value: Math.floor(Math.random() * 100) },
        { year: "04", value: Math.floor(Math.random() * 100) },
        { year: "05", value: Math.floor(Math.random() * 100) },
        { year: "06", value: Math.floor(Math.random() * 100) },
        { year: "07", value: Math.floor(Math.random() * 100) },
        { year: "08", value: Math.floor(Math.random() * 100) },
        { year: "09", value: Math.floor(Math.random() * 100) },
        { year: "10", value: Math.floor(Math.random() * 100) },
        { year: "11", value: Math.floor(Math.random() * 100) },
      ],
    },
    {
      name: "Previous Period",
      data: [
        { year: "01", value: Math.floor(Math.random() * 100) },
        { year: "02", value: Math.floor(Math.random() * 100) },
        { year: "03", value: Math.floor(Math.random() * 100) },
        { year: "04", value: Math.floor(Math.random() * 100) },
        { year: "05", value: Math.floor(Math.random() * 100) },
        { year: "06", value: Math.floor(Math.random() * 100) },
        { year: "07", value: Math.floor(Math.random() * 100) },
        { year: "08", value: Math.floor(Math.random() * 100) },
        { year: "09", value: Math.floor(Math.random() * 100) },
        { year: "10", value: Math.floor(Math.random() * 100) },
        { year: "11", value: Math.floor(Math.random() * 100) },
      ],
    },
  ]);
	const handleDownload = useFileDownload(performanceOverview);

  const saleAdvertizersData = AdvertisersSales.map((sale) => {
    const advertiser = Advertisers.find((advertiser) => sale.advertiser_id === advertiser.id);
    return { ...sale, advertiser_name: advertiser.title };
  });

  const clickAdvertizersData = AdvertisersClicks.map((click) => {
    const advertiser = Advertisers.find((advertiser) => click.advertiser_id === advertiser.id);
    return { ...click, advertiser_name: advertiser.title };
  });

  const { query: saleQuery, setQuery: setSaleQuery, filteredData: filteredSaleData, search: searchSales } = useSearch(
    saleAdvertizersData
  );
  const { query: clickQuery, setQuery: setClickQuery, filteredData: filteredClickData, search: searchClicks } =
    useSearch(clickAdvertizersData);

  const handleSaleSearchChange = (searchText) => {
    setSaleSearchQuery(searchText);
    searchSales(searchText);
  };

  const handleClickSearchChange = (searchText) => {
    setClickSearchQuery(searchText);
    searchClicks(searchText);
  };

  return (
    <section className="performance">
      <PageHeading heading={`Performance `}>
        <Button variant="fill" onClick={handleDownload}>
          <Icons.TbDownload />
          <span>Export</span>
        </Button>
      </PageHeading>
      <div className="container">
        <div className="dashboard_main">
          <div className="dashboard_wrapper">
            <div className="dashboard_item col_1">
              <div className="dashboard_child dashboard_sidebar">
                <h2 className="sub_heading">Filters</h2>
                <div className="performance_filters">
                  <div className="performance_filter active">
                    <div className="performance_filter_detail">
                      <span>Total Commissions</span>
                      <div className="performance_filter_content">
                        <h4>5.6</h4>
                        <div className="performance_filter_value profit">
                          <Icons.TbArrowUp />
                          <span>0.22</span>
                        </div>
                      </div>
                    </div>
                    <Icons.TbChevronRight />
                  </div>
                  <div className="performance_filter">
                    <div className="performance_filter_detail">
                      <span>Total Transactions</span>
                      <div className="performance_filter_content">
                        <h4>4.2</h4>
                        <div className="performance_filter_value loss">
                          <Icons.TbArrowDown />
                          <span>0.22</span>
                        </div>
                      </div>
                    </div>
                    <Icons.TbChevronRight />
                  </div>
                  <div className="performance_filter">
                    <div className="performance_filter_detail">
                      <span>Total Sales</span>
                      <div className="performance_filter_content">
                        <h4>3.0</h4>
                        <div className="performance_filter_value profit">
                          <Icons.TbArrowUp />
                          <span>5.01</span>
                        </div>
                      </div>
                    </div>
                    <Icons.TbChevronRight />
                  </div>
                  <div className="performance_filter">
                    <div className="performance_filter_detail">
                      <span>Total Clicks</span>
                      <div className="performance_filter_content">
                        <h4>10.0</h4>
                        <div className="performance_filter_value loss">
                          <Icons.TbArrowDown />
                          <span>0.22</span>
                        </div>
                      </div>
                    </div>
                    <Icons.TbChevronRight />
                  </div>
                </div>
              </div>
              <div className="dashboard_child">
                <h2 className="sub_heading">Performance Overview</h2>
                <Bar
                  data={performanceOverview}
                  height={340}
                  colors={["#38b635", "#cfeece"]}
                />
              </div>
            </div>
            <div className="dashboard_item col_2">
          <div className="dashboard_child">

          	<div className="performance_flex">
	            <Search
	              variant="fill"
	              value={saleSearchQuery}
	              icon={<Icons.TbSearch />}
	              onChange={handleSaleSearchChange}
	            />
          		<strong>Total Result: ({filteredSaleData.length.toString().padStart(3, "0")})</strong>
          	</div>
            <div className="table_responsive">
              <table>
                <thead>
                  <tr>
                    <th>Advertiser</th>
                    <th>Transactions</th>
                    <th>Sale Amount</th>
                    <th>Commission</th>
                    <th>Avg. Payout</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSaleData.map((item) => (
                    <tr key={item.advertiser_id}>
                      <td>
                        <Link to={`/admin/advertisers/new-advertisers/${item.advertiser_id.toString()}`}>
                        	{item.advertiser_name}
                        </Link>
                      </td>
                      <td>{item.transactions}</td>
                      <td>${item.saleAmount.toFixed(2)}</td>
                      <td>${item.commission.toFixed(2)}</td>
                      <td>${item.avgPayout.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="dashboard_item col_2">
          <div className="dashboard_child">
          	<div className="performance_flex">
	            <Search
	              variant="fill"
	              value={clickSearchQuery}
	              icon={<Icons.TbSearch />}
	              onChange={handleClickSearchChange}
	            />
          		<strong>Total Result: ({filteredClickData.length.toString().padStart(3, "0")})</strong>
          	</div>
            <div className="table_responsive">
              <table>
                <thead>
                  <tr>
                    <th>Advertiser</th>
                    <th>Transactions</th>
                    <th>Clicks</th>
                    <th>Conversion Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredClickData.map((item) => (
                    <tr key={item.advertiser_id}>
                      <td>
                        <Link to={`/admin/advertisers/new-advertisers/${item.advertiser_id.toString()}`}>
                        	{item.advertiser_name}
                        </Link>
                      </td>
                      <td>{item.transactions}</td>
                      <td>{item.clicks}</td>
                      <td>{item.conversionRatio}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
