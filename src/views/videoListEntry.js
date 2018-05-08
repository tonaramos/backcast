var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$('.video-list-entry-title').html(`${this.model.attributes.snippet.title}`);
    this.$('.video-list-entry-detail').html(`${this.model.attributes.snippet.description}`);
    this.$('.media-object').attr('src', `${this.model.attributes.snippet.thumbnails.default.url}`);
    return this;
  },
  
  events: {
    'click .video-list-entry-title': 'onTitleClick'
  },

  onTitleClick: function() {
    this.model.select();
  },
  
  template: templateURL('src/templates/videoListEntry.html')

});
