$(document).ready(function(){
  $('#firstStory').hide();
  $('#secondStory').hide();
  $('#thirdStory').hide();
  $('#genButton').click(function(){
    if (!$('input').is(':checked')) {
      alert('Please select your story type first.');
      return false;
    }
    else if ($('#christmasRadio').is(':checked')){
      $('#secondStory').hide();
      $('#thirdStory').hide();
      $('#firstStory').show();
      aChristmasStory();
    }
    else if ($('#shoppingRadio').is(':checked')){
      $('#firstStory').hide();
      $('#thirdStory').hide();
      $('#secondStory').show();
      aShoppingStory();
    }
    else if ($('#brainstormRadio').is(':checked')){
      $('#firstStory').hide();
      $('#secondStory').hide();
      $('#thirdStory').show();
      aBrainstormStory();
    }
    $('.text-box').val('');
  });
  $('.text-box').on("keydown", function(e){
    var key = e.which;
    if (key === 13) {
      $('#genButton').click();
    }
  });
});

function aChristmasStory(){
  var catNouns = nounTown();
  var catVerbs = verbTown();
  var catAdjectives = adjectiveTown();
  var catAdverbs = adverbTown();
  $('#christree .noun').each(function(i){
    $(this).html(catNouns[i]);
  });
  $('#christree .adverb').each(function(i){
    $(this).html(catAdverbs[i]);
  });
  $('#christree .adjective').each(function(i){
    $(this).html(catAdjectives[i]);
  });
  $('#christree .verb').each(function(i){
    $(this).html(catVerbs[i]);
  });
}

function aShoppingStory(){
  var catNouns = nounTown();
  var catVerbs = verbTown();
  var catAdjectives = adjectiveTown();
  var catAdverbs = adverbTown();
  $('#shop .noun').each(function(i){
      $(this).html(catNouns[i]);
  });
  $('#shop .adverb').each(function(i){
      $(this).html(catAdverbs[i]);
  });
  $('#shop .adjective').each(function(i){
      $(this).html(catAdjectives[i]);
  });
  $('#shop .verb').each(function(i){
      $(this).html(catVerbs[i]);
  });
}

function aBrainstormStory(){
  var catNouns = nounTown();
  var catVerbs = verbTown();
  var catAdjectives = adjectiveTown();
  var catAdverbs = adverbTown();
  $('#brain .noun').each(function(i){
    $(this).html(catNouns[i]);
  });
  $('#brain .adverb').each(function(i){
    $(this).html(catAdverbs[i]);
  });
  $('#brain .adjective').each(function(i){
    $(this).html(catAdjectives[i]);
  });
  $('#brain .verb').each(function(i){
    $(this).html(catVerbs[i]);
  });
}

function nounTown(){
  var arrayNouns = $('#nouns').val().split(',');
  var nounShuffle = shuffleNouns(randomNouns);
  var catNouns = arrayNouns.concat(nounShuffle);
  if (catNouns[0] === ""){
    catNouns.shift();
  }
  return catNouns;
}

function verbTown(){
  var arrayVerbs = $('#verbs').val().split(',');
  var verbShuffle = shuffleVerbs(randomVerbs);
  var catVerbs = arrayVerbs.concat(verbShuffle);
  if (catVerbs[0] === ""){
    catVerbs.shift();
  }
  return catVerbs;
}

function adjectiveTown(){
  var arrayAdjectives = $('#adjectives').val().split(',');
  var adjectiveShuffle = shuffleAdjectives(randomAdjectives);
  var catAdjectives = arrayAdjectives.concat(adjectiveShuffle);
  if (catAdjectives[0] === ""){
    catAdjectives.shift();
  }
  return catAdjectives;
}

function adverbTown(){
  var arrayAdverbs = $('#adverbs').val().split(',');
  var adverbShuffle = shuffleAdverbs(randomAdverbs);
  var catAdverbs = arrayAdverbs.concat(adverbShuffle);
  if (catAdverbs[0] === ""){
    catAdverbs.shift();
  }
  return catAdverbs;
}

function shuffleNouns(randomNouns){
  for (var i = randomNouns.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = randomNouns[i];
    randomNouns[i] = randomNouns[j];
    randomNouns[j] = temp;
  }
  return randomNouns;
}

function shuffleVerbs(randomVerbs){
  for (var i = randomVerbs.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = randomVerbs[i];
    randomVerbs[i] = randomVerbs[j];
    randomVerbs[j] = temp;
  }
  return randomVerbs;
}

function shuffleAdjectives(randomAdjectives){
  for (var i = randomAdjectives.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = randomAdjectives[i];
    randomAdjectives[i] = randomAdjectives[j];
    randomAdjectives[j] = temp;
  }
  return randomAdjectives;
}

function shuffleAdverbs(randomAdverbs){
  for (var i = randomAdverbs.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = randomAdverbs[i];
    randomAdverbs[i] = randomAdverbs[j];
    randomAdverbs[j] = temp;
  }
  return randomAdverbs;
}
