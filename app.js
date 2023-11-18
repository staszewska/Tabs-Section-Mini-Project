
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")
const button3 = document.querySelector(".button3")
const tab1 = document.querySelector(".tabs__content1")
const tab2 = document.querySelector(".tabs__content2")
const tab3 = document.querySelector(".tabs__content3")

// button2.style.backgroundColor = "#e4f1fe";
// button3.style.backgroundColor = "#e4f1fe";

button1.addEventListener("click", () => {
    tab1.style.display = "block";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab1.style.backgroundColor = "#8dc6ff";
    button3.style.backgroundColor = "#e4f1fe";
    button2.style.backgroundColor = "#e4f1fe";
    button1.style.backgroundColor = "#8dc6ff";
})

button2.addEventListener("click", () => {
    tab1.style.display = "none";
    tab2.style.display = "block";
    tab3.style.display = "none";
    tab2.style.backgroundColor = "#8dc6ff";
    button3.style.backgroundColor = "#e4f1fe";
    button2.style.backgroundColor = "#8dc6ff";
    button1.style.backgroundColor = "#e4f1fe"
})

button3.addEventListener("click", () => {
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "block";
    tab3.style.backgroundColor = "#8dc6ff";
    button3.style.backgroundColor = "#8dc6ff";
    button2.style.backgroundColor = "#e4f1fe";
    button1.style.backgroundColor = "#e4f1fe";
})



