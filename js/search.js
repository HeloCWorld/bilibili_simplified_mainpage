function searchKeyword() {
    var keyword = document.querySelector('.middle_up_search_text').value;
    if (keyword !== "") {
        var url = "https://search.bilibili.com/all?keyword=" + encodeURIComponent(keyword);
        window.open(url, '_blank'); // 打开新的标签页
    } else {
        alert("请输入搜索关键词");
    }
}

function handleKeyDown(event) {
    if (event.keyCode === 13) {
        searchKeyword();
    }
}


// // 在页面加载后执行此操作
// window.onload = function() {
// var recordTime = document.getElementById('recordTime');
// var recordList = document.getElementById('recordList');

// // 获取当前时间
// var now = new Date();
// var year = now.getFullYear();
// var month = now.getMonth() + 1;
// var date = now.getDate();
// var hours = now.getHours();
// var minutes = now.getMinutes();
// var seconds = now.getSeconds();

// // 创建并填充时间字符串
// var timeString = year + "年\n" + "   " + month + "月\n" + "      " + date + "日\n" + "         " + hours + ":" + minutes + ":" + seconds;

// // 获取之前的搜索记录
// var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

// // 获取填写内容
// var keyword = document.querySelector('.middle_up_search_text').value;

// // 将当前搜索记录添加到本地存储的搜索历史中
// searchHistory.unshift({ time: timeString, keyword: keyword });
// localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

// // 遍历搜索历史并在页面上显示
// searchHistory.forEach(function(record) {
//     var recordTimeDiv = document.createElement('div');
//     recordTimeDiv.innerText = record.time;
//     recordTime.appendChild(recordTimeDiv);

//     var recordListDiv = document.createElement('div');
//     recordListDiv.innerText = record.keyword;
//     recordList.appendChild(recordListDiv);
// });
// }