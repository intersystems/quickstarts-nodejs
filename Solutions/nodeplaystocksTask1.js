/*
* PURPOSE: Store test data directly to InterSystems IRIS Data Platform.
*
* NOTES: When running, choose option 1 to store and retrieve test data. The test global should be 8888.
*/

const irisnative = require('intersystems-iris-native')
const readline = require('readline-sync');
const fs = require("fs");

// Helper method: Get connection details from config file
function GetConnections(filename){
    var connections = {};
    var array = fs.readFileSync(filename).toString().split("\n");
    
    for(i in array) {
        // Remove all spaces and split line based on colon
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
        console.log("2. Store stock data");
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
                console.log("TO DO: Store stock data");
                break;
            case "3":
                console.log("TO DO: View stock data");
                break;
            case "4":
                console.log("TO DO: Generate trades");
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
    
main()