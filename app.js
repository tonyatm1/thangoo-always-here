const messages = [
  "Innaiku nee strong-aa irukkanum nu yaarum sollala. Just breathe. One step at a time. Naan un kooda dhaan irukken. Eppovume. Bayapadatha. ❤️",

  "Sometimes life doesn't give answers immediately. Konjam time kudu. Un heart-ku rest venum. Everything doesn't have to be solved today. 🌙",

  "Nee sirikka marandha naal irundhaalum parava illa. Oru naal thirumba genuine-aa sirippa. Andha naal varum. 🌸",

  "Ayyappan unnai paathuttu irukkaru nu ninaichuko. Unakku puriyadha vazhiyil kooda oru protection irukkalam. Bayapadatha. Swami Saranam. 🕉️",

  "Krishnar Arjunan kitta battlefield-la irundhu pesina maadhiri, un life battlefield-la nee thaniya illa. Calm-aa iru. Next step mattum paaru. 🪷",

  "Baahubali-ku kooda every battle easy-aa irukkala. Aana avan ninna illa. Neevum konjam konjam-aa move aagu. 👑",

  "Maaveeran style-la sollanum-na, bayam vandhaalum kaal pinnaadi pogakoodadhu. Konjam slow-aa po. Aana po. 🔥",

  "Unakku ippo motivation venama irukkalam. Seri. Motivation-a vida konjam peace mukkiyam. Innaiku just peaceful-aa iru. 🤍",

  "Breaking news: Nee overthink pannradhu-ku government innum tax podala. So konjam reduce pannalaam. 😂❤️",

  "Un mind: 'Everything is complicated.'\nAlso your mind at 2 AM: 'Let's remember something from 2019.' 😂",

  "Oru bad day vandha, adhu bad life nu artham illa. Calendar-la oru page dhaan. 📖",

  "Sometimes miracle means problem disappearing. Sometimes miracle means namma heart slowly becoming peaceful. ✨",

  "Morning-la first thought heavy-aa irundhaalum, entire day appadiye irukkanum nu rule illa. New page open pannalaam. 🌅",

  "Nee ellarukkum strong-aa theriyanum nu avasiyam illa. Unmaiya nee nee-aa irundha podhum. ❤️",

  "Ayyappan kitta oru simple request: 'Avalukku konjam peace kudunga.' Avlo dhaan. Swami Saranam. 🙏",

  "Indha phase permanent illa. Idhu oru chapter. Story innum mudiyala. 📖✨",

  "Un heart tired-aa irundha, konjam rest kudu. Healing-ku speed limit illa. 🌷",

  "Innaiku edhuvum prove panna thevai illa. Nee irukkaradhe enough for today. 🤍",

  "Sometimes silence is not loneliness. Sometimes silence is the heart repairing itself. 🌙",

  "Nee azhanumna azhu. Sirikkanumna sirichu. Feelings-ku attendance register thevai illa. ❤️",

  "Ayyappan unnai oru child maadhiri paathuttu, 'Bayapadatha, naan irukken' nu sollraru-nu imagine panniko. 🕉️",

  "Krishna advice version: Ellathayum control panna try pannadha. Unakku mudinja part-ai sincere-aa sei. Rest-ai konjam life-kitta vittudu. 🪷",

  "One day you'll look back and realise, 'Naan survive pannitten.' And that itself will mean something. ✨",

  "Comedy department: Heartbreak-ku medicine illaamale doctor aagitta namma friends. 😂",

  "Nee overthink pannumbodhu brain-ku oru small reminder: 'Madam, office close pannunga. Naalaiku reopen pannalaam.' 😂",

  "Some mornings are bright. Some mornings are just surviving. Both count. 🌅",

  "Unakku ippo answer kidaikkala-na parava illa. Every question-ku immediate answer varadhu. ⏳",

  "Ayyappan vazhi sometimes straight road illa. Aana every step-ku meaning irukkum. Swami Saranam. 🙏",

  "Nee thaniya fight panra maadhiri feel aanaalum, un pakkathula care panra people irukkanga. Naanum un kooda dhaan irukken. ❤️",

  "Baahubali lesson: strength-na sword mattum illa. Sometimes strength-na heart break aana pinnadiyum kind-aa irukkaradhu. 👑",

  "Maaveeran mode: 'Naan mudiyadhu' nu mind sonna, 'One more step' nu nee sollu. 🔥",

  "Miracles don't always arrive with fireworks. Sometimes they quietly arrive as one peaceful morning. ✨",

  "Innaiku unakku permission: Don't be perfect. Don't be strong. Just be yourself. 🌸",

  "If your heart needs time, give it time. Clock-ku healing schedule theriyadhu. 🤍",

  "One day, something unexpected will make you smile again. Maybe small. Maybe huge. But it'll happen. 🌷",

  "Ayyappan unnai protect panna oru invisible umbrella pudichuttu irukkaru-nu imagine panniko. Rain vandhaalum nadakkalaam. 🕉️☔",

  "Krishna-style reminder: Past-ai change panna mudiyadhu. Aana next page-ai nee ezhudhalaam. 📖",

  "2 AM thought: 'Why did I remember that?'\nBrain: 'Because apparently sleep is optional.' 😂",

  "Nee weak illa. Nee human. Rendum different. ❤️",

  "Some people enter our lives as lessons. Some as memories. Some stay. Time dhaan answer sollum. 🌙",

  "Unakku edhuvum force panna vendam. Heart-ku space kudu. 🌸",

  "Ayyappan kitta naan solluven: 'Aval romba yosikkara. Konjam mind-ku peace kudunga.' Swami Saranam. 🙏",

  "Every sunrise doesn't fix everything. But every sunrise gives another chance. 🌅",

  "You don't need to know where life is going. Just don't stop living today. ❤️",

  "Baahubali moment: Storm vandhaalum kingdom close panna maatanga. Neevum un life-a close panna vendam. 👑",

  "Maaveeran reminder: Courage-na fear illama irukkaradhu illa. Fear irundhaalum step edukkardhu. 🔥",

  "Today might feel ordinary. Sometimes ordinary days are where healing quietly happens. ✨",

  "Smile konjam compulsory illa. Aana coffee optional illa. 😂☕",

  "Your heart deserves gentleness, especially from yourself. 🤍",

  "Ayyappan path-la slow steps kooda steps dhaan. Nee slow-aa ponaalum parava illa. 🕉️",

  "Krishna would probably say: Don't carry tomorrow's battle today. Innaiku unakku today mattum dhaan. 🪷",

  "Naan un kooda dhaan irukken. Eppovume. Bayapadatha. ❤️"
];

