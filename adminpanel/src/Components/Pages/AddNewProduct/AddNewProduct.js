import React from 'react'
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import S3 from 'react-aws-s3';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { addproduct } from '../../../api/apiHandler';
import { ToastContainer, toast } from 'react-toastify';
//import { useQuill } from 'react-quilljs';
import { Multiselect } from 'multiselect-react-dropdown'
import { allbrands } from '../../../api/apiHandler';
import { allauction } from '../../../api/apiHandler';
import { allproducttype } from '../../../api/apiHandler';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
window.Buffer = window.Buffer || require("buffer").Buffer;



const S3_BUCKET = "parth-bucket-hlis";
const REGION = "eu-west-1";
const ACCESS_KEY = "AKIA5YIH7XXODZ4Z7GF5";
const SECRET_ACCESS_KEY = "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";

const config = {
    bucketName: S3_BUCKET,
    region: encodeURIComponent(REGION),
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const ReactS3Client = new S3(config);

export default function AddNewProduct() {
    const [imageFileUrl, setimageFileUrl] = useState();
    const [imageFile, setimageFile] = useState();
    const [datas, setDatas] = useState([]);
    const [auctionDatas, setAuctionDatas] = useState([]);
    const [producttypeDatas, setProductTypeDatas] = useState([]);
    const [valuess, setValues] = useState('');

    const [text, setText] = useState("");
   // const { quill, quillRef } = useQuill();
    const [value, setValue] = useState()
    
    // useEffect(() => {
    //     if (quill) {
    //         quill.on('text-change', () => {
    //             // console.log('text', (quillRef.current.firstChild.innerHTML).replace(/(<([^>]+)>)/ig, ''));
    //             setValue((quillRef.current.firstChild.innerHTML.replace(/(<([^>]+)>)/ig, '')))
    //         })
    //     }
    // }, [quill])

    useEffect(() => {
        allbrands({})
            .then(function (res) {
                console.log("&&&&&", res.data.data);
                if (res.data.code == 1) {
                    console.log("555", res.data.data)
                    setDatas(res.data.data);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: res.data.message,
                    });
                    // console.log(res.data);
                }
            })
            .catch(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            });
    }, []);


    useEffect(() => {
        allauction({})
            .then(function (res) {
                console.log("&&&&&", res.data.data);
                if (res.data.code == 1) {
                    console.log("####", res.data.data)
                    setAuctionDatas(res.data.data);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: res.data.message,
                    });
                    // console.log(res.data);
                }
            })
            .catch(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            });
    }, []);


    useEffect(() => {
        allproducttype({})
            .then(function (res) {
                console.log("&&&&&", res.data.data);
                if (res.data.code == 1) {
                    console.log("####", res.data.data)
                    setProductTypeDatas(res.data.data);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: res.data.message,
                    });
                    // console.log(res.data);
                }
            })
            .catch(function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                });
            });
    }, []);

    const getbrandid = (e) =>{
        var brandid = e.target.id;
        localStorage.setItem("brand_id", brandid)
       values.brand_id =localStorage.getItem("brand_id")
    }

    const getproducttypeid = (e) =>{
          var producttypeid = e.target.id 
          localStorage.setItem("product_type_id",producttypeid)
          values.product_type_id = localStorage.getItem("product_type_id")
    }

    const getauctionid = (e) =>{
        var auctionid = e[0].id 
         localStorage.setItem("auction_id",auctionid)
         values.auction_id = localStorage.getItem("auction_id")
    }

    const changedescription = (e) =>{
        //var value = document.getElementById("piku").innerHTML;
        console.log("4444",e.value)
    }

   
    let ProductSchema = yup.object().shape({
        name: yup.string().required("name is required"),
        price: yup.string().required("price is required"),
        description: yup.string().required("description is required").min(6),
        launch_year: yup.string().required("year is required"),
        image: yup.string().required("image is required"),
        brand_id: yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
    });

    
    const { errors, handleBlur, handleChange, touched, values, handleSubmit } = useFormik({

        initialValues: {
            name: '',
            price: '',
            description: '',
            launch_year: '',
            brand_id:'',
            product_type_id:'',
            auction_id:''
        },

        validationSchema: ProductSchema,

        onSubmit: (values) => {
            console.log("ff", values)
            addproduct({ "name": values.name, "price": values.price, "description": values.description, "launch_year": values.launch_year,"brand_id":values.brand_id,"product_type_id":values.product_type_id,"auction_id":values.auction_id })
                .then(function (res) {
                    console.log("111", res.data)
                    if (res.data.code == 1) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Signup Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

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
                    console.log("254")
                    console.log(error);
                })
        }
    })

    //console.log("*8-------",values)

    const handleVideoInput = (e) => {
        setimageFileUrl(URL.createObjectURL(e.target.files[0]));
        setimageFile(e.target.files[0])
    }

    const handleFileChange = async (e) => {
        // e.preventDefault();
        console.log("inside function")
        try {

            let file = e.target.files[0];
            console.log("######", file)
            const upload = await ReactS3Client.uploadFile(file);
            console.log("123", upload)
        } catch (error) {
            console.log("line 42", error)
        }
    }

   

    return (
        <>

            <div id="wrapper">
                <div className="content-page">
                    <div className="content" style={{ marginTop: "-54px" }}>

                        {/* <!-- Start Content--> */}
                        <div className="container-fluid">

                            {/* <!-- start page title --> */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><a href="javascript: void(0);">UBold</a></li>
                                                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                                                <li className="breadcrumb-item active">Add / Edit Product</li>
                                            </ol>
                                        </div>
                                        <h4 className="page-title">Add</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end page title -->  */}

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

                                                <div className="mb-3">
                                                    <label for="product-name" className="form-label">Product Name <span className="text-danger">*</span></label>
                                                    <input type="text" id="product-name" name='name' className="form-control" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder="e.g : Apple iMac" />
                                                    <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                        {errors.name && touched.name ? errors.name : null}
                                                    </label>
                                                </div>


                                                <div className="mb-3">
                                                    <label for="product-description" className="form-label">Product Description <span className="text-danger">*</span></label>
                                                    {/* <div id="snow-editor" name='description' style={{height: "150px"}} onBlur={handleBlur} value={values.description} onChange={() => handleDescriptionChange}></div> */}
                                                   {/* <div ref={quillRef} />
                                                    <div><textarea type="text"  name='description' onBlur={handleBlur} value={values.description} onChange={handleChange}  style={{ height: "500px", width: '100%' }} /></div> */}
                                                    <ReactQuill id='piku' type="text" name='description'  />
                                                    <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                        {errors.description && touched.description ? errors.description : null}
                                                    </label>
                                                    {/* <!-- end Snow-editor--> */}
                                                </div>


                                                <div className="mb-3">
                                                    <label for="product-price">Price <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="product-price" name='price' onBlur={handleBlur} value={values.price} onChange={handleChange} placeholder="Enter amount" />
                                                    <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                        {errors.price && touched.price ? errors.price : null}
                                                    </label>
                                                </div>

                                              

                                                <div className="mb-3">
                                                    <label for="product-price">Launch Year <span className="text-danger">*</span></label>
                                                    <input type="text" className="form-control" id="product-year" name='launch_year' onBlur={handleBlur} value={values.launch_year} onChange={handleChange} placeholder="Enter year" />
                                                    <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                        {errors.launch_year && touched.launch_year ? errors.launch_year : null}
                                                    </label>
                                                </div>

                                                <div className="mb-3">
                                                    <fieldset>
                                                        <label for="product-price">Brand <span className="text-danger">*</span></label>

                                                        {datas?.map((item, ti) => {
                                                            return (
                                                                <div>
                                                                    <input type="checkbox" name="brand_id" id={item.id} value={values.brand_id} onClick={getbrandid}/>
                                                                    <lablel for="scales">{item.brand_name}</lablel>
                                                                </div>
                                                            );
                                                        })}
                                                        <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                        {errors.brand_id && touched.brand_id ? errors.brand_id : null}
                                                    </label>
                                                    </fieldset>
                                                    
                                                </div>

                                                

                                                <div className="mb-3">
                                                    <label for="product-price">Auction City <span className="text-danger">*</span></label>                        
                                                    <Multiselect options={auctionDatas} name='auction_city'  displayValue="auction_city" onSelect={getauctionid}/> 
                                                    <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                        {errors.auction_city && touched.auction_city ? errors.auction_city : null}
                                                    </label>
                                                </div>

                                                <div className="mb-3">
                                                    <fieldset>
                                                        <label for="product-price">Product Type <span className="text-danger">*</span></label>

                                                        {producttypeDatas?.map((item, ti) => {
                                                            return (
                                                                <div>
                                                                    <input type="checkbox" id={item.id} name="product_type_id" value={values.product_type_id} onClick={getproducttypeid} />
                                                                    <lablel for="scales">{item.product_type}</lablel>
                                                                </div>
                                                            );
                                                        })}
                                                    </fieldset>
                                                    <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                        {errors.product_type_id && touched.product_type_id ? errors.product_type_id : null}
                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* <!-- end card --> */}
                                    </div>
                                    {/* <!-- end col --> */}

                                    <div className="col-lg-6">

                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="text-uppercase mt-0 mb-3 bg-light p-2">Product Images</h5>

                                                <form action="/" method="post" className="dropzone" id="myAwesomeDropzone" name='image' data-plugin="dropzone" data-previews-container="#file-previews"
                                                    data-upload-preview-template="#uploadPreviewTemplate">
                                                    <div className="fallback">
                                                        <input name="file" type="file" multiple onChange={handleFileChange} />
                                                    </div>

                                                    <div className="dz-message needsclick">
                                                        <i className="h1 text-muted dripicons-cloud-upload" ></i>
                                                        <h3>Drop files here or click to upload.</h3>
                                                        <span className="text-muted font-13" >(This is just a demo dropzone. Selected files are
                                                            <strong>not</strong> actually uploaded.)</span>
                                                    </div>
                                                </form>
                                                <label className="error" style={{ color: "red", fontSize: "15px" }}>
                                                    {errors.image && touched.image ? errors.image : null}
                                                </label>

                                                {/* <!-- Preview --> */}
                                                <div className="dropzone-previews mt-3" id="file-previews"></div>
                                            </div>
                                        </div>
                                        {/* <!-- end col--> */}


                                        {/* <!-- end card --> */}

                                    </div>
                                    {/* <!-- end col--> */}
                                </div>
                                {/* <!-- end row --> */}

                                <div className="row">
                                    <div className="col-12">
                                        <div className="text-center mb-3">
                                            <button type="button" className="btn w-sm btn-light waves-effect" style={{ marginRight: "10px" }}>Cancel</button>
                                            <button type="submit" className="btn w-sm btn-success waves-effect waves-light" style={{ marginRight: "10px" }}>Save</button>
                                            <button type="button" className="btn w-sm btn-danger waves-effect waves-light">Delete</button>
                                        </div>
                                    </div>
                                    {/* <!-- end col --> */}
                                </div>
                            </form>
                            {/* <!-- end row -->

                        
                        <!-- file preview template --> */}
                            <div className="d-none" id="uploadPreviewTemplate">
                                <div className="card mt-1 mb-0 shadow-none border">
                                    <div className="p-2">
                                        <div className="row align-items-center">
                                            <div className="col-auto">
                                                <img data-dz-thumbnail src="#" className="avatar-sm rounded bg-light" alt="" />
                                            </div>
                                            <div className="col ps-0">
                                                <a href="javascript:void(0);" className="text-muted fw-bold" data-dz-name></a>
                                                <p className="mb-0" data-dz-size></p>
                                            </div>
                                            <div className="col-auto">
                                                {/* <!-- Button --> */}
                                                <a href="" className="btn btn-link btn-lg text-muted" data-dz-remove>
                                                    <i className="dripicons-cross"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


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

            <Helmet>


                <script src="../assets/js/vendor.min.js"></script>


                <script src="../assets/libs/select2/js/select2.min.js"></script>
                <script src="../assets/libs/dropzone/min/dropzone.min.js"></script>


                <script src="../assets/libs/quill/quill.min.js"></script>

                <script src="../assets/js/pages/form-fileuploads.init.js"></script>


                <script src="../assets/js/pages/add-product.init.js"></script>


                <script src="../assets/js/app.min.js"></script>


            </Helmet>
        </>
    )
}
