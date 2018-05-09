var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'select', this.randomMethod);
  },
  
  randomMethod: function(model) {
    // console.log('you clicked?');
    this.model = model;
    this.render();
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes)); // updates to whatever our target's video ID is
    // console.log(this.model);
    
    return this;
  },
 
  template: templateURL('src/templates/videoPlayer.html')

});
