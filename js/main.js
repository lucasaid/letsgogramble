var sounds = [
	'ahuuuuuuhhu',
	'andjustwait',
	'backtrack',
	'bestmahcinedingus',
	'cardcounting',
	'comeonbrackjack',
	'crashino',
	'dannyslibrarycard',
	'dingus',
	'figureditout',
	'firstgramblingyoudo',
	'goalltheway',
	'goodshot',
	'ididntwanthatone',
	'isaidmaybe',
	'itsjustagame',
	'jackprot',
	'justrelax',
	'letsgogramble',
	'letshitthetables',
	'makesuremushroom',
	'oneofpaperfourofcoin',
	'papermoney',
	'payseverytime',
	'payup',
	'probablysomehunk',
	'putitinthehole',
	'shareourchips',
	'shhhhhh',
	'struggle',
	'upppblackjack',
	'whatyoutalkingabout',
	'whocares',
	'whostartedgrambling',
	'whowasthefirst',
]
$(document).ready( function(){
  console.log("%cWhat you looking for dingus?","font-family:cursive;font-size: 52px;color:#FD6C0D")
  soundManager.debugMode = false;
  soundManager.url = '/js/soundmanager/';
  soundManager.defaultOptions.volume = 300;

  $('#steve').click( function() {
  	var random = Math.floor((Math.random() * 35));
  	var file = 'https://letsgogramble.com/mp3/' + sounds[random] + '.mp3';
    try { soundManager.play(sounds[random], file); } catch(err) { return true; }
    try { 
    	ga('send', 'event', 'Sounds', 'Play', sounds[random], 4);
    } catch(err) {}
    return false;
  });

});
