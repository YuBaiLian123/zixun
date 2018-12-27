$(document).ready(function($){

//弹出窗口的函数封装
  var openWindow=function(btnName){
     $(btnName).click(function(){
    // 获取登录窗体代码
      var loginHtml = $("#loginHtml").html();
      showLayer(loginHtml,700,470,closeCallback);
  });
  // 弹出层关闭回调函数
  function closeCallback(){
      $(".error-msg").html("");
  } 
  // 显示弹出层
  function showLayer(html,width,height,closeCallback){
    // 显示弹出层遮罩
       $("#layer-mask").show();
    // 显示弹出层窗体
       $("#layer-pop").show();
    // 设置弹出层窗体样式
       $("#layer-pop").css({
       width : width,
       height : height
       });
    // 填充弹出层窗体内容
      $("#layer-content").html(html);
    // 弹出层关闭按钮绑定事件
      $("#layer-close").click(function(){
      // 弹出层关闭
      hideLayer();
      // 关闭的回调函数
      closeCallback();
      });
  }
  // 隐藏弹出层
  function hideLayer(){
    // 弹出层关闭
      $("#layer-mask").hide();
      $("#layer-pop").hide();
  }
  //提交新建活动的弹出窗口的数据
  $('#actiSubmitBtn').click(function(){ 
      alert('提交成功，我们已经收到了您的信息！'); 
  });         
  $($("#ajaxForm").on("submit",function () {  
       $(this).ajaxSubmit(options);   
            return false;   
      })
    )
  var options = {
        url: "url",       
        type: "post",           
        success: successFun,    
        dataType: "json",       
        clearForm: true,        
        resetForm: true,        
        timeout: 3000           
    }
  function successFun(data,status) {
        window.open("https://cv.rulertech.com:19443/"); 
    }
}
  $(".newMan").click(function(){
   openWindow('.newMan');
  });
})