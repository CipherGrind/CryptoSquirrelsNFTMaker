
//Random color
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


//This function code needs to modified so that it works with Your cat code.
function headColor(color,code) {
    $('.face, .leftCheek, .rightCheek, .belly, .innertail2').css('background-color', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnahead').html(code) //This updates the body color part of the DNA that is displayed below the cat
    console.log($('.face').css('background-color'))
    var headAndBellyColorRBG = ($('.face').css('background-color'))
    $('#headAndBellyColorRBG').html(headAndBellyColorRBG)
}


//This function code needs to modified so that it works with Your cat code.
function bodyLimbsColor(color,code) {
    $('#body, .leftArm, .rightArm, .leftThigh, .rightThigh, .leftFoot, .rightFoot, #tail')
        .css('background-color', '#' + color)  //This changes the color of the cat
    $('#bodycode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
    console.log($('#body').css('background-color'))
    var bodyAndLimbsColorRBG = ($('#body').css('background-color'))
    $('#bodyAndLimbsColorRBG').html(bodyAndLimbsColorRBG)
}


//This function code needs to modified so that it works with Your cat code.
function tailEarsColor(color,code) {
    $('.leftEar, .rightEar, .toe1, .toe2, .toe3, .toe4, .finger1, .finger2, .innertail, .innertail3')
        .css('background-color', '#' + color)  //This changes the color of the cat
    $('#tailcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnatail').html(code) //This updates the body color part of the DNA that is displayed below the cat
    console.log($('#tail').css('background-color'))
    var tailAndEarsColorRBG = ($('#tail').css('background-color'))
    $('#tailAndEarsColorRBG').html(tailAndEarsColorRBG)
}


//This function code needs to modified so that it works with Your cat code.
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
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
