$(document).on('click', '.number-spinner button', function () {    
	var btn = $(this),
		oldValue = btn.closest('.number-spinner').find('input').val().trim(),
		newVal = 0;
	
	if (btn.attr('data-dir') == 'up') {
		newVal = parseInt(oldValue) + 1;
	} else {
		if (oldValue > 0) {
			newVal = parseInt(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
	btn.closest('.number-spinner').find('input').val(newVal);
});

$('#other').change( function () {
	if ($(this).is(':checked'))
    {
		$("#inputOther").attr('style','display:block');
		$("#inputContent").attr('style','display:none');
		$("#inputAppendix").attr('style','display:none');
    }
});
$('#content').change( function () {
	if ($(this).is(':checked'))
    {
		$("#inputOther").attr('style','display:none');
		$("#inputContent").attr('style','display:block');
		$("#inputAppendix").attr('style','display:none');
	}
});
$('#appendix').change( function () {
	if ($(this).is(':checked'))
    {
       	$("#inputOther").attr('style','display:none');
		$("#inputContent").attr('style','display:none');
		$("#inputAppendix").attr('style','display:block');
    }
});