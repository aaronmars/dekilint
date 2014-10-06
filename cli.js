var exec = require("child_process").execFile,
    path = require("path");
module.exports = {
    lint: function(options) {
        var linterPath = options.mtcpExe || process.env.MINDTOUCH_MTCPEXE_PATH,
            linterBin = path.join(linterPath, "mtcp.exe");
        exec("mono", [
            linterBin,
            "dekiscriptlint",
            "-f", options.dekiFile
        ], {}, function(err, stdout) {
            console.log(stdout);
        });
    }
};
