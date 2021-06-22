function 管理员(_filePos, _target, _download) {
    let pwd_result = 验证密码();
    if (pwd_result == -1) alert("密码错误");
    if (pwd_result == 1)
        DOWNLOAD(_filePos, _target, _download)
}

function 验证密码() {
    let password;
    password = prompt("请输入密码");
    if (password == 66) return 1; //正确
    else if (password == "" || password == undefined) return 0; //未输入
    else return -1; //错误
}

function DOWNLOAD(_filePos, _target, _download) { /*此函数实现下载文件*/
    //参数1是文件路径
    //参数2是target属性
    //参数3是下载文件名
    var a = document.createElement("a");
    a.download = _download;
    a.href = _filePos;
    a.target = _target;
    a.click();
}

function 仅模板提示() { alert('此网页仅为模板，无实用功能') };
window.onload =
    alert("欢迎访问本网站！为了您良好的的体验，请使用电脑、iPad等大屏设备横屏访问，或者切换到手机版网页。");