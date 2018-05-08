var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView({collection: this.videos});
    this.search = new SearchView();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
