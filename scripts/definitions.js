/**Structure Explanation:
 * Name: used for CSS classes, short name. Changes flexible.
 * id  : used for Indexing/Export code. Changes kept to minimum.
 * cat : Deprecated(never used).
 * text: In-game description.
 * Others self-explanatory.
 */
MOVES = [{
   "id": "1",
   "cat": "official",
   "name": "moveattack",
   "long": "b]mn:move/attack",
   "text": "Move or Attack.",
   "color": [0,0,0]
 }, {
   "id": "2",
   "cat": "official",
   "name": "move",
   "long": "b]mn:move",
   "text": "Move only.",
   "color": [0,0,255]
 }, {
   "id": "3",
   "cat": "official",
   "name": "attack",
   "long": "b]mn:attack",
   "text": "Attack only.",
   "color": [252,13,27]
 }, {
   "id": "4",
   "cat": "official",
   "name": "jump",
   "long": "b]mu:move/attack",
   "text": "(Unblockable) Move or Attack.",
   "color": [20,151,24]
 }, {
   "id": "5",
   "cat": "official",
   "name": "jumpswap",
   "long": "b]mu:move/attack/swap",
   "text": "(Unblockable) Move, Attack, or swap places with ally.",
   "color": [255,210,0]
 }, {
   "id": "6",
   "cat": "official",
   "name": "teleport",
   "long": "b]mu:move",
   "text": "(Unblockable) Teleport.",
   "color": [121,19,153]
 }, {
   "id": "7",
   "cat": "official",
   "name": "magic",
   "long": "b]ru:attack",
   "text": "(Magic) Destroy target.",
   "color": [253,117,34]
 }, {
   "id": "8",
   "cat": "official",
   "name": "plant",
   "long": "2p]ru:transform@SAPLING/summon@SAPLING",
   "text": "[Pay 2]: (Magic) Summon Sapling or transform enemy into ally Sapling.",
   "color": [0,101,24]
 }, {
   "id": "9",
   "cat": "official",
   "name": "charm",
   "long": "c]ru:minion?charm#set@ally",
   "text": "(Magic) Charm enemy minion.",
   "color": [255,0,255]
 }, {
   "id": "10",
   "cat": "official",
   "name": "skeleton",
   "long": "4p]ru:summon@SKELETON&set@value=0",
   "text": "[Pay 4]: (Magic) Summon value 0 Skeleton.",
   "color": [102,102,102],
   "color3": [0,0,0],
   "symbol1": "\u26e7"
 }, {
   "id": "11",
   "cat": "official",
   "name": "movestart",
   "long": "b]mn:startpos?move",
   "text": "Move from starting position.",
   "color": [11,36,251],
   "symbol1": "\u274b"
 }, {
   "id": "12",
   "cat": "official",
   "name": "poison",
   "long": "s]ru:poison#flag@3&attack",
   "text": "(Magic) Poison enemy unit, destroying them in 3 turns.",
   "color": [0,101,24],
   "symbol1": "\u00d7"
 }, {
   "id": "13",
   "cat": "official",
   "name": "freeze",
   "long": "s]ru:freeze#flag@3-move",
   "text": "(Magic) Freeze enemy unit for 3 turns, making them unable to act.",
   "color": [107,205,253],
   "symbol1": "\u00d7"
 }, {
   "id": "14",
   "cat": "official",
   "name": "petrify",
   "long": "s]rn:petrify#flag@5-move",
   "text": "(Ranged) Petrify enemy unit for 5 turns, making them unable to act.",
   "color": [94,94,94],
   "symbol1": "\u00d7"
 }, {
   "id": "15",
   "cat": "official",
   "name": "polymorph",
   "long": "c]ru:set@type=(RANDOMMINION)",
   "text": "(Magic) Polymorph target into random minion.",
   "color": [255,0,255],
   "symbol1": "\u00d7",
   "hide": true
 }, {
   "id": "16",
   "cat": "official",
   "name": "haul",
   "long": "c]ru:set@pos=(RANDOM)",
   "text": "(Magic) Teleport unit to random location.",
   "color": [102,0,102],
   "symbol1": "\ufe56",
   "hide": true
 }, {
   "id": "17",
   "cat": "official",
   "name": "teleportmasshaul",
   "long": "bc]mu:move&1(RANGE)/@set@pos=(RANDOM)",
   "text": "(Unblockable) Teleport to empty location and Mass-Teleport all adjacent units to random locations.",
   "color": [102,0,102],
   "symbol1": "\ufe56",
   "symbol2": "\u2747",
   "hide": true
 }, {
   "id": "18",
   "cat": "official",
   "name": "sorcer",
   "long": "3]",
   "text": "[Pay 3] .",
   "color": [255,0,0],
   "color2": [127,0,0],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "19",
   "cat": "official",
   "name": "enchant",
   "long": "s]ru:ally?enchant#flag@2(ENCHANT)",
   "text": "(Magic) Enchant ally, making them immune to melee death for 2 turns.",
   "color": [0,102,255],
   "color2": [0,0,0],
   "color3": [0,255,255],
   "symbol1": "\u25cb"
 }, {
   "id": "20",
   "cat": "official",
   "name": "soulkeep",
   "long": "1cp]ru:transform@GHOST",
   "text": "[Pay 1]: (Magic) Transform enemy into ally Ghost.",
   "color": [208,88,161],
   "color2": [255,255,255],
   "color3": [0,0,0],
   "symbol1": "\ue900"
 }, {
   "id": "21",
   "cat": "official",
   "name": "teleportstart",
   "long": "b]mu:startpos?move",
   "text": "(Unblockable) Teleport from starting position.",
   "color": [121,19,153],
   "symbol1": "\u274b"
 }, {
   "id": "22",
   "cat": "official",
   "name": "slime",
   "long": "pt]:meleedeath?this+move?summon@SLIME",
   "text": "(Trigger) On Melee Death: Summon ally Slime into this empty location. If this unit is Frozen or Petrified this ability cannot activate.",
   "color": [0,153,0],
   "color2": [255,255,255],
   "color3": [0,204,0],
   "symbol1": "\ue902"
 }, {
   "id": "23",
   "cat": "official",
   "name": "moon",
   "long": "pt]:meleedeath?summon@this&set@value-=12",
   "text": "(Trigger) On Melee Death: Revive into this empty location with value decreased by 12. If this unit's value is less than 12 this ability cannot activate.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u263d"
 }, {
   "id": "24",
   "cat": "official",
   "name": "jumpattackminion",
   "long": "b]mu:minion?attack",
   "text": "(Unblockable) Attack Minion.",
   "color": [138,63,63],
   "color2": [255,255,255],
   "color3": [195,63,63],
   "symbol1": "\u239a"
 }, {
   "id": "25",
   "cat": "official",
   "name": "triggerattack",
   "long": "bt]mn:start?attack",
   "text": "(Trigger) Enemy Unit: Instantly attack this target at the start of your turn.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [255,0,0],
   "symbol1": "\u25c7"
 }, {
   "id": "26",
   "cat": "official",
   "name": "abilitytarget",
   "long": "a]",
   "text": "Ability Target.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u2609"
 }, {
   "id": "27",
   "cat": "official",
   "name": "portal",
   "long": "u]:Aset@pos=\this",
   "text": "Teleport Ability Target to this empty location.",
   "color": [102,0,154],
   "color2": [255,255,255],
   "color3": [215,147,255],
   "color4": [0,0,0],
   "symbol1": "\u25cf",
   "symbol2": "\u253c",
 }, {
   "id": "28",
   "cat": "official",
   "name": "push",
   "long": "1c]rn:push#\\(mn:move@3(AWAY))",
   "text": "[Pay 1]: (Ranged) Push unit up to 3 spaces away.",
   "color": [87,218,40],
   "color2": [212,255,216],
   "color3": [0,204,0],
   "symbol1": "\u25fd"
 }, {
   "id": "29",
   "cat": "official",
   "name": "gemini",
   "long": "6cp]rn:summon@GEMINITWIN&set@tier=this&thisset@type=GEMINITWIN",
   "text": "[Pay 4]: (Ranged) Summon GeminiTwin and transform into GeminiTwin, each having value equal to this unit.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u264a"
 }, {
   "id": "30",
   "cat": "official",
   "name": "teleportking",
   "long": "cu]ru:(KING)set@pos=\this",
   "text": "(Magic) Teleport ally King to this empty location.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u25c7",
   "symbol2": "\u25fd"
 }, {
   "id": "31",
   "cat": "official",
   "name": "teleportswap",
   "long": "b]mu:move/swap",
   "text": "(Unblockable) Teleport or swap places with ally.",
   "color": [121,19,153],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}"
 }, {
   "id": "32",
   "cat": "official",
   "name": "lifestone",
   "long": "cp]ru:summon@(CAN-REVIVE)&thisattack",
   "text": "(Magic) Revive most recently fallen ally champion of value 2x this unit's value or less, and destroy this unit.",
   "color": [0,0,0],
   "color2": [58,233,93],
   "symbol1": "\uea42"
 }, {
   "id": "33",
   "cat": "official",
   "name": "heal",
   "long": "1st]:ally?status?deflag",
   "text": "[Pay 1]: (Trigger) Ally Status Effect: Instantly cure this target at the start of your turn, removing all negative status effects.",
   "color": [0,0,0],
   "color2": [58,233,93],
   "symbol1": "\uea43"
 }, {
   "id": "34",
   "cat": "official",
   "name": "necromance",
   "long": "2cp]ru:ally?type==SKELETON?transform@BONEPILE",
   "text": "[Pay 2]: (Magic) Upgrade ally Skeleton, or transform target enemy minion into ally BonePile.",
   "color": [0,0,0],
   "color2": [227,0,0],
   "symbol1": "\ue901"
 }, {
   "id": "35",
   "cat": "official",
   "name": "moveattackblock",
   "long": "bv]:block@(mn:attack)&(LOSEABILTY)/(mn:move/attack)",
   "text": "(Passive) Block one normal attack from this location, and lose this ability. \n(Active) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,255,255],
   "symbol1": "\u2219"
 }, {
   "id": "36",
   "cat": "official",
   "name": "freezeexplosion",
   "long": "st]:death?minion?freeze#flag@3-move",
   "text": "(Trigger) On Death: Freeze enemy minions in this area.",
   "color": [107,205,253],
   "symbol1": "\u25fc"
 }, {
   "id": "37",
   "cat": "official",
   "name": "freezestrike",
   "long": "bs]ru:thisattack&freeze#flag@3-move",
   "text": "(Magic) Destroy self at target location and Freeze unit for 3 turns, making them unable to act.",
   "color": [107,205,253],
   "color3": [107,205,253],
   "symbol1": "\u2738"
 }, {
   "id": "38",
   "cat": "official",
   "name": "bat",
   "long": "p]mz:thisset@type=BAT&move",
   "text": "(Unstoppable) Transform into Bat and fly to location.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\ue903"
 }, {
   "id": "39",
   "cat": "official",
   "name": "castle",
   "long": "c]:ally?!minion?swap&(MOVETOGETHER)&(LOSEABILITY)",
   "text": "Swap places with ally Champion, then move this unit and Champion together, and lose this ability.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u2656"
 }, {
   "id": "40",
   "cat": "official",
   "name": "thunder",
   "long": "1m]:flag@4&(ru:attack)",
   "text": "[Pay 1]: (Magic) After 4 turns any unit in the marked location is destroyed.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u26a1"
 }, {
   "id": "41",
   "cat": "official",
   "name": "attract",
   "long": "ct]ru:end?!ally?\\(mn:move@-1(AWAY))",
   "text": "(Magic, Trigger) Enemy Unit: Pull target 1 space in the direction of this unit at the end of your opponent's turn.",
   "color": [255,63,255],
   "color2": [255,255,255],
   "symbol1": "\u25c7"
 }, {
   "id": "42",
   "cat": "official",
   "name": "beacon",
   "long": "cu]ru:set@pos=Athis",
   "text": "(Magic) Teleport unit to Ability Target.",
   "color": [155,20,208],
   "color2": [255,255,255],
   "symbol1": "\u25ef"
 }, {
   "id": "43",
   "cat": "official",
   "name": "shoot",
   "long": "b]rn:attack",
   "text": "(Ranged) Destroy target.",
   "color": [255,0,0],
   "color2": [255,255,255],
   "symbol1": "\u2316"
 }, {
   "id": "44",
   "cat": "official",
   "name": "gravity",
   "long": "1cu]ru:\\(mn:move@A-(AWAY))",
   "text": "[Pay 1]: (Magic) Move target unit toward Ability Target.",
   "color": [0,63,255],
   "color2": [255,255,255],
   "symbol1": "\u25ef",
   "hide": true
 }, {
   "id": "45",
   "cat": "official",
   "name": "omnishield",
   "long": "bt]:ally?(CHAMPION)?targeted?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally Champion targeted by enemy ability or attack: This unit instantly swaps places with targeted champion.",
   "color": [0,0,153],
   "color2": [153,255,255],
   "symbol1": "\ue905"
 }, {
   "id": "46",
   "cat": "official",
   "name": "envy",
   "long": "c]ru:thisset@type=\this&thisset@tier=\this",
   "text": "(Magic) Transform into target enemy unit type.",
   "color": [127,192,127],
   "color2": [255,255,255],
   "color3": [0,0,0],
   "symbol1": "\u2b50"
 }, {
   "id": "47",
   "cat": "official",
   "name": "splash",
   "long": "cs]ru:push#\\(mn:move@1(AWAY))?&freeze#flag@3-move",
   "text": "(Magic) Push enemy unit 1 space away and freeze it for 2 turns.",
   "color": [0,153,255],
   "color2": [255,255,255],
   "symbol1": "\ue904"
 }, {
   "id": "48",
   "cat": "official",
   "name": "pike",
   "long": "bt]:targeted@(m*:attack)?attack",
   "text": "(Passive) On Melee Death from this location: Destroy the attacker.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [255,0,0],
   "symbol1": "\uEA5E"
 }, {
   "id": "49",
   "cat": "official",
   "name": "magicpush",
   "long": "1c]ru:push#\\(mn:move@3(AWAY))",
   "text": "[Pay 1]: (Magic) Push unit up to 3 spaces away.",
   "color": [87,218,40],
   "color2": [200,255,200],
   "symbol1": "\u25cb",
   "symbol2": "\u2742"
 }, {
   "id": "50",
   "cat": "official",
   "name": "compel",
   "long": "cs]rn:compel#flag@2(ct]start?mn:move@-1(AWAY)",
   "text": "(Ranged) Compel enemy unit, making them move in the direction of this ability at the start of their turn, for 3 turns.",
   "color": [255,63,255],
   "color2": [255,255,255],
   "symbol1": "\u2661"
 }, {
   "id": "51",
   "cat": "official",
   "name": "butterfly",
   "text": "(Unstoppable) Destroy self and mark location. After 20 turns destroy enemy unit in the marked location, enchant ally for 2 turns, or summon butterfly of equal tier if marked location is empty.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\uE906"
 }, {
   "id": "52",
   "cat": "official",
   "name": "rush",
   "text": "Rush enemy, moving towards and pushing it up to 3 spaces away from this unit and destroying the enemy if it collides with any unit or the field edge.",
   "color": [255,0,0],
   "color2": [255,255,255],
   "color3": [189,189,189],
   "color4": [0,0,0],
   "symbol1": "\u2b24",
   "symbol2": "\u25cc"
 }, {
   "id": "53",
   "cat": "official",
   "name": "jumpattack",
   "long": "b]mu:attack",
   "text": "(Unblockable) Attack only.",
   "color": [255,0,0],
   "color2": [127,0,0]
 }, {
   "id": "54",
   "cat": "official",
   "name": "stone",
   "text": "[Pay 1]: (Magic) Create StonePillar in this empty location, or petrify enemy for 4 turns, making them unable to act.",
   "color": [94,94,94],
   "color3": [59,59,59],
   "color4": [0,0,0],
   "symbol1": "\u25ae",
   "symbol2": "\u25af"
 }, {
   "id": "55",
   "cat": "official",
   "name": "meteor",
   "text": "[Pay 2]: (Magic) After 6 turns any unit in the marked location is destroyed and all adjacent units are pushed away 1 space.",
   "color": [205,85,23],
   "color3": [0,0,0],
   "symbol1": "\uea78"
 }, {
   "id": "56",
   "cat": "official",
   "name": "verticalpathmoveattack",
   "text": "(Path) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\ue702",
   "hide": true
 }, {
   "id": "57",
   "cat": "official",
   "name": "horizontalpathmoveattack",
   "text": "(Path) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\ue700",
   "hide": true
 }, {
   "id": "58",
   "cat": "official",
   "name": "antidiagonalpathmoveattack",
   "text": "(Path) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\ue701",
   "hide": true
 }, {
   "id": "59",
   "cat": "official",
   "name": "diagonalpathmoveattack",
   "text": "(Path) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\ue703",
   "hide": true
 }, {
   "id": "60",
   "cat": "official",
   "name": "chainleapmove",
   "text": "(Unblockable) Move or begin Leap-Attack chain, landing one space over the enemy and repeating consecutively in the same direction.",
   "color": [0,0,255],
   "color3": [255,0,0],
   "symbol1": "\u26AB"
 }, {
   "id": "61",
   "cat": "official",
   "name": "verticalpathattack",
   "text": "(Path) Attack only.",
   "color": [0,0,0],
   "color2": [201,45,45],
   "symbol1": "\ue702"
 }, {
   "id": "62",
   "cat": "official",
   "name": "horizontalpathattack",
   "text": "(Path) Attack only.",
   "color": [0,0,0],
   "color2": [201,45,45],
   "symbol1": "\ue700"
 }, {
   "id": "63",
   "cat": "official",
   "name": "antidiagonalpathattack",
   "text": "(Path) Attack only.",
   "color": [0,0,0],
   "color2": [201,45,45],
   "symbol1": "\ue701"
 }, {
   "id": "64",
   "cat": "official",
   "name": "diagonalpathattack",
   "text": "(Path) Attack only.",
   "color": [0,0,0],
   "color2": [201,45,45],
   "symbol1": "\ue703"
 }, {
   "id": "65",
   "cat": "official",
   "name": "null",
   "text": "(Magic) Target enemy can no longer block movement and their value becomes 0.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\ue907"
 }, {
   "id": "66",
   "cat": "official",
   "name": "void",
   "text": "[Pay 2]: (Ranged) Convert target enemy moveset into move/teleport abilities, negate their augments, and increase their value by 2.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\uea81"
 }, {
   "id": "67",
   "cat": "official",
   "name": "gravitywell",
   "text": "[Pay 2]: (Magic) Create gravity well at target location, pulling in all units that are directly 2 spaces away.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [77,29,95],
   "symbol1": "\uea81"
 }, {
   "id": "68",
   "cat": "official",
   "name": "omniswap",
   "long": "b]mu:move/*ally?swap",
   "text": "(Unblockable) Teleport or swap places with unit.",
   "color": [51,153,153],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}"
 }, {
   "id": "0a",
   "cat": "variation",
   "name": "swap",
   "long": "b]mu:swap",
   "text": "(Unblockable) Swap places with ally.",
   "color": [127,127,127],
   "color2": [255,255,255],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "0b",
   "cat": "variation",
   "name": "swapenemy",
   "long": "b]mu:!ally?swap",
   "text": "(Unblockable) Swap places with enemy.",
   "color": [127,0,59],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "0c",
   "cat": "variation",
   "name": "swapall",
   "long": "b]mu:*ally?swap",
   "text": "(Unblockable) Swap places with unit.",
   "color": [127,105,0],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "9a",
   "cat": "variation",
   "name": "charmall",
   "long": "c]ru:*minion?charm#set@ally",
   "text": "(Magic) Charm enemy unit.",
   "color": [255,0,255],
   "symbol1": "\ufe62",
   "hide": true
 }, {
   "id": "15a",
   "cat": "variation",
   "name": "polymorphall",
   "long": "c]ru:set@type=(RANDOM)",
   "text": "(Magic) Polymorph target into random unit.",
   "color": [255,0,255],
   "symbol1": "\ufe62",
   "symbol2": "\u00d7",
   "hide": true
 }, {
   "id": "18a",
   "cat": "variation",
   "name": "protosorcerattack",
   "long": "3cs]ru:sorcerize#flag@2(2(RANGE)/@+(mu:attack))",
   "text": "[Pay 3]: (Magic) Sorcerize enemy unit, making them prone to melee attack from any caster's ally piece in Range 2, for 2 turns.",
   "color": [255,0,0],
   "color2": [0,0,0],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "18b",
   "cat": "variation",
   "name": "protosorcerdeimmune",
   "long": "2s]:sorcerize#flag@2(LOSEIMMUNE)",
   "text": "[Pay 2]: Sorcerize enemy unit, making them lose any immunity for 2 turns.",
   "color": [0,178,255],
   "color2": [0,64,127],
   "color3": [0,255,255],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "18c",
   "cat": "variation",
   "name": "protosorcerenchant",
   "long": "2cs]ru:sorcerize#flag@2(t]:death?enchant#flag@2(ENCHANT))",
   "text": "[Pay 2]: (Magic) Sorcerize enemy unit, making them enchant attacker on Death in 2 turns.",
   "color": [0,178,255],
   "color2": [0,0,0],
   "color3": [0,255,255],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "18d",
   "cat": "variation",
   "name": "protosorcerdetarget",
   "long": "s]ru:sorcerize#flag@3-target",
   "text": "(Magic) Sorcerize enemy unit, making them unable to target units for 3 turns.",
   "color": [0,178,255],
   "color2": [0,0,0],
   "color3": [0,255,255],
   "symbol1": "\u00d7",
   "hide": true
 }, {
   "id": "19a",
   "cat": "variation",
   "name": "magicenchant",
   "long": "s]ru:ally?enchant#flag@2(ENCHANT)@(r*:attack)",
   "text": "(Magic) Enchant ally, making them immune to Magic and Ranged attacks for 2 turns.",
   "color": [255,102,0],
   "color2": [0,0,0],
   "color3": [255,178,0],
   "symbol1": "\u25cb",
   "hide": true
 }, {
   "id": "19b",
   "cat": "variation",
   "name": "omnienchant",
   "long": "3s]ru:ally?enchant#flag@2(ENCHANT)@(**:attack)",
   "text": "[Pay 3]: (Magic) Enchant ally, making them immune to enemy abilities or attacks for 2 turns.",
   "color": [208,208,127],
   "color2": [0,0,0],
   "color3": [255,255,255],
   "symbol1": "\u25cb",
   "hide": true
 }, {
   "id": "25a",
   "cat": "variation",
   "name": "burn",
   "long": "bt]ru:start?attack",
   "text": "(Magic, Trigger) Enemy Unit: Instantly destroy this target at the start of your turn.",
   "color": [253,117,34],
   "color3": [127,59,17],
   "symbol1": "\uea15",
   "hide": true
 }, {
   "id": "25b",
   "cat": "variation",
   "name": "frostburn",
   "long": "st]ru:start?attack#flag@1-move",
   "text": "(Magic, Trigger) Enemy Unit: Instantly freeze this target for 1 turn at the start of your turn.",
   "color": [107,205,253],
   "color3": [59,108,127],
   "symbol1": "\uea21",
   "hide": true
 }, {
   "id": "27a",
   "cat": "variation",
   "name": "swapportal",
   "long": "pu]ru:A\\swap",
   "text": "(Magic) Target Unit is swapped with Ability Target.",
   "color": [155,20,208],
   "color2": [255,255,255],
   "color4": [0,0,0],
   "symbol1": "\u2609",
   "symbol2": "\u{1f5d8}",
   "hide": true
 }, {
    "id": "27b",
    "cat": "legacy",
    "name": "magicportal",
    "long": "pu]ru:Aset@pos=\\this",
    "text": "(Magic) Ability Target is teleported to this empty location.",
    "color": [155,20,208],
    "color2": [255,255,255],
    "symbol1": "\u2609",
    "hide": true
 }, {
   "id": "49a",
   "cat": "variation",
   "name": "magicpull",
   "long": "1c]ru:pull#\\(mn:move@-3(AWAY))",
   "text": "[Pay 1]: (Magic) Pull unit up to 3 spaces towards caster.",
   "color": [155,20,208],
   "color2": [220,200,255],
   "symbol1": "\u25cb",
   "symbol2": "\u2742",
   "hide": true
 }, {
   "id": "31a",
   "cat": "variation",
   "name": "moveswap",
   "long": "b]mn:move/swap",
   "text": "Move or swap places with ally.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "34a",
   "cat": "legacy",
   "name": "downgradenecromance",
   "long": "1cp]ru:ally?type==SKELETON?set@tier+=1/minion?(set@tier-=1/tier==0?attack)",
   "text": "[Pay 1]: (Magic) Upgrade ally Skeleton, Downgrade enemy minion, or destroy enemy Tier-1 minion.",
   "color": [0,0,0],
   "color2": [227,227,0],
   "symbol1": "\ue901",
   "hide": true
 }, {
   "id": "34b",
   "cat": "legacy",
   "name": "destroynecromance",
   "long": "2cp]ru:ally?type==SKELETON?set@tier+=1/attack",
   "text": "[Pay 2]: (Magic) Upgrade ally Skeleton, or destroy enemy minion.",
   "color": [0,0,0],
   "color2": [227,113,0],
   "symbol1": "\ue901",
   "hide": true
 }, {
   "id": "35a",
   "cat": "variation",
   "name": "moveblock",
   "long": "bv]:block@(mn:attack)&(LOSEABILTY)/(mn:move)",
   "text": "(Passive) Block one melee attack from this location, and lose this ability. \n(Active) Move only.",
   "color": [0,0,255],
   "color3": [255,255,255],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "35b",
   "cat": "variation",
   "name": "rangedblock",
   "long": "bv]:block@(rn:attack)&(LOSEABILTY)/(mn:move/attack)",
   "text": "(Passive) Block one ranged destroy from this location, and lose this ability. \n(Active) Move or Attack.",
   "color": [0,0,0],
   "color3": [127,255,127],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "37a",
   "cat": "variation",
   "name": "explosion",
   "long": "bt]:death?minion?attack",
   "text": "(Trigger) On Death: Destroy enemy minions in trigger area.",
   "color": [255,102,0],
   "symbol1": "\u25fc",
   "hide": true
 }, {
   "id": "41a",
   "cat": "variation",
   "name": "unattract",
   "long": "ct]ru:end?!ally?\\(mn:move@1(AWAY))",
   "text": "(Magic, Trigger) Enemy Unit: At the end of your opponent's turn, target moves 1 space away from this unit.",
   "color": [63,127,63],
   "color2": [255,255,255],
   "symbol1": "\u25c7",
   "hide": true
 }, {
   "id": "43a",
   "cat": "variation",
   "name": "beaconally",
   "long": "cu]ru:set@pos=Athis",
   "text": "(Magic) Teleport ally to Ability Target.",
   "color": [155,20,208],
   "color2": [255,255,255],
   "symbol1": "\u25ef",
   "symbol2": "o" /*25e6*/,
   "hide": true
 }, {
   "id": "44a",
   "cat": "variation",
   "name": "antigravity",
   "long": "1cu]ru:\\(mn:Amove@\this)",
   "text": "[Pay 1]: (Magic) Ability Target is moved to this unblocked empty space.",
   "color": [0,63,255],
   "color2": [255,255,255],
   "symbol1": "\u25cc",
   "hide": true
 }, {
   "id": "44b",
   "cat": "legacy",
   "name": "gravityfreeze",
   "long": "1cu]ru:\\(mn:move@A-(AWAY))&freeze#flag@3-move",
   "text": "[Pay 2]: (Magic) Move target unit in the direction of Ability Target until blocked or Ability Target is reached, then freeze target for 1 turn.",
   "color": [0,127,255],
   "color2": [255,255,255],
   "symbol1": "\u25ef",
   "hide": true
 }, {
   "id": "45a",
   "cat": "variation",
   "name": "meleeshieldall",
   "long": "bt]:ally?targeted@(mn:attack)?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally unit targeted by enemy normal attack: this unit instantly swaps places with targeted unit.",
   "color": [153,0,0],
   "color2": [255,158,153],
   "symbol1": "\ue905",
   "symbol2": "\ufe62",
   "hide": true
 }, {
   "id": "45b",
   "cat": "variation",
   "name": "spellshieldall",
   "long": "bt]:ally?targeted@(r*:*)?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally unit targeted by enemy Magic or Ranged ability: this unit instantly swaps places with targeted unit.",
   "color": [153,78,0],
   "color2": [255,255,153],
   "symbol1": "\ue905",
   "symbol2": "\ufe62",
   "hide": true
 }, {
   "id": "45c",
   "cat": "variation",
   "name": "omnishieldall",
   "long": "bt]:ally?targeted?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally unit targeted by enemy ability or attack: this unit instantly swaps places with targeted unit.",
   "color": [0,0,153],
   "color2": [153,255,255],
   "symbol1": "\ue905",
   "symbol2": "\ufe62",
   "hide": true
 }, {
   "id": "45d",
   "cat": "legacy",
   "name": "spellshield",
   "long": "bt]:ally?(CHAMPION)?targeted@(r*:*)?+move?this+move?(mu:swap)",
   "text": "(Trigger) Ally Champion targeted by enemy Magic or Ranged ability: this unit instantly swaps places with targeted champion.",
   "color": [153,78,0],
   "color2": [255,255,153],
   "symbol1": "\ue905",
   "hide": true
 }, {
   "id": "48a",
   "cat": "variation",
   "name": "wisp",
   "long": "t]:targeted:(REFLECT)",
   "text": "(Passive) On Target from this location: Reflect ability.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [255,0,0],
   "symbol1": "\uEA14",
   "hide": true
 }, {
   "id": "60a",
   "cat": "variation",
   "name": "chainleap",
   "text": "(Unblockable) Begin Leap-Attack chain, landing one space over the enemy and repeating consecutively in the same direction.",
   "color": [127,127,127],
   "color2": [255,255,255],
   "color3": [255,0,0],
   "symbol1": "\u26AB",
   "hide": true
 }, {
    "id": "60b",
    "cat": "legacy",
    "name": "leapmove",
    "text": "Move or Leap-Attack.",
    "color": [0,0,255],
    "color3": [255,0,0],
    "symbol1": "o",
    "hide": true
 }, {
   "id": "60c",
   "cat": "variation",
   "name": "leap",
   "text": "Leap-Attack only.",
   "color": [127,127,127],
   "color2": [255,255,255],
   "color3": [255,0,0],
   "symbol1": "o",
   "hide": true
 }, {
    "id": "60d",
    "cat": "variation",
    "name": "leapmoveattack",
    "text": "Move or Leap-Attack, or Attack if Leap-Attack isn't possible.",
    "color": [0,0,0],
    "color3": [255,0,0],
    "symbol1": "o",
    "hide": true
  }, {
    "id": "60e",
    "cat": "variation",
    "name": "chainleapmoveattack",
    "text": "(Unblockable) Move or Begin Leap-Attack chain, landing one space over the enemy and repeating consecutively in the same direction; or Attack if Leap-Attack isn't possible.",
    "color": [0,0,0],
    "color3": [255,0,0],
    "symbol1": "\u26AB",
    "hide": true
 }, {
   "id": "61a",
   "cat": "variation",
   "name": "verticalpathmove",
   "text": "(Path) Move only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue702",
   "hide": true
 }, {
   "id": "62a",
   "cat": "variation",
   "name": "horizontalpathmove",
   "text": "(Path) Move only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue700",
   "hide": true
 }, {
   "id": "63a",
   "cat": "variation",
   "name": "antidiagonalpathmove",
   "text": "(Path) Move only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue701",
   "hide": true
 }, {
   "id": "64a",
   "cat": "variation",
   "name": "diagonalpathmove",
   "text": "(Path) Move only.",
   "color": [0,0,255],
   "color3": [0,0,0],
   "symbol1": "\ue703",
   "hide": true
  }, {
   "id": "65a",
   "cat": "legacy",
   "name": "zero",
   "text": "(Magic) Target enemy value becomes 0.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [153,153,153],
   "symbol1": "\ue907",
   "hide": true
 }, {
   "id": "66a",
   "cat": "legacy",
   "name": "magicvoid",
   "text": "(Magic) Convert target enemy default moveset into basic move/teleport abilities, and negate their augments, if any.",
   "color": [255,255,255],
   "color2": [0,0,0],
   "symbol1": "\uea81",
   "hide": true
 }, {
   "id": "66b",
   "cat": "legacy",
   "name": "valuelessvoid",
   "text": "[Pay 2]: (Ranged) Convert target enemy default moveset into basic move/teleport abilities, and negate their augments, if any.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [153,153,153],
   "symbol1": "\uea81",
   "hide": true
 }, {
   "id": "a1",
   "cat": "adoption",
   "name": "flirt",
   "long": "cs]ru:flag@3&charm#set@ally",
   "text": "(Magic) Flirt with enemy minion, charming them in 3 turns.",
   "color": [255,0,255],
   "symbol1": "\u2665",
   "hide": true
 }, {
   "id": "a2",
   "cat": "adoption",
   "name": "mutualpoison",
   "long": "s]ru:(thispoison#flag@3&attack)&poison#flag@3&attack",
   "text": "(Magic) Poison self and enemy unit, destroying them in 3 turns.",
   "color": [0,101,24],
   "symbol1": "\uea27",
   "hide": true
 }, {
   "id": "a3",
   "cat": "adoption",
   "name": "levitate",
   "long": "s]ru:flag@2-((mn:attack)/\\mn:attack)",
   "text": "(Magic) Levitate unit for 2 turns, making them unable to use or be targeted by normal Attacks.",
   "color": [121,19,153],
   "color3": [255,255,0],
   "symbol1": "\u028c",
   "hide": true
 }, {
   "id": "a4",
   "cat": "adoption",
   "name": "notarget",
   "long": "v]:-\\**:*",
   "text": "(Passive) Can't be targeted from this location.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\u2300",
   "hide": true
 }, {
   "id": "a5",
   "cat": "adoption",
   "name": "replaceabilitytarget",
   "long": "m]:(REPLACEABILITYTARGET)",
   "text": "Remove this unit's other Ability Targets, then this location becomes this unit's Ability Target.",
   "color": [0,0,0],
   "color2": [127,127,255],
   "symbol1": "\u2609",
   "hide": true
 }, {
   "id": "a6",
   "cat": "adoption",
   "name": "jumpallymoveattack",
   "long": "b]m(ALLYUNBLOCKABLE)n:move/attack",
   "text": "Move or Attack. Cannot be blocked by Ally units.",
   "color": [0,0,0],
   "symbol1": "\u25e0",
   "symbol2": "o" /*25e6*/,
   "hide": true
 }, {
   "id": "a7",
   "cat": "adoption",
   "name": "demote",
   "long": "3c]ru:set@type=(DEMOTION)",
   "text": "[Pay 3]: (Magic) Demote enemy champion, transforming them into their minion counterpart, if possible.",
   "color": [255,0,0],
   "color2": [241,241,140],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "a8",
   "cat": "adoption",
   "name": "backtech",
   "long": "1cs]ru:flag@3(t](\targeted)?mn:move@1(TOHOME))",
   "text": "[Pay 1]: (Magic) Back-tech unit, making them move 1 square in the opposite direction of target after targeting enemy for 3 turns.",
   "color": [127,127,191],
   "color3": [64,64,95],
   "symbol1": "\u25cc",
   "hide": true
 }, {
   "id": "55a",
   "cat": "limbo",
   "name": "destroysplash",
   "long": "1c]ru:attack&1(RANGE)\\Amove@1(AWAY))",
   "text": "[Pay 3]: (Magic) Destroy target and push adjacent enemy units 1 space away.",
   "color": [0,101,24],
   "color2": [255,255,255],
   "symbol1": "\u2747",
   "hide": true
 }, {  
   "id": "1a",
   "cat": "variation",
   "name": "moveattackswap",
   "long": "b]mn:move/attack/swap",
   "text": "Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color3": [255,255,255],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "53a",
   "cat": "variation",
   "name": "jumpattackswap",
   "long": "b]mu:attack/swap",
   "text": "(Unblockable) Attack or swap places with ally.",
   "color": [255,0,0],
   "color2": [127,0,0],
   "color3": [255,255,255],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "53b",
   "cat": "variation",
   "name": "attackswap",
   "long": "b]mn:attack/swap",
   "text": "Attack or swap places with ally.",
   "color": [252,13,27],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "0d",
   "cat": "variation",
   "name": "blockableswap",
   "long": "b]mn:swap",
   "text": "Swap places with ally.",
   "color": [127,127,127],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "31c",
   "cat": "variation",
   "name": "blockableomniswap",
   "long": "b]mn:move/*ally?swap",
   "text": "Move or swap places with unit.",
   "color": [51,51,153],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "0e",
   "cat": "variation",
   "name": "teleportswapenemy",
   "long": "b]mu:move/!ally?swap",
   "text": "(Unblockable) Teleport or swap places with enemy.",
   "color": [255,0,100],
   "color3": [0,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "18e",
   "cat": "limbo",
   "name": "actualsorcer",
   "long": "3b]ru:attack",
   "text": "[Pay 3]: (Magic) Destroy target.",
   "color": [255,0,0],
   "color2": [255,255,255],
   "symbol1": "\uffec",
   "hide": true
 }, {
   "id": "37b",
   "cat": "variation",
   "name": "earthstrike",
   "text": "(Magic) Destroy self at target location, and Create StonePillar in this empty location or Petrify unit for 4 turns, making them unable to act.",
   "color": [94,94,94],
   "color3": [59,59,59],
   "symbol1": "\u2738",
   "hide": true
 }, {
    "id": "43b",
    "cat": "variation",
    "name": "rangedbeacon",
    "long": "cu]rn:set@pos=Athis",
    "text": "(Ranged) Teleport unit to Ability Target.",
    "color": [155,20,208],
    "color2": [255,255,255],
    "symbol1": "\u2316",
    "hide": true
 }, {
   "id": "50a",
   "cat": "variation",
   "name": "reversecompel",
   "long": "cs]rn:compel#flag@2(ct]start?mn:move@1(AWAY)",
   "text": "(Ranged) Compel enemy unit, making them move away from the direction of this ability at the start of their turn, for 3 turns.",
   "color": [0,127,0],
   "color2": [255,255,255],
   "symbol1": "\u{ffad2}",
   "hide": true
 }, {
    "id": "52a",
    "cat": "variation",
    "name": "arcanerush",
    "long": "c]mu:(RUSH)",
    "text": "(Unblockable) Rush enemy, pushing it up to 3 spaces away from this unit and destroying the enemy if it collides with any unit or the field edge.",
    "color": [255,0,0],
    "color2": [200,200,200],
    "color3": [0,0,0],
    "color4": [0,0,0],
    "symbol1": "\u25cb",
    "symbol2": "\u2742",
    "hide": true
 }, {
   "id": "65b",
   "cat": "variation",
   "name": "nullany",
   "text": "(Magic) Target unit can no longer block movement and their value becomes 0.",
   "color": [0,0,0],
   "color2": [255,255,0],
   "symbol1": "\ue907",
   "hide": true
 }, {
   "id": "67a",
   "cat": "variation",
   "name": "antigravitywell",
   "text": "[Pay 2]: (Magic) Create antigravity well at target location, pushing away all units that are directly 2 spaces away 1 space away.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color3": [0,204,0],
   "symbol1": "\uea81",
   "hide": true
 }, {
    "id": "4a",
    "cat": "limbo",
    "name": "superjump",
    "long": "b]mz:move/attack",
    "text": "(Unstoppable) Move or Attack.",
    "color": [200,151,24],
    "hide": true
 }, {
    "id": "6a",
    "cat": "limbo",
    "name": "fly",
    "long": "b]mz:move",
    "text": "(Unstoppable) Fly.",
    "color": [0,255,200],
    "hide": true
 }, {
    "id": "53c",
    "cat": "limbo",
    "name": "superjumpattack",
    "long": "b]mz:attack",
    "text": "(Unstoppable) Attack only.",
    "color": [150,50,0],
    "hide": true
 }, {
   "id": "5a",
   "cat": "limbo",
   "name": "superjumpswap",
   "long": "b]mz:move/attack/swap",
   "text": "(Unstoppable) Move, Attack, or swap places with ally.",
   "color": [150,150,255],
   "hide": true
 }, {
    "id": "7a",
    "cat": "limbo",
    "name": "moonflare",
    "long": "b]rz:attack",
    "text": "(Unstoppable) Destroy enemy.",
    "color": [34,117,253],
    "hide": true
 }, {
   "id": "35c",
   "cat": "variation",
   "name": "omniblock",
   "long": "bv]:block@(**:*)&(LOSEABILTY)/(mn:move/attack)",
   "text": "(Passive) Block one ability from this location, and lose this ability. \n(Active) Move or Attack.",
   "color": [0,0,0],
   "color3": [255,255,0],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "35d",
   "cat": "pretend",
   "name": "ventus",
   "text": "(Passive) When targeted from this location, push enemy as far as possible away. \n(Active) Move or Attack.",
   "color": [0,0,0],
   "color3": [127,0,255],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "35e",
   "cat": "variation",
   "name": "jumpswapblock",
   "long": "bv]:block@(mn:attack)&(LOSEABILTY)/(mu:move/attack/swap)",
   "text": "(Passive) Block one normal attack from this location, and lose this ability. \n(Active, Unblockable) Move, Attack, or swap places with ally.",
   "color": [255,210,0],
   "color3": [255,255,255],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "35f",
   "cat": "variation",
   "name": "jumpswapomniblock",
   "long": "bv]:block@(**:*)&(LOSEABILTY)/(mu:move/attack/swap)",
   "text": "(Passive) Block one ability from this location, and lose this ability. \n(Active, Unblockable) Move, Attack, or swap places with ally.",
   "color": [255,210,0],
   "color3": [0,0,0],
   "symbol1": "\u2219",
   "hide": true
 }, {
   "id": "b1",
   "cat": "pretend",
   "name": "annihilate",
   "long": "c]rz:(REMOVE)",
   "text": "(Unstoppable) Remove target from the game. This ability ignores all abilities and passives.",
   "color": [200,200,200],
   "color3": [253,117,34],
   "symbol1": "\u2217",
   "hide": true
 }, {
    "id": "b2",
    "cat": "pretend",
    "name": "clear",
    "long": "ms]:*ally?status?deflag?&*ally?enchant?deflag?&deflag",
    "text": "Clear unit and location, removing all status effects and location effects.",
    "color": [220,220,220],
    "color2": [255,255,255],
    "color3": [0, 0, 0],
    "symbol1": "\u2300",
    "hide": true
 }, {
    "id": "b3",
    "cat": "pretend",
    "name": "decimate",
    "long": "c]ru:set@value-=3",
    "text": "(Magic) Target loses 3 value. If unit has 3 value or less, destroy it instead.",
    "color": [64,0,255],
    "color2": [0,0,0],
    "symbol1": "\ufe63",
    "hide": true
 }, {
    "id": "b4",
    "cat": "pretend",
    "name": "banish",
    "long": "c]ru:*ally?set@pos=startpos",
    "text": "(Magic) Teleport unit back to empty starting position.",
    "color": [0,0,0],
    "color2": [0,127,127],
    "color3": [0,255,255],
    "color4": [0,255,255],
    "symbol1": "\u0058",
    "symbol2": "\u2219",
    "hide": true
 }, {
    "id": "b5",
    "cat": "pretend",
    "name": "hobble",
    "long": "b]mf:move",
    "text": "Move only. Blocked by threatened squares.",
    "color": [0,0,255],
    "color2": [255,255,255],
    "hide": true
 }, {
    "id": "b6",
    "cat": "pretend",
    "name": "protosorcertarget",
    "long": "s]ru:sorcerize#flag@3-!(target?!ally)",
    "text": "(Magic) Enrage target, forcing them to target enemy units if they are capable of targeting any for 3 turns.",
    "color": [255,0,0],
    "color2": [0,0,0],
    "symbol1": "\u00d7",
    "hide": true
 }, {
    "id": "b7",
    "cat": "pretend",
    "name": "protosorcerdestroy",
    "long": "cs]ru:sorcerize#flag@3(t]:targeted?block@(**:*)&thisattack)",
    "text": "(Magic) Weaken target, causing them to be destroyed by any ability for 3 turns.",
    "color": [0,0,255],
    "color2": [0,0,0],
    "symbol1": "\uffec",
    "hide": true
 }, {
    "id": "b8",
    "cat": "pretend",
    "name": "protosorcerantienchant",
    "long": "cs]ru:sorcerize#flag@3(@+(move:attack))",
    "text": "(Magic) Disenchant target, allowing them to be attacked by Move for 3 turns.",
    "color": [0,0,255],
    "color2": [0,0,127],
    "symbol1": "\uffec",
    "hide": true
 }, {
    "id": "b9",
    "cat": "variation",
    "name": "teledestroy",
    "long": "b]mu:move/ru:attack",
    "text": "(Unblockable) Teleport or (Magic) Destroy target.",
    "color": [253,117,34],
    "color3": [121,19,153],
    "symbol1": "\u25aa",
    "hide": true
 }, {
    "id": "b10",
    "cat": "pretend",
    "name": "provoke",
    "long": "bt]:start?\(m*:attack)",
    "text": "(Trigger) Enemy Unit: At the start of your turn, target unit instantly attacks this unit.",
    "color": [255,255,255],
    "color2": [0,0,0],
    "color3": [255,255,255],
    "symbol1": "\u25c7",
    "hide": true
 }, {
    "id": "b11",
    "cat": "pretend",
    "name": "bullrush",
    "long": "c]mn:push#\\(mn:move@3(AWAY))",
    "text": "Move to unit and push them up to 3 spaces away.",
    "color": [218,87,40],
    "color2": [255,212,216],
    "color3": [204,0,0],
    "symbol1": "\u25fd",
    "hide": true
 }, {
    "id": "b12",
    "cat": "pretend",
    "name": "locationblock",
    "long": "m]:flag@4(-move&(BLOCK))",
    "text": "(Magic) Marked location can't be targeted by Move and blocks movement for 4 turns.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\u2742",
    "symbol2": "\u2747",
    "hide": true
 }, {
    "id": "b13",
    "cat": "pretend",
    "name": "bonusmove",
    "long": "b]mn:move&(BONUS)",
    "text": "Move only, then take an extra turn if you haven't already taken an extra turn this move.",
    "color": [0,0,255],
    "color3": [255,255,255],
    "symbol1": "\u22a1",
    "hide": true
 }, {
    "id": "b14",
    "cat": "pretend",
    "name": "pullunder",
    "long": "c]ru:(EXILE)3@pos",
    "text": "(Magic) Exile unit, then return them in at least 3 turns when location is unoccupied.",
    "color": [0,80,150],
    "color3": [0,0,0],
    "symbol1": "\u2742",
    "hide": true
 }, {
    "id": "b15",
    "cat": "pretend",
    "name": "lock",
    "text": "(Magic) Lock enemy unit, making them unable to act or be displaced for 3 turns.",
    "color": [100,100,150],
    "color3": [0,0,0],
    "symbol1": "\ue0a2",
    "hide": true
 }, {
    "id": "b16",
    "cat": "pretend",
    "name": "dummypolymorph",
    "text": "(Magic) Transform minion or champion into Dummy.",
    "color": [255,255,0],
    "color3": [0,0,0],
    "symbol1": "\uea00",
    "hide": true
 }, {
    "id": "b17",
    "cat": "pretend",
    "name": "deepstrike",
    "text": "Exile self and mark location for return in 3 turns. If location is occupied upon return the occupant is removed from the game.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uec24",
    "hide": true
 }, {
    "id": "b18",
    "cat": "variation",
    "name": "teleportattack",
    "long": "b]mu:move/mn:attack",
    "text": "Attack or (Unblockable) Teleport.",
    "color": [121,19,153],
    "color2": [252,13,27],
    "hide": true
 }, {
    "id": "b18a",
    "cat": "variation",
    "name": "movejumpattack",
    "long": "b]mn:move/mu:attack",
    "text": "Move or (Unblockable) Attack.",
    "color": [0,0,255],
    "color2": [127,0,0],
    "hide": true
 }, {
    "id": "b19",
    "cat": "variation",
    "name": "movedestroy",
    "long": "b]mn:move/rn:attack",
    "text": "Move or (Ranged) Destroy target.",
    "color": [0,0,255],
    "color2": [255,255,255],
    "symbol1": "\u2316",
    "hide": true
 }, {
    "id": "b20",
    "cat": "pretend",
    "name": "enchantedomniswap",
    "long": "1bs]mu:move/*ally?swap&(thisenchant#flag@1&(ENCHANT))",
    "text": "[Pay 1]: (Unblockable) Teleport or swap places with unit, and enchant self for 1 turn, becoming immune to melee death.",
    "color": [0,102,255],
    "color2": [0,0,0],
    "color3": [0,255,255],
    "symbol1": "\u{1f5d8}",
    "hide": true
 }, {
    "id": "b21",
    "cat": "pretend",
    "name": "specialtykill",
    "text": "(Magic) Enemy unit loses all abilities that aren’t a melee move or melee attack.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uea26",
    "hide": true
 }, {
    "id": "b22",
    "cat": "pretend",
    "name": "bind",
    "text": "Bind enemy unit, removing all of its abilities on corresponding ability targets.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uec5d",
    "hide": true
 }, {
    "id": "b23",
    "cat": "pretend",
    "name": "freezeshot",
    "text": "(Ranged) Destroy target and freeze adjacent units perpendicular to target for 1 turn. Cannot target units immune to freeze.",
    "color": [107,205,253],
    "color2": [255,255,255],
    "color3": [0,0,255],
    "color4": [107,205,253],
    "symbol1": "\u21f9",
    "symbol2": "\u2316",
    "hide": true
 }, {
    "id": "b24",
    "cat": "pretend",
    "name": "invigorate",
    "text": "(Magic) Invigorate ally unit, making them able to act regardless of negative status effects for 2 turns.",
    "color": [0,0,0],
    "color2": [58,233,93],
    "color4": [58,233,93],
    "symbol1": "\u2bce",
    "symbol2": "\u2bcd",
    "hide": true
 }, {
    "id": "b25",
    "cat": "pretend",
    "name": "agility",
    "text": "(Trigger) At the end of your turn teleport to this empty location before returning to your previous position at the end of your opponent's turn.",
    "color": [121,19,153],
    "color2": [255,255,255],
    "color3": [0,127,127],
    "color4": [121,19,153],
    "symbol1": "\uea14",
    "symbol2": "\u25c7",
    "hide": true
 }, {
    "id": "b26",
    "cat": "pretend",
    "name": "confuse",
    "text": "(Magic) Confuse enemy unit for 3 turns, making them unable to target empty locations.",
    "color": [160,127,253],
    "symbol1": "\ue904",
    "hide": true
 }, {
    "id": "b27",
    "cat": "pretend",
    "name": "autominotaur",
    "text": "(Trigger) Enemy King: Swap with target at the start of your turn.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "color3": [51,153,153],
    "symbol1": "\uec32",
    "hide": true
 }, {
    "id": "b28",
    "cat": "pretend",
    "name": "morph",
    "text": "(Magic) Transform self into most recently fallen unit of value X or less, where X is twice this unit's value.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "color4": [255,255,255],
    "symbol1": "\uea04",
    "symbol2": "\uea22",
    "hide": true
 }, {
    "id": "b29",
    "cat": "pretend",
    "name": "finalblast",
    "text": "(Magic) Remove target from the game, ignoring all abilities, passives, and status effects; poison ally King for 3 turns, and lose this ability.",
    "color": [200,200,200],
    "color3": [127,59,17],
    "symbol1": "\u2728",
    "hide": true
 }, {
    "id": "b30",
    "cat": "pretend",
    "name": "finalrespite",
    "text": "(Magic) Enchant self and target ally for 2 turns and lose 5 value. If this unit reaches 0 value this ability can't be used.",
    "color": [0,102,255],
    "color2": [0,0,0],
    "color3": [0,0,0],
    "color4": [0,255,255],
    "symbol1": "\u2b1b",
    "symbol2": "\uea2a",
    "hide": true
 }, {
    "id": "b31",
    "cat": "pretend",
    "name": "powersquare",
    "text": "(Magic) Mark location as power square or refresh power square.",
    "color": [0,255,0],
    "color2": [255,255,255],
    "symbol1": "\u2655",
    "hide": true
 }, {
    "id": "b32",
    "cat": "pretend",
    "name": "moraleboost",
    "text": "[Pay 12]: (Magic) Morale Boost ally for 15 turns, making them give you 1 morale each turn.",
    "color": [0,255,0],
    "color2": [0,0,0],
    "symbol1": "\ufe62",
    "hide": true
 }, {
    "id": "b33",
    "cat": "variation",
    "name": "verticalpathdestroy",
    "text": "(Path, Ranged) Destroy target.",
    "color": [255,0,0],
    "color2": [255,255,255],
    "symbol1": "\ue702",
    "hide": true
 }, {
    "id": "b34",
    "cat": "variation",
    "name": "horizontalpathdestroy",
    "text": "(Path, Ranged) Destroy target.",
    "color": [255,0,0],
    "color2": [255,255,255],
    "symbol1": "\ue700",
    "hide": true
 }, {
    "id": "b35",
    "cat": "variation",
    "name": "antidiagonalpathdestroy",
    "text": "(Path, Ranged) Destroy target.",
    "color": [255,0,0],
    "color2": [255,255,255],
    "symbol1": "\ue701",
    "hide": true
 }, {
    "id": "b36",
    "cat": "variation",
    "name": "diagonalpathdestroy",
    "text": "(Path, Ranged) Destroy target.",
    "color": [255,0,0],
    "color2": [255,255,255],
    "symbol1": "\ue703",
    "hide": true
  }, {
   "id": "b37",
   "cat": "variation",
   "name": "verticalpathmoveattackswap",
   "text": "(Path) Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color4": [255,210,0],
   "symbol1": "\u{1f5d8}",
   "symbol2": "\ue702",
   "hide": true
 }, {
   "id": "b38",
   "cat": "variation",
   "name": "horizontalpathmoveattackswap",
   "text": "(Path) Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color4": [255,210,0],
   "symbol1": "\u{1f5d8}",
   "symbol2": "\ue700",
   "hide": true
 }, {
   "id": "b39",
   "cat": "variation",
   "name": "antidiagonalpathmoveattackswap",
   "text": "(Path) Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color4": [255,210,0],
   "symbol1": "\u{1f5d8}",
   "symbol2": "\ue701",
   "hide": true
 }, {
   "id": "b40",
   "cat": "variation",
   "name": "diagonalpathmoveattackswap",
   "text": "(Path) Move, Attack, or swap places with ally.",
   "color": [0,0,0],
   "color4": [255,210,0],
   "symbol1": "\u{1f5d8}",
   "symbol2": "\ue703",
   "hide": true
 }, {
   "id": "b41",
   "cat": "variation",
   "name": "jumpstart",
   "long": "b]mu:startpos?move/attack",
   "text": "(Unblockable) Move or Attack from starting position.",
   "color": [20,151,24],
   "symbol1": "\u274b",
   "hide": true
 }, {
   "id": "b42",
   "cat": "variation",
   "name": "omnicastle",
   "long": "c]:*ally?swap&(MOVETOGETHER)",
   "text": "(Unblockable) Swap places with unit, then move this unit and target unit together.",
   "color": [51,153,153],
   "color2": [255,255,255],
   "symbol1": "\u2656",
   "hide": true
 }, {
   "id": "b43",
   "cat": "pretend",
   "name": "spellcharge",
   "text": "[Pay 2]: (Magic) Spellcharge, teleporting to location and destroying any enemy on that location.",
   "color": [20,151,24],
   "symbol1": "\u25c8",
   "hide": true
 }, {
   "id": "b43a",
   "cat": "pretend",
   "name": "spellchargeswap",
   "text": "[Pay 2]: (Magic) Spellcharge, teleporting to location and destroying any enemy on that location and swapping places with any ally on that location.",
   "color": [255,210,0],
   "symbol1": "\u25c8",
   "hide": true
 }, {
   "id": "b44",
   "cat": "pretend",
   "name": "overtake",
   "text": "(Unblockable) Teleport to empty location, destroying enemy units in between.",
   "color": [127,127,127],
   "color2": [0,0,0],
   "color3": [255,0,0],
   "symbol1": "\u25cb",
   "hide": true
 }, {
   "id": "b45",
   "cat": "pretend",
   "name": "meteoricjump",
   "text": "(Unblockable) Teleport, or Attack and push all units adjacent to destination 1 space away.",
   "color": [20,151,24],
   "color3": [0,0,0],
   "symbol1": "\uea78",
   "hide": true
 }, {
   "id": "b45a",
   "cat": "pretend",
   "name": "criticaljump",
   "text": "(Unblockable) Move or Attack. Then, push all enemies adjacent to destination 1 space away.",
   "color": [0,127,0],
   "color2": [0,255,0],
   "hide": true
 }, {
   "id": "b46",
   "cat": "pretend",
   "name": "moveleapmove",
   "text": "Move or Leap-Move.",
   "color": [0,0,255],
   "color3": [0,255,255],
   "symbol1": "\u26AB",
   "hide": true
 }, {
   "id": "b47",
   "cat": "variation",
   "name": "attackany",
   "text": "Attack enemy or ally.",
   "color": [255,0,0],
   "color2": [0,0,0],
   "symbol1": "\u2747",
   "hide": true
 }, {
   "id": "b48",
   "cat": "variation",
   "name": "jumpattackany",
   "text": "(Unblockable) Attack enemy or ally.",
   "color": [127,0,0],
   "color2": [0,0,0],
   "symbol1": "\u2747",
   "hide": true
 }, {
   "id": "b49",
   "cat": "pretend",
   "name": "movementswitch",
   "text": "Switch the caster's Move actions to Attack, and vice versa.",
   "color": [0,0,255],
   "color2": [255,255,0],
   "color3": [255,0,0],
   "symbol1": "\u{1f5d8}",
   "hide": true
 }, {
   "id": "b50",
   "cat": "pretend",
   "name": "empower",
   "text": "(Magic) Empower ally unit, allowing them to destroy an adjacent enemy unit for 3 turns.",
   "color": [255,127,127],
   "color2": [255,255,255],
   "symbol1": "\u2747",
   "symbol2": "\u26aa",
   "hide": true
 }, {
   "id": "b51",
   "cat": "pretend",
   "name": "chill",
   "text": "(Magic) Chill enemy unit for 5 turns, freezing them if they act.",
   "color": [107,205,253],
   "color2": [255,255,255],
   "color3": [0,0,255],
   "symbol1": "\u2744",
   "hide": true
 }, {
   "id": "b52",
   "cat": "pretend",
   "name": "overlap",
   "text": "Move to location, overlapping any unit on that location until that location is unoccupied.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\uf220",
   "hide": true
 }, {
   "id": "b53",
   "cat": "pretend",
   "name": "forcefield",
   "text": "[Pay 3]: (Magic) Marked location can't be targeted by abilities other than Move for 3 turns.",
   "color": [0,0,255],
   "color2": [0,0,0],
   "color3": [0,102,255],
   "color4": [0,255,255],
   "symbol1": "\u25a1",
   "symbol2": "\ue905",
   "hide": true
 }, {
   "id": "b54",
   "cat": "pretend",
   "name": "pathblocker",
   "text": "(Passive) Abilities can't be cast through this location.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "symbol1": "\ue700",
   "symbol2": "x",
   "hide": true
  }, {
   "id": "b54a",
   "cat": "pretend",
   "name": "invokepathblocker",
   "text": "(Passive) Abilities can't be cast through this location. Invoke to toggle between on and off.",
   "color": [0,0,0],
   "color2": [255,255,255],
   "color4": [255,0,0],
   "symbol1": "\ue700",
   "symbol2": "x",
   "hide": true
 }, {
   "id": "b55",
   "cat": "pretend",
   "name": "truestrike",
   "long": "bc]mz:move/(REMOVE)",
   "text": "(Unstoppable) Move or Attack and remove target from the game. This ability ignores all abilities and passives.",
   "color": [64,0,127],
   "color3": [0,0,0],
   "symbol1": "\u2bce",
   "hide": true
 }, {
   "id": "b55a",
   "cat": "pretend",
   "name": "truestrikeswap",
   "long": "bc]mz:move/swap/(REMOVE)",
   "text": "(Unstoppable) Move, swap places with ally, or Attack and remove target from the game. This ability ignores all abilities and passives.",
   "color": [127,0,127],
   "color3": [255,210,0],
   "symbol1": "\u2bce",
   "hide": true
 }, {
   "id": "b56",
   "cat": "pretend",
   "name": "feint",
   "text": "Move or Attack target and then instantly move 1 space in the opposite direction.",
   "color": [0,0,0],
   "color2": [127,127,127],
   "color3": [0,0,255],
   "color4": [127,127,127],
   "symbol1": "\u2389",
   "symbol2": "\u25cb",
   "hide": true
 }, {
   "id": "b57",
   "cat": "pretend",
   "name": "jolt",
   "text": "[Pay 1]: (Magic) Jolt enemy unit, allowing you to immediately move it to a space where it can't be targeted by you.",
   "color": [255,196,127],
   "color3": [255,255,0],
   "symbol1": "\u26a1",
   "hide": true
 }, {
   "id": "b58",
   "cat": "pretend",
   "name": "rally",
   "text": "(Magic) Teleport unit 2 spaces toward the other side of the field.",
   "color": [102,0,102],
   "symbol1": "\u2b9d",
   "hide": true
 }, {
   "id": "b59",
   "cat": "variation",
   "name": "jumponce",
   "text": "(Unblockable) Move or Attack, and lose this ability.",
   "color": [20,151,24],
   "color3": [127,127,127],
   "symbol1": "\uf23d",
   "hide": true
 }, {
   "id": "b60",
   "cat": "pretend",
   "name": "enchantedmove",
   "text": "Move only, then enchant ally units orthogonally adjacent to you for 1 turn.",
   "color": [0,0,255],
   "color3": [0,255,255],
   "symbol1": "+",
   "hide": true
 }, {
   "id": "b61",
   "cat": "pretend",
   "name": "banishexile",
   "text": "(Magic) Exile unit, then return them at starting position in 3 turns.",
   "color": [0,200,200],
   "color3": [0,0,0],
   "symbol1": "\u2742",
   "hide": true
  }, {
   "id": "b62",
   "cat": "pretend",
   "name": "darkexile",
   "text": "(Magic) Exile unit, then return them after any unit dies.",
   "color": [87,218,40],
   "color3": [0,0,0],
   "symbol1": "\u2742",
   "hide": true
  }, {
   "id": "b63",
   "cat": "pretend",
   "name": "stormwind",
   "text": "[Pay 1]: (Magic) Push unit up to 3 spaces away from caster and mark destination to be destroyed by Magic in 3 turns.",
   "color": [0,127,255],
   "color2": [0,0,0],
   "color3": [255,255,255],
   "color4": [0,127,255],
   "symbol1": "\u26a1",
   "symbol2": "\u25cc",
   "hide": true
  }, {
   "id": "b64",
   "cat": "pretend",
   "name": "oddpoisonevenfreeze",
   "text": "Odd Move: (Magic) Poison enemy unit for 3 turns. Even Move: (Magic) Freeze enemy unit for 3 turns.",
   "color": [27,152,100],
   "symbol1": "\u2685",
   "hide": true
 }, {
   "id": "b65",
   "cat": "pretend",
   "name": "jumplose",
   "text": "[Lose 1]: (Unblockable) Move or Attack.",
   "color": [20,151,24],
   "color3": [0,0,0],
   "symbol1": "\u{1f505}",
   "hide": true
 }, {
   "id": "b65a",
   "cat": "pretend",
   "name": "jumpswaplose",
   "text": "[Lose 1]: (Unblockable) Move, Attack, or swap places with ally.",
   "color": [255,210,0],
   "color3": [0,0,0],
   "symbol1": "\u{1f505}",
   "hide": true
  }, {
   "id": "b66",
   "cat": "pretend",
   "name": "evasion",
   "text": "(Trigger) This unit targeted by enemy: This unit instantly swaps places with unit on this location.",
   "color": [0,0,255],
   "color2": [0,0,0],
   "color3": [0,0,255],
   "symbol1": "\u2389",
   "hide": true
 }, {
   "id": "b67",
   "cat": "pretend",
   "name": "phase",
   "text": "(Magic) Phase unit for 2 turns. Phased units can't act, and are immune to everything.",
   "color": [200,200,200],
   "color3": [255,255,255],
   "color4": [0,0,0],
   "symbol1": "\uf220",
   "symbol2": "\u00d7",
   "hide": true
 }, {
    "id": "b68",
    "cat": "pretend",
    "name": "kickout",
    "text": "Move to unit and teleport them back to empty starting position.",
    "color": [0,0,0],
    "color2": [127,0,0],
    "color3": [255,0,0],
    "color4": [255,0,0],
    "symbol1": "\u0058",
    "symbol2": "\u2219",
    "hide": true
 }, {
   "id": "b69",
   "cat": "pretend",
   "name": "returntosender",
   "text": "(Magic) Teleport unit as far back towards their side as possible.",
   "color": [102,0,102],
   "symbol1": "\u2937",
   "hide": true
 }, {
   "id": "b70",
   "cat": "pretend",
   "name": "hallow",
   "text": "[Pay 2]: (Magic) Hallow unit for 3 turns. Hallowed units are immune to enemies but can't affect enemies.",
   "color": [200,180,100],
   "color4": [0,0,0],
   "symbol1": "\u2747",
   "symbol2": "\u00d7",
   "hide": true
 }, {
   "id": "b71",
   "cat": "variation",
   "name": "verticalpathfreeze",
   "text": "(Path, Ranged) Freeze enemy unit for 3 turns, making them unable to act.",
   "color": [107,205,253],
   "symbol1": "\ue702",
   "hide": true
 }, {
   "id": "b72",
   "cat": "variation",
   "name": "horizontalpathfreeze",
   "text": "(Path, Ranged) Freeze enemy unit for 3 turns, making them unable to act.",
   "color": [107,205,253],
   "symbol1": "\ue700",
   "hide": true
 }, {
   "id": "b73",
   "cat": "variation",
   "name": "antidiagonalpathfreeze",
   "text": "(Path, Ranged) Freeze enemy unit for 3 turns, making them unable to act.",
   "color": [107,205,253],
   "symbol1": "\ue701",
   "hide": true
 }, {
   "id": "b74",
   "cat": "variation",
   "name": "diagonalpathfreeze",
   "text": "(Path, Ranged) Freeze enemy unit for 3 turns, making them unable to act.",
   "color": [107,205,253],
   "symbol1": "\ue703",
   "hide": true
 }, {
    "id": "b75",
    "cat": "limbo",
    "name": "summonknight",
    "text": "(Magic) Summon Knight, and lose this ability.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uec05",
    "hide": true
 }, {
    "id": "b76",
    "cat": "limbo",
    "name": "conditionalmoveattack",
    "text": "(Conditional) Move or Attack.",
    "color": [100,100,100],
    "hide": true
 }, {
    "id": "b76a",
    "cat": "limbo",
    "name": "conditionaljump",
    "text": "(Unblockable, Conditional) Move or Attack.",
    "color": [112,173,114],
    "hide": true
 }, {
    "id": "b76b",
    "cat": "limbo",
    "name": "conditionalmagic",
    "text": "(Magic, Conditional) Destroy target.",
    "color": [254,171,120],
    "hide": true
 }, {
    "id": "b76c",
    "cat": "limbo",
    "name": "conditionalmove",
    "text": "(Conditional) Move only.",
    "color": [100,100,255],
    "hide": true
 }, {
    "id": "b76d",
    "cat": "limbo",
    "name": "conditionalattack",
    "text": "(Conditional) Attack only.",
    "color": [253,107,116],
    "hide": true
 }, {
    "id": "b76e",
    "cat": "limbo",
    "name": "conditionalteleport",
    "text": "(Unblockable, Conditional) Teleport.",
    "color": [173,111,193],
    "hide": true
 }, {
    "id": "b76f",
    "cat": "limbo",
    "name": "conditionaljumpswap",
    "text": "(Unblockable, Conditional) Move, Attack, or swap places with ally.",
    "color": [255,228,100],
    "hide": true
 }, {
    "id": "b76g",
    "cat": "limbo",
    "name": "conditionalshoot",
    "text": "(Ranged, Conditional) Destroy target.",
    "color": [255,100,100],
    "color2": [255,255,255],
    "symbol1": "\u2316",
    "hide": true
 }, {
    "id": "b77",
    "cat": "pretend",
    "name": "timeddeath",
    "text": "(Magic) Mark unit to be unavoidably destroyed in 6 turns.",
    "color": [114,28,32],
    "symbol1": "\u{1f553}",
    "hide": true
 }, {
    "id": "b78",
    "cat": "pretend",
    "name": "upgrademinion",
    "text": "[Pay 3]: (Magic) Upgrade ally minion.",
    "color": [0,153,87],
    "color2": [241,241,140],
    "symbol1": "\u25b2",
    "hide": true
 }, {
    "id": "b79",
    "cat": "pretend",
    "name": "flipmoveset",
    "text": "(Magic) Reflect unit's moveset across the X axis.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\u21c5",
    "hide": true
 }, {
    "id": "b80",
    "cat": "pretend",
    "name": "areadenial",
    "text": "(Magic, Trigger) Enemy Unit: At the start of your turn, mark unit to be destroyed in 2 turns unless they leave their location.",
    "color": [225,225,0],
    "symbol1": "\u2bcc",
    "symbol2": "\u2bcd",
    "hide": true
 }, {
    "id": "b81",
    "cat": "pretend",
    "name": "negatefarmoves",
    "text": "(Magic) Negate unit's moveset beyond Range 2.",
    "color": [40,40,40],
    "color3": [0,0,0],
    "symbol1": "\u{ffd72}",
    "hide": true
 }, {
    "id": "b82",
    "cat": "pretend",
    "name": "negatesidesteps",
    "text": "(Magic) Negate unit's moveset beyond 1 step sideways.",
    "color": [80,80,80],
    "color4": [0,0,0],
    "symbol1": "\u2194",
    "symbol2": "\u{ff0fe}",
    "hide": true
 }, {
    "id": "b83",
    "cat": "pretend",
    "name": "ignite",
    "text": "(Magic) Ignite enemy unit, destroying them in 3 turns. If an Ignited unit is Attacked, the attacker is Ignited for 3 turns.",
    "color": [151,74,0],
    "symbol1": "\u00d7",
    "hide": true
 }, {
    "id": "b84",
    "cat": "pretend",
    "name": "melt",
    "text": "(Magic) Melt enemy unit, transforming them into a Slime in 3 turns.",
    "color": [75,150,0],
    "color3": [255,255,255],
    "symbol1": "\ue902",
    "hide": true
 }, {
    "id": "b85",
    "cat": "pretend",
    "name": "sabotage",
    "text": "(Magic) Sabotage enemy unit, destroying them and pushing all adjacent units 1 space away in 5 turns.",
    "color": [151,0,0],
    "symbol1": "\u00d7",
    "hide": true
 }, {
    "id": "b86",
    "cat": "pretend",
    "name": "soulsplit",
    "text": "(Magic) Soulsplit enemy unit, negating the unit's value, moveset, and passives in 2 turns.",
    "color": [151,151,151],
    "color3": [0,0,0],
    "symbol1": "\u00d7",
    "hide": true
 }, {
    "id": "b87",
    "cat": "pretend",
    "name": "subvert",
    "text": "(Magic) Subvert enemy unit, making them swap places with their King in 3 turns.",
    "color": [51,153,153],
    "color3": [0,0,0],
    "color4": [51,153,153],
    "symbol1": "\uea0a",
    "symbol2": "\u00d7",
    "hide": true
 }, {
    "id": "b88",
    "cat": "pretend",
    "name": "enchantpoison",
    "text": "(Magic) Enchant unit for 3 turns and Poison unit, making them immune to melee death but destroying them in 3 turns.",
    "color": [0,101,24],
    "color2": [0,0,0],
    "color3": [0,255,255],
    "color4": [0,101,24],
    "symbol1": "\u25cb",
    "symbol2": "\u00d7",
    "hide": true
 }, {
    "id": "b89",
    "cat": "pretend",
    "name": "icemeteor",
    "text": "[Pay 1]: (Magic) After 5 turns any unit in the marked location is frozen for 3 turns and all adjacent units are frozen for 1 turn and pushed away 1 space.",
    "color": [107,205,253],
    "color3": [0,0,0],
    "symbol1": "\uea78",
    "hide": true
 }, {
    "id": "b90",
    "cat": "pretend",
    "name": "immobilize",
    "text": "(Passive) Immobilize enemy unit if this location is unblocked, making them unable to act.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "symbol1": "\uea21",
    "hide": true
 }, {
    "id": "b91",
    "cat": "pretend",
    "name": "deathmark",
    "text": "(Magic) Mark enemy unit to be destroyed if this unit dies.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "color4": [255,255,255],
    "symbol1": "\uf7e3",
    "symbol2": "\u29c8",
    "hide": true
 }, {
    "id": "b92",
    "cat": "pretend",
    "name": "halfwaythunder",
    "text": "(Magic) When this unit crosses the middle of the field any unit in the marked location is destroyed.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "color3": [0,127,255],
    "symbol1": "\u{1f1ed}",
    "hide": true
 }, {
    "id": "b93",
    "cat": "pretend",
    "name": "acidify",
    "text": "(Magic) Acidify enemy unit, destroying them after they act twice.",
    "color": [100,200,0],
    "color2": [255,255,255],
    "symbol1": "\u00d7",
    "hide": true
 }, {
    "id": "b94",
    "cat": "pretend",
    "name": "doom",
    "text": "(Magic) Doom enemy unit, destroying them if they have not acted in the last three turns.",
    "color": [0,0,0],
    "color2": [50,50,50],
    "color3": [255,255,255],
    "symbol1": "\u{1f480}",
    "hide": true
 }, {
    "id": "b95",
    "cat": "pretend",
    "name": "derealize",
    "text": "[Pay 2]: (Magic) Transform unit into ally Illusion+++.",
    "color": [0,0,0],
    "color2": [255,255,255],
    "color3": [133,0,0],
    "symbol1": "\uec2b",
    "hide": true
 }, {
    "id": "b96",
    "cat": "pretend",
    "name": "mine",
    "text": "[Pay 3]: (Magic) The next unit to land on marked location is destroyed.",
    "color": [127,127,127],
    "color2": [255,255,255],
    "color3": [0,0,0],
    "color4": [255,0,0],
    "symbol1": "\u29c8",
    "symbol2": "\u2b1d",
    "hide": true
 }, {
    "id": "b97",
    "cat": "pretend",
    "name": "jumpattackreflect",
    "text": "(Unblockable) Attack, then teleport this unit across the Y axis.",
    "color": [255,0,0],
    "color2": [127,0,0],
    "color3": [255,255,255],
    "symbol1": "\u21c4",
    "hide": true
 }, {
    "id": "b97a",
    "cat": "pretend",
    "name": "jumpmovereflect",
    "text": "(Unblockable) Move, then teleport this unit across the Y axis.",
    "color": [0,0,255],
    "color2": [0,0,127],
    "color3": [255,255,255],
    "symbol1": "\u21c4",
    "hide": true
 }, {
    "id": "b98",
    "cat": "pretend",
    "name": "poisonswap",
    "text": "(Unblockable) Teleport or swap places with unit and poison enemy unit, destroying them in 3 turns.",
    "color": [0,101,24],
    "color3": [0,0,0],
    "symbol1": "\u{1f5d8}",
    "hide": true
 }, {
    "id": "b98a",
    "cat": "pretend",
    "name": "freezeswap",
    "text": "(Unblockable) Teleport or swap places with unit and freeze enemy unit for 3 turns, making them unable to act.",
    "color": [107,205,253],
    "color3": [0,0,0],
    "symbol1": "\u{1f5d8}",
    "hide": true
 }, {
    "id": "b98b",
    "cat": "pretend",
    "name": "compelswap",
    "text": "(Unblockable) Teleport or swap places with unit and compel enemy unit, making them move in the direction of this ability at the start of their turn, for 3 turns.",
    "color": [255,63,255],
    "color2": [255,255,255],
    "color3": [255,63,255],
    "symbol1": "\u{1f5d8}",
    "hide": true
 }, {
    "id": "b99",
    "cat": "pretend",
    "name": "slidingmove",
    "text": "Move, then this unit keeps moving in the same direction until it collides with any unit or the field edge.",
    "color": [0,0,255],
    "color3": [0,0,0],
    "symbol1": "\uf602",
    "hide": true
 }, {
    "id": "b99a",
    "cat": "pretend",
    "name": "slidingmoveattack",
    "text": "Move or Attack, then this unit keeps moving in the same direction until it collides with any unit or the field edge.",
    "color": [0,0,0],
    "color3": [0,0,255],
    "symbol1": "\uf602",
    "hide": true
 }, {
    "id": "b99b",
    "cat": "pretend",
    "name": "slidingmoveattackswap",
    "text": "Move, Attack, or swap places with ally; then this unit keeps moving in the same direction until it collides with any unit or the field edge.",
    "color": [255,210,0],
    "color3": [0,0,0],
    "symbol1": "\uf602",
    "hide": true
 }, {
    "id": "b99c",
    "cat": "pretend",
    "name": "trueslidingmoveattack",
    "text": "Slide in the specified direction as far as possible to Move or Attack.",
    "color": [0,0,0],
    "color3": [0,0,255],
    "symbol1": "\uf604",
    "hide": true
 }, {
    "id": "b99d",
    "cat": "pretend",
    "name": "trueslidingmoveattackswap",
    "text": "Slide in the specified direction as far as possible to Move, Attack, or swap places with ally.",
    "color": [255,210,0],
    "color3": [0,0,0],
    "symbol1": "\uf604",
    "hide": true
 }, {
    "id": "b99e",
    "cat": "pretend",
    "name": "trueslidingomniswap",
    "text": "Slide in the specified direction as far as possible to Move or swap places with unit.",
    "color": [51,153,153],
    "color3": [0,0,0],
    "symbol1": "\uf604",
    "hide": true
 }, {
    "id": "b100",
    "cat": "pretend",
    "name": "teleportslam",
    "text": "[Pay 2]: (Unblockable) Teleport, then petrify and enchant all adjacent enemies for 1 turn.",
    "color": [121,19,153],
    "color3": [94,200,200],
    "symbol1": "\uf7e3",
    "hide": true
 }, {
    "id": "b101",
    "cat": "pretend",
    "name": "moveattackpetrify",
    "text": "Move or Attack, then petrify enemy unit 1 space in the same direction for 3 turns.",
    "color": [0,0,0],
    "color3": [174,174,174],
    "symbol1": "\u00d7",
    "hide": true
 }, {
    "id": "b102",
    "cat": "pretend",
    "name": "passivetoggle",
    "text": "(Unstoppable) Toggle this unit's passive. If this unit's passive is toggled off, it doesn't do anything. [Passive On]",
    "color": [0,0,0],
    "color2": [255,255,255],
    "color3": [0,0,0],
    "color4": [0,255,0],
    "symbol1": "\u25ca",
    "symbol2": "\u25b4",
    "hide": true
 }, {
    "id": "b102a",
    "cat": "pretend",
    "name": "passivetoggleoff",
    "text": "(Unstoppable) Toggle this unit's passive. If this unit's passive is toggled off, it doesn't do anything. [Passive Off]",
    "color": [0,0,0],
    "color2": [255,255,255],
    "color3": [0,0,0],
    "color4": [255,0,0],
    "symbol1": "\u25ca",
    "symbol2": "\u25be",
    "hide": true
 }, {
    "id": "b103",
    "cat": "pretend",
    "name": "coupdegrace",
    "text": "(Ranged) Destroy enemy status-affected unit.",
    "color": [255,0,0],
    "color2": [255,255,255],
    "color3": [0,101,24],
    "symbol1": "\u2316",
    "hide": true
 }, {
    "id": "b104",
    "cat": "pretend",
    "name": "mercyfreeze",
    "text": "(Magic) Freeze enemy status-affected unit for 7 turns.",
    "color": [37,155,253],
    "color3": [107,205,253],
    "symbol1": "\u2a33",
    "hide": true
 }, {
    "id": "0f",
    "cat": "variation",
    "name": "moveswapenemyattackally",
    "text": "Move, Attack ally, or swap places with enemy.",
    "color": [255,210,0],
    "color2": [0,0,0],
    "symbol1": "\u2747",
    "hide": true
 }, {
    "id": "0g",
    "cat": "variation",
    "name": "teleportswapenemyjumpattackally",
    "text": "(Unblockable) Teleport, Attack ally, or swap places with enemy.",
    "color": [51,153,153],
    "color2": [0,0,0],
    "symbol1": "\u2747",
    "hide": true
 }, {
   "id": "z1",
   "cat": "exile",
   "name": "noability",
   "long": "]mn:",
   "text": "No ability.",
   "color": [127,127,127],
   "color2": [255,255,255],
   "hide": true
 }, {
   "id": "z2",
   "cat": "exile",
   "name": "unblockablenoability",
   "long": "]mu:",
   "text": "(Unblockable) No ability.",
   "color": [64,64,64],
   "color2": [0,0,0],
   "hide": true
 }, {
   "id": "z3",
   "cat": "exile",
   "name": "donothing",
   "long": "]rz:(NULL)",
   "text": "(Unstoppable) Do nothing.",
   "color": [127,127,127],
   "color3": [0,0,0],
   "symbol1": "\u2400",
   "hide": true
 }, {
   "id": "6zz",
   "cat": "exile",
   "name": "jumpmove",
   "long": "b]mu:move",
   "text": "(Unblockable) Move only.",
   "color": [0,0,255],
   "color2": [0,0,127],
   "hide": true
 }, {
   "id": "c1",
   "cat": "custom",
   "name": "custom1",
   "long": "z]",
   "text": "Custom ability 1 (Double Click Menu Icon to Edit)",
   "color": [245,46,46],
   "symbol1": "1"
 }, {
   "id": "c2",
   "cat": "custom",
   "name": "custom2",
   "long": "z]",
   "text": "Custom ability 2 (Double Click Menu Icon to Edit)",
   "color": [84,99,255],
   "symbol1": "2"
 }, {
   "id": "c3",
   "cat": "custom",
   "name": "custom3",
   "long": "z]",
   "text": "Custom ability 3 (Double Click Menu Icon to Edit)",
   "color": [255,199,23],
   "symbol1": "3"
 }, {
   "id": "c4",
   "cat": "custom",
   "name": "custom4",
   "long": "z]",
   "text": "Custom ability 4 (Double Click Menu Icon to Edit)",
   "color": [31,158,64],
   "symbol1": "4"
 }, {
   "id": "c5",
   "cat": "custom",
   "name": "custom5",
   "long": "z]",
   "text": "Custom ability 5 (Double Click Menu Icon to Edit)",
   "color": [255,102,25],
   "symbol1": "5"
 }, {
   "id": "c6",
   "cat": "custom",
   "name": "custom6",
   "long": "z]",
   "text": "Custom ability 6 (Double Click Menu Icon to Edit)",
   "color": [36,212,196],
   "symbol1": "6"
 }, {
   "id": "c7",
   "cat": "custom",
   "name": "custom7",
   "long": "z]",
   "text": "Custom ability 7 (Double Click Menu Icon to Edit)",
   "color": [212,28,229],
   "symbol1": "7"
 }, {
   "id": "c8",
   "cat": "custom",
   "name": "custom8",
   "long": "z]",
   "text": "Custom ability 8 (Double Click Menu Icon to Edit)",
   "color": [74,69,89],
   "symbol1": "8"
 }, {
   "id": "c9",
   "cat": "custom",
   "name": "custom9",
   "long": "z]",
   "text": "Custom ability 9 (Double Click Menu Icon to Edit)",
   "color": [125,125,125],
   "symbol1": "9"
 }, {
   "id": "c10",
   "cat": "custom",
   "name": "custom10",
   "long": "z]",
   "text": "Custom ability 10 (Double Click Menu Icon to Edit)",
   "color": [200,200,200],
   "symbol1": "A"
 }, {
   "id": "c11",
   "cat": "custom",
   "name": "custom11",
   "long": "z]",
   "text": "Custom ability 11 (Double Click Menu Icon to Edit)",
   "color": [200,180,100],
   "symbol1": "B"
 }, {
   "id": "c12",
   "cat": "custom",
   "name": "custom12",
   "long": "z]",
   "text": "Custom ability 12 (Double Click Menu Icon to Edit)",
   "color": [255,0,0],
   "symbol1": "C"
 }, {
   "id": "c13",
   "cat": "custom",
   "name": "custom13",
   "long": "z]",
   "text": "Custom ability 13 (Double Click Menu Icon to Edit)",
   "color": [0,255,0],
   "symbol1": "D"
 }, {
   "id": "c14",
   "cat": "custom",
   "name": "custom14",
   "long": "z]",
   "text": "Custom ability 14 (Double Click Menu Icon to Edit)",
   "color": [0,0,255],
   "symbol1": "E"
 }, {
   "id": "c15",
   "cat": "custom",
   "name": "custom15",
   "long": "z]",
   "text": "Custom ability 15 (Double Click Menu Icon to Edit)",
   "color": [255,255,255],
   "color2": [235,235,235],
   "symbol1": "F"
 }, {
   "id": "c16",
   "cat": "custom",
   "name": "custom16",
   "long": "z]",
   "text": "Custom ability 16 (Double Click Menu Icon to Edit)",
   "nobox": true,
   "color3": [0,0,0],
   "symbol1": "\u23e8"
 }, {
   "id": "c1legacy",
   "cat": "custom",
   "name": "customlegacy1",
   "long": "z]",
   "text": "Custom action 1",
   "color": [255,255,255],
   "color2": [255,255,255],
   "color3": [160,122,80],
   "color4": [0,0,0],
   "symbol1": "\u2b1a",
   "symbol2": "1",
   "hide": true
 }, {
   "id": "c2legacy",
   "cat": "custom",
   "name": "customlegacy2",
   "long": "z]",
   "text": "Custom action 2",
   "color": [255,255,255],
   "color2": [255,255,255],
   "color3": [0,0,0],
   "color4": [0,0,0],
   "symbol1": "\u2b1a",
   "symbol2": "2",
   "hide": true
 }, {
   "id": "c3legacy",
   "cat": "custom",
   "name": "customlegacy3",
   "long": "z]",
   "text": "Custom action 3",
   "color": [255,255,255],
   "color2": [255,255,255],
   "color3": [254,213,49],
   "color4": [0,0,0],
   "symbol1": "\u2b1a",
   "symbol2": "3",
   "hide": true
 }, {
   "id": "c4legacy",
   "cat": "custom",
   "name": "customlegacy4",
   "long": "z]",
   "text": "Custom action 4",
   "color": [255,255,255],
   "color2": [255,255,255],
   "color3": [252,14,29],
   "color4": [0,0,0],
   "symbol1": "\u2b1a",
   "symbol2": "4",
   "hide": true
 }, {
    "id": "moonfox",
    "cat": "custom",
    "name": "custommoonfox",
    "long": "z]",
    "text": "Moonfox (Do not click!)",
    "color": [253,117,34],
    "symbol1": "\ue9f9",
    "hide": true
 }, {
    "id": "fontversionindicator",
    "cat": "custom",
    "name": "customfontversionindicator",
    "long": "z]",
    "text": "Font Version Indicator",
    "nobox": true,
    "color3": [0,0,0],
    "symbol1": "\uf800",
    "hide": true
 }];

