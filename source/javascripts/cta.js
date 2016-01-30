$(function () {
  if (location.hostname == 'localhost') {
    return;
  }

  var isEntryClick = false;

  $(window).bind('beforeunload', function () {
    if (!isEntryClick) {
      return 'エントリーはお済みですか？';
    }
  });

  $('a:contains("ENTRY")').click(function () {
    isEntryClick = true;
  })
});
