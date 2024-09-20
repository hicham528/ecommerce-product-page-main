// Increment/Decrement quantity
let minus_btn = document.querySelector(".minus_btn");
let plus_btn = document.querySelector(".plus_btn");
let quantity_product = document.querySelector(".quantity_product");
let quantity = document.querySelector(".quantity");
let scoor = 0;
let shoop_result_container=document.querySelector(".shoop_result_container");
let shooping_nav=document.querySelector(".shooping_nav")
plus_btn.onclick = () => {
  scoor++;
  quantity_product.textContent = scoor;
  quantity.style.display = "flex";
  quantity.textContent = scoor;
};

minus_btn.onclick = () => {
  if (scoor > 0) {
    scoor--;
    quantity_product.textContent = scoor;
    quantity.textContent = scoor;
  }
  if (scoor === 0) {
    quantity.style.display = "none";
    quantity_product.textContent = "0";
  }
};

// Image selection logic
let parent_img = document.querySelector(".parent_img");
let img_container = document.querySelector(".image_container"); // Parent container for images

const look_img = () => {
  img_container.addEventListener("click", (e) => {
    let img_content = document.querySelectorAll(".img_content .select_img");
    let select_img = e.target.closest(".select_img"); // Clicked image container
    if (select_img) {
      img_content.forEach((item) => item.classList.remove("active")); // Remove active from all
      select_img.classList.add("active"); // Add active to clicked image
      parent_img.src = select_img.dataset.src; // Change main image src
    }
  });
};

look_img();

// Modal logic
const close_btn = document.getElementById("close_btn");
const looking_product_container = document.querySelector(
  ".looking_product_container"
);
let prev_btn = document.querySelector(".prev_btn");
let next_btn = document.querySelector(".next_btn");
let selected_img_result = document.querySelector(".selected_img_result");
let current = 0;
let img_content = document.querySelectorAll(".img_content .select_img");
parent_img.onclick = () => {
  looking_product_container.style.display = "flex";
  uppdateAllProduct(current);
};

close_btn.onclick = () => {
  looking_product_container.style.display = "none";
};

const uppdateAllProduct = (index) => {
  img_content.forEach((item) => item.classList.remove("active"));
  img_content[index].classList.add("active");
  selected_img_result.src = img_content[index].dataset.src;
  next_btn.onclick = () => {
    if (current < img_content.length) {
      current++;
      uppdateAllProduct(current);
    }
  };
  prev_btn.onclick = () => {
    if (current > 0) {
      current--;
      uppdateAllProduct(current);
    }
  };

  looking_product_container.onclick = (e) => {
    let select_img = e.target.closest(".select_img");
    if(select_img){
        current=Array.from(img_content).indexOf(select_img);
        uppdateAllProduct(current)
    }
  };
};


shooping_nav.onclick=()=>{
    shoop_result_container.classList.toggle("new_shoop_result_container")
}

let add_to_cart=document.querySelector(".add_to_cart");
let result_shooping=document.querySelector(".result_shooping");
add_to_cart.onclick=()=>{
    if(scoor>0){
        result_shooping.innerHTML=""
        shoop_result_container.classList.add("new_shoop_result_container");
        let parentElement=document.createElement("div");
        parentElement.classList.add("only_shooping")
        parentElement.innerHTML=`
           <img src="images/image-product-1-thumbnail.jpg" alt="">
          <div class="info_shooping">
            <h1>fall limited Edition Sneakers</h1>
            <div class="result_totale">
              <h3>$125.00</h3>
              <h2><i class="fa-solid fa-xmark"></i>${scoor}</h2>
              <h1>$${125*scoor}</h1>
            </div>
          </div>
          <img src="images/icon-delete.svg" alt="" class="delete_btn">
        `
        result_shooping.appendChild(parentElement)

        const delete_btn=parentElement.querySelector(".delete_btn");
        delete_btn.onclick=()=>{
            scoor=0;
            parentElement.remove();
            quantity_product.textContent = scoor;
            quantity.textContent = scoor;
        }
    }
}


let navbare=document.querySelector(".navbare");
let close_nav=document.querySelector(".close_nav");
let open_navbare=document.querySelector(".open_navbare")
open_navbare.onclick=()=>{
    navbare.classList.add("new_navbare")
}
close_nav.onclick=()=>{
    navbare.classList.remove("new_navbare")
}