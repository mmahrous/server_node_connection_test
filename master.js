// this script for the managment server the master
var express = require('express'),
	app = express(),
	request = require('request'),
	nodeport = [5471, 5472], // contain the node ports but in the future should contain unique name 
	nodes = [];
app.get('/nodes', function(req, res) {
	function nodeRequests(i){
		if (i == nodeport.length) { //send the result
			res.json(JSON.stringify(nodes));
		}else{
			request.get('http://localhost:'+nodeport[i]+'/who', "utf8",function (error, response, body) {
		 		if (!error && response.statusCode == 200) {
			    	nodes.push(body);
				}
			})

			i++
			nodeRequests(i); // recursive
		}
	}
	nodeRequests(0); // start the loop
});
app.post('/wines/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(3000);
console.log('Listening on port 3000...');