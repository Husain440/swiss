
import { axiosClient } from "./apiClient";

export function Loginapi(data){
    return axiosClient.post('/api/v1/auth/admin/login',data); 
}

export function SignUpapi(data){
    return axiosClient.post('/api/v1/auth/admin/signup',data); 
}

export function Forgotpassword(data){
    return axiosClient.post('/api/v1/auth/admin/forgotpassword',data); 
}

export function userdetails(data){
    return axiosClient.post('/api/v1/auth/admin/userdetails',data); 
}

export function deleteuser(data){
    return axiosClient.post('/api/v1/auth/admin/deleteuser',data); 
}

export function deleteproduct(data){
    return axiosClient.post('/api/v1/auth/admin/deleteproduct',data); 
}

export function addproduct(data){
    return axiosClient.post('/api/v1/auth/admin/addproduct',data); 
}

export function viewuser(data){
    return axiosClient.post('/api/v1/auth/admin/viewuser',data); 
}

export function userstatus(data){
    return axiosClient.post('/api/v1/auth/admin/userstatus',data); 
}

export function allproducts(data){
    return axiosClient.post('/api/v1/auth/admin/allproducts',data); 
}

export function allbrands(data){
    return axiosClient.post('/api/v1/auth/admin/allbrands',data); 
}

export function allauction(data){
    return axiosClient.post('/api/v1/auth/admin/allauction',data); 
}

export function allproducttype(data){
    return axiosClient.post('/api/v1/auth/admin/allproducttype',data); 
}

export function editProfile(data){
    return axiosClient.post('/api/v1/auth/admin/editProfile',data); 
}

export function singleproduct(data){
    return axiosClient.post('/api/v1/auth/admin/singleproduct',data); 
}

export function logout(data){
    return axiosClient.post('/api/v1/auth/admin/logout',data); 
}

export function singleadmin(data){
    return axiosClient.post('/api/v1/auth/admin/singleadmin',data); 
}

export function Changepassword(data){
    return axiosClient.post('/api/v1/auth/changepassword',data); 
}

export function ChangeForgotpassword(data){
    return axiosClient.post('/api/v1/auth/changepassword',data); 
}

export function Product(data){
    return axiosClient.post('/api/v1/auth/productdetails',data); 
}

export function AddToCart(data){
    return axiosClient.post('/api/v1/auth/add_to_cart',data); 
}

export function navbar(data){
    return axiosClient.post('/api/v1/auth/categorydetails',data); 
}

export function categorywiseproduct(data){
    return axiosClient.post('/api/v1/auth/categorywiseproduct',data); 
}

export function editprofile(data){
    return axiosClient.post('/api/v1/auth/editprofile',data); 
}

export function getBiddetails(data){
    return axiosClient.post('/api/v1/auth/getmybids',data); 
}

export function getauctionlist(data){
    return axiosClient.post('/api/v1/auth/getauctionlist',data); 
}

export function getauctiondetails(data){
    return axiosClient.post('/api/v1/auth/getauctiondetails',data); 
}


export function cartlisting(data){
    return axiosClient.post('/api/v1/auth/cartlisting',data); 
}

export function removecart(data){
    return axiosClient.post('/api/v1/auth/removecart',data); 
}









