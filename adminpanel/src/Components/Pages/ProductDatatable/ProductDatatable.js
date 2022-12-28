import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { allproducts } from "../../../api/apiHandler";
import { deleteproduct } from "../../../api/apiHandler";
import DataTable from 'react-data-table-component';



export default function Home() {
  const [data, setDatas] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const columns = [
    {
      name: 'Sr',
      selector: row => row.id,
      sortable: true,
      style: {
        verticalAlign: "middle"
      }
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      style: {
        marginLeft: "-15px"
      }
    },
    {
      name: 'Iamge',
      selector: row => <img height="70px" width="70px" alt={row.name} src={row.image} />,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
    },
    {
      name: 'Launch Year',
      selector: row => row.launch_year,
      sortable: true,
    },
    {
      name: 'Edit',
      selector: row => <i className="fas fa-edit" id={row.id} onClick={editproduct} ></i>,
      sortable: true,
    },
    {
      name: 'Delete',
      selector: row => <i className="fa fa-trash" aria-hidden="true" id={row.id} onClick={deleteproducts} ></i>,
      sortable: true,
    },
  ];

  // const customSort = (rows, selector, direction) => {
  //   return rows.sort((rowA, rowB) => {
  //    // use the selector function to resolve your field names by passing the sort comparitors
  //    const aField = selector(rowA)
  //    const bField = selector(rowB)
   
  //    let comparison = 0;
   
  //    if (aField > bField) {
  //     comparison = 1;
  //    } else if (aField < bField) {
  //     comparison = -1;
  //    }
   
  //    return direction === 'desc' ? comparison * -1 : comparison;
  //   });
  //  };



  useEffect(() => {
    allproducts({})
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
  }, [count]);

  const deleteproducts = (e) => {
    var id = e.target.id;

    deleteproduct({ id: id })
      .then((res) => {
        console.log("ggggggg");
        //setData(res.data.data)
        setCount(count + 1);
        //navigate(0)
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Remove Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const editproduct = (e) => {
    var id = e.target.id;

    navigate("/editmodelproduct/" + id);
  };

  return (

    <>
      {/* <!-- Begin page --> */}
      {/* <div id="wrapper"> */}
      {/* <!-- start page title --> */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <Link to="javascript: void(0);">UBold</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="javascript: void(0);">Tables</Link>
                  </li>
                  <li className="breadcrumb-item active">Datatables</li>
                </ol>
              </div>
              <h4 className="page-title" style={{ marginTop: "135px" }}>
                Datatables
              </h4>
            </div>
          </div>
        </div>
        {/* <!-- end page title -->  */}

        {/* <!-- end row--> */}

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title">Product Datatable</h4>
                <Link type="button" to='/addnewproduct' className="btn btn-primary" style={{ marginLeft: "900px",marginTop:"-35px" }}>Add New Product</Link>
                <div className="container">
                 
                  <div>
                    <DataTable
                      columns={columns}
                      data={data}
                      pagination
                    />
                  </div>
                </div>

              </div>
              {/* <!-- end card body--> */}
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row--> */}
      </div>

    </>

    // <>
    //   {/* <!-- Begin page --> */}
    //   {/* <div id="wrapper"> */}
    //   {/* <!-- start page title --> */}
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12">
    //         <div className="page-title-box">
    //           <div className="page-title-right">
    //             <ol className="breadcrumb m-0">
    //               <li className="breadcrumb-item">
    //                 <Link to="javascript: void(0);">UBold</Link>
    //               </li>
    //               <li className="breadcrumb-item">
    //                 <Link to="javascript: void(0);">Tables</Link>
    //               </li>
    //               <li className="breadcrumb-item active">Datatables</li>
    //             </ol>
    //           </div>
    //           <h4 className="page-title" style={{ marginTop: "128px" }}>
    //             Datatables
    //           </h4>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <!-- end page title -->  */}

    //     {/* <!-- end row--> */}

    //     <div className="row">
    //       <div className="col-12">
    //         <div className="card">
    //           <div className="card-body">
    //             <h4 className="header-title">Product Datatable</h4>
    //             <Link type="button" to='/addnewproduct' className="btn btn-primary" style={{marginTop:"-26px",marginBottom:"20px",marginLeft:"900px"}}>Add New Product</Link>

    //             <table id="datatable-buttons" className="table table-striped dt-responsive nowrap w-100" >
    //               <thead>
    //                 <tr>
    //                   <th>Sr.no</th>
    //                   <th>Name</th>
    //                   <th>Image</th>
    //                   <th>Price</th>
    //                   <th>Discription</th>
    //                   <th>LaunchYear</th>
    //                   <th>Edit</th>
    //                   <th>Delete</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 {data?.map((item, ti) => {
    //                   return (
    //                     <tr style={{ marginRight: "10px" }} key={ti}>
    //                       <td style={{ verticalAlign: "middle", paddingLeft: "40px", }}> {ti + 1} </td>
    //                       <td style={{ verticalAlign: "middle", paddingLeft: "0px", }} > {item.name} </td>
    //                       <td style={{ verticalAlign: "middle" }}> <img src={item.image} style={{ width: "70px", height: "70px" }} /> </td>
    //                       <td style={{ verticalAlign: "middle", paddingLeft: "17px", }} > {item.price} </td>
    //                       <td style={{ verticalAlign: "middle", paddingLeft: "20px", }} > {item.description} </td>
    //                       <td style={{ verticalAlign: "middle", paddingLeft: "40px", }} > {item.launch_year} </td>
    //                       <td style={{ verticalAlign: "middle", paddingLeft: "25px", }} > <i className="fas fa-edit" id={item.id} onClick={editproduct} ></i> </td>
    //                       <td style={{ verticalAlign: "middle", paddingLeft: "35px", }} > <i className="fa fa-trash" aria-hidden="true" id={item.id} onClick={deleteproducts} ></i> </td>
    //                     </tr>
    //                   );
    //                 })}
    //               </tbody>
    //             </table>
    //           </div>
    //           {/* <!-- end card body--> */}
    //         </div>
    //         {/* <!-- end card --> */}
    //       </div>
    //       {/* <!-- end col--> */}
    //     </div>
    //     {/* <!-- end row--> */}
    //   </div>

    //   <Helmet>
    //     {/* <!-- Vendor js --> */}

    //     <script src="../assets/js/vendor.min.js"></script>

    //     {/* <!-- third party js --> */}
    //     <script src="../assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
    //     <script src="../assets/libs/datatables.net-bs5/js/dataTables.bootstrap5.min.js"></script>
    //     <script src="../assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
    //     <script src="../assets/libs/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js"></script>
    //     <script src="../assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
    //     <script src="../assets/libs/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js"></script>
    //     <script src="../assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
    //     <script src="../assets/libs/datatables.net-buttons/js/buttons.flash.min.js"></script>
    //     <script src="../assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
    //     <script src="../assets/libs/datatables.net-keytable/js/dataTables.keyTable.min.js"></script>
    //     <script src="../assets/libs/datatables.net-select/js/dataTables.select.min.js"></script>
    //     <script src="../assets/libs/pdfmake/build/pdfmake.min.js"></script>
    //     <script src="../assets/libs/pdfmake/build/vfs_fonts.js"></script>
    //     {/* <!-- third party js ends --> */}

    //     {/* <!-- Datatables init --> */}
    //     <script src="../assets/js/pages/datatables.init.js"></script>

    //     {/* <!-- App js --> */}
    //     <script src="../assets/js/app.min.js"></script>
    //   </Helmet>
    //   {/* </div> */}
    // </>
  );
}
