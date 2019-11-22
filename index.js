

  function C () {
  }
  C.prototype.x = function () {
    return 1;
  };
   
  function CC () {
  }
  C.prototype.y = function () {
    return 2;
  };
  Object.setPrototypeOf( CC.prototype, C.prototype );
   
  const cc = new CC();
  console.log( cc.x()  );
  console.log( cc.y() );
  console.log( cc instanceof C );