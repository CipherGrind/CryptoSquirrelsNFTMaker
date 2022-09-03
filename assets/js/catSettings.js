
var colors = Object.values(allColors()) 

var defaultDNA = {
    "headBellyColor" : 10,
    "bodyLimbsColor" : 13,
    "tailEarsColor" : 96,
    "bgColor" : 90,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnahead').html(defaultDNA.headBellyColor);
  $('#dnabody').html(defaultDNA.bodyLimbsColor);
  $('#dnatail').html(defaultDNA.tailEarsColor);
  $('#dnabg').html(defaultDNA.bgColor);
    
//   $('#dnashape').html(defaultDNA.eyesShape)
//   $('#dnadecoration').html(defaultDNA.decorationPattern)
//   $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
//   $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
//   $('#dnaanimation').html(defaultDNA.animation)
//   $('#dnaspecial').html(defaultDNA.lastNum)

  renderCat(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnahead').html()
    dna += $('#dnabody').html()
    dna += $('#dnatail').html()
    dna += $('#dnabg').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderCat(dna){
    headColor(colors[dna.headBellyColor],dna.headBellyColor)
    $('#headBellyColor').val(dna.headBellyColor)

    bodyLimbsColor(colors[dna.bodyLimbsColor],dna.bodyLimbsColor)
    $('#bodyLimbsColor').val(dna.bodyLimbsColor)

    tailEarsColor(colors[dna.tailEarsColor],dna.tailEarsColor)
    $('#tailEarsColor').val(dna.tailEarsColor)

    bgColor(colors[dna.bgColor],dna.bgColor)
    $('#bgColor').val(dna.bgColor)
}

// Changing cat colors
$('#headBellyColor').change(()=>{
    console.log( $('#headBellyColor').val() )
    var colorVal = $('#headBellyColor').val()
    headColor(colors[colorVal],colorVal)
})

$('#bodyLimbsColor').change(()=>{
  console.log( $('#bodyLimbsColor').val() )
  var colorVal = $('#bodyLimbsColor').val()
  bodyLimbsColor(colors[colorVal],colorVal)
})

$('#tailEarsColor').change(()=>{
  console.log( $('#tailEarsColor').val() )
  var colorVal = $('#tailEarsColor').val()
  tailEarsColor(colors[colorVal],colorVal)
})

$('#bgColor').change(()=>{
  console.log( $('#bgColor').val() )
  var colorVal = $('#bgColor').val()
  bgColor(colors[colorVal],colorVal)
})
