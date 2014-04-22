
function log(msg) {
  var log = document.querySelector('#log');
  log.innerHTML += msg;
  log.scrollTop = log.scrollHeight;
};

send = function(msg) {
    connection.send(msg);
    log(msg);
    read();
};

buffer = '';
read = function() {
    callback = function(result) {
        if (result.bytesRead > 0) {
            console.log(result);
            console.log(ab2str(result.data));
            buffer += ab2str(result.data);
            if (buffer.indexOf(chr(13)) > -1) {
                log(buffer);
                buffer = '';
            }
        chrome.serial.read(connection.connectionId, 100, callback);
        }
    };
    chrome.serial.read(connection.connectionId, 100, callback);
};

const x='X';
const y='Y';
const z='Z';

goto = function(axis, value) {
    send('G00 '+axis+value+'\n');
};

/*
 * Bind button event handlers
 */
$('#btnToolUp').click(function() {
    goto(z, '0');
});

$('#btnToolDown').click(function() {
    goto(z, '1');
});

$('#btnGoX').click(function() {
    goto(x, $('#x').val());
});

$('#btnGoY').click(function() {
    goto(y, $('#y').val());
});

/*
 * SVG cursor
 */
$('#canvas').append('<circle id=cursor x=10 y=20 r=5 stroke=black fill=blue>');
$('svg').html( $('svg').html() );
 
/*
 * Serial port connection
 */
var onGetDevices = function(ports) {
    for (var i=0; i<ports.length; i++) {
        $('#device').append('<option>'+ports[i]+'</option>\n');
    }
}
chrome.serial.getPorts(onGetDevices);

var connection = new SerialConnection();

connection.onConnect = function() {
    log('Serial port opened: ' + DEVICE_PATH);
};

connection.onReadLine.addListener(function(line) {
    log(line);
});

$('#btnConnect').click(function() {
    connection.connect( $('#device').val()  );
    });

