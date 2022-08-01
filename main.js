let html = "";
let retrievedObject = localStorage.getItem("danhsachmon");
const arr_obj = JSON.parse(retrievedObject);

$(".list-item > .dssp").empty();

arr_obj.forEach((item, index) => {
  html +=
    '<div class="card my-3" style="width: 16rem;"><img class="card-img-top" src="' +
    item.image +
    '" alt="Card image cap"><div class="card-body"><h5 class="card-title">' +
    item.name +
    '</h5>  <p class="card-text">' +
    item.description +
    '</p>  <div class="row justify-content-around">          <span class="font-weight-bold">' +
    item.price +
    ' VND</span>          <span class="font-weight-light font-italic">' +
    item.time +
    '</span>          <button class="btn btn-success float-right">+      </button> <input type="hidden" name="id" id='+index +' /></div>  </div></div>';
});

$(html).appendTo(".list-item > .dssp");



