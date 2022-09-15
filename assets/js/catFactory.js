//###################################################
//RANDOM COLOR FUNCTION
//###################################################

function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//###################################################
//BODYLIMBSFACE FUNCTION
//###################################################
function bodyLimbsColor(color,code) {
    $('.body, .face, .leftEar, .rightEar, .leftArm, .rightArm, .leftThigh, .rightThigh, .leftFoot, .rightFoot, .tail, .innertail2')
        .css('background-color', '#' + color)  //This changes the color of the cat
    $('#bodycode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
    console.log($('.body').css('background-color'))
    var bodyAndLimbsColorRBG = ($('.body').css('background-color'))
    $('#bodyAndLimbsColorRBG').html(bodyAndLimbsColorRBG)
}


//###################################################
//TAILBELLY FUNCTION
//###################################################
function tailBellyColor(color,code) {
    $('.belly, .innerBelly, .innertail, .innertail3, .eye1, .eye2, .toe1, .toe2, .toe3, .toe4, .finger1, .finger2')
        .css('background-color', '#' + color)  //This changes the color of the cat
    $('#tailcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnatail').html(code) //This updates the body color part of the DNA that is displayed below the cat
    console.log($('.tail').css('background-color'))
    var tailBellyColorRBG = ($('.tail').css('background-color'))
    $('#tailBellyColorRBG').html(tailBellyColorRBG) 
}

//###################################################
//SURFBOARD FUNCTION
//###################################################
function surfBoardColor(color,code) {
    $('.surfBoard, .surfBoardFin, .surfBoardFin2').css('background-color', '#' + color)  //This changes the color of the cat
    $('#surfcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnasurf').html(code) //This updates the body color part of the DNA that is displayed below the cat
    console.log($('.surfBoard').css('background-color'))
    var surfBoardColorRBG = ($('.surfBoard').css('background-color'))
    $('#surfBoardColorRBG').html(surfBoardColorRBG)
}

//###################################################
//BACKGROUND FUNCTION
//###################################################
function bgColor(color,code) {
    $('.squirrelBox')
        .css('background-color', '#' + color)  //This changes the color of the cat
    $('#bgcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabg').html(code) //This updates the body color part of the DNA that is displayed below the cat
    console.log($('.squirrelBox').css('background-color'))
    var bgColorRBG = ($('.squirrelBox').css('background-color'))
    $('#bgColorRBG').html(bgColorRBG)
}



//###################################################
//EYE FUNCTION
//###################################################
function eyeVariation(num) {
    
    $('#dnaeyes').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Normal') //set the badge to "n0rmal"
            break
        case 2:
            normalEyes() //reset 
            $('#eyeName').html('Chill')
            eyesType2() //set border type
            break
        case 3:
            normalEyes() //reset 
            $('#eyeName').html('Shocked')
            eyesType3() //set border type
            break
        case 4:
            normalEyes() //reset 
            $('#eyeName').html('Stunned')
            eyesType4() //set border type
            break
        case 5:
            normalEyes() //reset 
            $('#eyeName').html('Scared')
            eyesType5() //set border type
            break
        case 6:
            normalEyes() //reset 
            $('#eyeName').html('Confused')
            eyesType6() //set border type
            break
        case 7:
            normalEyes() //reset 
            $('#eyeName').html('Squint')
            eyesType7() //set border type
            break
        case 8:
            normalEyes() //reset 
            $('#eyeName').html('Woah')
            eyesType8() //set border type
            break
        case 9:
            normalEyes() //reset 
            $('#eyeName').html('Tiny')
            eyesType9() //set border type
            break
    }
}