/* Self reminder
\\ when creating an ability of slightly different properties, prefer these changes:
\\ "\ufe62" Targets all
\\ "\u22c6" Magic
\\ "\u2295" Ranged
*/

PASSIVES = ["Does not block movement.",
    "Vanishes after attacking.",
    "Vanishes after Magic.",
    "Immune to Poison.",
    "Immune to Petrify.",
    "Immune to Freeze.",
    "(Ranged-Immune)",
    "(Magic-Immune)",
    "(Status-Immune)",
    "(Trigger-Immune)",
    "(Displacement-Immune)",
    "(Location-Immune)",
    "Promotes to PieceName[+].",
    "On Death: Lose 2[+1] morale.",
    "Blocks one ability.",
    "Can't be targeted beyond Range 2.",
    "Cannot move until turn 3.",
    "Condition: You have no King.",
    "Condition: edit this text",
    "Stealth",
    "Armored",
    "Berserk",
    "Central",
    "Deployed",
    "Withdraw",
    "Indestructible"
];
LABELS = {
    rank: ["Minion", "Champion", "King", "Outcast"],
    faction: ["Basic", "Clan", "Arcane", "Forest", "Unique", "Hero"],
    rarity: ["Common", "Rare", "Epic", "Legendary", "Mythic"]
}
LEVELS = ["base", "plus", "plusplus", "plusplusplus"];

