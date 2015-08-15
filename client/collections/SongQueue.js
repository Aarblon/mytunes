// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    console.log("we are lost!!!")
  },

  playFirst: function(){
    this.at(0).play();
  }
});
