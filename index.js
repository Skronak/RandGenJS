import "./styles.css";

document.getElementById("app").innerHTML = `
<div>
  <button onClick="generate()">Generate</button>
</div>
`;

const DICTIONNARY = {
  FEELINGS: ["angry", "hungry", "happy", "depressed", "sad"],
  FEELINGS_PASS: [
    "being angry",
    "being hungry",
    "happyness",
    "depression",
    "sadness"
  ],
  SUBJECT: [
    "world",
    "beggar",
    "dummy",
    "smart one",
    "sage",
    "philosopher",
    "last of the family"
  ],
  NOUNS: ["poverty", "wealth", "contradiction", "stupidity"],
  NOUNS_POWER: ["nature", "life", "universe"],
  AJD: ["biggest", "lowest", "dummest"],
  ADJ_COMPARE: ["bigger", "similar", "different", "smaller", "dummer"],
  VERBS: [
    "drive a car",
    "do what we want",
    "ride a horse",
    "pet a dog",
    "feed you family",
    ""
  ]
};

const SENTENCES = [
  "Choose one ${SUBJECT} and you won't have to ${VERBS} for the rest of your life",
  "The feeling of ${FEELINGS_PASS} is the ${AJD} source of ${NOUNS}",
  "In life, we don't always ${VERBS} but we must never forget to ${VERBS}",
  "Even the ${SUBJECT} can be ${FEELINGS}",
  "${NOUNS_POWER} has made people ${ADJ_COMPARE}, but ${NOUNS_POWER} made them ${ADJ_COMPARE}"
];

window.generate = function () {
  let sentence = SENTENCES[Math.floor(Math.random() * SENTENCES.length)];
  let matches = sentence.match(/\${\w*}/g);

  matches.forEach((m) => {
    let vv = m;
    vv = vv.replace("${", "");
    vv = vv.replace("}", "");
    console.log(vv);
    sentence = sentence.replace(m, DICTIONNARY[vv][Math.floor(Math.random() * DICTIONNARY[vv].length)]);
  });

  document.querySelector(".result").innerHTML = sentence;
};
