var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  initialize: function() {
    this.render();
    //this.listenTo(this., 'click', this.render());
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template()); // updates to whatever our target's video ID is
    //this.model.attributes
    
    return this;
  },
 
  template: templateURL('src/templates/videoPlayer.html')

});
