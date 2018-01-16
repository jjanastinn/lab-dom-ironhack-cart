
var shoppingCart = []


function Product(name, price) {
  this.name = '';
  this.quantity;
  this.price;
}


function getTotalPrice(product) {
  var productCount = document.querySelectorAll(".wrapper");
  for (var i=0; i<productCount.length; i++) {
    var price = Number(document.getElementsByClassName("price")[i].innerText);
    var quantity = Number(document.querySelectorAll(".quantity")[i].value);
    var result = price * quantity;
    document.getElementsByClassName("total")[i].innerText = result;
  } 
  var price = document.querySelectorAll('.total');
  var total = 0;
  price.forEach(function(item) {
    total += Number(item.innerText);
  });
  var printResult = document.getElementById("result");
  printResult.innerText = total;
}



function deleteItem(e){
  e.currentTarget.parentNode.parentNode.remove();
}




function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}


window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  // var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};


// UPDATE PRICE SOLUTION 
// var products = document.querySelectorAlle('.product');
// for loop ... 

// Solution 1:
// var product = products[x];
// var priceElement = product.query..
// var price = Number(priceElement.innerText);

// Solution 2:
// var price = products[x].querySelector('.price').innerText;


// CREATE ELEMENT
// var newDiv = document.createElement('div');
// newDiv.innerText = "Hi I'm a DIV";
// newDiv.classList.add('foobar');
// var wrapperList = document.querySelector('.wrapper-list');

// wrapperList.appendChild(newDiv); || 
// wrapperList.prependChild(newDiv); || 
// var productList = document.querySelectorAll('.wrapper-list')
// var products = document.querySelector('.product-list-item')
// productList.insertBefore(newDiv, products[1]);


// MOUSE EVENT
// var title = document.querySelectorAll('h1')
// title.addEventListener('click', function(event) {
//  console.log(event);
//})

// KEYBOARD EVENT
// function handleTypingOnInput(event) {
//  console.log(event)
//}
// var inputValue = documment.querySelectorAll('.create-product input')[1]
// inputValue.addEventListener('keydown', handleTypingOnInput);