function checkSign(num) {
    return (num==0) ? "zero": (num==Math.sign(1)) ? "positive" : "negative";
}

console.log(checkSign(-17));
module.exports=checkSign;

