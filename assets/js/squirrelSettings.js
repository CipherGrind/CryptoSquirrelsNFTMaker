
//###############################
//allColors
//###############################
  var colors = Object.values(allColors())  

//###############################
//defaultDNA
//###############################
  var defaultDNA = {
    //colors
      "bodyLimbsColor" : 13,
      "tailBellyColor" : 96,
      "surfBoardColor" : 14,
      "bgColor" : 90,
    //attributes
      "eyesShape" : 1,
      "tailspinShape" : 1,
      "teethShape" : 1,
      "coinShape" : 3,
    //animation switches
      "animationSwitch2" :  2,
      "animationSwitch3" :  3,
      "animationSwitch4" :  4,
      "animationSwitch5" :  0,
      "animationSwitch6" :  0,
      "animationSwitch7" :  0,
    //animation background
      "animationBG" :  1,

      "lastNum" :  1
  }

//###############################
//page load
//###############################
  $( document ).ready(function() {
    $('#dnabody').html(defaultDNA.bodyLimbsColor);
    $('#dnatail').html(defaultDNA.tailBellyColor);
    $('#dnasurf').html(defaultDNA.surfBoardColor);
    $('#dnabg').html(defaultDNA.bgColor);
    $('#dnaeyes').html(defaultDNA.eyesShape);
    $('#dnatailspin').html(defaultDNA.tailspinShape);
    $('#dnateeth').html(defaultDNA.teethShape);
    $('#dnacoin').html(defaultDNA.coinShape);

    $('#dnaanimationswitch2').html(defaultDNA.animationSwitch2);
    $('#dnaanimationswitch3').html(defaultDNA.animationSwitch3);
    $('#dnaanimationswitch4').html(defaultDNA.animationSwitch4);
    $('#dnaanimationswitch5').html(defaultDNA.animationSwitch5);
    $('#dnaanimationswitch6').html(defaultDNA.animationSwitch6);
    $('#dnaanimationswitch7').html(defaultDNA.animationSwitch7);

    $('#dnaanimationbg').html(defaultDNA.animationBG);

    $('#dnaspecial').html(defaultDNA.lastNum);

    renderSquirrel(defaultDNA)
  });

//###############################
//getDNA
//###############################
  function getDna(){
      var dna = ''
      dna += $('#dnabody').html()
      dna += $('#dnatail').html()
      dna += $('#dnasurf').html()
      dna += $('#dnabg').html()
      dna += $('#dnaeyes').html()
      dna += $('#dnatailspin').html()
      dna += $('#dnateeth').html()
      dna += $('#dnacoin').html()
      
      dna += $('#dnaanimationswitch2').html()
      dna += $('#dnaanimationswitch3').html()
      dna += $('#dnaanimationswitch4').html()
      dna += $('#dnaanimationswitch5').html()
      dna += $('#dnaanimationswitch6').html()
      dna += $('#dnaanimationswitch7').html()

      dna += $('#dnaanimationbg').html()

      dna += $('#dnaspecial').html()

      return parseInt(dna)
  }

//###############################
//renderSquirrel
//###############################
  function renderSquirrel(dna){
    // Load set colors
      bodyLimbsColor(colors[dna.bodyLimbsColor],dna.bodyLimbsColor)
      $('#bodyLimbsColor').val(dna.bodyLimbsColor)

      tailBellyColor(colors[dna.tailBellyColor],dna.tailBellyColor)
      $('#tailBellyColor').val(dna.tailBellyColor)

      surfBoardColor(colors[dna.surfBoardColor],dna.surfBoardColor)
      $('#surfBoardColor').val(dna.surfBoardColor)

      bgColor(colors[dna.bgColor],dna.bgColor)
      $('#bgColor').val(dna.bgColor)

    // Load set attributes
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

      coinVariation(dna.coinShape)
      $('#coinShape').val(dna.coinShape)
      var coinShapeText = ($('#coinShape').val())
      $('#coinShapeText').html(coinShapeText)
      console.log(coinShapeText)

    // Load set first tab
      $("#eyesShapeGroup").hide();
      $("#tailspinShapeGroup").hide();
      $("#teethShapeGroup").hide();
      $("#coinShapeGroup").hide();
      $("#animationGroupMain").hide();

    // Load set animation switches
      animationSwitchVariation(dna.animationswitch2)
      $("#animationSwitch2").val(dna.animationswitch2)
      $('#AnimationSwitchName').html('On')
      $('#animationText2').html('2')

      $("#animationSwitch3").val(dna.animationswitch3)
      $('#AnimationSwitchName3').html('On')
      $('#animationText3').html('3')
      $('.squirrel').addClass("moveSquirrel")
      
      $("#animationSwitch4").val(dna.animationswitch4)
      $('#AnimationSwitchName4').html('On')
      $('#animationText4').html('4')
      $('.tailAni').addClass("moveTail")

      $("#animationSwitch5").val(dna.animationswitch5)
      $('#AnimationSwitchName5').html('Off')
      $('#animationText5').html('0')

      $("#animationSwitch6").val(dna.animationswitch6)
      $('#AnimationSwitchName6').html('Off')
      $('#animationText6').html('0')

      $("#animationSwitch7").val(dna.animationswitch7)
      $('#AnimationSwitchName7').html('Off')
      $('#animationText7').html('0')

    // Load background animations
      animationVariation(dna.animationBG)
      $("#animationBG").val(dna.animationBG)
      var animationBGText = ($('#animationBG').val())
      $('#animationBGText').html(animationBGText)
      console.log(animationBGText)

  }

//###############################
//Changing Squirrel Colors
//###############################

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

