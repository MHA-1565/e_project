function formdata(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let Contact = document.getElementById("Contact").value;

    localStorage.setItem("name1",name);
    localStorage.setItem("address1",address);
    localStorage.setItem("Contact1",Contact);

    if(name == "" || address == "" || Contact ==""){
        alert("")
}

else{
    alert("welcome")
    location.assign("onway.html")
}

}