function normalEyes() {
    $('.eyes').find('.pupils, .innerPupils').css('border-style', 'double')
    $('.eyes').find('.eye1, .eye2').css('transform', 'skew(0deg)')
    $('.eyes').find('.eye1, .eye2').css('margin', '10px')
    $('.eyes').find('.eye1, .eye2').css('top', '0px')
    $('.eyes').find('.pupils, .innerPupils').css('margin-left', '0px')
    $('.eyes').find('.pupils, .innerPupils').css('margin-right', '0px')
}
function eyesType2() {
    $('.eyes').find('.pupils, .innerPupils').css('border-style', 'solid')
    $('.eyes').find('.pupils, .innerPupils').css('border-width', '7px')
    $('.eyes').find('.eye1, .eye2').css('transform', 'skew(0deg)')
}
function eyesType3() {
    $('.eyes').find('.innerPupils').css('border-style', 'dotted')
    $('.eyes').find('.eye1, .eye2').css('transform', 'skew(0deg)')
}
function eyesType4() {
    $('.eyes').find('.innerPupils').css('border-style', 'dashed')
    $('.eyes').find('.eye1, .eye2').css('transform', 'skew(0deg)')
}
function eyesType5() {
    $('.eyes').find('.eye1, .eye2').css('transform', 'scaleX(1) scaleY(1)')
    $('.eyes').find('.eye1, .eye2').css('top', '-10px')
    $('.eyes').find('.eye1').css('margin-left', '20px')
    $('.eyes').find('.pupils, .innerPupils').css('margin-left', '10px')
    $('.eyes').find('.eye2').css('margin-right', '20px')
    $('.eyes').find('.pupils, .innerPupils').css('margin-right', '10px')
}
function eyesType6() {
    $('.eyes').find('.eye1').css('transform', 'skew(-10deg) scaleX(1) scaleY(1)')
    $('.eyes').find('.eye2').css('transform', 'skew(-10deg) scaleX(.75) scaleY(.75)')
}
function eyesType7() {
    $('.eyes').find('.eye1, .eye2').css('transform', 'scaleY(.25)')
}
function eyesType8() {
    $('.eyes').find('.eye1, .eye2').css('transform', 'scaleX(1.2) scaleY(1.2)')
}
function eyesType9() {
    $('.eyes').find('.eye1, .eye2').css('transform', 'scaleX(.6) scaleY(.6)')
}


//###################################################
//TAILSPIN FUNCTION
//###################################################
function tailspinVariation(num) {
    
    $('#dnatailspin').html(num)
    switch (num) {
        case 1:
            normalTailspin()
            $('#TailspinName').html('Normal') //set the badge to "n0rmal"
            break
        case 2:
            normalTailspin() //reset 
            $('#TailspinName').html('Excited')
            TailspinType2() //set border type
            break
        case 3:
            normalTailspin() //reset 
            $('#TailspinName').html('Enlarged')
            TailspinType3() //set border type
            break
        case 4:
            normalTailspin() //reset 
            $('#TailspinName').html('Twirled')
            TailspinType4() //set border type
            break
        case 5:
            normalTailspin() //reset 
            $('#TailspinName').html('Stretched')
            TailspinType5() //set border type
            break
        case 6:
            normalTailspin() //reset 
            $('#TailspinName').html('Fattened')
            TailspinType6() //set border type
            break
        case 7:
            normalTailspin() //reset 
            $('#TailspinName').html('Fanned')
            TailspinType7() //set border type
            break
        case 8:
            normalTailspin() //reset 
            $('#TailspinName').html('Stiff')
            TailspinType8() //set border type
            break
    }
}

function normalTailspin() {
    $('.tail').css('transform', 'scale(-1, 1) rotate(-65deg)')
    $('.innerTail, .innerTail2, .innerTail3').css('transform', 'none')
    $('.tail').css('top', '225px')
}
function TailspinType2() {
    $('.tail, .innerTail, .innerTail2, .innerTail3').css('transform', 'skew(-15deg) scaleX(1.05) scaleY(1.1)')
}
function TailspinType3() {
    $('.tail, .innerTail, .innerTail2, .innerTail3').css('transform', 'skew(-5deg) rotate(10deg) scaleX(1.25) scaleY(1.25)')
    $('.tail').css('top', '210px')
}
function TailspinType4() {
    $('.tail, .innerTail, .innerTail2, .innerTail3').css('transform', 'skew(10deg) rotate(24deg) scaleX(1.1) scaleY(1.1)')
    $('.tail').css('top', '250px')
}
function TailspinType5() {
    $('.tail, .innerTail, .innerTail2, .innerTail3').css('transform', 'skew(-8deg) rotate(13deg) scaleX(.9) scaleY(1.4)')
    $('.tail').css('top', '200px')
}
function TailspinType6() {
    $('.tail').css('transform', 'skew(10deg) rotate(15deg) scaleX(1.75) scaleY(1.2)')
    $('.innerTail').css('transform', 'skew(-10deg) rotate(-10deg) scaleX(1) scaleY(1)')

}
function TailspinType7() {
    $('.tail').css('transform', 'skew(-10deg) rotate(10deg) scaleX(1.1) scaleY(1.1)')
    $('.innerTail').css('transform', 'skew(-10deg) rotate(15deg) scaleX(1.1) scaleY(1.1)')
    $('.innerTail2').css('transform', 'skew(-10deg) rotate(20deg) scaleX(1.1) scaleY(1.1)')
    $('.innerTail3').css('transform', 'skew(-10deg) rotate(5deg) scaleX(1.0) scaleY(1.0)')
}
function TailspinType8() {
    $('.tail').css('transform', 'skew(-60deg) rotate(40deg) scaleX(.75) scaleY(.75)')
    $('.tail').css('top', '270px')
}