//###############################
//Changing Squirrel Shape
//###############################

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

  $('#coinShape').change(()=>{
    console.log( $('#coinShape').val() )
    var shape = parseInt($('#coinShape').val()) //between 1 and 9
    coinVariation(shape)
    var coinShapeText = ($('#coinShape').val())
    $('#coinShapeText').html(coinShapeText)
  })

//###############################
//Animation Backgrounds
//###############################

  $('#animationBG').change(()=>{
    var animationVal = parseInt( $('#animationBG').val() ) //animationVal 2 instead of "2"
    animationVariation(animationVal)
    console.log(animationVal);
    var animationBGText = ($('#animationBG').val())
    $('#animationBGText').html(animationBGText)
  })

//###############################
//tabs
//###############################

  $('#ColorsTab').click(()=>{
    $("#bodyLimbsColorGroup").show()
    $("#tailBellyEyesColorGroup").show()
    $("#surfBoardColorGroup").show()
    $("#bgColorGroup").show()

    $("#eyesShapeGroup").hide();
    $("#tailspinShapeGroup").hide();
    $("#teethShapeGroup").hide();
    $("#coinShapeGroup").hide();
    $("#animationGroupMain").hide();
  })

  $('#AttributesTab').click(()=>{
    $("#eyesShapeGroup").show();
    $("#tailspinShapeGroup").show();
    $("#teethShapeGroup").show();
    $("#coinShapeGroup").show();

    $("#bodyLimbsColorGroup").hide()
    $("#tailBellyEyesColorGroup").hide()
    $("#surfBoardColorGroup").hide()
    $("#bgColorGroup").hide()
    $("#animationGroupMain").hide();
  })

  $('#AnimationsTab').click(()=>{
    $("#animationGroupMain").show();

    $("#bodyLimbsColorGroup").hide()
    $("#tailBellyEyesColorGroup").hide()
    $("#surfBoardColorGroup").hide()
    $("#bgColorGroup").hide()
    $("#eyesShapeGroup").hide();
    $("#tailspinShapeGroup").hide();
    $("#teethShapeGroup").hide();
    $("#coinShapeGroup").hide();
  })

//###############################
//default button
//###############################

  $('#default').click(()=>{
    renderSquirrel(defaultDNA)

      $("#bodyLimbsColorGroup").show()
      $("#tailBellyEyesColorGroup").show()
      $("#surfBoardColorGroup").show()
      $("#bgColorGroup").show()

      document.getElementById("animationSwitch2").checked = true;
        $('.squirrel').removeClass("noAni")
        $('#dnaanimationswitch2').html(2);
        $('#animationText2').html('2')
        $("#animationGroup").show();
        $("#animationSwitchGroupMain").show();

      document.getElementById("animationSwitch3").checked = true;
        $('.squirrel').addClass("moveSquirrel")
        $('#AnimationSwitchName3').html('On')
        $('#animationText3').html('3')
        $('#dnaanimationswitch3').html(3)

      document.getElementById("animationSwitch4").checked = true;
        $('.tailAni').addClass("moveTail")
        $('#AnimationSwitchName4').html('On')
        $('#animationText4').html('4')
        $('#dnaanimationswitch4').html(4)

      document.getElementById("animationSwitch5").checked = false;
        $('.eye1, .eye2').removeClass("moveEyes")
        $('#AnimationSwitchName5').html('Off')
        $('#animationText5').html('0')
        $('#dnaanimationswitch5').html(0)

      document.getElementById("animationSwitch6").checked = false;
        $('.pupils').removeClass("movePupils")
        $('#AnimationSwitchName6').html('Off')
        $('#animationText6').html('0')
        $('#dnaanimationswitch6').html(0)

      document.getElementById("animationSwitch7").checked = false;
        $('.innerBelly').removeClass("moveBelly")
        $('#AnimationSwitchName7').html('Off')
        $('#animationText7').html('0')
        $('#dnaanimationswitch7').html(0)

  });


//###############################
//randomize button
//###############################

  $('#randomize').click(()=>{

    var randombodyLimbsColor = Math.floor(Math.random() * 89) + 10;
    bodyLimbsColor(colors[randombodyLimbsColor],randombodyLimbsColor)
    $("#bodyLimbsColor").val(randombodyLimbsColor)

    var randomtailBellyColor = Math.floor(Math.random() * 89) + 10;
    tailBellyColor(colors[randomtailBellyColor],randomtailBellyColor)
    $("#tailBellyColor").val(randomtailBellyColor)

    var randomsurfBoardColor = Math.floor(Math.random() * 89) + 10;
    surfBoardColor(colors[randomsurfBoardColor],randomsurfBoardColor)
    $("#surfBoardColor").val(randomsurfBoardColor)

    var randombgColor = Math.floor(Math.random() * 89) + 10;
    bgColor(colors[randombgColor],randombgColor)
    $("#bgColor").val(randombgColor)

    var randomeyesShape = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    eyeVariation(randomeyesShape)
    $("#eyesShape").val(randomeyesShape)

    var randomtailspinShape = Math.floor(Math.random() * (8 - 1 + 1) + 1);
    tailspinVariation(randomtailspinShape)
    $("#tailspinShape").val(randomtailspinShape)

    var randomteethShape = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    teethVariation(randomteethShape)
    $("#teethShape").val(randomteethShape)

    var randomcoinShape = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    coinVariation(randomcoinShape)
    $("#coinShape").val(randomcoinShape)

    var randomanimationBG = Math.floor(Math.random() * (9 - 1 + 1) + 1);
    animationVariation(randomanimationBG)
    $("#animationBG").val(randomanimationBG)
  })