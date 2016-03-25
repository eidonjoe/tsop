
var regObj = {
	allNum: /^[1-9]\d*$/,		//All the number
	allEn: /^[A-Za-z]+$/,		//All the letters
	lowerReg: /[a-z]/, 			//Judge lowercase
	upperReg: /[A-Z]/			//Judge uppercase
};
// 
var verify = function(password, mix){
	var password = password ? password.toString() : '111111';
		mixModel = mix ? true : false;

		totalLen = password.length,
		numLen = password.replace(/\D/g,"").length,
		specialLen = password.replace(/[a-zA-Z0-9]/g,"").length,

		isAllNum = regObj.allNum.test(password),
		isAllEn = regObj.allEn.test(password),
		isMix = mixModel && ( isAllNum || isAllEn ),

		hasLower = regObj.lowerReg.test(password), 
		hasUpper = regObj.upperReg.test(password),

		hasNum = numLen > 0 ? true : false,
		hasSpecial = specialLen > 0 ? true : false,
		hasEn = (hasLower == true || hasUpper == true) ? true : false,

		score = 0;

	if(totalLen < 6 || isMix){
		return countLevel(0);
	}
	score = lenScore(totalLen) + 
			letterScore(hasLower, hasUpper) +
			numScore(numLen) +
			specialScore(specialLen) +
			otherScore(hasNum, hasSpecial, hasEn);
	return countLevel(score);
};
var countLevel = function(score){
	var LV = 0;
	if(score >= 80){
		LV = 'strong';
	} else if(score >= 50 && score < 80){
		LV = 'middle';
	} else if(score > 0 && score < 50){
		LV = 'weak';
	} else if(score == 0){
		LV = 'disable';
	} 
	return LV;
};
var lenScore = function(totalLen){
	var counter = 0
	if(totalLen >=6 && totalLen <= 10){
		counter = 10;
	} else if(totalLen > 10){
		counter = 25;
	}
	return counter;
};
var letterScore = function(hasLower, hasUpper){
	var counter = 0;
	if (!hasLower && !hasUpper){
		counter = 0;
	} else if (hasLower && hasUpper){
		counter = 25;
	} else {
		counter = 10;
	}
	return counter;
};
var numScore = function(numLen){
	var counter = 0;
	if(numLen > 0 && numLen <=2 ){
		counter = 10;
	} else if(numLen > 2){
		counter = 25;
	}
	return counter;
};
var specialScore = function(specialLen){
	var counter = 0;
	if(specialLen == 1 ){
		counter = 10;
	} else if(specialLen > 1){
		counter = 25;
	}
	return counter;
};
var otherScore = function(hasNum, hasSpecial, hasEn){
	var counter = 0;
	if(hasNum){
		counter += 5;
	} 
	if(hasSpecial){
		counter += 5;
	} 
	if(hasEn){
		counter += 5;
	} 
	return counter;
};
module.exports.verify = verify;

