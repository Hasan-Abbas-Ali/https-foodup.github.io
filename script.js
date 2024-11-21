var typed2 = new Typed('#typetext',{
    strings: ['ORANGE', 'JUICES'],
    typeSpeed:10,
    backSpeed:5,
    loop:true,
    smartBackspace:true,
});

var swiper = new Swiper('.review_slider',{
    slidesPreView:2,
    spaceBetween:30,
    speed:1500,
    loop:true,
    autoplay:{
        delay:1500,
    },
    breakpoints:{
        1500:{
            slidesPreView:2,
            spaceBetweenSlides:30,
        },
        1000:{
            slidesPreView:2,
            spaceBetweenSlides:40,
        },
        900:{
            slidesPreView:1,
            spaceBetweenSlides:40,
        },
        0:{
            slidesPreView:1,
            spaceBetweenSlides:40,
        },
    },
});

// FAQ SECTION


var titles = document.querySelectorAll(".service_title");
var service_descriptions = document.querySelectorAll(".service_description");
var icons = document.querySelectorAll("fa-chevron-down");
var Headings = document.querySelectorAll(".service_title h2");

titles.forEach((title,index) =>{
    title.addEventListener("click", () =>{
        var isActive = service_descriptions[index].classList.contains("ActiveDesc");
        service_descriptions.forEach((desc) =>{
            desc.classList.remove("ActiveDesc");
        });
        icons.forEach((icon) =>{
            icon.classList.remove("fa-chevron-down");
        });
        Headings.forEach((Heading) =>{
            Heading.classList.remove("ActiveDesc");
        });
        if(!isActive){
            service_descriptions[index].classList.add("ActiveDesc");
            icons[index].classList.toggle("ActiveDesc");
            Headings[index].classList.toggle("ActiveDesc");
        }
    });
});

