var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getStreamersData () {
  streamers.forEach(function(streamer) {
    
      /*------------jsonMainData-------------*/
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+ streamer +'?callback=?', function(data) {
    var channelLink = "https://www.twitch.tv/" + streamer;
    var streamStatus = (data.stream === null) ? "Offline" : data.stream.game;
    
      /*------------jsonLogo-------------*/
    $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+ streamer +'?callback=?', function(data) {
      var logoLink = data.logo;
      
      /*------------htmlPart-------------*/
      var statusHtml = (streamStatus === "Offline") ? '<div class = "Offline"><p>Offline</p></div>' : '<div class = "Online"><p>Online</p></div><div class="scroll-left well"><p>' + streamStatus + ' : '+ data.status + '</p></div>';
      var html = '<div class="row item"> <div class="col-xs-1"><img class = "icons" src="'+ logoLink +'" alt="No logo"></div><div class="col-xs-4"><a href="' + channelLink + '" target="_blank"><h4 id="streamer">' + streamer + '</h4></a></div><div class="col-xs-7">' + statusHtml + '</div></div>';
        if (streamStatus !== "Offline") {
          $("#All-List").prepend(html);
          $("#Online").append(html);
        } else {
          $("#All-List").append(html);
          $("#Offline").append(html);
        }  
      });
    });
  });
}

$(document).ready(function() {
  getStreamersData(streamers);
});

  /*------------NavTabs-------------*/
function openTab(evt, tabName) {
  
  var i, x, tablinks;
  x = document.getElementsByClassName("strList");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-deep-purple", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " w3-deep-purple";
}