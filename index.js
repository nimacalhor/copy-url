const btn = document.querySelector("button")


btn.addEventListener("click" ,function(){
    navigator.clipboard.writeText(window.location.href)
})