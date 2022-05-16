const time = ['Dawn', '9 AM', '10 AM', '11 AM', 'Noon', '2 PM', '4 PM', '6 PM', '6 PM', '8 PM', 'Dusk', '10 PM', 'Midnight'];
const effect = ['the sky will rain fire.', 'your deepest dreams will be fulfilled', 'your doom approaches', 'alliances will be forged', 'your Duchess will need you',
'you will be filled with positive vibes', 'your love will find you', 'an isekai will transpire', 'a great fortune other than money will fall to you',
'the fate of one whose company you enjoy will be in jeopardy', 'ultimate power will be bestowed upon you', 'someone\'s pants shall be torn asunder'
];
const contingent = [ 'you sacrifice a freshly hatched tadpole.', 'you ingest a freshly harvested onion from atop Mt. Zeroni.', 'you align 25 small stones into a perfectly square 5x5 grid.',
'make a blood pact with a friend (perhaps the same one).', 'you must cast the ring into the fires of Mt. Doom!', 'you crack the code and hack into the system.',
'you compose a heart felt piece of music about the one you love.', 'you bake a perfect souffle.', 'you defeat an opponent clad in the attire of darkest night.',
'create a potion made of the fermented fruit loved by the one YOU love.', 'a statue is erected of your dearest friend defeating your mortal enemy.',
'you write a 5 paragraph essay on the topic.'];
const choice = [', unless', ', if'];

let randStart = Math.floor(Math.random()*12);
let randMid = Math.floor(Math.random()*12);
let randEnd = Math.floor(Math.random()*12);
let randChoice = Math.floor(Math.random()*2);
let startWord = time[randStart];
let midWord = effect[randMid];
let choiceWord = choice[randChoice];
let endWord = contingent[randEnd];
let randSent = `At ${startWord}, ${midWord}${choiceWord} ${endWord}`;
console.log(randSent);