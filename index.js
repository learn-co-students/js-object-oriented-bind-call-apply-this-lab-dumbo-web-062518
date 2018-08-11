//Your code here
function justInvoke(fn) {
  return fn(this)
}

function setThisWithCall(fn, name, age) {
  return fn.call(name, age)
}

function setThisWithApply(fn, name, args) {
  return fn.apply(name,args)
}

function returnNewFunctionOf(fn, name) {
  return fn.bind(name)
}
