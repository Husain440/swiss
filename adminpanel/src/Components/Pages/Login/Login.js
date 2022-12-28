import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Loginapi } from '../../../api/apiHandler';
import { loginRedirectCallWithDataStore } from '../Common/RedirectPathMange';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';

export default function Login() {
    let LoginSchema = yup.object().shape({
        email: yup.string().email().required("email is required"),
        password: yup.string().required("password is required").min(6),


    });
    const { errors, handleBlur, handleChange, touched, values, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
              console.log("111")
            Loginapi({ "email": values.email, "password": values.password })
                .then(function (res) {
                   
                    if (res.data.code == 1) {
                        console.log("AAAAAAA",res.data.code)
                        console.log(res.data.data)
                       
                        loginRedirectCallWithDataStore(res.data.data)
                    } else {
                        toast.error(res.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                })
                .catch(function (error) {
                    
                    console.log(error);
                })
        }
    })
    return (
        
          <>
                
               <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <div className="account-pages mt-5 mb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-4">
                                <div className="card bg-pattern">

                                    <div className="card-body p-4">

                                        <div className="text-center w-75 m-auto">
                                            <div className="auth-logo">
                                                <Link to="index.html" className="logo logo-dark text-center">
                                                    <span className="logo-lg">
                                                        <img src={process.env.PUBLIC_URL+"../assets/images/login-logo.svg"} alt="" height="22" />
                                                    </span>
                                                </Link>

                                                <Link to="index.html" className="logo logo-light text-center">
                                                    <span className="logo-lg">
                                                        <img src={process.env.PUBLIC_URL+"../assets/images/login-logo.svg"} alt="" height="22" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <p className="text-muted mb-4 mt-3">Enter your email address and password to access admin panel.</p>
                                        </div>

                                        <form onSubmit={handleSubmit}>

                                            <div className="mb-3">
                                                <label htmlFor="emailaddress" className="form-label">Email address</label>
                                                <input className="form-control" type="email" name='email' id="emailaddress" required="" placeholder="Enter your email" onBlur={handleBlur} value={values.email} onChange={handleChange}/>
                                                <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                    {errors.email && touched.email ? errors.email : null}
                                                </label>
                                            </div>

                                            <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <div className="input-group input-group-merge">
                                                    <input type="password" id="password" name='password' className="form-control" placeholder="Enter your password" onBlur={handleBlur} value={values.password} onChange={handleChange}/>
                                                    <div className="input-group-text" data-password="false">
                                                        <span className="password-eye"></span>
                                                    </div>
                                                </div>
                                                <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                        {errors.password && touched.password ? errors.password : null}
                                                </label>
                                            </div>

                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkbox-signin"  />
                                                    <label className="form-check-label" htmlFor="checkbox-signin">Remember me</label>
                                                </div>
                                            </div>

                                            <div className="text-center d-grid">
                                                <button className="btn btn-primary" type="submit"> Log In </button>
                                            </div>

                                        </form>

                                        

                                    </div>
                                    {/* <!-- end card-body --> */}
                                </div>
                                {/* <!-- end card --> */}

                                <div className="row mt-3">
                                    <div className="col-12 text-center">
                                        <p> <Link to="auth-recoverpw.html" className="text-white-50 ms-1">Forgot your password?</Link></p>
                                        <p className="text-white-50">Don't have an account? <Link to="/signup" className="text-white ms-1"><b>Sign Up</b></Link></p>
                                    </div>
                                    {/* <!-- end col --> */}
                                </div>
                                {/* <!-- end row --> */}

                            </div>
                            {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end page --> */}


                <footer className="footer footer-alt">
                    2015 - <script>document.write(new Date().getFullYear())</script> &copy; UBold theme by <Link to="" className="text-white-50">Coderthemes</Link>
                </footer>
                <Helmet>
                    {/* <!-- Vendor js --> */}
                    <script src="../assets/js/vendor.min.js"></script>

                    {/* <!-- App js --> */}
                    <script src="../assets/js/app.min.js"></script>
                </Helmet>


                </>   
        
    )
}
