$(function () {
  $('ul.peg').sortable({
    connectWith : 'ul',
    sort : function (event, ui) {
      console.log(ui.helper);
    }
  });
});

