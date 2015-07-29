(function($) {
  $(document).on('ready', function(){
    var $resourceField = $('#edit-field-uuid-resource-und-0-target-uuid');

    $resourceField.on('autocompleteSelect', function(event, node) {
      var re = /\[(.*?)\]/;
      var uuid = re.exec($resourceField.val())[1];
      $('#edit-field-ve-settings-und-0-value').val(JSON.stringify({source:'/node/' + uuid + '/download'}));
    });
  });


})(jQuery);