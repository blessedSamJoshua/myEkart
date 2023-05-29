const hamburger=document.querySelector(".hamburger");
const navList=document.querySelector(".nav-list");

if(hamburger){
    hamburger.addEventListener("click",()=>{
        navList.classList.toggle("open");
    })
}

//Popup

// const popup=document.querySelector(".popup");
// const closePopup=document.querySelector(".popup-close");

// if(popup){
//     closePopup.addEventListener("click",()=>{
//         popup.classList.add("hide-popup")
//     });
//     window.addEventListener("load",()=>{
//         
//             popup.classList.remove("hide-popup");
//         },1000);
//     })
// }

//ProductDetails
const productThumb=document.querySelectorAll(".product-thumb");
const title=document.querySelectorAll(".title");
let productCount=0;

Array.from(productThumb).forEach(element=>{
    element.addEventListener("click",()=>{
        sessionStorage.setItem("Home-Image",element.innerHTML);
        sessionStorage.setItem("Home-Title",element.parentElement.nextElementSibling.getElementsByClassName("title")[0].innerHTML);
        sessionStorage.setItem("Home-Cost",element.parentElement.nextElementSibling.getElementsByClassName("cost")[0].innerHTML);
        sessionStorage.setItem("Home-Brand",element.parentElement.nextElementSibling.getElementsByClassName("brand")[0].innerHTML);
        productCount=1;
        sessionStorage.setItem("array",array);
    })
})
Array.from(title).forEach(element=>{
    element.addEventListener("click",()=>{
        sessionStorage.setItem("Home-Image",element.parentElement.previousElementSibling.firstElementChild.innerHTML);
        sessionStorage.setItem("Home-Title",element.innerHTML);
        sessionStorage.setItem("Home-Cost",element.nextElementSibling.innerHTML);
        sessionStorage.setItem("Home-Brand",element.previousElementSibling.innerHTML);
        productCount=1;
        sessionStorage.setItem("array",array);
    })
})

const heart=document.querySelectorAll(".product-heart");
const cart=document.querySelectorAll(".product-cart");
let i=0;
let order;
let count=0;
let text=`<span class="order">${i}</span>`;
let target=Array.from(document.getElementsByClassName("order"));
let counter=0;
let array=[];
// sessionStorage.clear();
Array.from(cart).forEach(element=>{
    
    element.addEventListener("click",()=>{
        if(element.classList.contains("green")==false){
            i=i+1;
            element.classList.add("green");
            text=`<span class="order">${i}</span>`
            element.innerHTML=text;
            sessionStorage.setItem(`Image${i}`,element.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.innerHTML);
            sessionStorage.setItem(`Title${i}`,element.parentElement.parentElement.previousElementSibling.getElementsByClassName("title")[0].innerHTML);
            sessionStorage.setItem(`Cost${i}`,element.parentElement.parentElement.previousElementSibling.getElementsByClassName("cost")[0].innerHTML);
            array[counter]=i;
            counter=counter+1;


        }
        else{
            element.classList.remove("green");
            order=Number.parseInt(element.firstElementChild.innerHTML);
            sessionStorage.removeItem(`Image${order}`);
            sessionStorage.removeItem(`Title${order}`);
            sessionStorage.removeItem(`Cost${order}`);
            
            count=count+1;
            const index = array.indexOf(order);
            if (index > -1) { 
                array.splice(index, 1); 
            }
            counter=counter-1;

        }
    })
})

document.getElementById("cart-icon").addEventListener("click",()=>{
    sessionStorage.setItem("array",array);
})


