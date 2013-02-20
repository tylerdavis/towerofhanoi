window.tower = {

  ui : $('.peg').sortable({

    connectWith : 'ul',

    sort : function (event, ui) {
      window.tower.checkColumns();
    },
    stop : function (event, ui) {
      window.tower.checkColumns();
    }
  }),

  checkColumns : function () {
      // If we find the ui-sortable-helper, we're going to disregard it in the child count.
    $('.peg').each(function() {
      var disks = ( $('.ui-sortable-helper').length < 1 ) ? $(this).find('.disk').length : $(this).find('.disk').length - 1;
      if (disks < 0) {disks = 0;}
      var headSpace = 3 - disks;
      if (headSpace !== 3) {
        this.style.top = ( 33 * headSpace ) + '%';
      }
    })
  }

}
