var argee;
var user1="text1234";
var pass1="text1234";
$(function(){
    $("#bt_not").bind("click",function(){
        // console.log("not");
        location.href="./member.html";
    });

    $("#checkbox").change(function(){
        console.log($(this).val());
        if($(this).is(':checked')){
            // console.log("同意");
            argee = true;
        }else{
            // console.log("不同意");
            argee = false;
        }
    })

    
    $("#bt_OK").bind("click",function(){
        if(argee==true){
            if(($("#user").val()==user1)&&($("#pass").val()==pass1)){
                // console.log("成功");
                // $("#show").addClass("bg-danger");
                alert("登入成功");
                location.href="./index.html";
                // $("#show").html("會員");
            }else{
                alert("帳號密碼錯誤");
                // console.log("失敗");
                
            }
            
            
        }else{
            alert("請同意服務條款");
        }
    });
    
    

});
// $(function(){
//     $("#bt_not").bind("click",function(){
//         // console.log("not");
//         location.href="./member.html";
//     });

//     $("#checkbox").change(function(){
//         console.log($(this).val());
//         if($(this).is(':checked')){
//             // console.log("同意");
//             argee = true;
//         }else{
//             // console.log("不同意");
//             argee = false;
//         }
//     })
    
//     function showdata(data) {
//         var username = $("#user").val();
//         var password = $("#pass").val();
//         var validLogin = false;
//         console.log(username);
//         data.forEach(function(item) {
//             console.log(item);
//             if (item.user == username && item.password == password) {
//                 validLogin = true;
//                 return false; // 结束循环
//             }
//         });
    
//         if (validLogin) {
//             alert("登入成功");
//             location.href = "./index.php";
//         } else {
//             alert("帳號密碼錯誤");
//         }
//     }
//     $("#bt_OK").bind("click", function() {
//         if (argee == true) {
//             $.ajax({
//                 type: "GET",
//                 url: "ReadDB.php",
//                 dataType: "json",
//                 async: false,
//                 success: showdata,
//                 error: function() {
//                     alert("資料錯誤!");
//                 }
//             });
//         } else {
//             alert("請同意服務條款");
//         }
//     });

// });
let show=document.querySelector("header");
window.addEventListener("scroll",()=>{
    if(scrollY!=0){
        show.style="box-shadow: 3px 3px 5px 1px #757474;";
    }else{
        show.style.boxShadow="none";
    }
})