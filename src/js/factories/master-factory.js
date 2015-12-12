var serialize       = require('serialize-for-xhr');
var getChildTwoData = require('./master-models/get-child-two-data.js');

MasterFactory.$inject = ['$http', '$q', 'ExampleChildOne', 'ExampleChildTwo'];
function MasterFactory($http, $q, ExampleChildOne, ExampleChildTwo){
  class master {
    constructor(){
      this.childOne = ExampleChildOne;
      this.childTwo = ExampleChildTwo;
    }

    get({url, params, model, prop}){
      if(typeof params== 'object'){
          params = serialize(params);
      }

      url = url +`?${params}`;

      var q = $q.defer();
       $http.get(url).
           then((response) => {
             model[prop] = response.data;
             console.log(model);
             q.resolve(response.data);
           }, (err) =>{

         });
       return q.promise;
    }

    getChildTwoData(){ getChildTwoData(this)}

    init(){
      //Stuff to kick off once controller is initiated;
      this.getChildTwoData();
    }

  }

  return new master();
};


module.exports = MasterFactory;
