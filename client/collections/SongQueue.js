// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add remove', this.playFirst, this);
    this.on('ended', function() {
      this.remove(this.at(0));
    }, this);
  },

  playFirst: function(){
    if(this.at(0) !== undefined) {
      this.at(0).play();
    }
  }

});
