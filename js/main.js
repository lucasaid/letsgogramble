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

  soundManager.debugMode = false;
  soundManager.url = '/js/soundmanager/';
  soundManager.defaultOptions.volume = 300;

  $('#steve').click( function() {
  	var random = Math.floor((Math.random() * 35));
    try { soundManager.play(id, 'http://letsgogramble.com/mp3/' + sounds[random] + '.mp3'); } catch(err) { return true; }
    try { pageTracker._trackEvent("Sounds", "Play", sounds[random]); } catch(err) {}
    return false;
  });

});