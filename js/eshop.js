$("document").ready(function(){
  loadGoods ();
});

function loadGoods() {
  // загружаем товары на сттраницу
  $getGSON("goods.json", function(data) {
  console.log(data);         
  })
}