const btn = document.querySelector(".btn")
const btn1 = document.querySelector("#btn1")
const content = document.querySelector(".article")
const content1 = document.querySelector(".article2")

btn.addEventListener('click', () =>{
    btn.classList.add("btn")
    btn1.classList.remove("btn1")
    content.style.display = "flex"
    content1.style.display = "none"
})


btn1.addEventListener('click', () =>{
    btn1.classList.add("btn1")
    btn.classList.remove("btn")
    content.style.display = "none"
    content1.style.display = "flex"
})