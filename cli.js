var childProcess = require("child_process"),
    path = require("path");

module.exports = {
    lint: function(options) {
        var linterPath = null,
            exportsCommand = process.env.SHELL + " -lc export";
        childProcess.exec(exportsCommand, function(error, stdout) {
            stdout.trim().split("\n").forEach(function(definition) {
                var def = definition.split("=", 2);
                if (def[0] === "MINDTOUCH_MTCPEXE_PATH") {
                    linterPath = def[1];
                }
            });
            console.error("Linter Path = " + linterPath);
            var linterBin = path.join(linterPath, "mtcp.exe");
            childProcess.execFile("mono", [
                linterBin,
                "dekiscriptlint",
                "-f", options.dekiFile
            ], {}, function(err, stdout) {
                console.log(stdout);
            });
        });
    }
};
