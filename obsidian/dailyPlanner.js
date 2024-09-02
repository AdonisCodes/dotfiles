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
  return num.toFixed(3).toString();
}

let outputPage = `---
banner: https://picsum.photos/1000/300
---

`;

outputPage += "```yaml\n"
const currentDate = new Date();
const todayDayCount = currentDate.getDay();
const currentDateString = `${currentDate.toISOString().split("T")[0]}`
const referenceDate = new Date("1970-01-01T00:00:00Z");
const tomorrow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
const tomorrowString = `${tomorrow.toISOString().split("T")[0]}`

const timeDifference = currentDate.getTime() - referenceDate.getTime();
const absoluteDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

const startDay = 19967;

const daysSinceStartDay = absoluteDay - startDay;

const startDayDateString = new Date(startDay * 1000 * 60 * 60 * 24)
  .toISOString()
  .split("T")[0];

outputPage += `Start Day: "${startDayDateString}"\n`;
outputPage += `Current Day: "${currentDateString}"\n`;
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
const workoutCount = Math.ceil(daysSinceStartDay / 10);
const pullupCount = Math.ceil(daysSinceStartDay / 20);

outputPage += `### Workout Count: ${workoutCount}
- [ ] 🪵 (${workoutCount}x) Push-ups 
- [ ] 🧎‍♂️ (${workoutCount}x) Sit-ups 
- [ ] 💪 (${workoutCount}x) Squats 
- [ ] 🏋️ (${workoutCount}x) Burpees 
- [ ] 🧘‍♀️ (${workoutCount * 2}s) Plank 
- [ ] 🏋️ (${pullupCount}) Dumbell Curls

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
  "AstroNvim Shortcuts Practice",
  "Learning Plan",
  "Learning Plan",
  "Obsidian Improvements",
  "Learning Plan",
  "Learning Plan",
  "Learning Plan",
  "Yabia / SKHD Shortcuts Mastering",
  "Learning Plan",
  "Learning Plan",
  "Obsidian Improvements",
  "Learning Plan",
  "Obsidian Improvements",
  "Learning Plan",
  "Macos Apps Keyboard Shortcuts",
  "Learning Plan",
  "Learning Plan",
  "Obsidian Improvements",
  "Learning Plan",
  "Learning Plan",
  "Learning Plan",
  "AstroNvim Shortcuts Practice",
  "Learning Plan",
  "Learning Plan",
  "Obsidian Improvements",
  "Learning Plan",
  "Obsidian Improvements",
  "Obsidian Improvements",
  "Yabai / SKHD Shortcuts Mastering",
  "Learning Plan",
  "Macos Apps Keybord Shortcuts",
];

const currentDayOfMonth = currentDate.getDate();

const learningItem = learningDailes[currentDayOfMonth - 1];

const sleep = (seconds) => {
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while (waitTill > new Date()) { }
};

const randomPomodoroBreakTasks = [
  "🚶‍♂️‍➡️ Walk around (5m)",
  "🚶‍♂️‍➡️ Walk outside (5m)",
  "🚶‍♂️‍➡️ Walk outside (5m)",
  "🚶‍♂️‍➡️ Walk outside (5m)",
  "🚶‍♂️‍➡️ Walk outside (5m)",
  "🧘 Meditate (5m)",
  "📚 Read a book (5m)",
  "📖 Write a blog post (5m)",
  "🫧 Clean area (5m)",
  "🏋️ 10 Push-ups, Sit-ups, Squats (5m)",
  "📷 Watch a video (5m)",
  "📝 Journaling (5m)",
  "📷 Take & Annotate Images (5m)",
  `📗 Learn new Word (5m) [[New Words/${tomorrowString}]]`,
  `📗 Learn new Word (5m) [[New Words/${tomorrowString}]]`,
  `📗 Learn new Word (5m) [[New Words/${tomorrowString}]]`,
  "🧽 Hands / Nose Cleaning",
  "🧽 Hands / Nose Cleaning",
  "🧽 Hands / Nose Cleaning",
  "🧽 Hands / Nose Cleaning",
  "🥃 Drink glass of water"
];

const pomodoroTaskMaker = (amountOfHours, pomodoroHourRate = 1) => {
  const totalPomodoros = Math.floor(amountOfHours * pomodoroHourRate);
  let pomodoroTasks = "";
  for (let i = 0; i < totalPomodoros; i++) {
    let randomTask =
      randomPomodoroBreakTasks[
      Math.floor(Math.random() * randomPomodoroBreakTasks.length)
      ];
    pomodoroTasks += `- [ ] ${randomTask}\n`;
    sleep(0.01);
  }

  return pomodoroTasks;
};

const dailySchedule = `---

**7am - 8am**
- [ ] Learning ${learningItem} [[Learning]]

---

**8am - 8:20am**
- 20m
  - [ ] Put Bed away + Open Curtains (5m)
  - [ ] New Clothes (4m)
  - [ ] Wash Hands (2m)
  - [ ] Cup of Caffeine + Salt Water (2m)
  - [ ] Brush Teeth (2m)
  - [ ] Batch Clothes + Blankey into Washing Machine (5m)

---

**8:20am - 12:20pm**
- [ ] Freelancing Work

**🍅 Pomodoro Tasks:**
- [ ] 0️⃣ Walk around (5m)
- [ ] 1️⃣ Clothes out of machine + Hang (5m)
- [ ] 2️⃣ Cup of Caffeine + Salt Water (5m)
- [ ] 6️⃣ Blanket into Washing (5m)

---

