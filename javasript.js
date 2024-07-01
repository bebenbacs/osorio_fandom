const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        prev()
    }
    if (e.key === "ArrowLeft") {
        next()
    }
})

prevBtn.addEventListener("click", () => {
    prev()
})
nextBtn.addEventListener("click", () => {
    next()
})

function prev(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
function next(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  