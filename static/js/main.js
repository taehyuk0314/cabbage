$(document).ready(()=>{
    main.init();
    main.onCreate();

});
var main = main||{}
main =(e=>{
    let avg_temp, min_temp, max_temp, rain_fall;
    let init = e =>{
        avg_temp = $('#avg_temp');
        min_temp = $('#min_temp');
        max_temp = $('#max_temp');
        rain_fall = $('#rain_fall');

    };
    let onCreate = e=>{
        setContentView();
    };
    let setContentView = e=>{
        login();
    }
    let clearData = ()=>{
        avg_temp.val('');
        min_temp.val('');
        max_temp.val('');
        rain_fall.val('');
    };
    let login = ()=>{
      $('#logout_btn').click(e=>{
        alert("로그아웃 버튼 클릭")
      })
    };
    let predict_price = ()=>{
        $('#res_btn').click(e=>{
            e.preventDefault();
    alert('평균기온: '+avg_temp.val());
       /* $.getJSON($SCRIPT_ROOT+'/calc',{stmt:$('#output2').text()},
            d=>{

                mainOutput.html(d.result);
            });*/
})

    };
    return {init : init,
    onCreate : onCreate}
})();


/*    $('.btn-equal').click(function(){
       let newOperator = $(this).val();
       if(num1.val() !== ''
           &&('+-*!/').indexOf(num1.val()) == -1
           && op.val() !== ''){
           num2.val(mainOutput.html());
           if(('+-*!/').indexOf(num2.val()) != -1) return;
           let x ={
               num1 : num1,
               num2 : num2,
               opcode : newOperator
           };
           $.getJSON($SCRIPT_ROOT+'/calc',x,d=>{
               if(d.result.toString().length > 13){
                   digitError();
               }else{
                   $('#output').html(d.result)
               }
           });
       }
    })*/

