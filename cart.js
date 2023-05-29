let arr=sessionStorage.getItem("array");
let text="";
let newArr=[];
let subTotal=0;
let i=0;
for(let x of arr){
    if(x==","){
        newArr[i]=Number.parseInt(text);
        text="";
        i=i+1;
    }
    else{
        text=text+x;
    }
}
newArr[i]=Number.parseInt(text);
if(newArr.length>0){
for(let val of newArr){
let img=sessionStorage.getItem(`Image${val}`);
let title=sessionStorage.getItem(`Title${val}`);
let cost=sessionStorage.getItem(`Cost${val}`);


document.getElementsByClassName("tableRow")[0].insertAdjacentHTML("afterend",`<tr class="tableRow">
<td>
    <div class="cart-info">
        ${img}
        <div>
            <p>${title}</p>
            <span>Price: ${cost}</span>
            <br>
            <a href="#">remove</a>
        </div>
    </div>
</td>
<td>
    <input type="number" value="1" min="1">
</td>
<td>₹${cost}</td>
</tr>`)
}
}
let m=1;
NeedToPrint=()=>{

    for(let x of newArr){
        if(sessionStorage.getItem(`Title${x}`)==sessionStorage.getItem("Home-Title")){
            subTotal=subTotal+Number.parseInt(sessionStorage.getItem(`Cost${x}`));
            m=0;
            return false;
        }
        else{
            subTotal=subTotal+Number.parseInt(sessionStorage.getItem(`Cost${x}`));
        }
    }
    
}
const decision=NeedToPrint();
if(m==1){
    subTotal=subTotal+Number.parseInt(sessionStorage.getItem("Home-Cost"));
}

if(decision!=false){
    let img=sessionStorage.getItem("Home-Image");
    let title=sessionStorage.getItem("Home-Title");
    let cost=sessionStorage.getItem("Home-Cost");

    document.getElementsByClassName("tableRow")[0].insertAdjacentHTML("afterend",`<tr class="tableRow">
    <td>
        <div class="cart-info">
            ${img}
        <div>
            <p>${title}</p>
            <span class="amount">Price: ${cost}</span>
            <br>
            <a href="#">remove</a>
        </div>
        </div>
    </td>
<td>
    <input type="number" value="1" min="1" class="inp">
</td>
<td>₹${cost}</td>
</tr>`)
}

document.getElementById("subtotal").innerHTML="₹"+subTotal;
document.getElementById("total").innerHTML="₹"+(subTotal+50);
// console.log(subTotal)




