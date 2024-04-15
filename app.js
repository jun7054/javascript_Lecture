const reviewList = [
    {
        id: 1,
        name: "Avante N",
        type: "indoor",
        img: "다운로드.jpg",
        text: "Just Steak. Very Delecious. Powerful, Soft, Juicy"
    },
    {
        id: 2,
        name: "Avante N",
        type: "indoor",
        img: "다운로드(2).jpg",
        text: "Just Steak. Very Delecious. Powerful, Soft, Juicy" 
    },
    {
        id: 3,
        name: "Steak",
        type: "indoor",
        img: "다운로드(3).jpg",
        text: "Just Steak. Very Delecious. Powerful, Soft, Juicy"
    }
]
const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
})
function showReview(index) {
    const item = reviewList{index};
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})

nextBtn.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex >= reviewList.length) {
        currentIndex = 0
    }
    showReview(currentIndex);
})