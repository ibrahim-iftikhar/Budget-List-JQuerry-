           
   $(document).ready(()=>{
    console.log(("ok"));
    $(".input1").focus()
  $(".btn").on("click",function(){
    
if($(".input1").val() !== ""){
    
    $(".Name").removeAttr("disabled")
    $(".Amount").removeAttr("disabled")
    $(".Name").focus()
    $(".p1").text($(".input1").val())
}
else{
    alert("please Enter the Value")
    window.location.reload()
}


  })
  $(".btn2").on("click",function(){
    if($(".Name").val() || $(".Amount").val() !== ""){
        addtolist($(".Name").val(),$(".Amount").val())
        
        $(".Name").val(" ")
        $(".Amount").val(" ")

    }
  })
  function addtolist(name,Amount){
    console.log(name);
    if(name !==" " || Amount !==" "){
        var li=document.createElement("li")
        var span=document.createElement("span")
        li.innerText=name
        span.innerText=Amount
        console.log(Amount);
        $("ul").attr(li)
      let Budget=$(".input1").val()-$(".Amount").val()
        $(".p2").text(Budget)
    
    }
  }


   })