TOOLTIPS = {
    ts0: "Pen Size 1:\nFor those who are perfectionists",
    ts1: "Pen Size 2:\nA thin pen for fine detail.",
    ts2: "Pen Size 3:\nThe default pen size.",
    ts3: "Pen Size 5:\nA thick pen for coloring things in.",
    ts4: "Pen Size 10:\nI don't see a use of this outside erasers tbh",
    ts5: "Pen Size 0:\nI hope you like shapes with no outlines...",
    tf0: "Coloring of the base",
    tf1: "Coloring of the middle part (what do you call those? :v)",
    tf2: "Coloring of the \"head\" part",
    tf3: "Coloring of the darker parts in a piece",
    tf4: "Coloring of black parts in a piece",
    tf5: "Red fill color, for those who want colorful pieces for some reason",
    tf6: "Green fill color, for those who want colorful pieces for some reason",
    tf7: "Blue fill color, for those who want colorful pieces for some reason",
    tf8: "Yellow fill color, for those who want colorful pieces for some reason",
    tf9: "Cyan fill color, for those who want colorful pieces for some reason",
    tf10: "Pink fill color, for those who want colorful pieces for some reason",
    tf11: "Super dark fill color, in case Black wasn't dark enough",
    tf12: "Solid white fill",
    tf13: "Enchantment overlay",
    tf14: "Rainbow gradient, for those who want REALLY colorful pieces",
    tf15: "Fading black radial gradient, like the black ChaosPortal",
    tf16: "A portal to another world.\nA fill color by GodOfTomatoes.",
    tf17: "Looking up in a bright forest.\nA fill color by adamzero.",
    tf18: "A fill color reminiscent of the wind ability.\nA fill color by jonagamer10.",
    tf19: "A fill color resembling the ground with grass on top.\nA fill color by adamzero.",
    tf20: "A custom top to bottom gradient.\nClick the first color button to change the top color.\nClick the second color button to change the bottom color.",
    tt0: "Marker Tool:\nSmooths out after drawing.",
    tt1: "Line Tool",
    tt2: "Path Tool:\nHold Shift to start a new path.\nClick and drag to add new points.\nRelease Shift to finish.",
    tt3: "Eraser Tool:\nThat thing you guys asked me to keep.",
    tt4: "Line Eraser Tool:\nThat thing you guys asked me to keep even though it was a glitch.",
    tt5: "Closed Path Tool:\nHold Shift to start a new shape.\nClick and drag to add new points.\nRelease Shift to finish and close path.",
    tt6: "Shape Eraser Tool:\nHold Shift to start a new cutout.\nClick and drag to add new points.\nRelease Shift to finish and close path.",
    tt7: "Free Shape Tool:\nCloses path after drawing.",
    tc0: "Black Pen:\nA standard and all purpose pen color",
    tc1: "White Pen:\nAn ancient eraser from a simpler time",
    tc2: "Purple Pen:\nA remnant of old, this pen has been upgraded",
    tc3: "Orange Pen:\nA remnant of old, this pen is glowing with double power",
    tc4: "Red Pen:\nA remnant of old, this pen is at its maximum potential",
    do0: "Undo:\nUndo a Path.",
    do1: "Redo:\nRedo an undone Path.",
    do2: "Download:\nUseless.",
    do3: "Clear:\nRemove all Paths. Cannot be undone.",
};

