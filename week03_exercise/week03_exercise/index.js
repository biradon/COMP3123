var http = require('http');
//TODO - Use Employee Module here
var employees = require('./Employee');
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to Lab Exercise 03</h1>')
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify(employees, null, "  "));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.writeHead(200, {'Content-Type': 'application/json'});
            sorted_employees = employees.sort((a, b) => a.firstName.localeCompare(b.lastName))
            const fullNames = sorted_employees.map(employee => `${employee.firstName} ${employee.lastName}`);
            const result = JSON.stringify(fullNames);
            res.write(result)
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.writeHead(200, {'Content-Type': 'application/json'});
            let result = 0
            employees.map(employee => {
                let salary = employee.Salary
                result += salary;
            })
            var final_result = {"total_salary": result}
            res.write(JSON.stringify(final_result))
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})