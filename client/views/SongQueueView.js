// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.render();
      // this.collection.on('change:songQueue', function(model){
    //   this.playerView.setSong(model.get('songQueue'));
    // }, this);

  },

  render: function() {
    return this.$el;

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    )
  }

});
