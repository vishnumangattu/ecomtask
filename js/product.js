// To display url details
// console.log(window.location);
let product;
async function fetchProduct(){
    console.log(window.location.search);
    const urlParams= new URLSearchParams(window.location.search)
    // console.log(urlParams);

    //get id from urlParams
    const id=urlParams.get("id")
    console.log(id);

    const res=await fetch(`https://dummyjson.com/products/${id}`)
     product=await res.json()
    console.log(product);
    // console.log(product.thumbnail);
    document.getElementById("main-image").src= product.thumbnail
    document.getElementById("headdd").innerHTML= `<h4 style="color: rgb(123, 121, 121);margin-bottom: 15px;">${product.category}</h4>
            <h4 style="font-size: 20px; margin-bottom: 15px;">${product.title}</h4>
            <div style="margin-bottom: 20px;">
                <span><button class="pro-btn">${product.rating}<span><i class="fa-solid fa-star"></i></span></button></span>
                <span style="color: rgb(140, 138, 138);margin-left: 10px;font-weight: 560;">2,83,312 Ratings & 13,692 Reviews</span>
               </div>
            <P style="color: rgb(35, 162, 35);font-weight: bold; font-size: 17px; margin-bottom: 15px;">Extra ₹${Math.ceil(product.price*(product.discountPercentage/100))} off</P>
           <div style="word-spacing: 10px;margin-bottom: 10px;">
            <span style="font-weight: bold;font-size: 30px;">₹${product.price}</span>
            <span style="text-decoration: line-through;color: gray;">₹${Math.ceil(product.price+(product.price*(product.discountPercentage/100)))}</span>
            <span style="color:  rgb(41, 158, 26);font-weight: bolder; letter-spacing: 2px;">${product.discountPercentage}%OFF</span>
           </div>
          
           <h4 style="margin-bottom: 12px;font-size: 15px;">Coupons for you</h4>
           <p style="margin-bottom: 15px; font-size:14px;">Special PriceGet extra ₹4 off on 20 item(s) (price inclusive of cashback/coupon)T&C</p>

        <h4 style="margin-bottom: 15px;font-size: 15px;">Available offers</h4>
        <p style="margin-bottom: 12px;font-size:14px;"><img src="../images/c22c9fc4-0555-4460-8401-bf5c28d7ba29.webp" width="15px" style=" float: center;"> Bank OfferGet 10% off upto ₹50 on first Flipkart UPI transaction on order of ₹250 and aboveT&C</p>

        <p style="margin-bottom: 12px;font-size:14px;"> <img src="../images/c22c9fc4-0555-4460-8401-bf5c28d7ba29.webp" width="15px" style=" float: center;">Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</p>

        <p style=" margin-bottom: 20px;font-size:14px;"> <img src="../images/c22c9fc4-0555-4460-8401-bf5c28d7ba29.webp" width="15px" style=" float: center;">Bank Offer10% off up to ₹1,250 on ICICI Bank Credit Card Transactions, on orders of ₹5,000 and aboveT&C</p>
        <span class="last-btn">
            <button class="last-btn1" onclick="addToCart()">ADD TO CART</button>
            <button class="last-btn2" onclick="purchase()">BUY NOW</button> 
        </span>`
        str=``
    product.images.map((image)=>{
        str+=`<div class="pro-card">
                <img src="${image}" alt="no-image" onmouseover="changePic('${image}')">
             </div>`
    })
    document.getElementById("card").innerHTML=str


}
// change the main image when hovering multiple images on side 

function changePic(image){
    document.getElementById("main-image").src=image

}
function purchase()
{
    alert("Item purchased successfully")
}

// add to cart 

async function addToCart(){
    // set product details into local storage 
    localStorage.setItem(product.id,JSON.stringify(product))
    // js way to load another page onclick 
    window.location.href='../pages/cart.html'

}

fetchProduct()
