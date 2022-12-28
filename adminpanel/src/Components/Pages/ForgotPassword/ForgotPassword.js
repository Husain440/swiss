import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { Forgotpassword } from '../../../api/apiHandler';
import { loginRedirectCall } from '../Common/RedirectPathMange';

export default function ForgotPassword() {
    let forgotSchema = yup.object().shape({
        email: yup.string().email().required("email is required"),
    });

    const { errors, handleBlur, handleChange, touched, values, handleSubmit } = useFormik({
        initialValues: {
            email: '', 
        },
        validationSchema: forgotSchema,
        onSubmit: (values) => {

            Forgotpassword({ "email": values.email })
                .then(function (res) {
                   
                    if (res.data.code == 1) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Mail Sent Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        loginRedirectCall()
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
            <body className="loading authentication-bg authentication-bg-pattern">

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
                                                        <img src={process.env.PUBLIC_URL+"../assets/images/logo-dark.png"} alt="" height="22" />
                                                    </span>
                                                </Link>

                                                <Link to="index.html" className="logo logo-light text-center">
                                                    <span className="logo-lg">
                                                        <img src={process.env.PUBLIC_URL+"../assets/images/logo-light.png"} alt="" height="22" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <p className="text-muted mb-4 mt-3">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                                        </div>

                                        <form onSubmit={handleSubmit}>

                                            <div className="mb-3">
                                                <label for="emailaddress" className="form-label">Email address</label>
                                                <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                            </div>

                                            <div className="text-center d-grid">
                                                <button className="btn btn-primary" type="submit"> Reset Password </button>
                                            </div>

                                        </form>

                                    </div>
                                    {/* <!-- end card-body --> */}
                                </div>
                                {/* <!-- end card --> */}

                                <div className="row mt-3">
                                    <div className="col-12 text-center">
                                        <p className="text-white-50">Back to <Link to="auth-login.html" className="text-white ms-1"><b>Log in</b></Link></p>
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


            </body>
        </>
    )
}
