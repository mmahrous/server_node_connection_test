// this is the script for the node
var express = require('express'),
	app = express(),
	os = require("os"),
	sys = require('util'),
	exec = require('child_process').exec;

// send the basic information about the node machine
app.get('/who', function(req, res) {
	console.log("who");
    res.send({platform: os.platform(), hostname: os.hostname(), uptime: os.uptime(), loadAvrage: os.loadavg(), cpus: os.cpus(), totalmemory: os.totalmem(), freememory: os.freemem(), network: os.networkInterfaces()});
    res.end();
});
// run a basic shellscript
app.get('/docker/run/:image', function(req, res) {
	function puts(error, stdout, stderr) { 
		res.send(stdout);	
	}
	exec("sh ./docker.sh " + req.params.image, puts);
});

app.listen(5472);
console.log('Listening on port 5471...');