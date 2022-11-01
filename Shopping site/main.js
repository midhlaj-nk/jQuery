$(document).ready(function () {


    
    price1= 3000;
    price3 = 4000
    price2 = 8999
    price4 = 3000
    price5 = 899
    
   
    ///////////////add to cart from button
    $("#product1").click(function () { 
        
        var count=$("#quantityval1").val()
        if (count==undefined)
        {
        $("#my-cart-table").append('<tr><td><img width="100px" height="100px" img src="images/menglass.jpg"</td><td>Ray-ban</td><td > '+price1+' </td><td><input type="number" min="1" id="quantityval1" class="quantityval" value="1"></td><td><input type="number" id="total_price1" class="total_pr" value="3000" disabled></td><td><button class="pr_rem" id="product1_remove">Remove from the cart</button></td></tr>');    
        grandt ()
    }else{
            alert("Already in cart");
        }
    });

    $("#product2").click(function () { 
        
        var count=$("#quantityval2").val()
        if (count==undefined)
        {
        $("#my-cart-table").append('<tr><td><img width="100px" height="100px" img src="images/camera.jpg"</td><td>Polaroid</td><td>'+price2+'</td><td><input type="number" min="1" id="quantityval2" class="quantityval" value="1"><td><input type="text" id="total_price2" class="total_pr" value="8999" disabled></td></td><td><button class="pr_rem" id="product2_remove">Remove from the cart</button></td></tr>');  
        grandt ()
    } else{
            alert("Already in cart");
        }
    });

    $("#product3").click(function () { 
        
        var count=$("#quantityval3").val()
        if (count==undefined)
        {
        $("#my-cart-table").append('<tr><td><img width="100px" height="100px" img src="images/shoe.jpg"</td><td>NIKE</td><td>'+price3+'</td><td><input type="number" min="1" id="quantityval3" class="quantityval" value="1"></td><td><input type="text" id="total_price3" class="total_pr" value="4000" disabled></td><td><button class="pr_rem" id="product3_remove">Remove from the cart</button></td></tr>');  
        grandt ()
    }else{
            alert("Already in cart");
        }
    });
    
    $("#product4").click(function () { 
        
        var count=$("#quantityval4").val()
        if (count==undefined)
        {  
        $("#my-cart-table").append('<tr><td><img width="100px" height="100px" img src="images/speaker.jpg"</td><td>Echo (4th Gen)</td><td>'+price4+'</td><td><input type="number"  min="1" id="quantityval4" class="quantityval"  value="1"><td><input type="text" id="total_price4"  class="total_pr" value="3000" disabled></td></td><td><button id="product4_remove" class="pr_rem" >Remove from the cart</button></td></tr>');  
        grandt ()
    } else{
            alert("Already in cart");
        }
    });

    $("#product5").click(function () { 
        
        var count=$("#quantityval4").val()
        if (count==undefined)
        { 
        $("#my-cart-table").append('<tr><td><img width="100px" height="100px" img src="images/womenglass.jpg"</td><td>Fastrack</td><td>'+price5+'</td><td><input type="number" min="1" id="quantityval5" class="quantityval"  value="1"><td><input type="text" id="total_price5"  class="total_pr" value="899" disabled></td></td><td><button class="pr_rem" id="product5_remove">Remove from the cart</button></td></tr>');  
        grandt ()
    } else{
        alert("Already in cart");
    }
    });
    ///////////////end//////////add to cart from button


    ////////////////remove from cart////////////////////////////////
    
    
   $("#my-cart-table").on('click','#product1_remove' ,function () {
       $(this).closest('tr').remove()
       grandt ()
   });

   $("#my-cart-table").on('click','#product2_remove' ,function () {
    $(this).closest('tr').remove()
    grandt ()
    });

    $("#my-cart-table").on('click','#product3_remove' ,function () {
        $(this).closest('tr').remove()
        grandt ()
    });

    $("#my-cart-table").on('click','#product4_remove' ,function () {
        $(this).closest('tr').remove()
        grandt ()
    });

    $("#my-cart-table").on('click','#product5_remove' ,function () {
        $(this).closest('tr').remove()
        grandt ()
    });

//////////////////end///////////////////remove from cart/////////////

/////////////////////////hide cart
$("#my-cart-table").hide();
$("#total_table").hide();
$("#btclear").hide();
$("#validation").hide();
$("#Home").hide();



$("#go_cartbt").click(function(){
    grandt();
    if( grand_total==0 || grand_total==''){
        alert("No items in cart");}else{

        
    $("#my-cart-table").show();
    $("#total_table").toggle();
    $("#btclear").toggle();
    $(".body").toggle();
    $("#go_cartbt").toggle();
    $("#Home").toggle();
    }
    });

  $("#checkout").click(function(){

    grandt();
    if( grand_total==0 || grand_total==''){
        alert("No items in cart");
    }else{
    
    $("#validation").toggle();
    $("#total_checkout").toggle();
    $(".cart-body").toggle();
    }
});

$("#btclear").click(function () { 
    $("#my-cart-table").remove(),function () {
         }
         grandt ()
});
/////////////////////end hide cart//////////



$("#my-cart-table").on('change','#quantityval1',function(){
    // var price1= 3000
    var count=$("#quantityval1").val();
    console.log(count);
     sum1=count*price1
    $("#total_price1").val(sum1);
    grandt ()  

});
$("#my-cart-table").on('change','#quantityval2',function(){
    // var price1= 8999
     count=$("#quantityval2").val();
    console.log(count);
     sum2=count*price2
    $("#total_price2").val(sum2);  
    grandt ()

});
$("#my-cart-table").on('change','#quantityval3',function(){
    // var price1= 4000
    var count=$("#quantityval3").val();
    console.log(count);
    sum3=count*price3
    $("#total_price3").val(sum3);  
    grandt ()

});
$("#my-cart-table").on('change','#quantityval4',function(){
    // var price1= 3000
    var count=$("#quantityval4").val();
    console.log(count);
    sum4=count*price4
    $("#total_price4").val(sum4);  
    grandt ()
    

});
$("#my-cart-table").on('change','#quantityval5',function(){
    // var price1= 899
    var count=$("#quantityval5").val();
     sum5=count*price5
    $("#total_price5").val(sum5);  
    grandt ()
    

});
   


//////////////////////total////////////////
function grandt () {
    var arr = $(".total_pr").map(function(){
              return parseInt(this.value);
             alert(arr);
            })
            .get();
            grand_total = 0
            $.each(arr,function(i,a){
              grand_total = grand_total + a
            })
            
            $(".grand_totalp").html(grand_total);
            
            $("#amnt_valid").html(grand_total);

}
////////////////////////total/////

/////////////////////payment
$('#paynow').click(function() {
    
    var name=$("#namev").val()
    var num=$("#num").val()
    var exp=$("#expiry").val()
    var cvv=$("#cvv").val()
    var zip=$("#zip").val()
    if(name!='' && num!='' && exp!='' && cvv!='' && zip!='')
    {
        alert("Payment Successfull")
    }else{
        alert("Fill all the fields!")
    }
    
    
    })
    
});


//////////////////////home///////////////

$("#Home").click(function () { 
  
//     $("#total_table").toggle();
//     $("#btclear").toggle();
//     $("#bodypro").toggle();
//     $("#go_cartbt").toggle();
//     $("#Home").toggle();
//    $("#cart-body").toggle();
var retVal = confirm("All items in the cart will removed!! Do you want to continue ?");
if( retVal == true ) {
  
   location.reload();
   return true;
} else {
   
   return false;
}
});

/////////////////////home///////////////

