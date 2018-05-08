var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // console.log('list entry render: ', this);
    return this;
  },
  
  // handleClick: function() {
  //   this.model.select();
  // },
  
  // events: {
  //   'click .video-list-entry-title': 'handleClick'
  // },

  template: templateURL('src/templates/videoListEntry.html')

});
