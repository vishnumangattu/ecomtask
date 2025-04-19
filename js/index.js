async function getProducts(){
   try{
        const res=await fetch("https://dummyjson.com/products")
        const data=await res.json()
        const response2=await fetch('https://dummyjson.com/products/categories');
        const categories=await response2.json();
        let str2='';
        categories.map(category=>{
            str2+=`
                <option value="${category.slug}">${category.name}</option>
            `
        })
        document.getElementById('filterfor').innerHTML+=str2; 
        let str=``;
        data.products.map((item)=>{
            str+=`<div>
            <a href="./pages/product.html?id=${item.id}">
            <div class="men-card">
          <div class="image">
            <img src="${item.thumbnail}" alt="">
          </div>
          <div class="content">
           <h5 class="category">${item.category.toUpperCase()}</h5>
            <h4>${item.title.length>=20?`${item.title.substring(0,20)}...`:item.title}</h4>
             <div> <span><button class="ratings">${item.rating} <span><i class="fa-solid fa-star"></i></span></button></span></div>
             <span class="discount-price">$${item.price}</span>
           <span class="original-price">$${Math.ceil(item.price+(item.price*item.discountPercentage/100))}</span>
             <span class="discount-percentage">${item.discountPercentage}% OFF</span>
            <div>
         </a>
            </div>            
          </div>
          
        </div>
        </div>`

        })
        document.getElementById("products").innerHTML=str
    }
   
    catch(error){
        console.log(error);
   }
}
getProducts()


// Code for search 
document.getElementById("search").addEventListener("keyup",async(e)=>{
    try{
        const res=await fetch("https://dummyjson.com/products")
        const data=await res.json()
        const search =data.products.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        // console.log(data);
        str=``
        search.map((item)=>{
          str+=`<a href="./pages/product.html?id=${item.id}" style="text-decoration: none;">
          <div class="men-card">
          <div class="image">
            <img src="${item.thumbnail}" alt="">
          </div>
          <div class="content">
           <h5 class="category">${item.category.toUpperCase()}</h5>
            <h4>${item.title.length>=20?`${item.title.substring(0,20)}...`:item.title}</h4>
             <div> <span><button class="ratings">${item.rating} <span><i class="fa-solid fa-star"></i></span></button></span></div>
             <span class="discount-price">$${item.price}</span>
           <span class="original-price">$${Math.ceil(item.price*100/item.discountPercentage)}</span>
             <span class="discount-percentage">${item.discountPercentage}% OFF</span>
              
           


           
            <div>
            
            </div>
            
          </div>
          
        </div></a>`

        })
        document.getElementById("products").innerHTML=str
    }
   
    catch(error){
        console.log(error);
   }
}

    
);

async function filter(){
  const res=await fetch("https://dummyjson.com/products")
  const data=await res.json();
  pro=data.products
   str='';
  pro.filter(product=> product.category.includes(document.getElementById('filterfor').value)).map(item=>{
    str+=`<div>
    <a href="./pages/product.html?id=${item.id}">
    <div class="men-card">
  <div class="image">
    <img src="${item.thumbnail}" alt="">
  </div>
  <div class="content">
   <h5 class="category">${item.category.toUpperCase()}</h5>
    <h4>${item.title.length>=20?`${item.title.substring(0,20)}...`:item.title}</h4>
     <div> <span><button class="ratings">${item.rating} <span><i class="fa-solid fa-star"></i></span></button></span></div>
     <span class="discount-price">$${item.price}</span>
   <span class="original-price">$${Math.ceil(item.price+(item.price*item.discountPercentage/100))}</span>
     <span class="discount-percentage">${item.discountPercentage}% OFF</span>
    <div>
 </a>
    </div>            
  </div>
  
</div>
</div>`;
  })
  document.getElementById('products').innerHTML=str;
}