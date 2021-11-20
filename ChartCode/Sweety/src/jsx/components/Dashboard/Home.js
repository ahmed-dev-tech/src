import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, { useContext, useEffect } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import QuickTransferSlider from "../kripton/Home/QuickTransferSlider";
import Widget1 from "../kripton/Home/WidgetChart1";
import Widget2 from "../kripton/Home/WidgetChart2";
import Widget3 from "../kripton/Home/WidgetChart3";
import Widget4 from "../kripton/Home/WidgetChart4";
import Datafeed from './widgets/datafeed';
const MarketOverview = loadable(() =>
  pMinDelay(import("../kripton/Home/MarketOverview"), 1000)
);
const MarketOverviewDark = loadable(() =>
  pMinDelay(import("../kripton/Home/MarketOverviewDark"), 1000)
);
const CryptoStatistics = loadable(() =>
  pMinDelay(import("../kripton/Home/CryptoStatistics"), 1000)
);
const CryptoStatisticsDark = loadable(() =>
  pMinDelay(import("../kripton/Home/CryptoStatisticsDark"), 1000)
);

window.tvWidget = new TradingView.widget({
	symbol: 'Bitfinex:BTC/USD', // default symbol
	interval: '1D', // default interval
	fullscreen: true, // displays the chart in the fullscreen mode
	container: 'tv_chart_container',
	datafeed: Datafeed,
	library_path: '../charting_library_clonned_data/charting_library/',
});

