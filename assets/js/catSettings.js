
var colors = Object.values(allColors()) 

var defaultDNA = {
    "bodyLimbsColor" : 13,
    "tailBellyColor" : 96,
    "surfBoardColor" : 14,
    "bgColor" : 90,
    //Cattributes
    "eyesShape" : 1,
    "tailspinShape" : 1,
    "teethShape" : 1,

    "animation" :  8,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.bodyLimbsColor);
  $('#dnatail').html(defaultDNA.tailBellyColor);
  $('#dnasurf').html(defaultDNA.surfBoardColor);
  $('#dnabg').html(defaultDNA.bgColor);
  $('#dnaeyes').html(defaultDNA.eyesShape);
  $('#dnatailspin').html(defaultDNA.tailspinShape);
  $('#dnateeth').html(defaultDNA.teethShape);

   $('#dnaanimation').html(defaultDNA.animation);
   $('#dnaspecial').html(defaultDNA.lastNum);

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnatail').html()
    dna += $('#dnasurf').html()
    dna += $('#dnabg').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnatailspin').html()
    dna += $('#dnateeth').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    bodyLimbsColor(colors[dna.bodyLimbsColor],dna.bodyLimbsColor)
    $('#bodyLimbsColor').val(dna.bodyLimbsColor)

    tailBellyColor(colors[dna.tailBellyColor],dna.tailBellyColor)
    $('#tailBellyColor').val(dna.tailBellyColor)

    surfBoardColor(colors[dna.surfBoardColor],dna.surfBoardColor)
    $('#surfBoardColor').val(dna.surfBoardColor)

    bgColor(colors[dna.bgColor],dna.bgColor)
    $('#bgColor').val(dna.bgColor)

    eyeVariation(dna.eyesShape)
    $('#eyesShape').val(dna.eyesShape)
    var eyeShapeText = ($('#eyesShape').val())
    $('#eyeShapeText').html(eyeShapeText)
    console.log(eyeShapeText)

    tailspinVariation(dna.tailspinShape)
    $('#tailspinShape').val(dna.tailspinShape)
    var tailspinShapeText = ($('#tailspinShape').val())
    $('#tailspinShapeText').html(tailspinShapeText)
    console.log(tailspinShapeText)

    teethVariation(dna.teethShape)
    $('#teethShape').val(dna.teethShape)
    var teethShapeText = ($('#teethShape').val())
    $('#teethShapeText').html(teethShapeText)
    console.log(teethShapeText)

}

// Changing squirrel colors

$('#bodyLimbsColor').change(()=>{
  console.log( $('#bodyLimbsColor').val() )
  var colorVal = $('#bodyLimbsColor').val()
  bodyLimbsColor(colors[colorVal],colorVal)
})

$('#tailBellyColor').change(()=>{
  console.log( $('#tailBellyColor').val() )
  var colorVal = $('#tailBellyColor').val()
  tailBellyColor(colors[colorVal],colorVal)
})

$('#surfBoardColor').change(()=>{
  console.log( $('#surfBoardColor').val() )
  var colorVal = $('#surfBoardColor').val()
  surfBoardColor(colors[colorVal],colorVal)
})

$('#bgColor').change(()=>{
  console.log( $('#bgColor').val() )
  var colorVal = $('#bgColor').val()
  bgColor(colors[colorVal],colorVal)
})


// Changing squirrel shape

$('#eyesShape').change(()=>{
  console.log( $('#eyesShape').val() )
  var shape = parseInt($('#eyesShape').val()) //between 1 and 9
  eyeVariation(shape)
  var eyeShapeText = ($('#eyesShape').val())
  $('#eyeShapeText').html(eyeShapeText)
})

$('#tailspinShape').change(()=>{
  console.log( $('#tailspinShape').val() )
  var shape = parseInt($('#tailspinShape').val()) //between 1 and 9
  tailspinVariation(shape)
  var tailspinShapeText = ($('#tailspinShape').val())
  $('#tailspinShapeText').html(tailspinShapeText)
})

$('#teethShape').change(()=>{
  console.log( $('#teethShape').val() )
  var shape = parseInt($('#teethShape').val()) //between 1 and 9
  teethVariation(shape)
  var teethShapeText = ($('#teethShape').val())
  $('#teethShapeText').html(teethShapeText)
})
