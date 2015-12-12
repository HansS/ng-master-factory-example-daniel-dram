
function inputBox(){
  return {
    templateUrl:'/assets/partials/input-box.html',
    restrict:'E',
    link:link,
  }
}

function link(scope, element, attr){
  console.log('input box directive connected');
}

module.exports = inputBox;
