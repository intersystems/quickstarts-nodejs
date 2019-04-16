# Quickstart-nodejs
This code shows how to interact Node.js application with InterSytems IRIS. It is required for the Node.js quickstart which can be found here: [https://learning.intersystems.com/course/view.php?name=Node.js%20QS](https://learning.intersystems.com/course/view.php?name=Node.js%20QS)

# Contents:
All the sample code located inside the **Solutions** folder.

* `nodeplaystocksTask1.js`: Store test data directly to InterSystems IRIS Data Platform
* `nodeplaystocksTask2.js`: Store stock data directly to InterSystems IRIS Data Platform using a custom structure.
* `nodeplaystocksTask3.js`: Retrieve stock data directly from InterSystems IRIS
* `nodeplaystocksTask4.js`: Generate trade data with methods from InterSystems IRIS
* `nodeplaystocksTask5.js`: Call routine directly to print the version of InterSystems IRIS
* `connections.config`: contain connection details, including `ip`, `port`, `namespace`, `username`, `password`.
* `all_stocks.csv`: contain 1000 stock data from New York Stock Exchange

# How to run:

1. Clone the repo and open it in your IDE.
2. In your IDE:

    * Open `connections.config` file and modify the *IP* and *password* to be the correct values for your InterSystems IRIS instance. Although *port* and *username* are most likely the defaults, you should verify that the values are correct.

3. In the Terminal of your IDE:
    * Navigate to the sample code directory:
        * `cd Solutions`

    * Install the necessary modules:

        * `npm install --save intersystems-iris-native` 
        * `npm install readline-sync`
        * `npm install file-system`

4. To run a file, type: `node filename.js`, in which, replace `filename.js` with the name of the file you want to run.

Detailed instructions are included on the QuickStart page: [https://learning.intersystems.com/course/view.php?name=Node.js%20QS](https://learning.intersystems.com/course/view.php?name=Node.js%20QS)