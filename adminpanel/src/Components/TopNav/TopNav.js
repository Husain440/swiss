import React from 'react';
import { Link } from 'react-router-dom';


export default function TopNav() {
  return (
    <>
     {/* <!-- Begin page --> */}
        {/* <div id="wrapper"> */}
      <div className="topnav">
                <div className="container-fluid">
                    <nav className="navbar navbar-light navbar-expand-lg topnav-menu">

                        <div className="collapse navbar-collapse" id="topnav-menu-content">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-dashboard" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-airplay me-1"></i> Dashboards <div className="arrow-down"></div>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="topnav-dashboard">
                                        <Link to="/home" className="dropdown-item">Dashboard 1</Link>
                                        <Link to="dashboard-2.html" className="dropdown-item">Dashboard 2</Link>
                                        <Link to="dashboard-3.html" className="dropdown-item">Dashboard 3</Link>
                                        <Link to="dashboard-4.html" className="dropdown-item">Dashboard 4</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-apps" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-grid me-1"></i> Apps <div className="arrow-down"></div>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="topnav-apps">

                                        <Link to="apps-calendar.html" className="dropdown-item"><i className="fe-calendar me-1"></i> Calendar</Link>
                                        <Link to="/chat" className="dropdown-item"><i className="fe-message-square me-1"></i> Chat</Link>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-ecommerce"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-shopping-cart me-1"></i> Ecommerce <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                                <Link to="ecommerce-dashboard.html" className="dropdown-item">Dashboard</Link>
                                                <Link to="ecommerce-products.html" className="dropdown-item">Products</Link>
                                                <Link to="ecommerce-product-detail.html" className="dropdown-item">Product Detail</Link>
                                                <Link to="ecommerce-product-edit.html" className="dropdown-item">Add Product</Link>
                                                <Link to="ecommerce-customers.html" className="dropdown-item">Customers</Link>
                                                <Link to="ecommerce-orders.html" className="dropdown-item">Orders</Link>
                                                <Link to="ecommerce-order-detail.html" className="dropdown-item">Order Detail</Link>
                                                <Link to="ecommerce-sellers.html" className="dropdown-item">Sellers</Link>
                                                <Link to="ecommerce-cart.html" className="dropdown-item">Shopping Cart</Link>
                                                <Link to="ecommerce-checkout.html" className="dropdown-item">Checkout</Link>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-email"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-mail me-1"></i> Email <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-email">
                                                <Link to="email-inbox.html" className="dropdown-item">Inbox</Link>
                                                <Link to="email-read.html" className="dropdown-item">Read Email</Link>
                                                <Link to="email-compose.html" className="dropdown-item">Compose Email</Link>
                                                <Link to="email-templates.html" className="dropdown-item">Email Templates</Link>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-crm"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-users me-1"></i> CRM <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-crm">
                                                <Link to="crm-dashboard.html" className="dropdown-item">Dashboard</Link>
                                                <Link to="crm-contacts.html" className="dropdown-item">Contacts</Link>
                                                <Link to="crm-opportunities.html" className="dropdown-item">Opportunities</Link>
                                                <Link to="crm-leads.html" className="dropdown-item">Leads</Link>
                                                <Link to="crm-customers.html" className="dropdown-item">Customers</Link>
                                            </div>
                                        </div>

                                        <Link to="apps-social-feed.html" className="dropdown-item"><i className="fe-rss me-1"></i> Social Feed</Link>
                                        <Link to="apps-companies.html" className="dropdown-item"><i className="fe-activity me-1"></i> Companies</Link>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-project"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-briefcase me-1"></i> Projects <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-project">
                                                <Link to="project-list.html" className="dropdown-item">List</Link>
                                                <Link to="project-detail.html" className="dropdown-item">Detail</Link>
                                                <Link to="project-create.html" className="dropdown-item">Create Project</Link>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-task"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-clipboard me-1"></i> Tasks <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-task">
                                                <Link to="task-list.html" className="dropdown-item">List</Link>
                                                <Link to="task-details.html" className="dropdown-item">Details</Link>
                                                <Link to="task-kanban-board.html" className="dropdown-item">Kanban Board</Link>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-contact"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-book me-1"></i> Contacts <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-contact">
                                                <Link to="contacts-list.html" className="dropdown-item">Members List</Link>
                                                <Link to="contacts-profile.html" className="dropdown-item">Profile</Link>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-tickets"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-aperture me-1"></i> Tickets <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-tickets">
                                                <Link to="tickets-list.html" className="dropdown-item">List</Link>
                                                <Link to="tickets-detail.html" className="dropdown-item">Detail</Link>
                                            </div>
                                        </div>
                                        <Link to="apps-file-manager.html" className="dropdown-item"><i className="fe-folder-plus me-1"></i> File Manager</Link>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-ui" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-briefcase me-1"></i> UI Elements <div className="arrow-down"></div>
                                    </Link>

                                    <div className="dropdown-menu mega-dropdown-menu dropdown-mega-menu-xl" aria-labelledby="topnav-ui">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div>
                                                    <Link to="ui-buttons.html" className="dropdown-item">Buttons</Link>
                                                    <Link to="ui-cards.html" className="dropdown-item">Cards</Link>
                                                    <Link to="ui-avatars.html" className="dropdown-item">Avatars</Link>
                                                    <Link to="ui-portlets.html" className="dropdown-item">Portlets</Link>
                                                    <Link to="ui-tabs-accordions.html" className="dropdown-item">Tabs & Accordions</Link>
                                                    <Link to="ui-modals.html" className="dropdown-item">Modals</Link>
                                                    <Link to="ui-progress.html" className="dropdown-item">Progress</Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <Link to="ui-notifications.html" className="dropdown-item">Notifications</Link>
                                                    <Link to="ui-placeholders.html" className="dropdown-item">Placeholders</Link>
                                                    <Link to="ui-offcanvas.html" className="dropdown-item">Offcanvas</Link>
                                                    <Link to="ui-spinners.html" className="dropdown-item">Spinners</Link>
                                                    <Link to="ui-images.html" className="dropdown-item">Images</Link>
                                                    <Link to="ui-carousel.html" className="dropdown-item">Carousel</Link>
                                                    <Link to="ui-list-group.html" className="dropdown-item">List Group</Link>
                                        
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div>
                                                    <Link to="ui-video.html" className="dropdown-item">Embed Video</Link>
                                                    <Link to="ui-dropdowns.html" className="dropdown-item">Dropdowns</Link>
                                                    <Link to="ui-ribbons.html" className="dropdown-item">Ribbons</Link>
                                                    <Link to="ui-tooltips-popovers.html" className="dropdown-item">Tooltips & Popovers</Link>
                                                    <Link to="ui-general.html" className="dropdown-item">General UI</Link>
                                                    <Link to="ui-typography.html" className="dropdown-item">Typography</Link>
                                                    <Link to="ui-grid.html" className="dropdown-item">Grid</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-components" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-layers me-1"></i> Components <div className="arrow-down"></div>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="topnav-components">
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-extendedui"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-pocket me-1"></i> Extended UI <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-extendedui">
                                                <Link to="extended-nestable.html" className="dropdown-item">Nestable List</Link>
                                                <Link to="extended-range-slider.html" className="dropdown-item">Range Slider</Link>
                                                <Link to="extended-dragula.html" className="dropdown-item">Dragula</Link>
                                                <Link to="extended-animation.html" className="dropdown-item">Animation</Link>
                                                <Link to="extended-sweet-alert.html" className="dropdown-item">Sweet Alert</Link>
                                                <Link to="extended-tour.html" className="dropdown-item">Tour Page</Link>
                                                <Link to="extended-scrollspy.html" className="dropdown-item">Scrollspy</Link>
                                                <Link to="extended-loading-buttons.html" className="dropdown-item">Loading Buttons</Link>
                                            </div>
                                        </div>
                                        <Link to="widgets.html" className="dropdown-item"><i className="fe-gift me-1"></i> Widgets</Link>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-form"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-bookmark me-1"></i> Forms <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-form">
                                                <Link to="forms-elements.html" className="dropdown-item">General Elements</Link>
                                                <Link to="forms-advanced.html" className="dropdown-item">Advanced</Link>
                                                <Link to="forms-validation.html" className="dropdown-item">Validation</Link>
                                                <Link to="forms-pickers.html" className="dropdown-item">Pickers</Link>
                                                <Link to="forms-wizard.html" className="dropdown-item">Wizard</Link>
                                                <Link to="forms-masks.html" className="dropdown-item">Masks</Link>
                                                <Link to="forms-quilljs.html" className="dropdown-item">Quilljs Editor</Link>
                                                <Link to="forms-file-uploads.html" className="dropdown-item">File Uploads</Link>
                                                <Link to="forms-x-editable.html" className="dropdown-item">X Editable</Link>
                                                <Link to="forms-image-crop.html" className="dropdown-item">Image Crop</Link>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-charts"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-bar-chart-2 me-1"></i> Charts <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-charts">
                                                <Link to="charts-apex.html" className="dropdown-item">Apex Charts</Link>
                                                <Link to="charts-flot.html" className="dropdown-item">Flot Charts</Link>
                                                <Link to="charts-morris.html" className="dropdown-item">Morris Charts</Link>
                                                <Link to="charts-chartjs.html" className="dropdown-item">Chartjs Charts</Link>
                                                <Link to="charts-peity.html" className="dropdown-item">Peity Charts</Link>
                                                <Link to="charts-chartist.html" className="dropdown-item">Chartist Charts</Link>
                                                <Link to="charts-c3.html" className="dropdown-item">C3 Charts</Link>
                                                <Link to="charts-sparklines.html" className="dropdown-item">Sparklines Charts</Link>
                                                <Link to="charts-knob.html" className="dropdown-item">Jquery Knob Charts</Link>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-table"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-grid me-1"></i> Tables <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-table">
                                                <Link to="/productdatatable" className="dropdown-item">Product Table</Link>
                                                <Link to="/userdatatable" className="dropdown-item">User Table</Link>
                                               
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-icons"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-cpu me-1"></i> Icons <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-icons">
                                                <Link to="icons-two-tone.html" className="dropdown-item">Two Tone Icons</Link>
                                                <Link to="icons-feather.html" className="dropdown-item">Feather Icons</Link>
                                                <Link to="icons-mdi.html" className="dropdown-item">Material Design Icons</Link>
                                                <Link to="icons-dripicons.html" className="dropdown-item">Dripicons</Link>
                                                <Link to="icons-font-awesome.html" className="dropdown-item">Font Awesome 5</Link>
                                                <Link to="icons-themify.html" className="dropdown-item">Themify</Link>
                                                <Link to="icons-simple-line.html" className="dropdown-item">Simple Line</Link>
                                                <Link to="icons-weather.html" className="dropdown-item">Weather</Link>
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-map"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fe-map me-1"></i> Maps <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-map">
                                                <Link to="maps-google.html" className="dropdown-item">Google Maps</Link>
                                                <Link to="maps-vector.html" className="dropdown-item">Vector Maps</Link>
                                                <Link to="maps-mapael.html" className="dropdown-item">Mapael Maps</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-pages" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-package me-1"></i> Pages <div className="arrow-down"></div>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="topnav-pages">
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-auth"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Auth Style 1 <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                <Link to="auth-login.html" className="dropdown-item">Log In</Link>
                                                <Link to="auth-register.html" className="dropdown-item">Register</Link>
                                                <Link to="auth-signin-signup.html" className="dropdown-item">Signin - Signup</Link>
                                                <Link to="auth-recoverpw.html" className="dropdown-item">Recover Password</Link>
                                                <Link to="auth-lock-screen.html" className="dropdown-item">Lock Screen</Link>
                                                <Link to="auth-logout.html" className="dropdown-item">Logout</Link>
                                                <Link to="auth-confirm-mail.html" className="dropdown-item">Confirm Mail</Link>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-auth2"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Auth Style 2 <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth2">
                                                <Link to="auth-login-2.html" className="dropdown-item">Log In 2</Link>
                                                <Link to="auth-register-2.html" className="dropdown-item">Register 2</Link>
                                                <Link to="auth-signin-signup-2.html" className="dropdown-item">Signin - Signup 2</Link>
                                                <Link to="auth-recoverpw-2.html" className="dropdown-item">Recover Password 2</Link>
                                                <Link to="auth-lock-screen-2.html" className="dropdown-item">Lock Screen 2</Link>
                                                <Link to="auth-logout-2.html" className="dropdown-item">Logout 2</Link>
                                                <Link to="auth-confirm-mail-2.html" className="dropdown-item">Confirm Mail 2</Link>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-error"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Errors <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-error">
                                                <Link to="pages-404.html" className="dropdown-item">Error 404</Link>
                                                <Link to="pages-404-two.html" className="dropdown-item">Error 404 Two</Link>
                                                <Link to="pages-404-alt.html" className="dropdown-item">Error 404-alt</Link>
                                                <Link to="pages-500.html" className="dropdown-item">Error 500</Link>
                                                <Link to="pages-500-two.html" className="dropdown-item">Error 500 Two</Link>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-utility"
                                                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Utility <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-utility">
                                                <Link to="pages-starter.html" className="dropdown-item">Starter</Link>
                                                <Link to="pages-timeline.html" className="dropdown-item">Timeline</Link>
                                                <Link to="pages-sitemap.html" className="dropdown-item">Sitemap</Link>
                                                <Link to="pages-invoice.html" className="dropdown-item">Invoice</Link>
                                                <Link to="pages-faqs.html" className="dropdown-item">FAQs</Link>
                                                <Link to="pages-search-results.html" className="dropdown-item">Search Results</Link>
                                                <Link to="pages-pricing.html" className="dropdown-item">Pricing</Link>
                                                <Link to="pages-maintenance.html" className="dropdown-item">Maintenance</Link>
                                                <Link to="pages-coming-soon.html" className="dropdown-item">Coming Soon</Link>
                                                <Link to="pages-gallery.html" className="dropdown-item">Gallery</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-layout" role="button"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fe-sidebar me-1"></i> Layouts <div className="arrow-down"></div>
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="topnav-layout">
                                        <Link to="layouts-vertical.html" className="dropdown-item">Vertical</Link>
                                        <Link to="layouts-detached.html" className="dropdown-item">Detached</Link>
                                        <Link to="layouts-two-column.html" className="dropdown-item">Two Column Menu</Link>
                                        <Link to="layouts-two-tone-icons.html" className="dropdown-item">Two Tones Icons</Link>
                                        <Link to="layouts-preloader.html" className="dropdown-item">Preloader</Link>
                                    </div>
                                </li>
                            </ul> 
                            {/* <!-- end navbar--> */}
                        </div> 
                        {/* <!-- end .collapsed--> */}
                    </nav>
                </div> 
                {/* <!-- end container-fluid --> */}
            </div> 
            {/* <!-- end topnav--> */}
            {/* </div> */}
    </>
  )
}
