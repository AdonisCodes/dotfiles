function formatNumber(num) {
    if (num >= 1.0e+9) {
        return (num / 1.0e+9).toFixed(3) + "B";
    }
    if (num >= 1.0e+6) {
        return (num / 1.0e+6).toFixed(3) + "M";
    }
    if (num >= 1.0e+3) {
        return (num / 1.0e+3).toFixed(3) + "K";
    }
    return num.toString();
}

let outputPage = "```yaml\n";
const currentDate = new Date();
const referenceDate = new Date("1970-01-01T00:00:00Z");

const timeDifference = currentDate.getTime() - referenceDate.getTime();
const absoluteDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

const startDay = 19907;

const daysSinceStartDay = absoluteDay - startDay;

const startDayDateString = new Date(startDay * 1000 * 60 * 60 * 24).toISOString().split("T")[0]

outputPage += `Start Day: "${startDayDateString}"\n`
outputPage += `Current Day: "${currentDate.toISOString().split("T")[0]}"\n`
outputPage += `Days Since Start Day: ${daysSinceStartDay}\n`

outputPage += "```\n"


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
  outputPage += `<details>
  <summary>F/ Today is the day:</summary>

### F/ Today is the day:
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
- [ ] 💨 5 Minutes
- [ ] 🐢 1 Minute
</details>

`;
}

// Workout Count should work like this:
// Days from start / 2
// Pullup Count should work like this:
// Days from start / 20
const workoutCount = Math.ceil(daysSinceStartDay / 2);
const pullupCount = Math.ceil(daysSinceStartDay / 20);

outputPage += `### Workout Count: ${workoutCount}
- [ ] 🪵 (${workoutCount}x) Push-ups 
- [ ] 🧎‍♂️ (${workoutCount}x) Sit-ups 
- [ ] 💪 (${workoutCount}x) Squats 
- [ ] 🏋️ (${workoutCount}x) Burpees 
- [ ] 🧘‍♀️ (${workoutCount*2}s) Plank 

`

outputPage += `### Pullup Count: ${pullupCount}
- [ ] 🙉 (${pullupCount}x) Pullups

`

// Every day we should walk 5 more steps than the previous day.
// But the app that tracks that can only go up in 100 step increments for the "Goal"
// So we will keep track of these variables
// - currentSteps
// - currentIncrementSteps
// - nextGoalSteps
// - stepsTillNextGoal
// - totalLifetimeSteps (estimated)

const startSteps = 5100;
const stepIncrementPerDay = 5;
let currentSteps = startSteps + (stepIncrementPerDay * daysSinceStartDay);

// To calculate lifetime steps we need to add up all the days since start day taking into account the increments
let totalLifetimeSteps = 0;
for (let i = 1; i <= daysSinceStartDay; i++) {
  const stepsToAdd = startSteps + (stepIncrementPerDay * i)
  totalLifetimeSteps += stepsToAdd;
}
outputPage += `### Daily Walking Statistics:
- [ ] 🏃‍➡️ (${currentSteps}) Today's Steps
- [ ] 🏃‍♀️ (${formatNumber(totalLifetimeSteps)}) Total Lifetime Steps

`

console.log(outputPage);
outputPage;