//###################################################
//TEETH FUNCTION
//###################################################
function teethVariation(num) {
    
    $('#dnateeth').html(num)
    switch (num) {
        case 1:
            normalTeeth()
            $('#TeethName').html('Normal') //set the badge to "n0rmal"
            break
        case 2:
            normalTeeth() //reset 
            $('#TeethName').html('Crooked')
            TeethType2() //set border type
            break
        case 3:
            normalTeeth() //reset 
            $('#TeethName').html('Large')
            TeethType3() //set border type
            break
        case 4:
            normalTeeth() //reset 
            $('#TeethName').html('Laughing')
            TeethType4() //set border type
            break
        case 5:
            normalTeeth() //reset 
            $('#TeethName').html('Tiny')
            TeethType5() //set border type
            break
    }
}

function normalTeeth() {
    $('.rightTooth, .leftTooth').css('transform', 'none')
    $('.rightTooth, .leftTooth').css('top', '0px')
    $('.rightTooth').css('left', '50px')
    $('.leftTooth').css('left', '25px')
    $('.rightTooth, .leftTooth').css('height', '40px')
    $('.rightTooth, .leftTooth').css('width', '25px')
}
function TeethType2() {
    $('.rightTooth, .leftTooth').css('transform', 'rotate(-7deg)')
    $('.rightTooth, .leftTooth').css('top', '5px')
    $('.rightTooth').css('left', '60px')
    $('.leftTooth').css('left', '20px')
}
function TeethType3() {
    $('.rightTooth, .leftTooth').css('height', '30px')
    $('.rightTooth, .leftTooth').css('width', '35px')
    $('.rightTooth').css('left', '50px')
    $('.leftTooth').css('left', '15px')
}
function TeethType4() {
    $('.rightTooth, .leftTooth').css('transform', 'skew(30deg) rotate(0deg) scaleX(.9) scaleY(.9)')
    $('.rightTooth').css('left', '55px')
    $('.leftTooth').css('left', '30px')
    $('.rightTooth, .leftTooth').css('height', '25px')
}
function TeethType5() {
    $('.rightTooth, .leftTooth').css('transform', 'skew(0deg) rotate(0deg) scaleX(.2) scaleY(.2)')
    $('.rightTooth').css('left', '45px')
    $('.leftTooth').css('left', '20px')
    $('.rightTooth, .leftTooth').css('top', '-13px')
    $('.rightTooth, .leftTooth').css('width', '35px')

}



