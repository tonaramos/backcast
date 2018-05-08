var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
    // this.videoListEntryView = new videoListEntryView();
    // console.log(this.videos);
    // this.videos.forEach(this.renderVideo, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },
  renderVideo: function(video) {
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
