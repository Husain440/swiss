import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

const options = {
    maxDate: new Date(),
    mode: 'range',
    altInputClass: 'hide',
    dateFormat: 'M d Y',
    minDate: new Date('01-01-2018'),
    wrap: true,
}


export default function Home() {
    return (
        <>
            {/* <!-- Begin page --> */}
            <div id="wrapper">
                {/* <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== --> */}

                <div className="content-page">
                    <div className="content">

                        {/* <!-- Start Content--> */}
                        <div className="container-fluid">

                            {/* <!-- start page title --> */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <form className="d-flex align-items-center mb-3">
                                                <div className="input-group input-group-sm">
                                                    {/* <input type="text" className="form-control border" id="dash-daterange"/> */}
                                                    <Flatpickr
                                                        data-input
                                                        options={options}
                                                    >
                                                        
                                                        <input type="text" className="form-control border" id="dash-daterange" placeholder="Select Date.."  data-input />
                                                    </Flatpickr>
                                                    <span className="input-group-text bg-blue border-blue text-white">
                                                        <i className="mdi mdi-calendar-range"></i>
                                                    </span>
                                                </div>
                                                <Link to="javascript: void(0);" className="btn btn-blue btn-sm ms-2">
                                                    <i className="mdi mdi-autorenew"></i>
                                                </Link>
                                                <Link to="javascript: void(0);" className="btn btn-blue btn-sm ms-1">
                                                    <i className="mdi mdi-filter-variant"></i>
                                                </Link>
                                            </form>
                                        </div>
                                        <h4 className="page-title">Dashboard</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end page title -->  */}

                            <div className="row">
                                <div className="col-md-6 col-xl-3">
                                    <div className="widget-rounded-circle card">
                                        <div className="card-body" style={{ marginTop: "45px" }}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="avatar-lg rounded-circle bg-soft-primary border-primary border">
                                                        <i className="fe-heart font-22 avatar-title text-primary"></i>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="text-end">
                                                        <h3 className="text-dark mt-1">$<span data-plugin="counterup">58,947</span></h3>
                                                        <p className="text-muted mb-1 text-truncate">Total Revenue</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end row--> */}
                                        </div>
                                    </div>
                                    {/* <!-- end widget-rounded-circle--> */}
                                </div>
                                {/* <!-- end col--> */}

                                <div className="col-md-6 col-xl-3">
                                    <div className="widget-rounded-circle card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="avatar-lg rounded-circle bg-soft-success border-success border">
                                                        <i className="fe-shopping-cart font-22 avatar-title text-success"></i>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="text-end">
                                                        <h3 className="text-dark mt-1"><span data-plugin="counterup">127</span></h3>
                                                        <p className="text-muted mb-1 text-truncate">Today's Sales</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end row--> */}
                                        </div>
                                    </div>
                                    {/* <!-- end widget-rounded-circle--> */}
                                </div>
                                {/* <!-- end col--> */}

                                <div className="col-md-6 col-xl-3">
                                    <div className="widget-rounded-circle card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="avatar-lg rounded-circle bg-soft-info border-info border">
                                                        <i className="fe-bar-chart-line- font-22 avatar-title text-info"></i>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="text-end">
                                                        <h3 className="text-dark mt-1"><span data-plugin="counterup">0.58</span>%</h3>
                                                        <p className="text-muted mb-1 text-truncate">Conversion</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end row--> */}
                                        </div>
                                    </div>
                                    {/* <!-- end widget-rounded-circle--> */}
                                </div>
                                {/* <!-- end col--> */}

                                <div className="col-md-6 col-xl-3">
                                    <div className="widget-rounded-circle card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="avatar-lg rounded-circle bg-soft-warning border-warning border">
                                                        <i className="fe-eye font-22 avatar-title text-warning"></i>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="text-end">
                                                        <h3 className="text-dark mt-1"><span data-plugin="counterup">78.41</span>k</h3>
                                                        <p className="text-muted mb-1 text-truncate">Today's Visits</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end row--> */}
                                        </div>
                                    </div>
                                    {/* <!-- end widget-rounded-circle--> */}
                                </div>
                                {/* <!-- end col--> */}
                            </div>
                            {/* <!-- end row--> */}

                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <Link to="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Sales Report</Link>
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Export Report</Link>
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Profit</Link>
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Action</Link>
                                                </div>
                                            </div>

                                            <h4 className="header-title mb-0">Total Revenue</h4>

                                            <div className="widget-chart text-center" dir="ltr">

                                                <div id="total-revenue" className="mt-0" data-colors="#f86262"></div>

                                                <h5 className="text-muted mt-0">Total sales made today</h5>
                                                <h2>$178</h2>

                                                <p className="text-muted w-75 mx-auto sp-line-2">Traditional heading elements are designed to work best in the meat of your page content.</p>

                                                <div className="row mt-3">
                                                    <div className="col-4">
                                                        <p className="text-muted font-15 mb-1 text-truncate">Target</p>
                                                        <h4><i className="fe-arrow-down text-danger me-1"></i>$7.8k</h4>
                                                    </div>
                                                    <div className="col-4">
                                                        <p className="text-muted font-15 mb-1 text-truncate">Last week</p>
                                                        <h4><i className="fe-arrow-up text-success me-1"></i>$1.4k</h4>
                                                    </div>
                                                    <div className="col-4">
                                                        <p className="text-muted font-15 mb-1 text-truncate">Last Month</p>
                                                        <h4><i className="fe-arrow-down text-danger me-1"></i>$15k</h4>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card --> */}
                                </div>
                                {/* <!-- end col--> */}

                                <div className="col-lg-8">
                                    <div className="card">
                                        <div className="card-body pb-2">
                                            <div className="float-end d-none d-md-inline-block">
                                                <div className="btn-group mb-2">
                                                    <button type="button" className="btn btn-xs btn-light">Today</button>
                                                    <button type="button" className="btn btn-xs btn-light">Weekly</button>
                                                    <button type="button" className="btn btn-xs btn-secondary">Monthly</button>
                                                </div>
                                            </div>

                                            <h4 className="header-title mb-3">Sales Analytics</h4>

                                            <div dir="ltr">
                                                <div id="sales-analytics" className="mt-4" data-colors="#3283f6,#43bee1"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end card --> */}
                                </div>
                                {/* <!-- end col--> */}
                            </div>
                            {/* <!-- end row --> */}

                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <Link to="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Edit Report</Link>
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Export Report</Link>
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Action</Link>
                                                </div>
                                            </div>

                                            <h4 className="header-title mb-3">Top 5 Users Balances</h4>

                                            <div className="table-responsive">
                                                <table className="table table-borderless table-hover table-nowrap table-centered m-0">

                                                    <thead className="table-light">
                                                        <tr>
                                                            <th colSpan="2">Profile</th>
                                                            <th>Currency</th>
                                                            <th>Balance</th>
                                                            <th>Reserved in orders</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ width: "36px" }}>
                                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-2.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                            </td>

                                                            <td>
                                                                <h5 className="m-0 fw-normal">Tomaslau</h5>
                                                                <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                            </td>

                                                            <td>
                                                                <i className="mdi mdi-currency-btc text-primary"></i> BTC
                                                            </td>

                                                            <td>
                                                                0.00816117 BTC
                                                            </td>

                                                            <td>
                                                                0.00097036 BTC
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></Link>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-secondary"><i className="mdi mdi-minus"></i></Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td style={{ width: "36px" }}>
                                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-3.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                            </td>

                                                            <td>
                                                                <h5 className="m-0 fw-normal">Erwin E. Brown</h5>
                                                                <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                            </td>

                                                            <td>
                                                                <i className="mdi mdi-currency-eth text-primary"></i> ETH
                                                            </td>

                                                            <td>
                                                                3.16117008 ETH
                                                            </td>

                                                            <td>
                                                                1.70360009 ETH
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></Link>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-secondary"><i className="mdi mdi-minus"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "36px" }}>
                                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-4.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                            </td>

                                                            <td>
                                                                <h5 className="m-0 fw-normal">Margeret V. Ligon</h5>
                                                                <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                            </td>

                                                            <td>
                                                                <i className="mdi mdi-currency-eur text-primary"></i> EUR
                                                            </td>

                                                            <td>
                                                                25.08 EUR
                                                            </td>

                                                            <td>
                                                                12.58 EUR
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></Link>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-secondary"><i className="mdi mdi-minus"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "36px" }}>
                                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-5.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                            </td>

                                                            <td>
                                                                <h5 className="m-0 fw-normal">Jose D. Delacruz</h5>
                                                                <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                            </td>

                                                            <td>
                                                                <i className="mdi mdi-currency-cny text-primary"></i> CNY
                                                            </td>

                                                            <td>
                                                                82.00 CNY
                                                            </td>

                                                            <td>
                                                                30.83 CNY
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></Link>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-secondary"><i className="mdi mdi-minus"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: "36px" }}>
                                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-6.jpg"} alt="contact-img" title="contact-img" className="rounded-circle avatar-sm" />
                                                            </td>

                                                            <td>
                                                                <h5 className="m-0 fw-normal">Luke J. Sain</h5>
                                                                <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                                            </td>

                                                            <td>
                                                                <i className="mdi mdi-currency-btc text-primary"></i> BTC
                                                            </td>

                                                            <td>
                                                                2.00816117 BTC
                                                            </td>

                                                            <td>
                                                                1.00097036 BTC
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-plus"></i></Link>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-secondary"><i className="mdi mdi-minus"></i></Link>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end col --> */}

                                <div className="col-xl-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="dropdown float-end">
                                                <Link to="#" className="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="mdi mdi-dots-vertical"></i>
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Edit Report</Link>
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Export Report</Link>
                                                    {/* <!-- item--> */}
                                                    <Link to="javascript:void(0);" className="dropdown-item">Action</Link>
                                                </div>
                                            </div>

                                            <h4 className="header-title mb-3">Revenue History</h4>

                                            <div className="table-responsive">
                                                <table className="table table-borderless table-nowrap table-hover table-centered m-0">

                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Marketplaces</th>
                                                            <th>Date</th>
                                                            <th>Payouts</th>
                                                            <th>Status</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h5 className="m-0 fw-normal">Themes Market</h5>
                                                            </td>

                                                            <td>
                                                                Oct 15, 2018
                                                            </td>

                                                            <td>
                                                                $5848.68
                                                            </td>

                                                            <td>
                                                                <span className="badge bg-soft-warning text-warning">Upcoming</span>
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <h5 className="m-0 fw-normal">Freelance</h5>
                                                            </td>

                                                            <td>
                                                                Oct 12, 2018
                                                            </td>

                                                            <td>
                                                                $1247.25
                                                            </td>

                                                            <td>
                                                                <span className="badge bg-soft-success text-success">Paid</span>
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <h5 className="m-0 fw-normal">Share Holding</h5>
                                                            </td>

                                                            <td>
                                                                Oct 10, 2018
                                                            </td>

                                                            <td>
                                                                $815.89
                                                            </td>

                                                            <td>
                                                                <span className="badge bg-soft-success text-success">Paid</span>
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <h5 className="m-0 fw-normal">Envato's Affiliates</h5>
                                                            </td>

                                                            <td>
                                                                Oct 03, 2018
                                                            </td>

                                                            <td>
                                                                $248.75
                                                            </td>

                                                            <td>
                                                                <span className="badge bg-soft-danger text-danger">Overdue</span>
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <h5 className="m-0 fw-normal">Marketing Revenue</h5>
                                                            </td>

                                                            <td>
                                                                Sep 21, 2018
                                                            </td>

                                                            <td>
                                                                $978.21
                                                            </td>

                                                            <td>
                                                                <span className="badge bg-soft-warning text-warning">Upcoming</span>
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></Link>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <h5 className="m-0 fw-normal">Advertise Revenue</h5>
                                                            </td>

                                                            <td>
                                                                Sep 15, 2018
                                                            </td>

                                                            <td>
                                                                $358.10
                                                            </td>

                                                            <td>
                                                                <span className="badge bg-soft-success text-success">Paid</span>
                                                            </td>

                                                            <td>
                                                                <Link to="javascript: void(0);" className="btn btn-xs btn-light"><i className="mdi mdi-pencil"></i></Link>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* <!-- end .table-responsive--> */}
                                        </div>
                                    </div>
                                    {/* <!-- end card--> */}
                                </div>
                                {/* <!-- end col --> */}
                            </div>
                            {/* <!-- end row --> */}

                        </div>
                        {/* <!-- container --> */}

                    </div>
                    {/* <!-- content --> */}

                    {/* <!-- Footer Start --> */}
                    <footer className="footer" >
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <script>document.write(new Date().getFullYear())</script> &copy; UBold theme by <Link to="">Coderthemes</Link>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-md-end footer-links d-none d-sm-block">
                                        <Link to="javascript:void(0);">About Us</Link>
                                        <Link to="javascript:void(0);">Help</Link>
                                        <Link to="javascript:void(0);">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* <!-- end Footer --> */}

                </div>

                {/* <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


            <!-- Right Sidebar --> */}
                <div className="right-bar">
                    <div data-simplebar className="h-100">

                        {/* <!-- Nav tabs --> */}
                        <ul className="nav nav-tabs nav-bordered nav-justified" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link py-2" data-bs-toggle="tab" to="#chat-tab" role="tab">
                                    <i className="mdi mdi-message-text d-block font-22 my-1"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link py-2" data-bs-toggle="tab" to="#tasks-tab" role="tab">
                                    <i className="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link py-2 active" data-bs-toggle="tab" to="#settings-tab" role="tab">
                                    <i className="mdi mdi-cog-outline d-block font-22 my-1"></i>
                                </Link>
                            </li>
                        </ul>

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content pt-0">
                            <div className="tab-pane" id="chat-tab" role="tabpanel">

                                <form className="search-bar p-3">
                                    <div className="position-relative">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <span className="mdi mdi-magnify"></span>
                                    </div>
                                </form>

                                <h6 className="fw-medium px-3 mt-2 text-uppercase">Group Chats</h6>

                                <div className="p-2">
                                    <Link to="javascript: void(0);" className="text-reset notification-item ps-3 mb-2 d-block">
                                        <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-success"></i>
                                        <span className="mb-0 mt-1">App Development</span>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item ps-3 mb-2 d-block">
                                        <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-warning"></i>
                                        <span className="mb-0 mt-1">Office Work</span>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item ps-3 mb-2 d-block">
                                        <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-danger"></i>
                                        <span className="mb-0 mt-1">Personal Group</span>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item ps-3 d-block">
                                        <i className="mdi mdi-checkbox-blank-circle-outline me-1"></i>
                                        <span className="mb-0 mt-1">Freelance</span>
                                    </Link>
                                </div>

                                <h6 className="fw-medium px-3 mt-3 text-uppercase">Favourites <Link to="javascript: void(0);" className="font-18 text-danger"><i className="float-end mdi mdi-plus-circle"></i></Link></h6>

                                <div className="p-2">
                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-10.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status online"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Andrew Mackie</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">It will seem like simplified English.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-1.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status away"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Rory Dalyell</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">To an English person, it will seem like simplified</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-9.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status busy"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Jaxon Dunhill</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">To achieve this, it would be necessary.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <h6 className="fw-medium px-3 mt-3 text-uppercase">Other Chats <Link to="javascript: void(0);" className="font-18 text-danger"><i className="float-end mdi mdi-plus-circle"></i></Link></h6>

                                <div className="p-2 pb-4">
                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-2.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status online"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Jackson Therry</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">Everyone realizes why a new common language.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-4.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status away"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Charles Deakin</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">The languages only differ in their grammar.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-5.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status online"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Ryan Salting</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">If several languages coalesce the grammar of the resulting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-6.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status online"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Sean Howse</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">It will seem like simplified English.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-7.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status busy"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Dean Coward</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">The new common language will be more simple.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset notification-item">
                                        <div className="d-flex align-items-start noti-user-item">
                                            <div className="position-relative me-2">
                                                <img src={process.env.PUBLIC_URL + "../assets/images/users/user-8.jpg"} className="rounded-circle avatar-sm" alt="user-pic" />
                                                <i className="mdi mdi-circle user-status away"></i>
                                            </div>
                                            <div className="overflow-hidden">
                                                <h6 className="mt-0 mb-1 font-14">Hayley East</h6>
                                                <div className="font-13 text-muted">
                                                    <p className="mb-0 text-truncate">One could refuse to pay expensive translators.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="text-center mt-3">
                                        <Link to="javascript:void(0);" className="btn btn-sm btn-white">
                                            <i className="mdi mdi-spin mdi-loading me-2"></i>
                                            Load more
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            <div className="tab-pane" id="tasks-tab" role="tabpanel">
                                <h6 className="fw-medium p-3 m-0 text-uppercase">Working Tasks</h6>
                                <div className="px-2">
                                    <Link to="javascript: void(0);" className="text-reset item-hovered d-block p-2">
                                        <p className="text-muted mb-0">App Development<span className="float-end">75%</span></p>
                                        <div className="progress mt-2" style={{ height: "4px" }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "75%", ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset item-hovered d-block p-2">
                                        <p className="text-muted mb-0">Database Repair<span className="float-end">37%</span></p>
                                        <div className="progress mt-2" style={{ height: "4px" }}>
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "37%", ariaValuenow: "37", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset item-hovered d-block p-2">
                                        <p className="text-muted mb-0">Backup Create<span className="float-end">52%</span></p>
                                        <div className="progress mt-2" style={{ height: "4px" }}>
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "52%", ariaValuenow: "52", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                        </div>
                                    </Link>
                                </div>

                                <h6 className="fw-medium px-3 mb-0 mt-4 text-uppercase">Upcoming Tasks</h6>

                                <div className="p-2">
                                    <Link to="javascript: void(0);" className="text-reset item-hovered d-block p-2">
                                        <p className="text-muted mb-0">Sales Reporting<span className="float-end">12%</span></p>
                                        <div className="progress mt-2" style={{ height: "4px" }}>
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "12%", ariaValuenow: "12", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset item-hovered d-block p-2">
                                        <p className="text-muted mb-0">Redesign Website<span className="float-end">67%</span></p>
                                        <div className="progress mt-2" style={{ height: "4px" }}>
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: "67%", ariaValuenow: "67", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                        </div>
                                    </Link>

                                    <Link to="javascript: void(0);" className="text-reset item-hovered d-block p-2">
                                        <p className="text-muted mb-0">New Admin Design<span className="float-end">84%</span></p>
                                        <div className="progress mt-2" style={{ height: "4px" }}>
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "84%", ariaValuenow: "84", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="p-3 mt-2 d-grid">
                                    <Link to="javascript: void(0);" className="btn btn-success waves-effect waves-light">Create Task</Link>
                                </div>

                            </div>
                            <div className="tab-pane active" id="settings-tab" role="tabpanel">
                                <h6 className="fw-medium px-3 m-0 py-2 font-13 text-uppercase bg-light">
                                    <span className="d-block py-1">Theme Settings</span>
                                </h6>

                                <div className="p-3">
                                    <div className="alert alert-warning" role="alert">
                                        <strong>Customize </strong> the overall color scheme, sidebar menu, etc.
                                    </div>

                                    <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Color Scheme</h6>
                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="color-scheme-mode" value="light"
                                            id="light-mode-check" />
                                        <label className="form-check-label" htmlFor="light-mode-check">Light Mode</label>
                                    </div>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="color-scheme-mode" value="dark"
                                            id="dark-mode-check" />
                                        <label className="form-check-label" htmlFor="dark-mode-check">Dark Mode</label>
                                    </div>

                                    {/* <!-- Width --> */}
                                    <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Width</h6>
                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="width" value="fluid" id="fluid-check" />
                                        <label className="form-check-label" htmlFor="fluid-check">Fluid</label>
                                    </div>
                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="width" value="boxed" id="boxed-check" />
                                        <label className="form-check-label" htmlFor="boxed-check">Boxed</label>
                                    </div>

                                    {/* <!-- Menu positions --> */}
                                    <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Layout Positon</h6>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="menus-position" value="fixed" id="fixed-check"
                                        />
                                        <label className="form-check-label" htmlFor="fixed-check">Fixed</label>
                                    </div>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="menus-position" value="scrollable"
                                            id="scrollable-check" />
                                        <label className="form-check-label" htmlFor="scrollable-check">Scrollable</label>
                                    </div>

                                    {/* <!-- Topbar --> */}
                                    <h6 className="fw-medium font-14 mt-4 mb-2 pb-1">Topbar</h6>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="topbar-color" value="dark" id="darktopbar-check"
                                        />
                                        <label className="form-check-label" htmlFor="darktopbar-check">Dark</label>
                                    </div>

                                    <div className="form-check form-switch mb-1">
                                        <input type="checkbox" className="form-check-input" name="topbar-color" value="light" id="lighttopbar-check" />
                                        <label className="form-check-label" htmlFor="lighttopbar-check">Light</label>
                                    </div>


                                    <div className="d-grid mt-4">
                                        <button className="btn btn-primary" id="resetBtn">Reset to Default</button>
                                        <Link to="https://1.envato.market/uboldadmin" className="btn btn-danger mt-3" target="_blank"><i className="mdi mdi-basket me-1"></i> Purchase Now</Link>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <!-- end slimscroll-menu--> */}
                </div>
                {/* <!-- /Right-bar -->

        <!-- Right bar overlay--> */}
                <div className="rightbar-overlay"></div>

                <Helmet>

                    {/* <!-- Vendor js --> */}
                    <script src="../assets/js/vendor.min.js"></script>

                    {/* <!-- Plugins js--> */}
                    {/* <script src="../assets/libs/apexcharts/apexcharts.min.js"></script> */}

                    <script src="../assets/libs/selectize/js/standalone/selectize.min.js"></script>

                    {/* <!-- Dashboar 1 init js--> */}
                    <script src="../assets/js/pages/dashboard-1.init.js"></script>

                    {/* <!-- App js--> */}
                    <script src="../assets/js/app.min.js"></script>


                </Helmet>
            </div>
        </>
    )
}