//###################################################
//COIN FUNCTION
//###################################################
function coinVariation(num) {
    
    $('#dnacoin').html(num)
    switch (num) {
        case 1:
            CoinType1()
            $('#CoinName').html('BTC: Bitcoin') //set the badge to "n0rmal"
            break
        case 2:
            CoinType1() //reset 
            $('#CoinName').html('ETH: Ethereum')
            CoinType2() //set border type
            break
        case 3:
            CoinType1() //reset 
            $('#CoinName').html('MATIC: Polygon')
            CoinType3() //set border type
            break
        case 4:
            CoinType1() //reset 
            $('#CoinName').html('SOL: Solana')
            CoinType4() //set border type
            break
        case 5:
            CoinType1() //reset 
            $('#CoinName').html('AVAX: Avalanche')
            CoinType5() //set border type
            break
        case 6:
            CoinType1() //reset 
            $('#CoinName').html('ALGO: Algorand')
            CoinType6() //set border type
            break
        case 7:
            CoinType1() //reset 
            $('#CoinName').html('BNB: Binance')
            CoinType7() //set border type
            break
        case 8:
            CoinType1() //reset 
            $('#CoinName').html('HBAR: Hashgraph')
            CoinType8() //set border type
            break
        case 9:
            CoinType1() //reset 
            $('#CoinName').html('DOT: Polkadot')
            CoinType9() //set border type
            break
    }
}

function CoinType1() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/BTC-100px.png?raw=true)')
}
function CoinType2() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/ETH2-100px.png?raw=true)')
}
function CoinType3() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/POLYGON-100px.png?raw=true)')
}
function CoinType4() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/SOL-100px.png?raw=true)')
}
function CoinType5() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/AVAX-100px.png?raw=true)')
}
function CoinType6() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/ALGO-100px.png?raw=true)')
}
function CoinType7() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/BNB-100px.png?raw=true)')
}
function CoinType8() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/HBAR-100px.png?raw=true)')
}
function CoinType9() {
    $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/DOT-100px.png?raw=true)')
}


//###################################################
//ANIMATION FUNCTION:
//###################################################

function animationVariation(num){
    $('#dnaanimation').html(num)
    switch (num) {
        case 1:
            animationType1()
            $('#AnimationName').html('None') //set the badge to "n0rmal"
            break
        case 2:
            animationType2() //reset 
            $('#AnimationName').html('Flying Squirrel')
            break
        case 3:
            animationType3() //reset 
            $('#AnimationName').html('Gliding Squirrel')
            break
        case 4:
            animationType4() //reset 
            $('#AnimationName').html('Move Squirrel')
            break
        case 5:
            animationType5() //reset 
            $('#AnimationName').html('Move Background')
            break
        case 6:
            animationType6() //reset 
            $('#AnimationName').html('Move Eyes')
            break
        case 7:
            animationType7() //reset 
            $('#AnimationName').html('Hypnotize')
            break
    }
}

function animationType1(){
    //Reset here
    resetAnimation();
    $('.squirrel').addClass("noAni")
}

function animationType2(){
    //Reset here
    resetAnimation();
    $('.squirrel').addClass("moveSquirrel")
    $('.tailAni').addClass("moveTail")
    $('.squirrelBox').addClass("moveBackground")
    $('.eye1, .eye2').addClass("moveEyes")
}
function animationType3(){
    //Reset here
    resetAnimation();
    $('.squirrel').addClass("moveSquirrel")
}
function animationType4(){
    //Reset here
    resetAnimation();
    $('.tailAni').addClass("moveTail")
    $('.squirrel').addClass("moveSquirrel")
    $('.pupils').addClass("movePupils")
}
function animationType5(){
    //Reset here
    resetAnimation();
    $('.squirrelBox').addClass("moveBackground")
}
function animationType6(){
    //Reset here
    resetAnimation();
    $('.eye1').addClass("moveEyes")
    $('.pupils').addClass("movePupils")
}
function animationType7(){
    //Reset here
    resetAnimation();
    $('.squirrelBox, .bg2').addClass("moveBackground2")
    $('.bg2').addClass("rotateBG")
    $('.squirrel').addClass("moveSquirrel")
    $('.tailAni').addClass("moveTail")
    $('.pupils').addClass("movePupils")
    $('.innerBelly').addClass("movePupils")
}

function resetAnimation(){
    $('.squirrel').removeClass("noAni")
    $('.squirrel').removeClass("moveSquirrel")
    $('.tailAni').removeClass("moveTail")
    $('.squirrelBox').removeClass("moveBackground")
    $('.eye1, .eye2').removeClass("moveEyes")
    $('.squirrelBox, .bg2').removeClass("moveBackground2")
    $('.bg2').removeClass("rotateBG")
    $('.pupils').removeClass("movePupils")
    $('.innerBelly').removeClass("movePupils")
    //add any animation class that you create
}