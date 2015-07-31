(function($) {
  Drupal.behaviors.VisualizationEntityTablesView = {
    attach: function(context) {
      var source = {
        url: Drupal.settings.visualizationEntityTables.resource,
        backend: 'csv',
      }
      dataset = new recline.Model.Dataset(source);
      dataset.fetch().done(function() {
        console.log(dataset);
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
