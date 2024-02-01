const burger = document.getElementById("burger");


const btn = document.getElementById("order");

const list = document.getElementById("order-details");

function getRandomOrderId(){
    return Math.floor(Math.random() * 1000) + 100;  //random ID between 100 to 1099
}

btn.addEventListener("click",()=>{
    const selecteditems = [];
    const checkBoxes = document.getElementsByName('foodItem');

    checkBoxes.forEach(function(checkbox){
        if(checkbox.checked){
            selecteditems.push(checkbox.value);
        }
    });

    if(selecteditems.length === 0){
        alert("Please select atleast one item");
        return;
    }
    const orderId = getRandomOrderId();

    const result = document.createElement("div");
    result.classList.add("result-div");

    result.innerHTML=`
    <span class="orderId"> Order Id:</span>
    <span class="orderId">${orderId}</span>
    <p class="list-sel">${selecteditems}</p>
    `
    list.appendChild(result);
})