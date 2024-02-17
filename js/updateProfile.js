var savedUID = null; // 全局变量用于保存UID

// 在页面加载时，尝试从 localStorage 中获取已保存的 UID 和 nickname
window.onload = function() {
    var savedUID = localStorage.getItem('UID');
    var savedNickname = localStorage.getItem('nickname');
    
    if (savedUID !== null) {
        document.getElementById('numberInput').value = savedUID;
        savedUID = savedUID; // 更新全局变量
    }

    if (savedNickname !== null) {
        document.getElementById('nicknameInput').value = savedNickname;
    }

    // 如果 localStorage 中保存了头像数据，则显示保存的头像
    var uploadedImage = localStorage.getItem('uploadedImage');
    if (uploadedImage) {
        var imgElement = document.getElementById('uploadedImage');
        imgElement.src = uploadedImage;
        imgElement.style.display = 'inline';
    } else {
        // 如果 localStorage 中没有保存头像数据，则使用默认的头像
        var defaultImage = "img/default_avatar.png"; // 默认头像路径
        var imgElement = document.getElementById('uploadedImage');
        imgElement.src = defaultImage;
        imgElement.style.display = 'inline';
    }
};

function saveData() {
    var UID = document.getElementById('numberInput').value;
    var nickname = document.getElementById('nicknameInput').value;

    if (UID !== "") {
        localStorage.setItem('UID', UID);
        savedUID = UID; // 更新全局变量
    } else {
        alert("请输入UID");
        return; // 如果UID为空，停止保存操作
    }

    // 如果昵称不为空，则保存昵称
    if (nickname !== "") {
        localStorage.setItem('nickname', nickname);
    }
}

function clearData() {
    localStorage.removeItem('UID');
    localStorage.removeItem('nickname');
    savedUID = null; // 清空全局变量
    document.getElementById('numberInput').value = "";
    document.getElementById('nicknameInput').value = "";
}