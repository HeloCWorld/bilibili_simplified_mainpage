
function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var imgElement = document.getElementById('uploadedImage');
        imgElement.src = reader.result;
        imgElement.style.display = 'inline';
        // 保存上传的头像数据到 localStorage
        localStorage.setItem('uploadedImage', reader.result);

        // 新添加的代码，用于在页面上显示上传的头像
        var avatarPreview = document.getElementById('avatarPreview');
        avatarPreview.src = reader.result;
        avatarPreview.style.display = 'inline';
    }
    reader.readAsDataURL(event.target.files[0]);
}

// 点击头像容器时触发文件选择
document.getElementById('uploadedImageContainer').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});
