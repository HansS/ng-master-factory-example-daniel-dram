function display(){
  return {
    templateUrl:'/assets/partials/display.html',
    restrict:'E',
    link:link,
  }
}

function link(scope, element, attr){
  console.log('display directive connected');
}

module.exports = display;