let availableMessages = [];

function resetMessagePool() {
  availableMessages = messages.map(function (_, index) {
    return index;
  });
}

resetMessagePool();

function nextMessage() {
  if (availableMessages.length === 0) {
    resetMessagePool();
  }

  const randomPosition = Math.floor(
    Math.random() * availableMessages.length
  );

  const messageIndex = availableMessages.splice(
    randomPosition,
    1
  )[0];

  const messageBox = document.getElementById("messageText");

  if (messageBox) {
    messageBox.innerText = messages[messageIndex];
  }
}

function showToday() {
  document.getElementById("todaySection").style.display = "block";
  document.getElementById("akashSection").style.display = "none";

  document.getElementById("todayTab").classList.add("active");
  document.getElementById("akashTab").classList.remove("active");

  nextMessage();
}

function showAkash() {
  document.getElementById("todaySection").style.display = "none";
  document.getElementById("akashSection").style.display = "block";

  document.getElementById("todayTab").classList.remove("active");
  document.getElementById("akashTab").classList.add("active");
}

function openSite() {
  const welcome = document.getElementById("welcome");
  const home = document.getElementById("home");

  if (welcome) {
    welcome.style.display = "none";
  }

  if (home) {
    home.style.display = "block";
  }

  showToday();
}

document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("nextButton");

  if (nextButton) {
    nextButton.addEventListener("click", nextMessage);
  }

  const todayTab = document.getElementById("todayTab");

  if (todayTab) {
    todayTab.addEventListener("click", showToday);
  }

  const akashTab = document.getElementById("akashTab");

  if (akashTab) {
    akashTab.addEventListener("click", showAkash);
  }
});
