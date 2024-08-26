# Quickstart-nodejs
This code shows how to use a Node.js application with an InterSytems server. It is used in the online exercise [<span class="urlformat">Node.js quickstart</span>](https://learning.intersystems.com/course/view.php?name=Node.js%20QS).

# Contents
* `connections.config`: contain connection details, including `ip`, `port`, `namespace`, `username`, `password`.
* `all_stocks.csv`: contain 1000 stock data from New York Stock Exchange

* `nodeplaystocksTask1.js`: Store test data directly to InterSystems server
* `nodeplaystocksTask2.js`: Store stock data directly to InterSystems server using a custom structure.
* `nodeplaystocksTask3.js`: Retrieve stock data directly from InterSystems server
* `nodeplaystocksTask4.js`: Generate trade data with methods from InterSystems server
* `nodeplaystocksTask5.js`: Call routine directly to print the version of InterSystems server

# Requirements
* Instance of [<span class="urlformat">InterSystems IRIS</span>](https://learning.intersystems.com/course/view.php?name=Get%20InterSystems%20IRIS) or another InterSystems server
* an IDE that supports Node.js (such as **Visual Studio Code**)
* Install the necessary node modules:
    * readline-sync (use npm to install)
    * file-system (use npm to install)
    * intersystems-iris-native (find in *iris-install-dir*/dev/nodejs/)

# How to run
1. Clone this repo.
2. Install the node module requirements, listed above. Install them either globally on your system or locally within this repo. To get the intersystems-iris-native module from a containerized InterSystems server, use a *docker cp* command to copy the intersystems-iris-native directory from /usr/irissys/dev/nodejs/ out of the container into your repo.
3. In your IDE, open the file`connections.config`. Modify the *IP*, *port*, *username*, and *password* for your InterSystems server.
5. In a terminal, run the sample code. To run a file, type: `node filename.js`, replacing `filename.js` with the name of the file you want to run.