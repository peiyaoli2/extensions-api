'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      makeYoutubePlayer();
    }, function (err) {
      // Something went wrong in initialization.
      console.log('Error while Initializing: ' + err.toString());
    });
  });

  var playerClass = {
        playVideo: function(container, videoId) {
            if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
                window.onYouTubePlayerAPIReady = function() {
                    playerClass.loadPlayer(container, videoId);
                };
                $.getScript('//www.youtube.com/player_api');
            } else {
                playerClass.loadPlayer(container, videoId);
            }
        },
        loadPlayer: function(container, videoId) {
            window.myPlayer = new YT.Player(container, {
                playerVars: {
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    autoplay: 1
                },
                height: "390",
                width: "640",
                videoId: videoId,
                events: {
                    // 'onStateChange': onPlayerStateChange
                }
            });
          }
      };

  function makeYoutubePlayer () {
    const player = $('player') 

    newYTPlayer();

    var submitWatchIdButton = document.getElementById('submitWatchIdButton');
    submitWatchIdButton.addEventListener("click", newPlay);
  }
 
  function newYTPlayer () {
    var containerId = 'player';
    var videoId = 'fdc9pd5QyeA';
    playerClass.playVideo(containerId, videoId);
  }

  function newPlay() {
    const watchId = document.getElementById('watchId').value.split('=')[1];
    window.myPlayer.loadVideoById(watchId)
  }
})();