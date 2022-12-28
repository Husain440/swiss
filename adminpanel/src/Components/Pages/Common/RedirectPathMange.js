
export function loginRedirectCall(){
    let path= window.location.protocol+"//"+window.location.host+"/" 
//    window.open(path,'mywindow').focus()
     console.log(path)
    window.location.href = path;
  }

export function homeRedirectCall(){
    let path= window.location.protocol+"//"+window.location.host+"/home"
//    window.open(path,'mywindow').focus()
    console.log(path)
    window.location.href = path;  
}

export function logOutRedirectCall(){
  localStorage.removeItem("isLogin");
  localStorage.removeItem("id");
  localStorage.removeItem("token");
  localStorage.removeItem("phone");
  localStorage.removeItem("email");

  loginRedirectCall()
}

export function loginRedirectCallWithDataStore(data){
  // console.log("Redirect Call")
   console.log("1",data)
  localStorage.setItem("isLogin",true);
  localStorage.setItem("id",data.id);
  localStorage.setItem("token",data.token);
  localStorage.setItem("phone",data.phone_no);
  localStorage.setItem("email",data.email);
  homeRedirectCall()
}


  