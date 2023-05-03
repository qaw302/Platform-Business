var elice_btn = document.getElementById("elice");

function none() {
    elice_btn.style.display = 'none';
}
function block() {
    elice_btn.style.display = 'block';
}

document.getElementById("hide").addEventListener('click', none);
document.getElementById("show").addEventListener('click', block);