(function($) {

  $(document).on('ready', function(){

    var settings = JSON.parse($('#edit-field-ve-settings-und-0-value').val());
    console.log(settings);

    var $resourceField = $('#edit-field-uuid-resource-und-0-target-uuid');
    var $resizeField = $('#edit-field-ve-table-resize-und');
    var $settingsField = $('#edit-field-ve-settings-und-0-value');

    $resourceField.on('autocompleteSelect', function(event, node) {
      var re = /\[(.*?)\]/;
      var uuid = re.exec($resourceField.val())[1];
      settings.source = '/oklahoma/node/' + uuid + '/download';
      $settingsField.val(JSON.stringify(settings));
    });

    $resizeField.on('change', function() {
      settings.resize = $(this).prop('checked');
      $settingsField.val(JSON.stringify(settings));
    });

  });
})(jQuery);
