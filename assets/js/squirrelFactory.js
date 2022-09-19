//###################################################
//RANDOM COLOR FUNCTION
//###################################################

    function getColor() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return randomColor
    }

//###################################################
//GEN COLOR FUNCTION
//###################################################

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
        $('.squirrelBoxBG1')
            .css('background-color', '#' + color)  //This changes the color of the cat
        $('#bgcode').html('code: '+code) //This updates text of the badge next to the slider
        $('#dnabg').html(code) //This updates the body color part of the DNA that is displayed below the cat
        console.log($('.squirrelBoxBG1').css('background-color'))
        var bgColorRBG = ($('.squirrelBoxBG1').css('background-color'))
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
        $('.eyes').find('.pupils, .innerPupils').css('border-width', '4px')
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
        $('.eyes').find('.eye1, .eye2').css('top', '-5px')
        $('.eyes').find('.eye1').css('margin-left', '15px')
        $('.eyes').find('.pupils, .innerPupils').css('margin-left', '15px')
        $('.eyes').find('.eye2').css('margin-right', '15px')
        $('.eyes').find('.pupils, .innerPupils').css('margin-right', '15px')
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
        $('.tail').css('top', '230px')
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
        $('.rightTooth, .leftTooth').css('height', '30px')
        $('.rightTooth, .leftTooth').css('width', '25px')
    }
    function TeethType2() {
        $('.rightTooth, .leftTooth').css('transform', 'rotate(-7deg)')
        $('.rightTooth, .leftTooth').css('top', '3px')
        $('.rightTooth').css('left', '56px')
        $('.leftTooth').css('left', '22px')
    }
    function TeethType3() {
        $('.rightTooth, .leftTooth').css('height', '28px')
        $('.rightTooth, .leftTooth').css('width', '35px')
        $('.rightTooth').css('left', '50px')
        $('.leftTooth').css('left', '15px')
    }
    function TeethType4() {
        $('.rightTooth, .leftTooth').css('transform', 'skew(30deg) rotate(0deg) scaleX(.9) scaleY(.9)')
        $('.rightTooth').css('left', '50px')
        $('.leftTooth').css('left', '25px')
        $('.rightTooth, .leftTooth').css('height', '20px')
    }
    function TeethType5() {
        $('.rightTooth, .leftTooth').css('transform', 'skew(0deg) rotate(0deg) scaleX(.2) scaleY(.2)')
        $('.rightTooth').css('left', '45px')
        $('.leftTooth').css('left', '20px')
        $('.rightTooth, .leftTooth').css('top', '-10px')
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
        $('.coin1').css('background-image', 'url(https://github.com/CipherGrind/TrippySquirrelsNFTMaker/blob/gh-pages/assets/images/ETH-100px.png?raw=true)')
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
//ANIMATION SWITCH ON/OFF FUNCTION:
//###################################################

    function animationSwitchVariation(num){
        $('#dnaanimationswitch').html(num)
        switch (num) {
            case 1:
                animationSwitchType1()
                $('#AnimationSwitchName').html('Off')
                break
            case 2:
                animationSwitchType2()
                $('#AnimationSwitchName').html('On') 
                break
        }
    }

    function animationSwitchType1(){
        //Reset here
        resetSwitchAnimation();
        
        document.getElementById("animationSwitch2").checked = false;
        document.getElementById("animationSwitch3").checked = false;
        document.getElementById("animationSwitch4").checked = false;
        document.getElementById("animationSwitch5").checked = false;
        document.getElementById("animationSwitch6").checked = false;
        document.getElementById("animationSwitch7").checked = false;
    }

    function animationSwitchType2(){
        
        document.getElementById("animationSwitch2").checked = true;
        var previousAnimationPreset = parseInt( $('#animationBG').val() )
        animationVariation(previousAnimationPreset);
    }

    function resetSwitchAnimation(){
        //remove switch animations
        $('.squirrel').removeClass("moveSquirrel")
        $('.tailAni').removeClass("moveTail")
        $('.squirrelBoxBG1').removeClass("moveBackground")
        $('.eye1, .eye2').removeClass("moveEyes")
        $('.squirrelBoxBG1, .squirrelBoxBG2').removeClass("moveBackground2")
        $('.squirrelBoxBG2').removeClass("rotateBG")
        $('.pupils').removeClass("movePupils")
        $('.innerBelly').removeClass("moveBelly")
        //remove background animations
        animationVariation(1)
        $('.squirrelBoxBG1').removeClass("moveBackground")
        $('.squirrelBoxBG1, .squirrelBoxBG2').removeClass("moveBackground2")
        $('.squirrelBoxBG2').removeClass("rotateBG")
        $('.squirrelBoxBG1').removeClass("moveBackground4")
        $('.squirrelBoxBG2').removeClass("moveBackground4b")
        $('.squirrelBoxBG1').removeClass("moveBackground5")
        $('.squirrelBoxBG2').removeClass("moveBackground5b")
        $('.squirrelBoxBG1').removeClass("moveBackground6")
        $('.squirrelBoxBG2').removeClass("moveBackground6")
        $('.squirrelBoxBG2').removeClass("moveBackground6b")
        $('.squirrelBoxBG1').removeClass("moveBackground7")
        $('.squirrelBoxBG2').removeClass("moveBackground7")
        $('.squirrelBoxBG2').removeClass("moveBackground7b")
        $('.squirrelBoxBG1').removeClass("moveBackground8c")
        $('.squirrelBoxBG1').removeClass("moveBackground9")
    }

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.querySelector('#animationSwitch2');
        var two = 2;
        var one = 1;
        checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // do this
            console.log(two);
            animationSwitchVariation(two);
            $('#dnaanimationswitch2').html(2);
            $('#animationText2').html('2')
            $("#animationGroup").show();
            $("#animationSwitchGroupMain").show();
            
        } else {
            // do that
            console.log(one);
            animationSwitchVariation(one);
            $('#dnaanimationswitch2').html(1);
            $('#animationText2').html('1')
            $('#dnaanimationswitch3').html(0)
            $('#AnimationSwitchName3').html('Off')
            $('#animationText3').html(0)
            $('#dnaanimationswitch4').html(0)
            $('#AnimationSwitchName4').html('Off')
            $('#animationText4').html(0)
            $('#dnaanimationswitch5').html(0)
            $('#AnimationSwitchName5').html('Off')
            $('#animationText5').html(0)
            $('#dnaanimationswitch6').html(0)
            $('#AnimationSwitchName6').html('Off')
            $('#animationText6').html(0)
            $('#dnaanimationswitch7').html(0)
            $('#AnimationSwitchName7').html('Off')
            $('#animationText7').html(0)
            $("#animationGroup").hide();
            $("#animationSwitchGroupMain").hide();
        }
        });
    });

