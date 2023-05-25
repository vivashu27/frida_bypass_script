Java.perform(function() {
  let obj = Java.use("sg.vantagepoint.a.b");
  obj["a"].implementation = function () {
    return false;
  };
 obj["b"].implementation = function () {
    console.log('rootcheck2');
    //let ret2 = this.b();
    //console.log('root detection2 ' + ret);
    return false;
  };
 obj["c"].implementation = function () {
    console.log('rootcheck3');
    //let ret3 = this.c();
    //console.log('root detection3 ' + ret3);
    return false;
  };
 
});
