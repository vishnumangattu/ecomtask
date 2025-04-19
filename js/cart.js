let product;
function displayCartItems(){
   if(localStorage.length==0)
   {
    alert("CART IS EMPTY \n Go Back To Home")
    window.location.href="../index.html"
    
   }
   else
   {
    str=``
    vkr=``
    let tprice=0;
    let dis=0;
    let tam=0;
    for(i=0;i<localStorage.length;i++)
    {
        const key=localStorage.key(i)
        const product=JSON.parse(localStorage.getItem(key));
         str+=`<div class="e-card">
                <div class="e-img">
                    <img src="${product.thumbnail}" alt="">
                </div>
                <div class="e-doc">
                    <h6>${product.category}</h6>
                    <h4>${product.title}</h4>
                    <div style="margin-bottom: 8px;"><span><button class="pro-btn1">${product.rating}<span class="icon"><i class="fa-solid fa-star"></i></span></button></span></div>
                    <div class="prices"><span class="price" style="margin-top: 10px;">$${product.price} </span><span class="math">$${Math.ceil(product.price+(product.price*(product.discountPercentage/100)))}</span><span class="discnt">${product.discountPercentage}% Off</span>\</div>
                    <div><button onclick="removeItem(${product.id})" class="btn">Remove</button><button  class="bttn" onclick="purchase()">BUY NOW</button></div>
                </div>
            </div>`
           
            tprice+=Math.ceil(product.price+(product.price*(product.discountPercentage/100)))
            dis+=Math.ceil((product.price*product.discountPercentage/100))
            tam+=product.price
  }
  
  
  document.getElementById("cart-products").innerHTML=str;
  
  vkr=`<div class="p-card">
  <h3>Price Details</h3>
  <table>
  <tr>
    <td><p>price(${localStorage.length} item):</p></td>
    <td><p>$${tprice}</p></td>
  </tr>
  <tr>
    <td><p>Discount:</p></td>
    <td><p>$${dis}</p></td>
  </tr>
  <tr>
    <td><p>Delivery charge:  </p></td>
  <td><p><span style="color: rgb(64, 218, 30);;">Free</span></p></td>
    
  </tr>
  <tr>
    <td><h4>Total Amount:</h4></td>
    <td><h4> $${tam}</h4></td>
  </tr>
</table>
  <h4 style="color: rgb(64, 218, 30); text-shadow:.5px .5px 1px black;">you will saved $${dis} on this order</h4>
</div>`
  document.getElementById("cart-rate").innerHTML=vkr;

    }
   }
  
displayCartItems()

function removeItem(id){
          
            localStorage.removeItem(id);
            displayCartItems()
    
}
function purchase()
{
    alert("Item purchased successfully")
}

