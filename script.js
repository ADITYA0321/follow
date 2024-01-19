var istatus = document.querySelector("h4")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML = "Unfollow"
        istatus.style.color="green"
        btn.innerHTML="Unfollow"
        check = 1
        

    }    else{
        
        istatus.innerHTML="Follow"
        istatus.style.color="red"
        btn.innerHTML="Follow"
        check = 0
    }
})
