var VideoListView = Backbone.View.extend({

  el:'.col-md-5',

  initialize: function() {
    this.render();
    var videoView = this.renderVideo.bind(this);
    this.collection.forEach(function(video) {
      // console.log(this);
      videoView(video);
    });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },
  
  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    console.log('renderVideo: ', videoView);
    this.$('.video-list').append(videoView.$el);
  },

  template: templateURL('src/templates/videoList.html')

});
