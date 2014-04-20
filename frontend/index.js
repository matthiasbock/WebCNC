/*
 * Bind button event handlers
 */
$('#btnDryRun').click(function() {
    $('#log').html('Test');
    console.log('test');
    });

/*
 * SVG cursor
 */
 $('#canvas').append('<circle id=cursor r=5 stroke=black>');
 