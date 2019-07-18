'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  let unregisterHandlerFunctions = [];

  $(document).ready(function () {
    tableau.extensions.initializeAsync().then(function () {
      // // 2. This code loads the IFrame Player API code asynchronously.
      // var tag = document.createElement('script');

      // tag.src = "https://www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // // 3. This function creates an <iframe> (and YouTube player)
      // //    after the API code downloads.
      // var player;
      // function onYouTubeIframeAPIReady() {
      //   player = new YT.Player('player', {
      //     height: '390',
      //     width: '640',
      //     videoId: 'M7lc1UVf-VE',
      //     events: {
      //       'onReady': onPlayerReady,
      //       'onStateChange': onPlayerStateChange
      //     }
      //   });
      // }

      // // 4. The API will call this function when the video player is ready.
      // function onPlayerReady(event) {
      //   event.target.playVideo();
      // }

      // // 5. The API calls this function when the player's state changes.
      // //    The function indicates that when playing a video (state=1),
      // //    the player should play for six seconds and then stop.
      // var done = false;
      // function onPlayerStateChange(event) {
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }
      // }
      // function stopVideo() {
      //   player.stopVideo();
      // }

      makeYoutubePlayer();

      // Add button handlers for clearing filters.
      // $('#clear').click(clearAllFilters);
    }, function (err) {
      // Something went wrong in initialization.
      console.log('Error while Initializing: ' + err.toString());
    });
  });


  function makeYoutubePlayer () {
    //Makes the youtube player
    console.log("in makeyoutubeplaer");
    // const YTPlayer = require('yt-player')
    const player = $('player')
    // player = new YTPlayer('#player')
    console.log('calling new yt player...');
    newYTPlayer();
  }

  function newYTPlayer () {
   var player = {
     playVideo: function(container, videoId) {
       if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
         window.onYouTubePlayerAPIReady = function() {
             player.loadPlayer(container, videoId);
         };
        $.getScript('//www.youtube.com/player_api');
       } else {
        player.loadPlayer(container, videoId);
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
         height: 200,
         width: 200,
         videoId: videoId,
         events: {
             // 'onStateChange': onPlayerStateChange
         }
       });
     }
   };

   var containerId = 'player2';
   var videoId = 'GKSRyLdjsPA';
   player.playVideo(containerId, videoId);
  }

})();
