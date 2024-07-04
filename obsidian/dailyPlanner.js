let outputPage = ``;
const currentDate = new Date();
const referenceDate = new Date("1970-01-01T00:00:00Z");

const timeDifference = currentDate.getTime() - referenceDate.getTime();
const absoluteDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

const startDay = 19907;

const daysSinceStartDay = absoluteDay - startDay;

console.log("Days since start day:", daysSinceStartDay);

function isTriangularNumber(num) {
  let n = 1;
  while ((n * (n + 1)) / 2 <= num) {
    if ((n * (n + 1)) / 2 === num) {
      return true;
    }
    n++;
  }
  return false;
}

const actionToday = isTriangularNumber(daysSinceStartDay);
if (actionToday) {
  outputPage += `## Toodaloo
Practicing a hidden talent, and one that should be frowned upon!

We are tapering off, hence this won't be on every daily page, just the pages that matches the triangular numbering function!

- [ ] 10 Minutes
- [ ] 1m Break
- [ ] 10 Minutes
- [ ] 1m Break
- [ ] 10 Minutes
- [ ] 1m Break
- [ ] 10 Minutes
- [ ] 1m Break
- [ ] 10 Minutes`;
}

outputPage;
