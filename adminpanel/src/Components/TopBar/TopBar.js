import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../../api/apiHandler';
import Swal from 'sweetalert2';
import { logOutRedirectCall } from '../Pages/Common/RedirectPathMange';

export default function TopBar() {

  const logoutadmin = () => {
    var id = localStorage.getItem("id");
    console.log("hhhhhhhh",id)
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
            logout({ "admin_id": id})
            .then((response) => {  
              console.log("TTTTT")          
                logOutRedirectCall();  
            }).catch(err => console.log(err));
        }
      })
}

  return (
    <>
    
     {/* <!-- Begin page --> */}
        {/* <div id="wrapper"> */}
        {/* <!-- Topbar Start --> */}
<div className="navbar-custom">
    <div className="container-fluid">
        <ul className="list-unstyled topnav-menu float-end mb-0">

            <li className="d-none d-lg-block">
                <form className="app-search">
                    <div className="app-search-box dropdown">
                        <div className="input-group">
                            <input type="search" className="form-control" placeholder="Search..." id="top-search"/>
                            <button className="btn input-group-text" type="submit">
                                <i className="fe-search"></i>
                            </button>
                        </div>
                        <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                            {/* <!-- item--> */}
                            <div className="dropdown-header noti-title">
                                <h5 className="text-overflow mb-2">Found 22 results</h5>
                            </div>
            
                            {/* <!-- item--> */}
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-home me-1"></i>
                                <span>Analytics Report</span>
                            </Link>
            
                            {/* <!-- item--> */}
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-aperture me-1"></i>
                                <span>How can I help you?</span>
                            </Link>
                            
                            {/* <!-- item--> */}
                            <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="fe-settings me-1"></i>
                                <span>User profile settings</span>
                            </Link>

                            {/* <!-- item--> */}
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                            </div>

                            <div className="notification-list">
                                {/* <!-- item--> */}
                                <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="d-flex align-items-start">
                                        <img className="d-flex me-2 rounded-circle" src="../assets/images/users/user-2.jpg" alt="Generic placeholder image" height="32"/>
                                        <div className="w-100">
                                            <h5 className="m-0 font-14">Erwin E. Brown</h5>
                                            <span className="font-12 mb-0">UI Designer</span>
                                        </div>
                                    </div>
                                </Link>

                                {/* <!-- item--> */}
                                <Link to="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="d-flex align-items-start">
                                        <img className="d-flex me-2 rounded-circle" src={process.env.PUBLIC_URL+"../assets/images/users/user-5.jpg"} alt="Generic placeholder image" height="32"/>
                                        <div className="w-100">
                                            <h5 className="m-0 font-14">Jacob Deo</h5>
                                            <span className="font-12 mb-0">Developer</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
            
                        </div>  
                    </div>
                </form>
            </li>
    
            <li className="dropdown d-inline-block d-lg-none">
                <Link className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i className="fe-search noti-icon"></i>
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                    <form className="p-3">
                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                    </form>
                </div>
            </li>
    
            <li className="dropdown d-none d-lg-inline-block">
                <Link className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="fullscreen" to="#">
                    <i className="fe-maximize noti-icon"></i>
                </Link>
            </li>
    
            <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                <Link className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i className="fe-grid noti-icon"></i>
                </Link>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end">
    
                    <div className="p-lg-1">
                        <div className="row g-0">
                            <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={process.env.PUBLIC_URL+"../assets/images/brands/slack.png"} alt="slack"/>
                                    <span>Slack</span>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={process.env.PUBLIC_URL+"../assets/images/brands/github.png"} alt="Github"/>
                                    <span>GitHub</span>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={process.env.PUBLIC_URL+"../assets/images/brands/dribbble.png"} alt="dribbble"/>
                                    <span>Dribbble</span>
                                </Link>
                            </div>
                        </div>
    
                        <div className="row g-0">
                            <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={process.env.PUBLIC_URL+"../assets/images/brands/bitbucket.png"} alt="bitbucket"/>
                                    <span>Bitbucket</span>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={process.env.PUBLIC_URL+"../assets/images/brands/dropbox.png"} alt="dropbox"/>
                                    <span>Dropbox</span>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="dropdown-icon-item" to="#">
                                    <img src={process.env.PUBLIC_URL+"../assets/images/brands/g-suite.png"} alt="G Suite"/>
                                    <span>G Suite</span>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
    
                </div>
            </li>
    
            <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src={process.env.PUBLIC_URL+"../assets/images/flags/us.jpg"} alt="user-image" height="16"/>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <img src={process.env.PUBLIC_URL+"../assets/images/flags/germany.jpg"} alt="user-image" className="me-1" height="12"/> <span className="align-middle">German</span>
                    </Link>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <img src={process.env.PUBLIC_URL+"../assets/images/flags/italy.jpg"} alt="user-image" className="me-1" height="12"/> <span className="align-middle">Italian</span>
                    </Link>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <img src={process.env.PUBLIC_URL+"../assets/images/flags/spain.jpg"} alt="user-image" className="me-1" height="12"/> <span className="align-middle">Spanish</span>
                    </Link>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <img src={process.env.PUBLIC_URL+"../assets/images/flags/russia.jpg"} alt="user-image" className="me-1" height="12"/> <span className="align-middle">Russian</span>
                    </Link>
    
                </div>
            </li>
            
            <li className="dropdown notification-list topbar-dropdown">
                <Link className="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <i className="fe-bell noti-icon"></i>
                    <span className="badge bg-danger rounded-circle noti-icon-badge">9</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-end dropdown-lg">
    
                    {/* <!-- item--> */}
                    <div className="dropdown-item noti-title">
                        <h5 className="m-0">
                            <span className="float-end">
                                <Link to="" className="text-dark">
                                    <small>Clear All</small>
                                </Link>
                            </span>Notification
                        </h5>
                    </div>
    
                    <div className="noti-scroll" data-simplebar>
    
                        {/* <!-- item--> */}
                        <Link to="javascript:void(0);" className="dropdown-item notify-item active">
                            <div className="notify-icon">
                                <img src={process.env.PUBLIC_URL+"../assets/images/users/user-1.jpg"} className="img-fluid rounded-circle" alt="" /> </div>
                            <p className="notify-details">Cristina Pride</p>
                            <p className="text-muted mb-0 user-msg">
                                <small>Hi, How are you? What about our next meeting</small>
                            </p>
                        </Link>
    
                        {/* <!-- item--> */}
                        <Link to="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="notify-icon bg-primary">
                                <i className="mdi mdi-comment-account-outline"></i>
                            </div>
                            <p className="notify-details">Caleb Flakelar commented on Admin
                                <small className="text-muted">1 min ago</small>
                            </p>
                        </Link>
    
                        {/* <!-- item--> */}
                        <Link to="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="notify-icon">
                                <img src={process.env.PUBLIC_URL+"../assets/images/users/user-4.jpg"} className="img-fluid rounded-circle" alt="" /> </div>
                            <p className="notify-details">Karen Robinson</p>
                            <p className="text-muted mb-0 user-msg">
                                <small>Wow ! this admin looks good and awesome design</small>
                            </p>
                        </Link>
    
                        {/* <!-- item--> */}
                        <Link to="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="notify-icon bg-warning">
                                <i className="mdi mdi-account-plus"></i>
                            </div>
                            <p className="notify-details">New user registered.
                                <small className="text-muted">5 hours ago</small>
                            </p>
                        </Link>
    
                        {/* <!-- item--> */}
                        <Link to="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="notify-icon bg-info">
                                <i className="mdi mdi-comment-account-outline"></i>
                            </div>
                            <p className="notify-details">Caleb Flakelar commented on Admin
                                <small className="text-muted">4 days ago</small>
                            </p>
                        </Link>
    
                        {/* <!-- item--> */}
                        <Link to="javascript:void(0);" className="dropdown-item notify-item">
                            <div className="notify-icon bg-secondary">
                                <i className="mdi mdi-heart"></i>
                            </div>
                            <p className="notify-details">Carlos Crouch liked
                                <b>Admin</b>
                                <small className="text-muted">13 days ago</small>
                            </p>
                        </Link>
                    </div>
    
                    {/* <!-- All--> */}
                    <Link to="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
                        View all
                        <i className="fe-arrow-right"></i>
                    </Link>
    
                </div>
            </li>
    
            <li className="dropdown notification-list topbar-dropdown">
                <Link className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                    <img src={process.env.PUBLIC_URL+"../assets/images/users/user-1.jpg"} alt="user-image" className="rounded-circle"/>
                    <span className="pro-user-name ms-1">
                        Geneva <i className="mdi mdi-chevron-down"></i> 
                    </span>
                </Link>
                <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                    {/* <!-- item--> */}
                    <div className="dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Welcome !</h6>
                    </div>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-user"></i>
                        <span>My Account</span>
                    </Link>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-settings"></i>
                        <span>Settings</span>
                    </Link>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-lock"></i>
                        <span>Lock Screen</span>
                    </Link>
    
                    <div className="dropdown-divider"></div>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-log-out"></i>
                        <span onClick={logoutadmin}>Logout</span>
                    </Link>
    
                </div>
            </li>
    
            <li className="dropdown notification-list">
                <Link to="javascript:void(0);" className="nav-link right-bar-toggle waves-effect waves-light">
                    <i className="fe-settings noti-icon"></i>
                </Link>
            </li>
    
        </ul>
    
        {/* <!-- LOGO --> */}
        <div className="logo-box">
            <Link to="index.html" className="logo logo-dark text-center">
                <span className="logo-sm">
                    <img src={process.env.PUBLIC_URL+"../assets/images/logo-sm.png"} alt="" height="22"/>
                    {/* <!-- <span className="logo-lg-text-light">UBold</span> --> */}
                </span>
                <span className="logo-lg">
                    <img src={process.env.PUBLIC_URL+"../assets/images/logo-dark.png"} alt="" height="20"/>
                    {/* <!-- <span className="logo-lg-text-light">U</span> --> */}
                </span>
            </Link>
    
            <Link to="index.html" className="logo logo-light text-center">
                <span className="logo-sm">
                    <img src={process.env.PUBLIC_URL+"../assets/images/logo-sm.png"} alt="" height="22"/>
                </span>
                <span className="logo-lg">
                    <img src={process.env.PUBLIC_URL+"../assets/images/login-logo.svg"} alt="" height="20"/>
                </span>
            </Link>
        </div>
    
        <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
                <button className="button-menu-mobile waves-effect waves-light">
                    <i className="fe-menu"></i>
                </button>
            </li>

            <li>
                {/* <!-- Mobile menu toggle (Horizontal Layout)--> */}
                <Link className="navbar-toggle nav-link" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                    <div className="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
                {/* <!-- End mobile menu toggle--> */}
            </li>   
            
            <li className="dropdown d-none d-xl-block">
                <Link className="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                    Create New
                    <i className="mdi mdi-chevron-down"></i> 
                </Link>
                <div className="dropdown-menu">
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <i className="fe-briefcase me-1"></i>
                        <span>New Projects</span>
                    </Link>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <i className="fe-user me-1"></i>
                        <span>Create Users</span>
                    </Link>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <i className="fe-bar-chart-line- me-1"></i>
                        <span>Revenue Report</span>
                    </Link>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <i className="fe-settings me-1"></i>
                        <span>Settings</span>
                    </Link>
    
                    <div className="dropdown-divider"></div>
    
                    {/* <!-- item--> */}
                    <Link to="javascript:void(0);" className="dropdown-item">
                        <i className="fe-headphones me-1"></i>
                        <span>Help & Support</span>
                    </Link>
    
                </div>
            </li>
    
            <li className="dropdown dropdown-mega d-none d-xl-block">
                <Link className="nav-link dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                    Mega Menu
                    <i className="mdi mdi-chevron-down"></i> 
                </Link>
                <div className="dropdown-menu dropdown-megamenu">
                    <div className="row">
                        <div className="col-sm-8">
                            
                            <div className="row">
                                <div className="col-md-4">
                                    <h5 className="text-dark mt-0">UI Components</h5>
                                    <ul className="list-unstyled megamenu-list">
                                        <li>
                                            <Link to="javascript:void(0);">Widgets</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Nestable List</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Range Sliders</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Masonry Items</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Sweet Alerts</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Treeview Page</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Tour Page</Link>
                                        </li>
                                    </ul>
                                </div>
    
                                <div className="col-md-4">
                                    <h5 className="text-dark mt-0">Applications</h5>
                                    <ul className="list-unstyled megamenu-list">
                                        <li>
                                            <Link to="javascript:void(0);">eCommerce Pages</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">CRM Pages</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Email</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Calendar</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Team Contacts</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Task Board</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Email Templates</Link>
                                        </li>
                                    </ul>
                                </div>
    
                                <div className="col-md-4">
                                    <h5 className="text-dark mt-0">Extra Pages</h5>
                                    <ul className="list-unstyled megamenu-list">
                                        <li>
                                            <Link to="javascript:void(0);">Left Sidebar with User</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Menu Collapsed</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Small Left Sidebar</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">New Header Style</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Search Result</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Gallery Pages</Link>
                                        </li>
                                        <li>
                                            <Link to="javascript:void(0);">Maintenance & Coming Soon</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center mt-3">
                                <h3 className="text-dark">Special Discount Sale!</h3>
                                <h4>Save up to 70% off.</h4>
                                <button className="btn btn-primary rounded-pill mt-3">Download Now</button>
                            </div>
                        </div>
                    </div>
    
                </div>
            </li>
        </ul>
        <div className="clearfix"></div>
    </div>
</div>
{/* <!-- end Topbar --> */}
{/* </div> */}
    </>
  )
}
