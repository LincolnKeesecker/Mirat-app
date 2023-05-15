# Mirat

## Introduction

Mirat is a way to streamline communications between Mirat as a distributor and customers that resell bottles of Mirat Rum. Users can create purchase orders and manage those orders with amounts and sizes of bottles ordered. Those orders are then approved or denied based on an employees interaction.

## Installation

1. Download and install the latest version of node.js from nodejs.org.
2. Clone the repository to your local machine.
3. Clone the companion JSON server repository to your local machine from [Mirat](https://github.com/LincolnKeesecker/mirat)
4. Open a terminal window and navigate to the server directory.
5. Run the server using the command 
```bash
json-server database.json -p 8088 -w
```
6. leave it running as long as the app is active. It can be closed with Ctrl+c.
Open a second new terminal and navigate to the project directory.
7. Install the dependencies by running the command
```bash
npm install
```
8. Start the app using the command 'npm start'
9. A new browser window with the app will open. It can be closed with the following command in the terminal.

```bash
Ctrl+c
```

## Using the App

1. Run the app and server as directed in the previous section. Click "Create A New Account". Enter a name, email, and password and click register.
2. Click the "Order" button at the top of the page
3. Click the "New Purchase Order" button to create a new purchase order request
4. Select the quantity and the size of bottle needed


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.