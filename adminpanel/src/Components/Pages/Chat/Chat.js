import React, { useEffect } from 'react'
import { useState } from 'react'
import { io } from 'socket.io-client'
import { nanoid } from 'nanoid'

const socket = io.connect('http://localhost:4000');
const userName = nanoid(4)

export default function Chat() {
    const[message, setMessage] = useState('')
    const[chat, setChat] = useState([])

    const sendchat = (e) =>{
        e.preventDefault();
        socket.emit("chat",{message, userName})
        setMessage('')
    }

    useEffect(() =>{
        socket.on("chat",(payload) =>{
           setChat([...chat,payload])
        })
    })
    return (
        <>
         <div id="wrapper">
            <div className="content-page">
                <div className="content" style={{marginTop:"-55px"}}>

                    {/* <!-- Start Content--> */}
                    <div className="container-fluid">

                        {/* <!-- start page title --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Apps</a></li>
                                            <li className="breadcrumb-item active">Chat</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Chat</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end page title --> */}

                        <div className="row">
                            {/* <!-- start chat users--> */}
                            <div className="col-xl-3 col-lg-4">
                                <div className="card">
                                    <div className="card-body">

                                        <div className="d-flex align-items-start mb-3">
                                            <img src="../assets/images/users/user-1.jpg" className="me-2 rounded-circle" height="42" alt="Brandon Smith"/>
                                                <div className="w-100">
                                                    <h5 className="mt-0 mb-0 font-15">
                                                        <a href="contacts-profile.html" className="text-reset">Geneva McKnight</a>
                                                    </h5>
                                                    <p className="mt-1 mb-0 text-muted font-14">
                                                        <small className="mdi mdi-circle text-success"></small> Online
                                                    </p>
                                                </div>
                                                <a href="javascript: void(0);" className="text-reset font-20">
                                                    <i className="mdi mdi-cog-outline"></i>
                                                </a>
                                        </div>

                                        {/* <!-- start search box --> */}
                                        <form className="search-bar mb-3">
                                            <div className="position-relative">
                                                <input type="text" className="form-control form-control-light" placeholder="People, groups & messages..."/>
                                                    <span className="mdi mdi-magnify"></span>
                                            </div>
                                        </form>
                                        {/* <!-- end search box --> */}

                                        <h6 className="font-13 text-muted text-uppercase">Group Chats</h6>
                                        <div className="p-2">
                                            <a href="javascript: void(0);" className="text-reset mb-2 d-block">
                                                <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-success"></i>
                                                <span className="mb-0 mt-1">App Development</span>
                                            </a>

                                            <a href="javascript: void(0);" className="text-reset mb-2 d-block">
                                                <i className="mdi mdi-checkbox-blank-circle-outline me-1 text-warning"></i>
                                                <span className="mb-0 mt-1">Office Work</span>
                                            </a>
                                        </div>

                                        <h6 className="font-13 text-muted text-uppercase mb-2">Contacts</h6>

                                        {/* <!-- users --> */}
                                        <div className="row">
                                            <div className="col">
                                                <div data-simplebar style={{maxHeight: "375px"}}>
                                                    <a href="javascript:void(0);" className="text-body">
                                                        <div className="d-flex align-items-start p-2">
                                                            <img src="../assets/images/users/user-2.jpg" className="me-2 rounded-circle" height="42" alt="Brandon Smith" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-0 font-14">
                                                                    <span className="float-end text-muted fw-normal font-12">4:30am</span>
                                                                    Brandon Smith
                                                                </h5>
                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                    <span className="w-25 float-end text-end"><span className="badge badge-soft-danger">3</span></span>
                                                                    <span className="w-75">How are you today?</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:void(0);" className="text-body">
                                                        <div className="d-flex align-items-start p-2">
                                                            <img src="../assets/images/users/user-5.jpg" className="me-2 rounded-circle" height="42" alt="James Z" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-0 font-14">
                                                                    <span className="float-end text-muted fw-normal font-12">5:30am</span>
                                                                    James Z
                                                                </h5>
                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                    <span className="w-75">Hey! a reminder for tomorrow's meeting...</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:void(0);" className="text-body">
                                                        <div className="d-flex align-items-start p-2">
                                                            <img src="../assets/images/users/user-7.jpg" className="me-2 rounded-circle" height="42" alt="Maria C" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-0 font-14">
                                                                    <span className="float-end text-muted fw-normal font-12">Thu</span>
                                                                    Maria C
                                                                </h5>
                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                    <span className="w-25 float-end text-end"><span className="badge badge-soft-danger">2</span></span>
                                                                    <span className="w-75">Are we going to have this week's planning meeting today?</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:void(0);" className="text-body">
                                                        <div className="d-flex align-items-start bg-light p-2">
                                                            <img src="../assets/images/users/user-10.jpg" className="me-2 rounded-circle" height="42" alt="Rhonda D" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-0 font-14">
                                                                    <span className="float-end text-muted fw-normal font-12">Wed</span>
                                                                    Rhonda D
                                                                </h5>
                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                    <span className="w-75">Please check these design assets...</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:void(0);" className="text-body">
                                                        <div className="d-flex align-items-start p-2">
                                                            <img src="../assets/images/users/user-3.jpg" className="me-2 rounded-circle" height="42" alt="Michael H" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-0 font-14">
                                                                    <span className="float-end text-muted fw-normal font-12">Tue</span>
                                                                    Michael H
                                                                </h5>
                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                    <span className="w-75">Are you free for 15 min? I would like to discuss something...</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:void(0);" className="text-body">
                                                        <div className="d-flex align-items-start p-2">
                                                            <img src="../assets/images/users/user-6.jpg" className="me-2 rounded-circle" height="42" alt="Thomas R" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-0 font-14">
                                                                    <span className="float-end text-muted fw-normal font-12">Tue</span>
                                                                    Thomas R
                                                                </h5>
                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                    <span className="w-75">Let's have meeting today between me, you and Tony...</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:void(0);" className="text-body">
                                                        <div className="d-flex align-items-start p-2">
                                                            <img src="../assets/images/users/user-8.jpg" className="me-2 rounded-circle" height="42" alt="Thomas J" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-0 font-14">
                                                                    <span className="float-end text-muted fw-normal font-12">Tue</span>
                                                                    Thomas J
                                                                </h5>
                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                    <span className="w-75">Howdy?</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>

                                                    <a href="javascript:void(0);" className="text-body">
                                                        <div className="d-flex align-items-start p-2">
                                                            <img src="../assets/images/users/user-4.jpg" className="me-2 rounded-circle" height="42" alt="Ricky J" />
                                                            <div className="w-100">
                                                                <h5 className="mt-0 mb-0 font-14">
                                                                    <span className="float-end text-muted fw-normal font-12">Mon</span>
                                                                    Ricky J
                                                                </h5>
                                                                <p className="mt-1 mb-0 text-muted font-14">
                                                                    <span className="w-75">Are you interested in learning?</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                {/* <!-- end slimscroll--> */}
                                            </div>
                                            {/* <!-- End col --> */}
                                        </div>
                                        {/* <!-- end users --> */}
                                    </div> 
                                    {/* <!-- end card-body--> */}
                                </div> 
                                {/* <!-- end card--> */}
                            </div>
                            {/* <!-- end chat users-->

                            <!-- chat area --> */}
                            <div className="col-xl-9 col-lg-8">

                                <div className="card">
                                    <div className="card-body py-2 px-3 border-bottom border-light">
                                        <div className="row justify-content-between py-1">
                                            <div className="col-sm-7">
                                                <div className="d-flex align-items-start">
                                                    <img src="../assets/images/users/user-5.jpg" className="me-2 rounded-circle" height="36" alt="Brandon Smith"/>
                                                        <div>
                                                            <h5 className="mt-0 mb-0 font-15">
                                                                <a href="contacts-profile.html" className="text-reset">James Zavel</a>
                                                            </h5>
                                                            <p className="mt-1 mb-0 text-muted font-12">
                                                                <small className="mdi mdi-circle text-success"></small> Online
                                                            </p>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div id="tooltips-container">
                                                    <a href="javascript: void(0);" className="text-reset font-19 py-1 px-2 d-inline-block">
                                                        <i className="fe-phone-call" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Voice Call"></i>
                                                    </a>
                                                    <a href="javascript: void(0);" className="text-reset font-19 py-1 px-2 d-inline-block">
                                                        <i className="fe-video" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Video Call"></i>
                                                    </a>
                                                    <a href="javascript: void(0);" className="text-reset font-19 py-1 px-2 d-inline-block">
                                                        <i className="fe-user-plus" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add Users"></i>
                                                    </a>
                                                    <a href="javascript: void(0);" className="text-reset font-19 py-1 px-2 d-inline-block">
                                                        <i className="fe-trash-2" data-bs-container="#tooltips-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Chat"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <ul className="conversation-list" data-simplebar style={{maxHeight: "460px"}}>
                                            <li className="clearfix">
                                                <div className="chat-avatar">
                                                    <img src="../assets/images/users/user-5.jpg" className="rounded" alt="James Z" />
                                                    <i>10:00</i>
                                                </div>
                                                <div className="conversation-text">
                                                    <div className="ctext-wrap">
                                                        <i>James Z</i>
                                                        <p>
                                                        {chat}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="conversation-actions dropdown">
                                                    <button className="btn btn-sm btn-link" data-bs-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-vertical font-16"></i></button>

                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="#">Copy Message</a>
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <a className="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="clearfix odd">
                                                <div className="chat-avatar">
                                                    <img src="../assets/images/users/user-1.jpg" className="rounded" alt="Geneva M" />
                                                    <i>10:01</i>
                                                </div>
                                                <div className="conversation-text">
                                                    <div className="ctext-wrap">
                                                        <i>Geneva M</i>
                                                        <p>
                                                           {chat}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="conversation-actions dropdown">
                                                    <button className="btn btn-sm btn-link" data-bs-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-vertical font-16"></i></button>

                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">Copy Message</a>
                                                        <a className="dropdown-item" href="#">Edit</a>
                                                        <a className="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </li>
                                            
                                        </ul>

                                        <div className="row">
                                            <div className="col">
                                                <div className="mt-2 bg-light p-3 rounded">
                                                    <form className="needs-validation" novalidate="" name="chat-form" id="chat-form" onSubmit={sendchat}>
                                                        <div className="row">
                                                            <div className="col mb-2 mb-sm-0">
                                                                <input type="text" className="form-control border-0" id='messageInp' value={message} onChange={(e) =>{setMessage(e.target.value)}} placeholder="Enter your text" required="" />
                                                                <div className="invalid-feedback">
                                                                    Please enter your messsage
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-auto">
                                                                <div className="btn-group">
                                                                    <a href="#" className="btn btn-light"><i className="fe-paperclip"></i></a>
                                                                    <button type="submit" className="btn btn-success chat-send w-100"><i className="fe-send"></i></button>
                                                                </div>
                                                            </div>
                                                            {/* <!-- end col --> */}
                                                        </div>
                                                        {/* <!-- end row--> */}
                                                    </form>
                                                </div>
                                            </div>
                                            {/* <!-- end col--> */}
                                        </div>
                                        {/* <!-- end row --> */}
                                    </div>
                                    {/* <!-- end card-body --> */}
                                </div>
                                 {/* <!-- end card --> */}
                            </div>
                            {/* <!-- end chat area--> */}

                        </div>
                         {/* <!-- end row--> */}

                    </div> 
                    {/* <!-- container --> */}

                </div> 
                {/* <!-- content -->

                <!-- Footer Start --> */}
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <script>document.write(new Date().getFullYear())</script> &copy; UBold theme by <a href="">Coderthemes</a>
                            </div>
                            <div className="col-md-6">
                                <div className="text-md-end footer-links d-none d-sm-block">
                                    <a href="javascript:void(0);">About Us</a>
                                    <a href="javascript:void(0);">Help</a>
                                    <a href="javascript:void(0);">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- end Footer --> */}

            </div>
            </div>
        </>
    )
}
