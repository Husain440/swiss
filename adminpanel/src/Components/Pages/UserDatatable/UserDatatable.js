import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { userdetails } from '../../../api/apiHandler';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { deleteuser } from '../../../api/apiHandler';
import { useNavigate } from 'react-router-dom';
import { userstatus } from '../../../api/apiHandler';


export default function Home() {
    const [datas, setData] = useState([])
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        userdetails({})
            .then(function (res) {

                console.log("&&&&&", res.data.data)
                if (res.data.code == 1) {

                    setData(res.data.data)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.data.message,
                    })
                    // console.log(res.data);
                }
            })
            .catch(function (error) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error,
                })
            })
    }, [count]);

 const deleteusers = (e) =>{
    var id = e.target.id;
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) =>{
        if (result.isConfirmed) {
            deleteuser({ "id" : id })
            .then(res => {
                //setData(res.data.data)
                setCount(count+1)
                //navigate(0)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Remove Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })     
            })
            .catch(err => {
                setCount(count+1)
            })
        }
      }) 
 } 

 const viewusers = (e) =>{
   var id = e.target.id;
     navigate("/singleuser/" + id)
 }

 const statusactive = (e) =>{
    var id = e.target.id;
   
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) =>{
        if (result.isConfirmed) {
            userstatus({ "id" : id })
            .then(res => {
                
             // console.log("AAA",res.data.data[0])
                if (res.data.data[0].is_active == 1){
                    console.log("5")
                    e.target.style.color = "green"              
                }
                else{
                    console.log("4")
                    e.target.style.color = "black"      
                }
                
                //setData(res.data.data)
                setCount(count+1)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Status Change Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })     
            })
            .catch(err => {
                console.error(err);
            })
        }
      })

    
 }
    return (
        <>
         {/* <!-- Begin page --> */}
         {/* <div id="wrapper"> */}
            {/* <!-- start page title --> */}
            <div className='container' >
                <div className="row" >
                    <div className="col-12">
                        <div className="page-title-box">
                            <div className="page-title-right">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item"><Link to="javascript: void(0);">UBold</Link></li>
                                    <li className="breadcrumb-item"><Link to="javascript: void(0);">Tables</Link></li>
                                    <li className="breadcrumb-item active">Datatables</li>
                                </ol>
                            </div>
                            <h4 className="page-title" style={{marginTop:"128px"}}>Datatables</h4>
                        </div>
                    </div>
                </div>
                {/* <!-- end page title -->  */}

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body" >
                                <h4 className="header-title">User Datatable</h4>
                                <table id="basic-datatable" className="table dt-responsive nowrap w-100">
                                    <thead>
                                        <tr className='text-center'>
                                            <th>Sr.No</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                            <th>Address</th>
                                            <th>Country</th>
                                            <th>City</th>
                                            <th>Delete</th>
                                            <th>View</th>
                                            <th>Status</th>   
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {datas?.map((item, ti) => {
                                            return (
                                                <tr className='text-center' key={ti}>
                                                    <td>{ti + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone_no}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.country}</td>
                                                    <td>{item.city}</td>
                                                    <td><i className="fa fa-trash" aria-hidden="true" id={item.id} onClick={deleteusers}></i></td>
                                                    <td><i className="fa fa-eye" aria-hidden="true"  id={item.id} onClick={viewusers}></i></td>
                                                    <td><i className="fa fa-circle" aria-hidden="true" id={item.id} onClick={statusactive} style={{color: item.is_active == 1 ? 'green' : 'black'}} ></i></td>   
                                                </tr>
                                            );
                                        })}

                                    </tbody>
                                </table>

                            </div>
                            {/* <!-- end card body--> */}
                        </div>
                        {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}
                </div>
                {/* <!-- end row--> */}




                
                {/* <!-- end row--> */}
            </div>

            <Helmet>

               
                {/* <!-- Vendor js --> */}
                
                <script src="../../assets/js/vendor.min.js"></script>

                {/* <!-- third party js --> */}
                <script src="../../assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
                <script src="../../assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js"></script>
                <script src="../../assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
                <script src="../../assets/libs/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js"></script>
                <script src="../../assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
                <script src="../../assets/libs/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js"></script>
                <script src="../../assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
                <script src="../../assets/libs/datatables.net-buttons/js/buttons.flash.min.js"></script>
                <script src="../../assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
                <script src="../../assets/libs/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
                <script src="../../assets/libs/datatables.net-select/js/dataTables.select.min.js"></script>
                <script src="../../assets/libs/pdfmake/build/pdfmake.min.js"></script>
                <script src="../../assets/libs/pdfmake/build/vfs_fonts.js"></script>
                {/* <!-- third party js ends --> */}

                {/* <!-- Datatables init --> */}
                <script src="../../assets/js/pages/datatables.init.js"></script>

                 {/* <!-- App js --> */}
                 <script src="../../assets/js/app.min.js"></script>

                
            </Helmet>
            {/* </div> */}
        </>
    )
}
