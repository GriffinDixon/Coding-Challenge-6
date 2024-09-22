// Task 1: Create an Employees Array of Employee Objects
const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }];
console.log(employees);

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`Employee Name: ${employee.name}`);
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours Worked: ${shift.hours}`);
    });}

// Example:
employees.forEach(displayEmployeeShifts);

// Task 3: Create a Function to Assign a New Shift
function assignShift(employeeName, day, hours) {
    const employee = employees.find(emp => emp.name === employeeName);
    
    if (!employee) {
        console.log(`Error: Employee ${employeeName} not found.`);
        return;}

    const existingShift = employee.shifts.find(shift => shift.day === day);
    
    if (existingShift) {
        console.log(`Error: ${employeeName} is already assigned a shift on ${day}.`);
    } else {
        employee.shifts.push({ day, hours });
        console.log(`Shift assigned: ${employeeName} now works ${hours} hours on ${day}.`);
    }}

// Example:
assignShift('David', 'Thursday', 5); // Should assign the shift

// Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName) {
    const employee = employees.find(emp => emp.name === employeeName);
    
    if (!employee) {
        console.log(`Error: Employee ${employeeName} not found.`);
        return;}

    const totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
    
    console.log(`${employeeName} has worked a total of ${totalHours} hours this week.`);
    return totalHours;}

// Example:
calculateTotalHours('John'); // Should log the total hours worked by John

// Task 5: Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
    console.log(`Employees available on ${day}:`);
    const availableEmployees = employees.filter(employee => 
        !employee.shifts.some(shift => shift.day === day)
    );

    if (availableEmployees.length === 0) {
        console.log(`No employees are available on ${day}.`);
    } else {
        availableEmployees.forEach(employee => {
            console.log(employee.name);
        });}}

// Example:
listAvailableEmployees('Monday'); // Should list employees not working on Monday

