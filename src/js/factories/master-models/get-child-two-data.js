
module.exports = (master)=>{
  var params = {
    url:'http://jsonplaceholder.typicode.com/posts',
    params : {userId:1},
    model: master.childTwo,
    prop: 'details',
  }

  master.get(params).then(()=>{
    console.log('data received from server and automatically updated in child factory model');
    console.log(master.childTwo.details);
  });

}
