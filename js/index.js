// jquery入口函数
$(function(){
    // 调用获取屏幕的宽度
    setScreen();

    // 根据界面的变化重新渲染页面事件
    window.onresize = function(){
        setScreen();
    }

    // 封装获取屏幕型号的函数
    function setScreen(){
        //获取根标签屏幕的宽度
        var screenWidth = document.querySelector("html").offsetWidth;

        // 根据获取的屏幕宽度显示在title标签中, 屏幕型号类型与bootstrap的栅格系统匹配
        if (screenWidth > 1200){
            document.querySelector("title").innerText = "大屏:" + screenWidth;
        } else if (screenWidth > 992 && screenWidth<= 1200){
            document.querySelector("title").innerText = "中屏:" + screenWidth;
        } else if (screenWidth > 768 && screenWidth <= 992) {
            document.querySelector("title").innerText = "小屏:" + screenWidth;
        } else if (screenWidth <= 768) {
            document.querySelector("title").innerText = "极小屏:" + screenWidth;
        }
    }
})