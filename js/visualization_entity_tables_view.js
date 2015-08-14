(function($) {
  Drupal.behaviors.VisualizationEntityTablesView = {
    attach: function(context) {
      var title;
      var $body;

      if ($('#iframe-shell').length) { 
        $body = $(document.body);
        $body.removeClass('admin-menu');
        if (Drupal.settings.visualizationEntityTables.showTitle) {
          title = $('#iframe-shell').find('h2 a').html();
          $body.prepend('<h2 class="veTitle">' + title + '</h2>');
        }
      }

      var source = {
        url: Drupal.settings.visualizationEntityTables.resource,
        backend: 'csv',
      }
      dataset = new recline.Model.Dataset(source);
      dataset.fetch().done(function() {
        // console.log(dataset);
      });

      var grid = new recline.View.SlickGrid({
        model: dataset,
        el: $('#ve-table'),
        state: {
          gridOptions: {
            autoHeight: true,
            forceFitColumns: true
          }
        }

      });

      grid.visible = true;
      grid.render();
    }
  };
})(jQuery);