//###################################################
//ANIMATION SWITCH GLIDING SQUIRREL FUNCTION:
//###################################################

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox3 = document.querySelector('#animationSwitch3');
        var zero = '0';
        var three = '3';
        checkbox3.addEventListener('change', function () {
        if (checkbox3.checked) {
            // do this
            console.log(three);
            $('.squirrel').addClass("moveSquirrel")
            $('#AnimationSwitchName3').html('On')
            $('#animationText3').html('3')
            $('#dnaanimationswitch3').html(3)
        } else {
            // do that
            console.log(zero);
            $('.squirrel').removeClass("moveSquirrel")
            $('#AnimationSwitchName3').html('Off')
            $('#animationText3').html('0')
            $('#dnaanimationswitch3').html(0)
        }
        });
    });
  
//###################################################
//ANIMATION SWITCH MOVE TAIL FUNCTION:
//###################################################

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox4 = document.querySelector('#animationSwitch4');
        var zero = '0';
        var four = '4';
        checkbox4.addEventListener('change', function () {
        if (checkbox4.checked) {
            // do this
            console.log(four);
            $('.tailAni').addClass("moveTail")
            $('#AnimationSwitchName4').html('On')
            $('#animationText4').html('4')
            $('#dnaanimationswitch4').html(4)
        } else {
            // do that
            console.log(zero);
            $('.tailAni').removeClass("moveTail")
            $('#AnimationSwitchName4').html('Off')
            $('#animationText4').html('0')
            $('#dnaanimationswitch4').html(0)
        }
        });
    });
    
//###################################################
//ANIMATION SWITCH MOVE EYES FUNCTION:
//###################################################

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox5 = document.querySelector('#animationSwitch5');
        var zero = '0';
        var five = '5';
        checkbox5.addEventListener('change', function () {
        if (checkbox5.checked) {
            // do this
            console.log(five);
            $('.eye1, .eye2').addClass("moveEyes")
            $('#AnimationSwitchName5').html('On')
            $('#animationText5').html('5')
            $('#dnaanimationswitch5').html(5)
        } else {
            // do that
            console.log(zero);
            $('.eye1, .eye2').removeClass("moveEyes")
            $('#AnimationSwitchName5').html('Off')
            $('#animationText5').html('0')
            $('#dnaanimationswitch5').html(0)
        }
        });
    });
      
//###################################################
//ANIMATION SWITCH MOVE PUPILS FUNCTION:
//###################################################

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox6 = document.querySelector('#animationSwitch6');
        var zero = '0';
        var six = '6';
        checkbox6.addEventListener('change', function () {
        if (checkbox6.checked) {
            // do this
            console.log(six);
            $('.pupils').addClass("movePupils")
            $('#AnimationSwitchName6').html('On')
            $('#animationText6').html('6')
            $('#dnaanimationswitch6').html(6)
        } else {
            // do that
            console.log(zero);
            $('.pupils').removeClass("movePupils")
            $('#AnimationSwitchName6').html('Off')
            $('#animationText6').html('0')
            $('#dnaanimationswitch6').html(0)
        }
        });
    });
  
