function gotoHomePage() {
    var number = document.getElementById('numberInput').value;
    event.preventDefault();
    if (number !== "") {
        var url = "https://space.bilibili.com/" + number;
        window.open(url, '_blank');
    } else {
        alert("请输入UID");
    }
}

function gotoFavour() {
    var number = document.getElementById('numberInput').value;
    event.preventDefault();
    if (number !== "") {
        var url = "https://space.bilibili.com/" + number + "/favlist";
        window.open(url, '_blank');
    } else {
        alert("请输入UID");
    }
}
