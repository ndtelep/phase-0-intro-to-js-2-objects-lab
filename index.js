const employee = {
    name: "Jason",
    streetAddress: "DU Station",
}
function updateEmployeeWithKeyAndValue (employee, position, leftWinger) {
    const newEmployee = { ...employee }
    newEmployee[position] = leftWinger
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, position, leftWinger) {
    const newEmployee = employee
    newEmployee[position] = leftWinger
    return newEmployee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee}
    delete newEmployee.name
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newEmployee = employee
    delete newEmployee.name
    return newEmployee
}