//###################################################
//ANIMATION SWITCH MOVE BELLY FUNCTION:
//###################################################

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox7 = document.querySelector('#animationSwitch7');
        var zero = '0';
        var seven = '7';
        checkbox7.addEventListener('change', function () {
        if (checkbox7.checked) {
            // do this
            console.log(seven);
            $('.innerBelly').addClass("moveBelly")
            $('#AnimationSwitchName7').html('On')
            $('#animationText7').html('7')
            $('#dnaanimationswitch7').html(7)
        } else {
            // do that
            console.log(zero);
            $('.innerBelly').removeClass("moveBelly")
            $('#AnimationSwitchName7').html('Off')
            $('#animationText7').html('0')
            $('#dnaanimationswitch7').html(0)
        }
        });
    });
  
//###################################################
//ANIMATION BACKGROUND FUNCTION:
//###################################################

    function animationVariation(num){
        $('#dnaanimationbg').html(num)
        switch (num) {
            case 1:
                animationType1()
                $('#AnimationBGName').html('None') //set the badge to "n0rmal"
                break
            case 2:
                animationType2() //reset 
                $('#AnimationBGName').html('Flying Squirrel')
                break
            case 3:
                animationType3() //reset 
                $('#AnimationBGName').html('Reactor')
                break
            case 4:
                animationType4() //reset 
                $('#AnimationBGName').html('Blinds')
                break
            case 5:
                animationType5() //reset 
                $('#AnimationBGName').html('Red Rotator')
                break
            case 6:
                animationType6() //reset 
                $('#AnimationBGName').html('Hypnotize')
                break
            case 7:
                animationType7() //reset 
                $('#AnimationBGName').html('Retro')
                break
            case 8:
                animationType8() //reset 
                $('#AnimationBGName').html('Checker')
                break
            case 9:
                animationType9() //reset 
                $('#AnimationBGName').html('Lasers')
                break
        }
    }

    function animationType1(){
        //Reset here
        resetAnimation();
    }

    function animationType2(){
        //Reset here
        resetAnimation();
        $('.squirrelBoxBG1').addClass("moveBackground")
    }

    function animationType3(){
        //Reset here
        resetAnimation();
        $('.squirrelBoxBG1').addClass("moveBackground4")
        $('.squirrelBoxBG2').addClass("moveBackground4b")
    }

    function animationType4(){
        //Reset here
        resetAnimation();
        $('.squirrelBoxBG1').addClass("moveBackground9")
    }

    function animationType5(){
        //Reset here
        resetAnimation();
        $('.squirrelBoxBG1').addClass("moveBackground5")
        $('.squirrelBoxBG2').addClass("moveBackground5b")
    }

    function animationType6(){
        //Reset here
        resetAnimation();
        $('.squirrelBoxBG1, .squirrelBoxBG2').addClass("moveBackground2")
        $('.squirrelBoxBG2').addClass("rotateBG") 
    }

    function animationType7(){
        //Reset here
        resetAnimation();
        $('.squirrelBoxBG1').addClass("moveBackground7")
        $('.squirrelBoxBG2').addClass("moveBackground7")
    }

    function animationType8(){
        //Reset here
        resetAnimation();
        $('.squirrelBoxBG1').addClass("moveBackground6")
        $('.squirrelBoxBG2').addClass("moveBackground6")
        $('.squirrelBoxBG2').addClass("moveBackground6b")
    }

    function animationType9(){
        //Reset here
        resetAnimation();
        $('.squirrelBoxBG1').addClass("moveBackground8c")
    }

    function resetAnimation(){
        $('.squirrelBoxBG1').removeClass("moveBackground")
        $('.squirrelBoxBG1, .squirrelBoxBG2').removeClass("moveBackground2")
        $('.squirrelBoxBG2').removeClass("rotateBG")
        $('.squirrelBoxBG1').removeClass("moveBackground4")
        $('.squirrelBoxBG2').removeClass("moveBackground4b")
        $('.squirrelBoxBG1').removeClass("moveBackground5")
        $('.squirrelBoxBG2').removeClass("moveBackground5b")
        $('.squirrelBoxBG1').removeClass("moveBackground6")
        $('.squirrelBoxBG2').removeClass("moveBackground6")
        $('.squirrelBoxBG2').removeClass("moveBackground6b")
        $('.squirrelBoxBG1').removeClass("moveBackground7")
        $('.squirrelBoxBG2').removeClass("moveBackground7")
        $('.squirrelBoxBG2').removeClass("moveBackground7b")
        $('.squirrelBoxBG1').removeClass("moveBackground8c")
        $('.squirrelBoxBG1').removeClass("moveBackground9")
        //add any animation class that you create
    }



