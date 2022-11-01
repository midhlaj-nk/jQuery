

$(document).ready(function () {
    $("#ps").hide();
    $("#add").click(function () { 
    var listitems=$("#input_text").val()
    $("#ps").show();
    $("ul").append("<div class=listmain>   <div class='list1' ><input type='checkbox' class=cbox id='box' > <label contenteditable='true' id='cboxx' class='cboxx1'> "+listitems+" </label></div> <div class='close disable' id='closee'><i class='fa fa-trash'></i></div></div>");
    // $(".close").hide();
    
});

$('ul').on('click', '.close', function () {
    $(this).parent().fadeOut();
});
    $(document).on('click','.cbox',function() {
        $(this).closest(".listmain").find(".close").removeClass('disable');
        $(this).closest(".listmain").find(".cbox").css("display","none");
        $(this).closest(".listmain").find(".cboxx1").attr('contenteditable','false');
        
        });

    

    });
  
    
    
 

        
    




   
