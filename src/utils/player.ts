var inter;

export function getPlayerTime(callback){
  clearInterval(inter);
  inter = setInterval(function(){
    var players = document.getElementsByTagName('video');
    for (var i = 0; i < players.length; i++) {
      var player:any = players[i];
      var duration = player.duration;
      var current = player.currentTime;

      if(duration){
        var item = {
          current,
          duration
        }
        con.info(window.location.href, item);
        callback(item);
        break;
      }

    };
  }, 1000);
}