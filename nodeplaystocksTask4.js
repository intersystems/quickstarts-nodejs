/*
* PURPOSE: Store stock data directly to InterSystems IRIS Data Platform using a custom structure and generate trade data
*   with methods from InterSystems IRIS.
* 
* NOTES: When running,
* 1. Choose option 2 to store stock data natively.
* 2. Choose option 3 to retrieve stock data natively.
* 3. Choose option 4 to generate trades with random data using methods from InterSystems IRIS.
*/

const irisnative = require('intersystems-iris-native')
const readline = require('readline-sync');
const fs = require('fs');

// Helper method: Get connection details from config file
function GetConnections(filename){
    var connections = {};
    var array = fs.readFileSync(filename).toString().split("\n");
    
    // Remove all spaces and split line based on colon
    for(i in array) {
        var details = array[i].replace(/\s/g, '').split(":")
        connections[details[0]] = details[1]
    }
    return connections;
}

function main()
{
    // Get connection details from connections.config
    var connections = GetConnections("connections.config");

    // Retrieve connection information from configuration file
    var ip = connections["ip"];
    var port = connections["port"];
    var namespace = connections["namespace"];
    var username = connections["username"];
    var password = connections["password"];

    // Create connection to InterSystems IRIS
    const connection = irisnative.createConnection({host: ip, port: port, ns: namespace, user: username, pwd: password})
    
    // Create InterSystems IRIS native object
    const iris = connection.createIris()
    console.log("Connected to InterSystems IRIS")

    // Starting interactive prompt
    while(true)
    {
        console.log("1. Test");
        console.log("2. Store Stock Data");
        console.log("3. View stock data");
        console.log("4. Generate Trades");
        console.log("5. Call routines");
        console.log("6. Quit");
        var selection = readline.question("What would you like to do? ")
        switch(selection){
            case "1":
                SetTestGlobal(iris)
                break;
            case "2":
                StoreStockData(iris);
                break;
            case "3":
                ViewStockData(iris);
                break;
            case "4":
                PopulateData(iris, 10);
                break;
            case "5":
                console.log("TO DO: Call routines");
                break;
            case "6":
                console.log("Exited");
                return;
            default:
                console.log("Invalid option. Try again!");
                break;
        }

    }
}

// Write to a test global
function SetTestGlobal(irisNative)
	{
		irisNative.set(8888, "^testglobal", "1");
		globalValue = irisNative.get("^testglobal", "1");
		console.log("The value of ^testglobal(1) is " + globalValue);
    }

// Store stock data directly into InterSystems IRIS
function StoreStockData(irisNative){
    // Clear global from previous runs
    irisNative.kill("^nyse");
    
    console.log("Storing stock data using Native API...");

    // Get all stock data from all_stocks.csv file into a list
    var array = fs.readFileSync('all_stocks.csv').toString().split("\n");

    // Get start time
    var start = Date.now()/1000;

    // Loop through list of stock and store natively
    for (var j = 1; j < array.length; j++){
        irisNative.set(array[j], "^nyse", j);
    }

    // Get time consuming
    var end = Date.now()/1000;
    var totalConsume = (end - start).toFixed(4);
    console.log("Stored natively successfully. Execution time: " + totalConsume + "ms");
}

// Iterate over all nodes and print
function ViewStockData(irisNative)
	{
        // Create iterator
		var iter = irisNative.iterator("^nyse");
        console.log("Walk forwards");

        // Iterate over all nodes
        for ([key, value] of iter){
            console.log("subscript = " + key + ", value = " + value);
        }

    }

// To generate the list of trades with methods from InterSystems IRIS    
function PopulateData(irisNative, object_count)
	{
        // Loop through list of trade to generate data for each trade
		for(var i = 0; i < object_count; i++){
            tempDate = "2018-01-01";
            tempAmount = irisNative.classMethodValue("%PopulateUtils", "Currency");
            tempName = 	irisNative.classMethodValue("%PopulateUtils", "String") + 
                        irisNative.classMethodValue("%PopulateUtils", "String") + 
                        irisNative.classMethodValue("%PopulateUtils", "String");
            tempTrader = irisNative.classMethodValue("%PopulateUtils", "Name");
            tempShares = Math.floor(Math.random() * 10);
            console.log("New trade: " + tempName + ", " + tempDate + ", " + tempAmount + ", " + tempShares + ", " + tempTrader);
        }
    }
    
main()