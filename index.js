// Code your solution here
function findMatching(allDrivers, query){
    return allDrivers.filter(driver =>
        driver.toLowerCase() === query.toLowerCase()
      );
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const matchingDrivers = findMatching(drivers, "Sammy");
console.log(matchingDrivers);

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  const matchedDrivers = fuzzyMatch(drivers, "Sa");
console.log(matchedDrivers);

function matchName(drivers, query) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  }
  const sameDrivers = matchName(drivers, "Bobby");
console.log(sameDrivers);