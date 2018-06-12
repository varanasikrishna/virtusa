function addDetails(){
    console.log("Add button clicked");
    if(validateFirstName()){
        if(validateFullName()){
            PostData();
        }
        else{
            displayErrorMessageForFullName();
        }
    }
}
function validateFirstname(){
    const firstName=$("#firstName").val();
    if(firstName=''){
        return false;
    }
}
function validateFullName(){
    const lastName=$("#lastName").val();
    if(lastName=''){
        return false;
    }
}
function displayErrorMessageForFirstName(){
    $('#errforFirstName').show();
}
function displayErrorMessageForFullName(){
    $('#span-for-errors').show();
}
$('document').ready(()=>{
    $('.span-for-errors').hide();
});
function PostData(){
    const data={firstName:$("#firstName").val(),
                lastName:$("#lastName").val()};
    $.ajax({
        type:"post",
        url:"",
        data:JSON.stringify(data),
        sucess: onpostsucess,
         
    });
}