$(document).ready(function(){
    $("#name").keyup(function(){
        let uName =$(this).val();
        let nameRe = /^[aA-zZ\s]{14}$/

        if (!nameRe.test(uName)){
     $(this).next('span').show().text("Please Enter Only Alphabets").css("color","red");
     $(this).css("border", "2px solid red")
        }else{
            $(this).next('span').hide();
            $(this).css("border","2px solid green")
        }
    })

    $("#email").keyup(function(){
        let uemail = $(this).val();
        let emailRe = /^[a-z0-9]+[@][a-z]+[.]{1}[a-z]{3}$/
        if (!emailRe.test(uemail)){
     $(this).next('span').show().text("Please Follow Email Format").css("color","red");
     $(this).css("border", "2px solid red")
        }else{
            $(this).next('span').hide();
            $(this).css("border","2px solid green")
        }
    })

    $("#number").keyup(function(){
        let uNumber =$(this).val();
        let numberRe = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/

        if (!numberRe.test(uNumber)){
     $(this).next('span').show().text("Please Enter Only Number").css("color","red");
     $(this).css("border", "2px solid red")
        }else{
            $(this).next('span').hide();
            $(this).css("border","2px solid green")
        }
    })
})