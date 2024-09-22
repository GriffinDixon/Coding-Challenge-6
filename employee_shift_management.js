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

// Example usage:
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

// Example usage:
assignShift('David', 'Thursday', 5); // Should assign the shift
