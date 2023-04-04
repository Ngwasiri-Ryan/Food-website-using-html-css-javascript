//for scrolling effect
window.addEventListener('scroll',function(){
    var header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);
});

//for side-bar
   const hamburger =document.querySelector('.hamburger-menu');

   const header =document.querySelector('header');
   hamburger.addEventListener('click',function(){
   header.classList.toggle('active');
    if(header.classList.contains('active')){
        hamburger.src='images/close icon.png';
    }else{
        hamburger.src='images/menu icon 2.png';
    }
    
    
   });
//for typing text anaimation
const text= document.querySelector(".second-text");

const textLoad = () => {
     setTimeout( () => {
         text.textContent="food services"

     },0 );
     setTimeout( () => {
        text.textContent="food catering"

    },4000 );
    setTimeout( () => {
        text.textContent="restaurant services"

    },8000 );
    setTimeout( () => {
        text.textContent="food delivery"

    },12000 );
    setTimeout( () => {
        text.textContent="gift baskets"

    },16000 );
    setTimeout( () => {
        text.textContent="barbecue and grilling"

    },24000 );
}
textLoad();
setInterval(textLoad,28000)

//for about content
let heading = document.querySelector('.about-us-heading');
let content = document.querySelector('.content');

let restaurant =document.querySelector('.restaurant');
restaurant.addEventListener('click', function(){
    heading.innerHTML='Our Restaurants';
    content.innerHTML='Our restaurants are called the Food Garden. There are many of these restaurants situated across the continent world wideat Asia, Africa , Europe, America and Australia. Our restaurants have one of the best reviews in the world on media along side food articles.Our restaurants all have a four star rating best to your standards. You will find the experience of every friend, family or loved one you bringinto our restaurants for a meal.';
  }
);

let deliveries =document.querySelector('.deliveries');
deliveries.addEventListener('click', function(){
    heading.innerHTML='Our Deliveries';
    content.innerHTML='Our delivery services are spread around the world by scale of shipping to firm deliveries and home deliveries in various based cities. Our deliveries are efficient, substainable,and affordable depending on the quantitu of your order. We have hundreds of employees incharge of this working sector who prioritise their jods to satisfy the needs of our clients';
   
}
);

let catering =document.querySelector('.catering');
catering.addEventListener('click', function(){
    heading.innerHTML='Our Catering';
    content.innerHTML='We offer the best catering services to our clients at weddings, birthdays and other ceremonies.Our catering staff ensures the food planning of your ocasion is successful.We prepare various dishes depending on your demands and we ensure the purchase of your ingredients are economic and suitable for your consumption. ';
    
}
);

let business =document.querySelector('.business');
business.addEventListener('click', function(){
    heading.innerHTML='Our Business';
    content.innerHTML='This business was founded by William Cook. This business thrived in the early 2000s as it was known to have an excellent taste and blend of all its ingredients.This business has thousands of workers and multiple branches throughout the globe. We offer food sercies, catering,food delivery, and have multiple restaurants in the world in partnership with other firms to satsfy our clients.';
    
}
);

let cuisine =document.querySelector('.cuisine');
cuisine.addEventListener('click', function(){
    heading.innerHTML='Our Cuisine';
    content.innerHTML='Our cuisine is one of the best in the world as it contains one of the mostnatural, rare and exotic spices as ingredients to our meals. The meals are being handled by specialist chefs in different parts of the world. Our cuisine provides the best for our clients, business acossiates and more on people. All products are organically grown with no inorganic fertilizers promoting the customers  ';
    
}
);
















