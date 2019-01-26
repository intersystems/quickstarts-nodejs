# Quickstart-nodejs
This code shows how to interact Node.js application with InterSytems IRIS. It is required for the Node.js quickstart which can be found here: [https://learning.intersystems.com/course/view.php?name=Nodejs%20QS](https://learning.intersystems.com/course/view.php?name=Nodejs%20QS)

# Contents:
All the sample code located inside the **Solutions** folder.

* `nodeplaystocksTask1.js`: Store test data directly to InterSystems IRIS Data Platform
* `nodeplaystocksTask2.js`: Store stock data directly to InterSystems IRIS Data Platform using a custom structure.
* `nodeplaystocksTask3.js`: Retrieve stock data directly from InterSystems IRIS
* `nodeplaystocksTask4.js`: Generate trade data with methods from InterSystems IRIS
* `connections.config`: contain connection details, including `ip`, `port`, `namespace`, `username`, `password`.
* `all_stocks.csv`: contain 1000 stock data from New York Stock Exchange

# How to run:

1. Clone the repo and open it in your IDE.
2. `cd Solutions`
3. To install necessary modules:

    * `npm install --save intersystems-iris-native` 
    * `npm install readline-sync`
    * `npm install file-system`

4. To run a file, type: `node filename.js`

Detailed instructions are included on the QuickStart page: [https://learning.intersystems.com/course/view.php?name=Nodejs%20QS](https://learning.intersystems.com/course/view.php?name=Nodejs%20QS)