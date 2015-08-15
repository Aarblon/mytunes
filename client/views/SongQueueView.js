// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add remove', this.render, this);
    this.collection.on('enqueue dequeue', this.playFirst, this);

  },

  render: function() {
    if(this.$el.children) {
      // this.$el.children.detach();
    }

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    )

  }

});