var translation = ["進むや取ることができる。",
"このマスに進む。",
"このマスの駒を取る。",
"(防御不能) 進むや取ることができる。",
"(防御不能) 進む、取るや味方と入れ替えることができる。",
"(防御不能) テレポートする。",
"(魔法) 目標を撃つ。",
"[コスト２]: (魔法) 敵駒を味方の「ナエギ」に変化し、あるいは「ナエギ」を召喚する。",
"(魔法) 敵生駒を仲間とする。",
"[コスト４]: (魔法) コスト０の「ドクロ」を召喚する。",
"元地点から進むことができる。",
"(魔法) 敵駒を毒殺し、３ターン後で取る。",
"(魔法) 敵駒を凍り付き、３ターンまで何もできなくなる。",
"(遠距離) 敵駒を石化し、５ターンまで何もできなくなる。",
"(魔法) 目標をでたらめに選んだ生駒に変化する。",
"(魔法) 目標をでたらめに選んだ地点に移送する。",
"(防御不能) このマスに進んで、隣の駒をでたらめに移送する。",
"[コスト ３] 。",
"(魔法) 味方を加護し、２ターンまで近距離で取られなくなる。",
"[コスト １]: (魔法) 敵駒を「ユウレイ」に変化する。",
"(防御不能) 元地点からテレポートすることができる。",
"(条件付き) 近距離で取られるとき、可能ならここで味方の「スライム」を召喚する。",
"(条件付き) 近距離で取られるとき、可能なら１０コストを減ってここで復活する。",
"(防御不能) 敵生駒を取る。",
"(条件付き) 敵駒がいるとき、手番の始まりで目標を取る。",
"指定された目標",
"「指定された目標」をこのマスに移送する。",
"[コスト １]: (遠距離) 目標を３マスまで吹っ飛ばす。",
"[コスト ６]: (遠距離) 同じコスト「わかれたフタゴ」二つに、このマスに分割する。",
"(魔法) このマスに「王将」を移送する。",
"(防御不能) テレポートするや味方と入れ替えることができる。",
"(魔法) 自分を破壊して、最近取られた、この駒のコストの二倍以下の味方の成駒を復活する。",
"[コスト １]: (条件付き) 味方がいるとき、可能なら手番の始まりで目標を癒し、邪魔効果をなくする。",
"[コスト ２]: (魔法) 味方の「ドクロ」を強化し、あるいは敵生駒を味方の「ガイコツ」に変化する。",
"(受動) 一回だけ攻撃をブロックする。\n(能動) 進むや取ることができる。",
"(条件付き) 取られるとき、この範囲の敵全体を凍り付く。",
"(魔法) 自分をここに破壊して、敵駒を凍り付き、３ターンまで何もできなくなる。",
"(制止不能) 「コウモリ」に変化して、このマスに飛び越す。",
"一回だけ、味方の成駒と取り変えて、二つ駒を中間に移動する。",
"[コスト １]: 位置をマークして、４ターン後でいる駒を「魔法」で撃つ。",
"(魔法, 条件付き) 敵駒がいるとき、可能なら敵手番の終わりで目標を１マスで近くに移動する。",
"(遠距離) 目標を撃つ。",
"(魔法) 目標を「指定された目標」に移送する",
"[コスト １]: (魔法) 目標を「指定された目標」までに移動する。",
"(条件付き) 味方の成駒が敵ターゲットされるとき、自分を目標と入り替えて攻撃を受けてしまう。",
"(魔法) 敵駒の種類に変化する。",
"(魔法) 目標を１マスまで吹っ飛ばして、２ターンで凍り付ける。",
"(受動) このマスの駒で近距離で取られるとき、攻撃者と共に取られる。",
"[コスト １]: (魔法) 目標を３マスまで吹っ飛ばす。",
"(遠距離) 敵駒を魅惑され,３ターンまで敵手番の終わりで攻撃者へ移動してしまう。",
"(魔法) 自分を破壊し、この位置をマークする。この位置は２０ターン後で:\n敵駒がいれば、「魔法」で撃つ。\n味方の駒がいれば、２ターンで加護する。\n何もいなければ、自分を復活する。",
"敵駒を３マスまで吹っ飛ばす。何と衝突すれば、敵駒を取ることができる。",
"(防御不能) このマスの駒を取る。",
"[コスト １]: (魔法) 「石柱」を召喚し、あるいは敵駒を石化し、４ターンまで何もできなくなる。",
"[コスト ３]: (魔法) 位置をマークして、６ターン後でいる駒を撃って、そして隣の駒を１マスまで吹っ飛ばす。"];

/* K It's over

_.forEach(translation, function(m, ix) {
   MOVES[ix].text = m;
});

//*/

// ORGANIZATION PURPOSE ARRAYS
var SMOVE = {}, //Lookup key by move name
    IMOVE = [], //Lookup key by move id
    SLEVEL = [];//Lookup key by level id

function makeLookup () {
    _.forEach(MOVES, function(m, ix) {
        SMOVE[m.name] = ix;
        IMOVE[m.id] = ix;
    });

    _.forEach(LEVELS, function(m, ix) {
        SLEVEL[m] = ix;
    });
}
