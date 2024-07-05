function formatNumber(num) {
    if (num >= 1.0e9) {
        return (num / 1.0e9).toFixed(3) + "B";
    }
    if (num >= 1.0e6) {
        return (num / 1.0e6).toFixed(3) + "M";
    }
    if (num >= 1.0e3) {
        return (num / 1.0e3).toFixed(3) + "K";
    }
    return num.toString();
}

let outputPage = "```yaml\n";
const currentDate = new Date();
const referenceDate = new Date("1970-01-01T00:00:00Z");

const timeDifference = currentDate.getTime() - referenceDate.getTime();
const absoluteDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

const startDay = 19907;

const daysSinceStartDay = absoluteDay - startDay + 1;

const startDayDateString = new Date(startDay * 1000 * 60 * 60 * 24)
    .toISOString()
    .split("T")[0];

outputPage += `Start Day: "${startDayDateString}"\n`;
outputPage += `Current Day: "${currentDate.toISOString().split("T")[0]}"\n`;
outputPage += `Days Since Start Day: ${daysSinceStartDay}\n`;

outputPage += "```\n";

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
- [ ] 🧘‍♀️ (${workoutCount * 2}s) Plank 

`;

outputPage += `### Pullup Count: ${pullupCount}
- [ ] 🙉 (${pullupCount}x) Pullups

`;

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
let currentSteps = startSteps + stepIncrementPerDay * daysSinceStartDay;

// To calculate lifetime steps we need to add up all the days since start day taking into account the increments
let totalLifetimeSteps = 0;
for (let i = 1; i <= daysSinceStartDay; i++) {
    const stepsToAdd = startSteps + stepIncrementPerDay * i;
    totalLifetimeSteps += stepsToAdd;
}
outputPage += `### Daily Walking Statistics:
- [ ] 🏃‍➡️ (${currentSteps}) Today's Steps
- [ ] 🏃‍♀️ (${formatNumber(totalLifetimeSteps)}) Total Lifetime Steps

`;
const learningDailes = [
    "General Keyboard Shortcuts","Learning Plan","Learning Plan","Obsidian Improvements","Learning Plan","Learning Plan","Learning Plan",
    "General Keyboard Shortcuts","Learning Plan","Learning Plan","Obsidian Improvements","Learning Plan","Obsidian Improvements","Learning Plan",
    "General Keyboard Shortcuts","Learning Plan","Learning Plan","Obsidian Improvements","Learning Plan","Learning Plan","Learning Plan",
    "General Keyboard Shortcuts","Learning Plan","Learning Plan","Obsidian Improvements","Learning Plan","Obsidian Improvements","Obsidian Improvements",
    "General Keyboard Shortcuts","Learning Plan","Learning Plan"
]

const currentDayOfMonth = currentDate.getDate();

const learningItem = learningDailes[currentDayOfMonth - 1];

const dailySchedule = `---

7am - 8am
- Learning ${learningItem}

---

8am - 8:20am
- 20m
    - [ ] Put Bed away (5m)
    - [ ] New Clothes (4m)
    - [ ] Wash Hands (2m)
    - [ ] Cup of Caffeine + Salt Water (2m)
    - [ ] Brush Teeth (2m)
    - [ ] Batch Clothes + Blankey into Washing Machine (5m)

---

8:20am - 12:20pm
- [ ] Freelancing Work

---

12:20pm - 13:00pm
- [ ] 20m - Running (${currentSteps} steps) 👆
- [ ] 10m - 300 Calories
- [ ] 10m - ${daysSinceStartDay % 2 == 0 ? "🫧 Mop Floor" : "🧹 Sweep Floor"}

---

1pm - 1:30pm
- 10m
    - [ ] Cold Shower (3m)
    - [ ] Clothes (3m)
    - [ ] Hair (1m)
    - [ ] Deodorant (1m)
    - [ ] Nose + Ears (1m)
    - [ ] Spray (1m)
- 10m
    - [ ] Clean Phone (2m)
    - [ ] Clean Laptop (3m)
    - [ ] Clean Keyboard (2m)
    - [ ] Clean Table (3m)
- [ ] 10m - Do things to drive

---

1:30pm - 2:30pm
- 1h
    - [ ] Read English (5m)
    - [ ] Read Afrikaans (5m)
    - [ ] Duolingo (5m)
    - [ ] Meditate (10m)
    - [ ] Touchtype (10m)
    - [ ] Workout (10m)
    - [ ] Brain Dumping (5m)
    - [ ] Learn new Word (5m)
    - [ ] Measure Weight (2m)
    - [ ] Claim Sweat + Sweatcoin (3m)

---

2:30pm - 4:30pm
- [ ] 2h - Automa

---

4:30pm - 5:30pm
- [ ] 1h - Learning ${learningItem}

---

5:30pm - 6:30pm
- [ ] 30m - Food
- [ ] 10m - Cold Shower
- [ ] 10m - Wash walls
- [ ] 10m - Prep Meeting

---

6:30pm - 7:00pm
- [ ] 30m - Meeting

---

7:00pm - 8:00pm
- [ ] Content Creation

---

8:00pm - 11:30pm
- [ ] 3.5h Freelancing Work
- [ ] 10m Make Bed

---

`;

outputPage += dailySchedule;

// Next day Planning List
outputPage += `### Next Day Planning
This is applicable from around **11:30pm - 12:00am**, the planning will prepare us fully for the next day!
- [ ] 🙏 20 Minutes - Plan out Hourly work tasks
- [ ] 🍺 2 Minutes - Prepare next day caffeine (4tbsp)
- [ ] 🧂 2 Minutes - Prepare next day salt water (1tbsp)
- [ ] 🦷 2 Minutes - Brush Teeth + Tongue + Mouth Palete
- [ ] 🙆 2 Minutes - Prepare next day clothes
    - [ ] 1️⃣ Pair =====================
    - [ ] 🎩 Hat
    - [ ] 👔 Shirt
    - [ ] 🧥 Jacket
    - [ ] 🧦 + 🧤 + 🧣 + 🩳 Accessories
    - [ ] 👖 Trousers
    - [ ] 👟 Shoes
    - [ ] 2️⃣ Pair =====================
    - [ ] 👕 + 🩳 Pajamas
    - [ ] 3️⃣ Pair =====================
    - [ ] 🎩 Hat
    - [ ] 👔 Shirt
    - [ ] 🧥 Jacket
    - [ ] 🧦 + 🧤 + 🧣 + 🩳 Accessories
    - [ ] 👖 Trousers
    - [ ] 👟 Shoes

`;

const actionToday = isTriangularNumber(daysSinceStartDay);
if (actionToday) {
    outputPage += `### F/ Today is the day:
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
`;
}

console.log(outputPage);
outputPage;