const Home = () => {
  const { changeBackground, background } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);
  // console.log(background.value === "dark");
  return (
    <div className="row">
      <div className="col-xl-12 col-xxl-12">
        <div className="card">
          <div className="card-header d-sm-flex d-block pb-0 border-0">
            <div class="tradingview-widget-container">
              <div id="tv_chart_container"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12 col-xxl-12">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="mb-0 text-black fs-20">Sell Order</h4>
                <Dropdown className="dropdown ml-auto">
                  <Dropdown.Toggle
                    variant=""
                    className="btn-link i-false p-0"
                    data-toggle="dropdown"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={12} cy={5} r={2} />
                        <circle fill="#000000" cx={12} cy={12} r={2} />
                        <circle fill="#000000" cx={12} cy={19} r={2} />
                      </g>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdown-menu dropdown-menu-right"
                    alignRight={true}
                  >
                    <Link className="dropdown-item" to="#">
                      Edit
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Delete
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-body p-3">
                <Dropdown className="dropdown custom-dropdown d-block">
                  <Dropdown.Toggle
                    variant=""
                    as="div"
                    className="btn  i-false d-flex align-items-center border-0 order-bg rounded "
                    data-toggle="dropdown"
                  >
                    <svg
                      width={42}
                      height={42}
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 9.15527e-05C9.4021 9.15527e-05 9.15527e-05 9.4021 9.15527e-05 21C9.15527e-05 32.5979 9.4021 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9871 9.40759 32.5924 0.0129089 21 9.15527e-05ZM12.3281 19.4999H18.328C19.1566 19.4999 19.8281 20.1714 19.8281 21C19.8281 21.8286 19.1566 22.5001 18.328 22.5001H12.3281C11.4996 22.5001 10.828 21.8286 10.828 21C10.828 20.1714 11.5 19.4999 12.3281 19.4999ZM31.0841 17.3658L29.28 26.392C28.8552 28.4872 27.0155 29.9951 24.8777 30.0001H12.3281C11.4996 30.0001 10.828 29.3286 10.828 28.5C10.828 27.6714 11.5 26.9999 12.3281 26.9999H24.8777C25.5868 26.9981 26.197 26.4982 26.338 25.8033L28.1425 16.7771C28.3027 15.9715 27.7799 15.1887 26.9747 15.0285C26.8791 15.0097 26.782 15.0001 26.685 15.0001H15.3283C14.4998 15.0001 13.8282 14.3286 13.8282 13.5C13.8282 12.6714 14.4998 11.9999 15.3283 11.9999H26.685C29.1633 12.0008 31.1715 14.0099 31.1711 16.4883C31.1711 16.7826 31.1418 17.0765 31.0841 17.3658Z"
                        fill="#3693FF"
                      />
                    </svg>
                    <div className="text-left ml-3">
                      <span className="d-block fs-16 text-black">
                        Dash Coin
                      </span>
                    </div>
                    <i className="fa fa-angle-down scale5 ml-auto" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    alignRight={true}
                    className="dropdown-menu dropdown-menu-right"
                    alignRight={true}
                  >
                    <Link className="dropdown-item" to="/">
                      Bitcoin
                    </Link>
                    <Link className="dropdown-item" to="/">
                      ETH coin
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="table-responsive">
                  <table className="table text-center bg-info-hover tr-rounded">
                    <thead>
                      <tr>
                        <th className="text-left">Price</th>
                        <th className="text-center">Amount</th>
                        <th className="text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">82.3</td>
                        <td>0.15</td>
                        <td className="text-right">$134,12</td>
                      </tr>
                      <tr>
                        <td className="text-left">83.9</td>
                        <td>0.18</td>
                        <td className="text-right">$237,31</td>
                      </tr>
                      <tr>
                        <td className="text-left">84.2</td>
                        <td>0.25</td>
                        <td className="text-right">$252,58</td>
                      </tr>
                      <tr>
                        <td className="text-left">86.2</td>
                        <td>0.35</td>
                        <td className="text-right">$126,26</td>
                      </tr>
                      <tr>
                        <td className="text-left">91.6</td>
                        <td>0.75</td>
                        <td className="text-right">$46,92</td>
                      </tr>
                      <tr>
                        <td className="text-left">92.6</td>
                        <td>0.21</td>
                        <td className="text-right">$123,27</td>
                      </tr>
                      <tr>
                        <td className="text-left">93.9</td>
                        <td>0.55</td>
                        <td className="text-right">$212,56</td>
                      </tr>
                      <tr>
                        <td className="text-left">94.2</td>
                        <td>0.18</td>
                        <td className="text-right">$129,26</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer border-0 pt-0 text-center">
                <Link to="coin-details" className="btn-link">
                  Show more <i className="fa fa-caret-right ml-2 scale-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="mb-0 text-black fs-20">Buy Order</h4>
                <Dropdown className="dropdown ml-auto">
                  <Dropdown.Toggle
                    variant=""
                    className="i-false btn-link p-0"
                    data-toggle="dropdown"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <circle fill="#000000" cx={12} cy={5} r={2} />
                        <circle fill="#000000" cx={12} cy={12} r={2} />
                        <circle fill="#000000" cx={12} cy={19} r={2} />
                      </g>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="dropdown-menu dropdown-menu-right"
                    alignRight={true}
                  >
                    <Link className="dropdown-item" to="#">
                      Edit
                    </Link>
                    <Link className="dropdown-item" to="#">
                      Delete
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="card-body p-3">
                <Dropdown className="dropdown custom-dropdown d-block">
                  <Dropdown.Toggle
                    variant=""
                    as="div"
                    className="btn  d-flex i-false align-items-center order-bg border-0 rounded"
                    data-toggle="dropdown"
                  >
                    <svg
                      width={42}
                      height={42}
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.5 16.5002C28.4986 14.844 27.156 13.5018 25.5003 13.5H16.5002V19.4999H25.5003C27.156 19.4985 28.4986 18.1559 28.5 16.5002Z"
                        fill="#FFAB2D"
                      />
                      <path
                        d="M16.5002 28.5H25.5003C27.1569 28.5 28.5 27.1569 28.5 25.5003C28.5 23.8432 27.1569 22.5001 25.5003 22.5001H16.5002V28.5Z"
                        fill="#FFAB2D"
                      />
                      <path
                        d="M21 9.15527e-05C9.40213 9.15527e-05 0.00012207 9.4021 0.00012207 21C0.00012207 32.5979 9.40213 41.9999 21 41.9999C32.5979 41.9999 41.9999 32.5979 41.9999 21C41.9867 9.40759 32.5924 0.0133667 21 9.15527e-05ZM31.5002 25.4998C31.4961 28.8122 28.8122 31.4961 25.5003 31.4997V32.9998C25.5003 33.8284 24.8283 34.4999 24.0002 34.4999C23.1717 34.4999 22.5001 33.8284 22.5001 32.9998V31.4997H19.5004V32.9998C19.5004 33.8284 18.8284 34.4999 18.0003 34.4999C17.1718 34.4999 16.5002 33.8284 16.5002 32.9998V31.4997H12.0004C11.1718 31.4997 10.5003 30.8282 10.5003 30.0001C10.5003 29.1715 11.1718 28.5 12.0004 28.5H13.5V13.5H12.0004C11.1718 13.5 10.5003 12.8285 10.5003 11.9999C10.5003 11.1714 11.1718 10.4998 12.0004 10.4998H16.5002V9.00018C16.5002 8.17163 17.1718 7.50009 18.0003 7.50009C18.8289 7.50009 19.5004 8.17163 19.5004 9.00018V10.4998H22.5001V9.00018C22.5001 8.17163 23.1717 7.50009 24.0002 7.50009C24.8288 7.50009 25.5003 8.17163 25.5003 9.00018V10.4998C28.7999 10.4861 31.486 13.1494 31.5002 16.4489C31.5075 18.1962 30.7499 19.8593 29.4265 21C30.7376 22.1279 31.4943 23.7699 31.5002 25.4998Z"
                        fill="#FFAB2D"
                      />
                    </svg>
                    <div className="text-left ml-3">
                      <span className="d-block fs-16 text-black">Bitcoin</span>
                    </div>
                    <i className="fa fa-angle-down scale5 ml-auto" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    alignRight={true}
                    className="dropdown-menu dropdown-menu-right"
                    alignRight={true}
                  >
                    <Link className="dropdown-item" to="/">
                      Dash coin
                    </Link>
                    <Link className="dropdown-item" to="/">
                      ETH coin
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="table-responsive">
                  <table className="table text-center bg-warning-hover tr-rounded">
                    <thead>
                      <tr>
                        <th className="text-left">Price</th>
                        <th className="text-center">Amount</th>
                        <th className="text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">82.3</td>
                        <td>0.15</td>
                        <td className="text-right">$134,12</td>
                      </tr>
                      <tr>
                        <td className="text-left">83.9</td>
                        <td>0.18</td>
                        <td className="text-right">$237,31</td>
                      </tr>
                      <tr>
                        <td className="text-left">84.2</td>
                        <td>0.25</td>
                        <td className="text-right">$252,58</td>
                      </tr>
                      <tr>
                        <td className="text-left">86.2</td>
                        <td>0.35</td>
                        <td className="text-right">$126,26</td>
                      </tr>
                      <tr>
                        <td className="text-left">91.6</td>
                        <td>0.75</td>
                        <td className="text-right">$46,92</td>
                      </tr>
                      <tr>
                        <td className="text-left">92.6</td>
                        <td>0.21</td>
                        <td className="text-right">$123,27</td>
                      </tr>
                      <tr>
                        <td className="text-left">93.9</td>
                        <td>0.55</td>
                        <td className="text-right">$212,56</td>
                      </tr>
                      <tr>
                        <td className="text-left">94.2</td>
                        <td>0.18</td>
                        <td className="text-right">$129,26</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer border-0 pt-0 text-center">
                <Link to="coin-details" className="btn-link">
                  Show more <i className="fa fa-caret-right ml-2 scale-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
