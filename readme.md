# Two sperated applications talk to each other using API
This a test for my graduation project which we will need a master server to contact nodes
> you will need nodejs to run this application you can check http://nodejs.org/ for more information.
run
```
node master.js
```
it will be up on port 3000
than up the nodes
```
node node.js
```
it will be up on port 5471
```
node node2.js
```
it will be up on port 5472

use Postman(https://www.getpostman.com/) or your browser to get http://localhost:3000/nodes the response will be array of the nodes that contain every node information (CPU, hostname, totalmem, etc..)