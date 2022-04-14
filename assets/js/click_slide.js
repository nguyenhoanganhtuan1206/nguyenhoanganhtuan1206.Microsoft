const slider = document.querySelector(".surface__introduction-container");
const sliderMain = document.querySelector(".slide-introduction__list");
const sliderItems = document.querySelectorAll(".slide-introduction__item");
const nextBtn = document.querySelector(".slide-introduction__btn-next");
const prevBtn = document.querySelector(".slide-introduction__btn-prev");
const sliderItemWidth = `${1000}px`;
let positionX = 0;

nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
});

prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
})

function handleChangeSlide(direction) {
    if(direction === 1) {
        // positionX = positionX - sliderItemWidth;
        sliderMain.style = `transform:translate(${-1000}px)`;
        nextBtn.style.display = "none";
        prevBtn.style.display = "flex";
    } else {
        sliderMain.style = `transform:translate(${0}px)`;
        prevBtn.style.display = "none";
        nextBtn.style.display = "flex";
    }
}