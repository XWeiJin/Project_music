var argee;

$(function(){
    $("#bt_not").bind("click",function(){
        console.log("not");
        location.href="./member.html";
    });

    $("#checkbox").change(function(){
        console.log($(this).val());
        if($(this).is(':checked')){
            console.log("同意");
            argee = true;
        }else{
            console.log("不同意");
            argee = false;
        }
    })

    
    $("#bt_OK").bind("click",function(){
        if(argee==true){
            $("#show").html('登入成功');
        
        }else{
            alert("請同意服務條款");
        }
    });
    
    

});