//Your code here
function justInvoke(func){
	return func()
}

function setThisWithCall(func, whoDis, args){
	return func.call(whoDis, args)
}

function setThisWithApply(cb, whoDis, argsArray){
	return cb.apply(whoDis, argsArray)
}

function returnNewFunctionOf(cbCopy, whoDis){
	return cbCopy.bind(whoDis)
}