let addToCart=document.getElementsByClassName("addCart");

document.getElementsByClassName("main")[0].innerHTML=sessionStorage.getItem("Home-Image");
document.getElementsByClassName("product-title")[0].innerHTML=sessionStorage.getItem("Home-Title");
document.getElementsByClassName("price")[0].innerHTML=sessionStorage.getItem("Home-Cost")
document.getElementsByClassName("product-brand")[0].innerHTML=sessionStorage.getItem("Home-Brand")


addToCart[0].addEventListener("click",()=>{
    sessionStorage.setItem("Product-Image",document.getElementsByClassName("main")[0].innerHTML);
    sessionStorage.setItem("Product-Title",document.getElementsByClassName("product-title")[0].innerHTML);
    sessionStorage.setItem("Product-Brand",document.getElementsByClassName("product-brand")[0].innerHTML);
    sessionStorage.setItem("Product-Cost",document.getElementsByClassName("price")[0].innerHTML)
    sessionStorage.setItem("print","1");
})

