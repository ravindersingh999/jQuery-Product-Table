arr=[];

$('document').ready(function(){
    $("#add_productbtn").click(function(){
        var sku =$("#product_sku").val();
        var pname =$("#product_name").val();
        var price =$("#product_price").val();
        var qt =$("#product_quantity").val();

        if(alreadyExist(sku)){
            $('.error').show();
            $('.error').fadeOut(1000);
        }
        else{
            product = {};
            product["SKU"] = sku;
            product["NAME"] = pname;
            product["PRICE"] = price;
            product["QT"] = qt;
            arr.push(product);
            $('.success').show();
            $('.success').fadeOut(1200);

        }
        display(arr);
        
    })
});

function alreadyExist(sku){
    for(var i = 0 ; i<arr.length ; i++){
        if(arr[i].SKU == sku){
            return true;
        }
    }
    return false;
}

function display(result){
    $("#tbody").html("<tr><th>Product SKU</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th></tr>")

    for(let i=0;i<result.length; i++){
        
        $('#tbody').append(`<tr>\
        <td> ${result[i].SKU} </td>\
        <td> ${result[i].NAME} </td>\
        <td> ${result[i].PRICE } </td>\
        <td> ${result[i].QT} </td>\
        <td><a href="javascript:void(0)" onclick="deleteRow( ${result[i].SKU} )">Delete</a></td>\
        <td><a href="javascript:void(0)" onclick="editRow( ${result[i].SKU} )">Edit</a></td>\
        </tr>`)

    }
}

function editRow(sku){
    var p = {};

    for(var i = 0;i< arr.length; i++){
        if(arr[i].SKU == sku){
            p = arr[i];
        }
    }

    editForm(p);
}

function editForm(p){
        deleteRow(p)
        $("#product_sku").val( p.SKU);
        $("#product_name").val(p.NAME);
        $("#product_price").val( p.PRICE);
        $("#product_quantity").val( p.QT); 


        $('#update_productbtn').css("display", "block");
        $('#add_productbtn').hide();

}

$('document').ready(function(){
    $("#update_productbtn").click(function(){
        updateProduct();
    })
});


function updateProduct(){
        var sku =$("#product_sku").val();
        var pname =$("#product_name").val();
        var price =$("#product_price").val();
        var qt =$("#product_quantity").val();
        
        if(alreadyExist(sku)){
        for(var i = 0;i < arr.length; i++){
            if(arr[i].SKU == sku){
                arr[i].NAME = pname;
                arr[i].PRICE = price;
                arr[i].QT = qt;
            }
        }
    }
    else{
        $('.error').show();
        $('.error').fadeOut(1200);
    }
    display(arr);

    $('#add_productbtn').css("display", "block");
    $('#update_productbtn').hide();
    
}


function deleteRow(sku){
    for(var i = 0;i < arr.length; i++ ){
        if(arr[i].SKU == sku){
            arr.splice(i,1);
        }
    }
    display(arr);
}




