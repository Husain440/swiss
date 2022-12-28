import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { singleproduct } from '../../../api/apiHandler';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfile } from '../../../api/apiHandler';


export default function EditModelProduct() {
    const params = useParams();
    const[data, setData] = useState([])

   
    const {  handleBlur, handleChange,  values, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            name: '',
            price: '',
            description: '',
            launch_year:''

        },
        
        onSubmit: (values) => {

            editProfile({ "id":params.id,"name":values.name,"price":values.price,"description":values.description,"launch_year":values.launch_year})
                .then(function (res) {
                    
                    if (res.data.code == 1) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Product Details Update Successfully',
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
                    
                    console.log(error);
                })
        }
    })
   
    useEffect(() =>{
        singleproduct({ "id":params.id })

        .then((res) => {
            
            setData(res.data.data[0]);
            setFieldValue("name",res.data.data[0].name)
            setFieldValue("image",res.data.data[0].image)
            setFieldValue("price",res.data.data[0].price)
            setFieldValue("description",res.data.data[0].description)
            setFieldValue("launch_year",res.data.data[0].launch_year)
        }).catch(err => console.log(err));
    },[params.id])


  return (
    <>
         <div className="container">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                    <div className="col-md-6 offset-md-3" style={{marginTop:"160px"}}>
                        <h2 className="text-center text-dark mt-3">Edit Profile</h2>
                        <div className="card my-3">
                            <div className="text-center">
                                <img src={values.image} className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile"/>
                            </div>
                            <div className='p-lg-5'>
                                <div className="mb-2">
                                    <label className='pb-2'>Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Name" autoComplete='nope' onBlur={handleBlur} value={values.name} onChange={handleChange} />
                                    
                                </div>
                                <div className="mb-3">
                                    <label className='pb-2'>Price</label>
                                    <input type="text" className="form-control" name="price" placeholder="Price" autoComplete='nope' onBlur={handleBlur} value={values.price} onChange={handleChange}  />
                                    
                                </div>
                                <div className="mb-3">
                                    <label className='pb-2'>Description</label>
                                    <input type="text" className="form-control" name="description" placeholder="Description" autoComplete='nope' onBlur={handleBlur} value={values.description} onChange={handleChange}  />
                                    
                                </div>
                                <div className="mb-3">
                                    <label className='pb-2'>Launch Year</label>
                                    <input type="text" className="form-control" name="launch_year" placeholder="Launch Year" autoComplete='nope'  onBlur={handleBlur} value={values.launch_year} onChange={handleChange} />
                                    
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary px-5 w-100" >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
    </>
  )
}
