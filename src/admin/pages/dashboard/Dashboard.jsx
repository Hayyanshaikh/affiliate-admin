import React, { useState, useEffect } from "react";
import * as Icons from "react-icons/tb";
import { Link } from "react-router-dom";
import Bar from "../../components/charts/Bar.jsx";
import Area from "../../components/charts/Area.jsx";
import Advertisers from "../../api/Advertisers.json";
import Alert from "../../../components/comman/Alert.jsx";
import Button from "../../../components/comman/Button.jsx";
import AdvertisersSales from "../../api/AdvertisersSales.json";
import AdvertisersClicks from "../../api/AdvertisersClicks.json";
import ProgressBar from "../../../components/comman/ProgressBar.jsx";
import GenerateLink from "../../components/generate-link/GenerateLink.jsx";
import RoundedProgressBar from "../../../components/comman/RoundedProgressBar.jsx";
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [alertData, setAlertData] = useState({
    message: "",
    type: "",
    visible: false,
  });

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

  useEffect(() => {
    alert("login successfully", "success");
  }, [])
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const earningsData = {
    pending: Math.floor(Math.random() * 100),
    approved: Math.floor(Math.random() * 100),
    declined: Math.floor(Math.random() * 100),
  };

  const performanceOverview = [
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
  ];

  const advertiserData = [
    { name: "Joined Advertisers", count: 186 },
    { name: "Not Joined Advertisers", count: 7479 },
    { name: "Pending Advertisers", count: 22 },
    { name: "Rejected Advertisers", count: 6 },
  ];

  const saleAdvertizersData = AdvertisersSales.map(sale => {
    const advertiser = Advertisers.find(advertiser => sale.advertiser_id === advertiser.id);
    return { ...sale, advertiser };
  });

  const clickAdvertizersData = AdvertisersClicks.map(click => {
    const advertiser = Advertisers.find(advertiser => click.advertiser_id === advertiser.id);
    return { ...click, advertiser };
  });
  if (!isAuthenticated) {
    return <div className="">Checking Authenticated....</div>
  }
  else{
    return (
      <section className="dashbaord">
        <Alert
          message={alertData.message}
          type={alertData.type}
          onDismiss={handleDismiss}
          visible={alertData.visible}
        />
        <div className="container">
          <div className="dashboard_main">
            <div className="dashboard_wrapper">
              <div className="dashboard_item col_3">
                <div className="dashboard_child">
                  <div className="dashboard_child_item">
                    <div className="earn_content">
                      <h2 className="sub_heading">pending</h2>
                      <p className="slogan_text">Total Pending Commission</p>
                      <h1 className="earn_value">USD 6.31</h1>
                    </div>
                    <RoundedProgressBar
                      progress={earningsData.pending}
                      color="#FACA16"
                    />
                  </div>
                </div>
              </div>
              <div className="dashboard_item col_3">
                <div className="dashboard_child">
                  <div className="dashboard_child_item">
                    <div className="earn_content">
                      <h2 className="sub_heading">Approved</h2>
                      <p className="slogan_text">Currently Approved Commission</p>
                      <h1 className="earn_value">USD 6.31</h1>
                    </div>
                    <RoundedProgressBar
                      progress={earningsData.approved}
                      color="#50C878"
                    />
                  </div>
                </div>
              </div>
              <div className="dashboard_item col_3">
                <div className="dashboard_child">
                  <div className="dashboard_child_item">
                    <div className="earn_content">
                      <h2 className="sub_heading">Declined</h2>
                      <p className="slogan_text">Total Pending Commission</p>
                      <h1 className="earn_value">USD 6.31</h1>
                    </div>
                    <RoundedProgressBar
                      progress={earningsData.declined}
                      color="#ED2939"
                    />
                  </div>
                </div>
              </div>
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
              <div className="dashboard_item col_3">
                <div className="dashboard_child col_1">
                  <h2 className="sub_heading">Account Summary</h2>
                  <ul className="acc_summary">
                    {advertiserData.map((item) => (
                      <li key={item.name}>
                        <p>{item.name}</p>
                        <span>
                          {item.count < 9 ? `0${item.count}` : item.count}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="dashboard_item col_3">
                <div className="dashboard_child col_1">
                  <h2 className="sub_heading">Top Advertisers By Sales</h2>
                  <div className="advertiser_sales">
                    {saleAdvertizersData.slice(0, 3).map((advertiser, key) => (
                      <div className="advertiser_sale" key={key}>
                        <div className="advertiser_sale_profile">
                          <figure className="advertiser_sale_img">
                            <img src={advertiser.advertiser.imgSrc} alt="" />
                          </figure>
                          <div className="advertiser_sale_content">
                            <h4>{advertiser.advertiser.title}</h4>
                            <span>
                              {advertiser.transactions}
                            </span>
                          </div>
                        </div>
                        <div className="advertiser_sale_price">USD {advertiser.saleAmount.toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="dashboard_item col_3">
                <div className="dashboard_child col_1">
                  <h2 className="sub_heading">Top Advertisers By Clicks</h2>
                  <div className="advertiser_sales">
                    {clickAdvertizersData.slice(0, 3).map((advertiser, key) => (
                      <div className="advertiser_sale" key={key}>
                        <div className="advertiser_sale_profile">
                          <figure className="advertiser_sale_img">
                            <img src={advertiser.advertiser.imgSrc} alt="" />
                          </figure>
                          <div className="advertiser_sale_content">
                            <h4>{advertiser.advertiser.title}</h4>
                            <span>
                              {advertiser.transactions}
                            </span>
                          </div>
                        </div>
                        <div className="advertiser_sale_price">Clicks: {advertiser.clicks}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="dashboard_item col_2">
                <div className="dashboard_child">
                  <GenerateLink />
                </div>
              </div>
              <div className="dashboard_item col_2">
                <div className="dashboard_child">
                  <div className="table_responsive">
                    <table>
                      <thead>
                        <tr>
                          <th>Advertiser</th>
                          <th>Commission</th>
                          <th>Region</th>
                          <th>APC</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {Advertisers.filter(
                          (notJoined) => notJoined.isJoined === false
                        ).map((advertiser, key) => (
                          <tr key={key}>
                            <td>
                              <div className="advertiser_sale_profile">
                                <figure className="advertiser_sale_img">
                                  <img src={advertiser.imgSrc} alt="" />
                                </figure>
                                <div className="advertiser_sale_content">
                                  <h4>{advertiser.title}</h4>
                                  <span>
                                    {advertiser.isJoined
                                      ? "Joined"
                                      : "Not Joined"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>{advertiser.commission}</td>
                            <td>{advertiser.region}</td>
                            <td>{advertiser.apc} Days</td>
                            <td>
                              <Link
                                to={`/admin/advertisers/new-advertisers/${advertiser.id}`}
                                className="button button-fill bg_light_success"
                              >
                                <span>Apply</span>
                              </Link>
                            </td>
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
  }
};

export default Dashboard;
