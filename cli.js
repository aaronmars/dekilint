var exec = require('child_process').execFile;
module.exports = {
    lint: function(args) {
        var file = args[2];
        var linterBin = '/Users/aaronmars/dev/mindtouch/dev/Deki/web/bin/mtcp.exe';
        exec('mono', [
            linterBin,
            'dekiscriptlint',
            '-f', file
        ], {}, function(err, stdout) {
            console.log(stdout);
        });
    }
};
