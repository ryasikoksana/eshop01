$('document').ready(function(){
  loadGoods ();
});

function loadGoods() {
  // загружаем товары на сттраницу
  $.getGSON('goods.json', function(data) {
  //console.log(data);   
    var out = '';
    for (var key in data){
    out+='<p>'+data[key]['name']+'</p>';
    out+='<p>'+data[key]['cost']+'</p>';
    }
    $('#goods').html(out);
  })
}