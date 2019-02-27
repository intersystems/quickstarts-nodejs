# Quickstart-nodejs
This code shows how to interact Node.js application with InterSytems IRIS. It is required for the Node.js quickstart which can be found here: [https://learning.intersystems.com/course/view.php?name=Node.js%20QS](https://learning.intersystems.com/course/view.php?name=Node.js%20QS)

# Contents:
All the sample code located inside the **Solutions** folder.

* `nodeplaystocksTask1.js`: Store test data directly to InterSystems IRIS Data Platform
* `nodeplaystocksTask2.js`: Store stock data directly to InterSystems IRIS Data Platform using a custom structure.
* `nodeplaystocksTask3.js`: Retrieve stock data directly from InterSystems IRIS
* `nodeplaystocksTask4.js`: Generate trade data with methods from InterSystems IRIS
* `connections.config`: contain connection details, including `ip`, `port`, `namespace`, `username`, `password`.
* `all_stocks.csv`: contain 1000 stock data from New York Stock Exchange

# How to run:

1.  Verify you have an [<span class="urlformat">instance of InterSystems IRIS</span>](https://learning.intersystems.com/course/view.php?name=Get%20InterSystems%20IRIS), and an IDE that supports Node.js (such as **Visual Studio Code**). If you are using AWS, Azure, or GCP, that you have followed the steps to [change the password for InterSystems IRIS](https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=ACLOUD#ACLOUD_interact).

2.  If you are using AWS, GCP, or Microsoft Azure, load the sample stock data into InterSystems IRIS:  
    `$ iris load http://github.com/intersystems/Samples-Stock-Data`  

    If you are using InterSystems Labs, the sample stock data is already loaded. You can skip to the next step.
    
3. Clone the repo and open it in your IDE.
4. In your IDE:

    * Open `connections.config` file and modify the *IP* and *password* to be the correct values for your InterSystems IRIS instance. Although *port* and *username* are most likely the defaults, you should verify that the values are correct.

5. In the Terminal of your IDE:
    * Navigate to the sample code directory:
        * `cd Solutions`

    * Install the necessary modules:

        * `npm install --save intersystems-iris-native` 
        * `npm install readline-sync`
        * `npm install file-system`

6. To run a file, type: `node filename.js`, in which, replace `filename.js` with the name of the file you want to run.

Detailed instructions are included on the QuickStart page: [https://learning.intersystems.com/course/view.php?name=Node.js%20QS](https://learning.intersystems.com/course/view.php?name=Node.js%20QS)
