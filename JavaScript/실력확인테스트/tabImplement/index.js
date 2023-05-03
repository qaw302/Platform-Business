var icons = document.querySelectorAll(".favorites-icon");

for (var i = 0; i < icons.length; i++) {
    icons[i].onclick = function () {
        document.querySelectorAll(".favorites-icon").forEach(function (item) {
            item.classList.remove("on");
        });
        this.classList.add("on");
    }
}