**12:20pm - 13:00pm**
- [ ] 20m - Running (${currentSteps} steps) [[#Daily Walking Statistics]]
- [ ] 10m - 300 Calories
- [ ] 10m - ${daysSinceStartDay % 2 == 0 ? "🫧 Mop Floor" : "🧹 Sweep Floor"}

---

**1pm - 1:30pm**
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

**1:30pm - 3:00pm**
- 1h
  - [ ] (${formatNumber((daysSinceStartDay * 5) / 60)}H) Read English (5m) 
  - [ ] (${formatNumber((daysSinceStartDay * 5) / 60)}H) Read Afrikaans (5m)
  - [ ] (${formatNumber((daysSinceStartDay * 5) / 60)}H) Duolingo (5m)
  - [ ] (${formatNumber((daysSinceStartDay * 10) / 60)}H) Meditate (10m)
  - [ ] (${formatNumber((daysSinceStartDay * 10) / 60)}H) Touchtype (10m)
  - [ ] Workout (10m) [[#Workout Count: ${workoutCount}]]
  - [ ] Brain Dumping (5m) [[Brain Dumps/${tomorrowString}]]
  - [ ] Learn new Word (5m) [[New Words/${tomorrowString}]]
  - [ ] Measure Weight (2m)
  - [ ] Claim Sweat + Sweatcoin (3m)
  - [ ] Visualization [[Goals-Index]] & [[Visualization/${tomorrowString}]] (10m)
  - [ ] DC Programming Chat (CR) (10m)
  - [ ] Buffer - Easy Method to ensure all habits get completedd (10m)

---

**3:00pm - 4:30pm**
- [ ] 2h - Automa

**🍅 Pomodoro Tasks:**
${pomodoroTaskMaker(1)}- [ ] 🥛 Glass of water
---

**4:30pm - 5:30pm**
- [ ] 1h - Learning ${learningItem} [[Learning]]

**🍅 Pomodoro Tasks:**
${pomodoroTaskMaker(0.5)}- [ ] 🥛 Glass of water
---

**5:30pm - 6:30pm**
- [ ] 30m - Food
- [ ] 20m - Cold Shower
- [ ] 10m - Wash Walls

---

**6:30pm - 7:00pm**
- [ ] Freelance Work Tasks

---

**7:00pm - 8:00pm**
- [ ] Content Creation

**🍅 Pomodoro Tasks:**
- [ ] 🥛 Glass of water
- [ ] 🥛 Glass of water
---

**8:00pm - 11:30pm**
- [ ] 3.5h Freelancing Work

**🍅 Pomodoro Tasks:**
- [ ] 🥛 Glass of water
${pomodoroTaskMaker(2.5)}- [ ] 🛏️ Make Bed (5m)

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
  outputPage += `### M/ Learning (1H):
- [ ] ⇉ Complete Tasks

### F/ Today is the day (1H):
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

### G/ Winning is the way (1H):
- [ ] 🎹 Complete Tasks

### MV/ Easily Composition (3H):
- [ ] 🐳 Complete Tasks

### L/ Motivational Content (1H):
- [ ] 🤞 Lets get clean!
`;
}






const newOutputPage = `

### Workout Count: ${workoutCount}
- [ ] 🪵 (${workoutCount}x) Push-ups 
- [ ] 🧎 (${workoutCount}x) Sit-ups 
- [ ] 💪 (${workoutCount}x) Squats 
- [ ] 🏋️ (${workoutCount}x) Burpees 
- [ ] 🧘 (${workoutCount * 2}s) Plank 
- [ ] 🏋️ (${pullupCount}) Dumbell Curls
- [ ] 🙉 (${pullupCount}x) Pullups

**8:00 AM - 8:30 AM**
- [ ] Put bed away (3m)
- [ ] New clothes (5m)
- [ ] salt + steep Caffè (5m)
- [ ] Brush teeth (2m)
- [ ] Wash hands (2m)
- [ ] Clothes into washing machine (3m)
- [ ] Walk outside (10m)

**8:30 AM - 12:30 PM**
- [ ] Freelance tasks 1 (4h)

**12:30 PM - 1:00 PM**
- [ ] Sweeping (10m)
- [ ] Mop or walls (10m)
- [ ] Desk/PC (10m)

**1:00 PM - 1:30 PM**
- [ ] Bath (15m)
- [ ] Deo (5m)
- [ ] Hair (3m)
- [ ] Teeth + Hands (3m)
- [ ] Prep Drive gear (9m)

**1:35 PM - 2:30 PM** 
  - [ ] (${formatNumber((daysSinceStartDay * 10) / 60)}H) Reading (10m)
  - [ ] (${formatNumber((daysSinceStartDay * 10) / 60)}H) Meditate (10m)
  - [ ] (${formatNumber((daysSinceStartDay * 10) / 60)}H) Duolingo (10m)
  - [ ] (${formatNumber((daysSinceStartDay * 10) / 60)}H) Touchtype (10m)
  - [ ] Workout (10m) [[#Workout Count: ${workoutCount}]]
  - [ ] Brain Dumping (5m) [[Brain Dumps/${tomorrowString}]]
  - [ ] Measure Weight (2m)
  - [ ] Claim Sweat + Sweatcoin (3m)

**2:30 PM - 4:30 PM**
- [ ] Swift Learning (odd+1) | Productivity (1 ev) | Management (1 ev)


**4:30 PM - 5:00 PM**
- [ ] 2.1k calories (30m)

**5:00 PM - 8:00 PM**
- [ ] Automa 5 commits (3h)

**8:00 PM - 12:00 AM**
- [ ] Freelancing tasks 2 (4h)

**12:00 AM - 1:00 AM**
- [ ] Explore things (30m)
- [ ] Plan out Next Day + Task list on [[Todos]] (20m)
- [ ] Plan out Clothes for the next day (3m)
- [ ] Brush Teeth + Hands (4m)
- [ ] Make Bed + Sleep (3m)
`

console.log(newOutputPage)
