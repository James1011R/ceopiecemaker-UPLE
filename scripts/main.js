var CUSTOM = 0;
var mysvg;
var config = {};
/* Declare functions so they can be used without definition
// function updateSVG() {}

// function getSpell() {}

// function setSpellOnBoard() {}

// function loadMove() {}

function makeSVGTag(tagName, properties) {
  var keys = Object.keys(properties);
  var ret = "<" + tagName;
  for (var i = 0; i < keys.length; i++) {
    ret += " " + keys[i] + '="' + properties[keys[i]] + '"';
  }
  ret += "/>";
  return ret;
}

function makeSVGTagContent(tagName, properties, content) {
  var keys = Object.keys(properties);
  var ret = "<" + tagName;
  for (var i = 0; i < keys.length; i++) {
    ret += " " + keys[i] + '="' + properties[keys[i]] + '"';
  }
  ret += ">" + content.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</" + tagName + ">";
  return ret;
}
*/

// $("#code").val(defs);

if (window.location.search && URLSearchParams) {
  var qS = new URLSearchParams(window.location.search);
  if (qS.has("q")) $("#code").val(qS.get("q"));
  if (qS.has("c")) {
    var i;
    for (i = 9; i <= +qS.get("c"); i++) {
      MOVES.push({
        "name": "custom" + i,
        "id": "c" + i,
        "cat": "custom",
        "text": "Custom ability " + i + " (Double Click Menu Icon to Edit)",
        "color": [97, 97, 97],
        "symbol1": "0"
      });
      if (i == 32 && i != +qS.get("c")) {
        alert("Requested number of custom squares too large.\nYou're probably StratShotPlayer\nCutting off at 32.");
        i++;
        break;
      }
    }
    CUSTOM = i - 1;
  }
}

initializeBoards();
makeLookup();

// Create stylesheet element
var style = document.createElement("style");
$("#style").append(style);

if (!(CSS && CSS.escape)) var CSS = {
  escape: a => a.replace(/"/g, "\\\"")
};

function createColors(m) {
  var tintColor = [];
  for (var n = 0; n < 3; n++) {
    tintColor[n] = Math.floor((255 - (m.color || [0, 0, 0])[n]) / 2 + (m.color || [0, 0, 0])[n]);
  }
  return ([
    m.color || [0, 0, 0],
    m.color2 || tintColor || [255, 255, 255],
    m.color3 || m.color || [0, 0, 0],
    m.color4 || m.color3 || m.color || [0, 0, 0],
    m.color5 || m.color4 || m.color3 || m.color || [0, 0, 0]
  ]);
}

//makeRule function: i think it's useful
function makeRule(m) {
  var rule = ".",
    usedColors = createColors(m);
  var merge = (m.symbol1 || "") + (m.symbol2 || "")  + (m.symbol3 || "");
  rule += m.name;
  rule += "::before{";
  rule += "border:2px solid rgb(" + usedColors[0] + ");";
  rule += "background:rgb(" + usedColors[1] + ");";
  rule += "color:rgb(" + usedColors[2] + ");";
  rule += "content:\"" + (merge ? CSS.escape(merge) : "") + "\";";
  rule += "}";
  return rule;
}

// Apply each move to style
//MOVES.forEach(function (m) { //tony2 you are really lazy
for (var i = 0; i < MOVES.length; i++) { //there
  style.sheet.insertRule(makeRule(MOVES[i]), i);
}
document.styleSheets[1] = style;

// Define <li> for each move
preloadSpells();

for (var i = 0; i < MOVES.length; i++) {
  var className = MOVES[i].name;
  if (MOVES[i].cat == "limbo") className += " limbo";
  if (MOVES[i].cat == "pretend") className += " pretend";
  if (MOVES[i].cat == "custom") className += " custom";
  if (MOVES[i].cat == "scenario") className += " scenario";
  if (MOVES[i].cat == "deconfirmed") className += " deconfirmed";
  if (MOVES[i].hide) className += " hide";
    $(".moves").append(makeSVGTagContent("svg", {
      class: className,
      "data-description": MOVES[i].text,
      width: 15,
      height: 15
    }, ""));
}
$(".moves svg").each(function() {
  var currentSpell = MOVES[SMOVE[this.classList[0]]];
  this.insertAdjacentHTML('beforeend', makeSVGTag("use", {
    x: 0,
    y: 0,
    class: "spell-gallery",
    "data-index": i,
    "data-id": currentSpell.id,
    href: "#spell-" + currentSpell.name,
    transform: "scale(1.25)"
  }));
});
//$("#moves").append("<li class=\""+className+"\">"+MOVES[i].text+"</li>\n");

//$(".moves .custom").prop("contenteditable", true); //let's not :v

$("#shactive").click(function() {
  if (this.innerHTML.match(/Show/ig)) {
    $("#action").addClass("show");
    $(this).text($(this).text().replace(/Show/ig, "Hide"));
  } else {
    $("#action").removeClass("show");
    $(this).text($(this).text().replace(/Hide/ig, "Show"));
  }
});

$("#shscenario").click(function() {
  if (this.innerHTML.match(/Show/ig)) {
    $("#action").addClass("showscenario");
    $(".moves.gallery").addClass("showscenario");
    $(this).text($(this).text().replace(/Show/ig, "Hide"));
  } else {
    $("#action").removeClass("showscenario");
    $(".moves.gallery").removeClass("showscenario");
    $(this).text($(this).text().replace(/Hide/ig, "Show"));
  }
});

$("#shdeconfirmed").click(function() {
  if (this.innerHTML.match(/Show/ig)) {
    $("#action").addClass("showdeconfirmed");
    $(".moves.gallery").addClass("showdeconfirmed");
    $(this).text($(this).text().replace(/Show/ig, "Hide"));
    $(this).text($(this).text().replace(/not recommended/ig, "recommended"));
  } else {
    $("#action").removeClass("showdeconfirmed");
    $(".moves.gallery").removeClass("showdeconfirmed");
    $(this).text($(this).text().replace(/Hide/ig, "Show"));
    $(this).text($(this).text().replace(/recommended/ig, "not recommended"));
  }
});

// Current tool
var ACTION;

function setAction(action) {
  $("#action ." + ACTION).removeClass("active");
  $("#action ." + action).addClass("active");
  ACTION = action;
  loadMove(MOVES[SMOVE[action]]);
}
$("#action svg").click(function() {
  if (ACTION == this.classList[0]) return;
  setAction(this.classList[0]); // ensure we get customN not custom
});
setAction("moveattack");

//Doubleclick custom to edit
$("#action svg.custom").on("dblclick taphold", function() {
  cusLoadEdit(this.classList[0]);
});

function cusLoadEdit(moves) {
  //declare every parameter because lolfunctions
  var elm, col, tex, sy1, sy2, sy3, box, c11, c12, c13, c21, c22, c23, c31, c32, c33, c41, c42, c43, c51, c52, c53, cid = MOVES[SMOVE[moves]].id, nobox;
  //Load every parameters
  cusLoadCustom(moves);
  function cusLoadCustom(moves) {
    elm = MOVES[SMOVE[moves]];
    col = createColors(elm);
    tex = $("#text").val(elm.text);
    sy1 = $("#symbol1").val(elm.symbol1);
    sy2 = $("#symbol2").val(elm.symbol2);
    sy3 = $("#symbol3").val(elm.symbol3);
    box = $("#nobox").prop("disabled", elm.nobox);
    c11 = $("#color11").val(col[0][0]);
    c12 = $("#color12").val(col[0][1]);
    c13 = $("#color13").val(col[0][2]);
    c21 = $("#color21").val(col[1][0]);
    c22 = $("#color22").val(col[1][1]);
    c23 = $("#color23").val(col[1][2]);
    c31 = $("#color31").val(col[2][0]);
    c32 = $("#color32").val(col[2][1]);
    c33 = $("#color33").val(col[2][2]);
    c41 = $("#color41").val(col[3][0]);
    c42 = $("#color42").val(col[3][1]);
    c43 = $("#color43").val(col[3][2]);
    c51 = $("#color51").val(col[4][0]);
    c52 = $("#color52").val(col[4][1]);
    c53 = $("#color53").val(col[4][2]);
    //Update
    $("[type=checkbox]").prop("checked", false); //uncheck boxes
    $(".cusmodal input").prop("disabled", false); //undisable inputs
    nobox = $("#nobox").prop("checked", elm.nobox);

    $("[id^=color1],[id^=color2]").prop("disabled", elm.nobox);
    //$(".giant").text(sy1.val() + sy2.val()+ sy3.val()); //update content
    //$(".giant").css("border-color", "rgb(" + c11.val() + "," + c12.val() + "," + c13.val() + ")"); //update c1
    //$(".giant").css("background", "rgb(" + c21.val() + "," + c22.val() + "," + c23.val() + ")"); //update c2
    //$(".giant").css("color", "rgb(" + c31.val() + "," + c32.val() + "," + c33.val() + ")"); //update c3
    //$(".giant").css("color", "rgb(" + c41.val() + "," + c42.val() + "," + c43.val() + ")"); //update c4
    loadMove(elm);
    updateCustom();
  }

  function updateCustom(){
    $(".giant").html(makeSpellSVG());
  }
  //Load actual menu
  $(".modalwrapper").show();

  $(".cusmodal input").bind("mouseup keyup", function() {
    if (this.id == "nobox") {
      $("[id^=color1],[id^=color2]").prop("disabled", !this.checked);
      if ($("#colour2")[0].checked && this.checked) {
        $("[id^=color2]").prop("disabled", true);
      }
      if (!this.checked) {
        config.nobox = true;
      } else {
        config.nobox = false;
      }
      updateCustom();
    }
    if (this.id.startsWith("color") && $(this).val() === "") {
      $(this).val("0");
    }
    if (this.id.startsWith("color1")) {
      var cur = parseInt($(this).val(), 10);
      if ($("#colour2")[0].checked) {
        $("#color2" + this.id.slice(-1)).val(Math.floor((255 - cur) / 2 + cur));
      }
      if ($("#colour3")[0].checked) {
        $("#color3" + this.id.slice(-1)).val(cur);
      }
      if ($("#colour4")[0].checked) {
        $("#color4" + this.id.slice(-1)).val(cur);
      }
      if ($("#colour5")[0].checked) {
        $("#color5" + this.id.slice(-1)).val(cur);
      }
    }
    if (this.id.startsWith("color")) {
      config.color1 = "rgb(" + c11.val() + "," + c12.val() + "," + c13.val() + ")"; //update c1
      config.color2 = "rgb(" + c21.val() + "," + c22.val() + "," + c23.val() + ")"; //update c2
      config.color3 = "rgb(" + c31.val() + "," + c32.val() + "," + c33.val() + ")"; //update c3
      config.color4 = "rgb(" + c41.val() + "," + c42.val() + "," + c43.val() + ")"; //update c4
      config.color5 = "rgb(" + c51.val() + "," + c52.val() + "," + c53.val() + ")"; //update c5
      updateCustom();
    }
    // todo: rewrite all of these into svg
    if (this.id.startsWith("colour")) {
      $("[id^=color" + this.id.slice(-1) + "]").prop("disabled", !this.checked);
      if (!this.checked) {
        this.checked = true;
        $("[id^=color1]").keyup();
        this.checked = false;
      } else if ($("#nobox")[0].checked && this.id == "colour2") {
        $("[id^=color2]").prop("disabled", true);
      }
    }
    if (this.id.startsWith("symbol")) {
      if (_.every($("[id^=symbol]"), elm => elm.checkValidity())) {
        config.symbol1 = sy1.val();
        config.symbol2 = sy2.val();
        config.symbol3 = sy3.val();
        updateCustom();
      }
    }
    if (this.id == "unicode") {
      if (this.checkValidity() && this.value) $("#uniprev").val(String.fromCodePoint(parseInt($(this).val(), 16)));
    }
  });
  $(".cusmodal .moves svg").click(function() {
    cusLoadCustom(this.classList[0]);
  });
  $(".cusmodal #menuclose").one("click", function() {
    var jsn = {
      name: moves,
      id: cid,
      text: tex.val(),
      color: [parseInt(c11.val(), 10), parseInt(c12.val(), 10), parseInt(c13.val(), 10)],
      color2: [parseInt(c21.val(), 10), parseInt(c22.val(), 10), parseInt(c23.val(), 10)],
      color3: [parseInt(c31.val(), 10), parseInt(c32.val(), 10), parseInt(c33.val(), 10)],
      color4: [parseInt(c41.val(), 10), parseInt(c42.val(), 10), parseInt(c43.val(), 10)],
      color5: [parseInt(c51.val(), 10), parseInt(c52.val(), 10), parseInt(c53.val(), 10)],
      symbol1: sy1.val(),
      symbol2: sy2.val(),
      symbol3: sy3.val(),
      nobox: $("#nobox")[0].checked
    };
    $(".cusmodal input").off("click keyup");
    $(".cusmodal .moves li").off("click"); //prevent overloading
    $(".cusmodal #uniprev").off("click");
    //update everything
    DATA.custom = DATA.custom || {}; //create custom if it doesn't exist
    DATA.custom[cid] = jsn; //DATAbase for saving
    Object.assign(MOVES[SMOVE[moves]], jsn); //I dunno

    loadMove(MOVES[SMOVE[moves]]);
    document.getElementById("spell-"+moves).remove();
    document.getElementById("defs").insertAdjacentHTML("beforeend", makeSpellSVG());
    style.sheet.deleteRule(SMOVE[moves]);
    style.sheet.insertRule(makeRule(MOVES[SMOVE[moves]]), SMOVE[moves]); //Reapply css

    document.styleSheets[1] = style;
    $(".moves ." + moves).attr("data-description", MOVES[SMOVE[moves]].text);
    //Hide actual menu
    $(".modalwrapper").hide();
    setAction(moves); //to actually use it
    for (var l = 0; l < 4; l ++) {
      var curLev = LEVELS[l];
      var isDisplay = /inline/.test($("#" + curLev + " svg." + moves)[0].getAttribute("style"));
      if (isDisplay) {
        removeDisplay(curLev, moves);
        setDisplay(curLev, moves);
      }
    }
  });
}
$("#hidebutton").click(function(e) {
  $("#controls").toggleClass("slide");
  if ($("#controls").is(".slide")) {
    $("#controls").css("right", (10 - $("#controls").width()) + "px");
  } else {
    $("#controls").css("right", 0);
  }
});

/* not vanilla jq
$("#controls").swipeleft(function(){
   if($("controls").is(".slide"))return;
   $("#hidebutton").click();
});
$("#controls").swiperight(function(){
   if(!$("controls").is(".slide"))return;
   $("#hidebutton").click();
})
//*/

/*// Function by PaulIrish in https://www.broken-links.com/2009/01/20/very-quick-equal-height-columns-in-jquery/#comment-23624
$.fn.syncHeight = function() {
    return this.height(Math.max.apply(this, $.map(this, function(e) { return $(e).height(); })));
};

$(".WARN").remove();
$(window).resize(function() { $(".cusmodal").syncHeight; });
$(".cusmodal").syncHeight();
$(".modalwrapper").hide();
//unused now*/

// Define <li? for each passive
var $passives = $("#passives");
var curPASSIVE = "base";
_.forEach(PASSIVES, function(p) {
  $passives.append("<li>" + p + "</li>");
});
// set target for all passizves
$("section .passives").focus(function() {
  curPASSIVE = level(this);
});
$("#passives li:not([id])").click(function() {
  var text = this.innerText || "";
  appendPassive(text);
});
$("#ctrlclear").click(function() {
  $("div.passives").text("").attr("data-raw", "").attr("data-description", "").keyup();
});

function appendPassive(text) {
  var oldtext = $("#" + curPASSIVE + " .passives").attr("data-raw") && $("#" + curPASSIVE + " .passives").attr("data-raw").concat("\n") || "";
  $("#" + curPASSIVE + " .passives").text(oldtext + text);
  setPassive(oldtext + text, curPASSIVE);
}

function setPassive(text, level) {
  var old = $("#" + level + " .passives").attr("data-raw");
  var oldhtml = $("#" + level + " .passives").html();
  text = cleanseText(text);
  $("#" + level + " .passives").attr("data-description", parseText(text, level)).attr("data-raw", text);
  DATA[level].passives = text;
  //if (level != curPASSIVE)
  //    $("#" + level + " .passives").text(DATA[level].passives);
  if ((level = nextLevel(level)) && old == $("#" + level + " .passives").attr("data-raw")) {
    $("#" + level + " .passives").html(oldhtml);
    setPassive(text, level);
  }
}


$("div.passives").keyup(function() {
  if (cleanseText(this.innerHTML).replace("\n", "").length == 0) {this.innerHTML = ""}
  setPassive(this.innerHTML, curPASSIVE);
});
$("div.passives").keydown(function() {
  if (cleanseText(this.innerHTML).replace("\n", "").length == 0) {this.innerHTML = ""} // main_gi: attempt to clear passives if empty
  setPassive(this.innerHTML, curPASSIVE);
});
/*
main_gi: This has never updated instantly. This makes it look better.
*/

function parseText(text, i) {
  i = SLEVEL[i];
  text = text.replace(/\[\+\]/g, "+".repeat(i));
  text = text.replace(/(\-?\d+)\[(\+\d+|\-\d+)\]/g, function(a, b, c) {
    return Number(b) + Number(c) * i;
  });
  text = text.replace(/&gt;/g, ">").replace(/&lt;/g, "<");
  return text;
}

function cleanseText(text) {
  text = text.replace(/^(<div[>]*?>)+|(<br[>]*?>)?(<\/div>)+$/g, "");
  text = text.replace(/(?=(<br[>]*?>)|(<\/div>)+|(<div[>]*?>)+)(<br[>]*?>)?(<\/div>)*(<div[>]*?>)*/g, "\n");
  return text;
}

// Piece data to be saved/restored
var DATA = {
  name: "Name",
  labels: {
    rank: "Minion",
    faction: "Basic",
    rarity: "Common"
  },
  base: {
    cost: 1,
    moves: {},
  },
  plus: {
    cost: 2,
    moves: {},
  },
  plusplus: {
    cost: 3,
    moves: {},
  },
  plusplusplus: {
    cost: 4,
    moves: {},
  },
  custom: {}
};

// Clear background
var sketch = $("#c").sketch().sketch();

function pos(td) {
  var tr = td.parentNode,
    c = 0,
    r = 0;
  while (td = td.previousSibling) c++;
  while (tr = tr.previousSibling) r++;
  return [r, c];
}

function td(level, pos) {
  var tr = $("#" + level + " tr")[+pos[0]];
  return tr.childNodes[+pos[1]];
}

function count(level, cell) {
  if (cell.className === "") return;
  var cid = MOVES[SMOVE[cell.className]].id;
  if (DATA[level].moves[cid]) setDisplay(level, cell.className);
  else removeDisplay(level, cell.className);
}

function setMove(level, cell, cls) {
  var old = cell.className,
    oid = old === "" ? "" : MOVES[SMOVE[old]].id,
    cid = cls === "" ? "" : MOVES[SMOVE[cls]].id;
  var p = pos(cell);
  if (old !== "") DATA[level].moves[oid] = DATA[level].moves[oid].replace(new RegExp(p[0].toString(16) + p[1].toString(16) + "(?=(..)*$)", "g"), "");
  if (DATA[level].moves[oid] === "") delete DATA[level].moves[oid];
  count(level, cell);
  cell.className = cls;
  if (cls !== "") DATA[level].moves[cid] = DATA[level].moves[cid] ? DATA[level].moves[cid] + p[0].toString(16) + p[1].toString(16) : p[0].toString(16) + p[1].toString(16);
  count(level, cell);

  // Apply move to subsequent level
  if (level = nextLevel(level)) {
    cell = td(level, p);
    if (cell.className == old) {
      setMove(level, cell, cls);
    }
  }
}

function setDisplay(level, cls) {
  DATA[level].moves[MOVES[SMOVE[cls]].id] = DATA[level].moves[MOVES[SMOVE[cls]].id] || "";
  $("#" + level + " .moves svg." + cls).css("display", "inline");
  var svgMove = $("#" + level + " .moves svg." + cls)[0];
  if (!svgMove.nextSibling || svgMove.nextSibling.tagName.toLowerCase() == "svg") {
    svgMove.insertAdjacentHTML("afterend", "<p contenteditable='true' spellcheck='false'>" + svgMove.dataset.description + "</p>");
  }
}

function removeDisplay(level, cls) {
  $("#" + level + " .moves svg." + cls).css("display", "none");
  var nc = $("#" + level + " .moves svg." + cls)[0].nextSibling || {tagName: ""};
  if(nc.tagName.toLowerCase() == "p") {
    nc.remove();
  }
}

function nextLevel(level) {
  return LEVELS[SLEVEL[level] + 1];
}

function level(el) {
  return $(el).closest("section").attr("id");
}

function getPos(el, level) {
  var i = $("#" + level + " td").index(el);
  return {
    x: i % 15 - 7,
    y: ~~(i / 15) - 7
  };
}

function redPos(v) {
  var g = gcd(v.x, v.y);
  return {
    x: v.x / g,
    y: v.y / g
  };
}

function gcd(x, y) {
  return y ? gcd(y, x % y) : Math.abs(x);
}

function setPos(v, level) {
  return $("#" + level + " td")[(v.x + 7) + (v.y + 7) * 15];
}

function outBoard(v) {
  return Math.abs(v.x) > 7 || Math.abs(v.y) > 7;
}

function Mark(el) {
  $(el).addClass("mark");
}

var mouse = {
  down: -1,
  mode: "add"
};
var moose = {
  click: 0
};
var COLOR = ACTION;

// main_gi: All this code was for the non-svg version.
/*
$("td.piece").mousedown(function() {
  moose.click++;
  clearTimeout(moose.reset);
  moose.reset = setTimeout(function() {
    moose.click = 0;
  }, 300);
  if (moose.click == 2) return mouse.dbl = level(this);
  else if (moose.click == 1) return mouse.line = level(this);
});
$("td").mouseover(function() {
  if (this.className == "piece") return;
  //NOTE: If this somehow backfires and ends up causing heavy lag like sketch.js does, BLAME MAIN_GI.
  var s, v;
  $(".mark").removeClass("mark");
  if (mouse.dbl == level(this)) {
    s = getPos(this, level(this));
    v = s;
    do {
      Mark(setPos(v, level(this)));
    } while (!outBoard(v = {
        x: v.x + s.x,
        y: v.y + s.y
      }));
  } else if (mouse.line == level(this)) {
    v = getPos(this, level(this));
    s = redPos(v);
    do {
      Mark(setPos(v, level(this)));
    } while ((v.x -= s.x) | (v.y -= s.y));
  } else if (mouse.down == level(this))
    setMove(level(this), this, COLOR);
});

$("td").mouseup(function() {
  $(".mark").removeClass("mark"); //They were cancer and will remain_gi to be.
  var s, v;
  if (mouse.dbl == level(this)) {
    if (this.className == "piece") return setDisplay(level(this), ACTION);
    s = getPos(this, level(this));
    v = s;
    do {
      setMove(level(this), setPos(v, level(this)), ACTION);
    } while (!outBoard(v = {
        x: v.x + s.x,
        y: v.y + s.y
      }));
  } else if (mouse.line == level(this)) {
    if (this.className == "piece") return $(document).trigger("mouseup");
    v = getPos(this, level(this));
    s = redPos(v);
    do {
      setMove(level(this), setPos(v, level(this)), ACTION);
    } while ((v.x -= s.x) | (v.y -= s.y));
  }
});*/

$(document).mouseup(function() {
  //mouse = {};
  COLOR = ACTION;
});

$("td").contextmenu(function(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}); //suggestion by main_gi

// Set up drawing on first canvas. When the drawing pauses, draw a copy to the upgraded canvases
// with their own shadows. Updated to cope with Un/Re/Clear options
function mirrorImage() {
  $(".mirror").each(function() {
    var mi = this.getContext("2d");
    mi.clearRect(0, 0, this.width, this.height);
    mi.shadowBlur = 10;
    mi.shadowColor = $(this).attr("data-shadow");
    mi.drawImage(c, 0, 0, this.width, this.height);
  });
}

$("#c").on("draw", function() {
  view.update();
  mirrorImage();
  saveImage();
});

// Show description on mouseover of functions
$("[mode=tools] a").mouseover(function() {
  $("#toolinfo").text(TOOLTIPS[this.id]);
});

// When the name changes, update the other names.
$("#name").keyup(function() {
  dirty().name = this.textContent;
  $("#plus .name").text(DATA.name + "+");
  $("#plusplus .name").text(DATA.name + "++");
  $("#plusplusplus .name").text(DATA.name + "+++");
});

function deltaCost(level, delta) {
  DATA[level].cost += delta;
  $("#" + level + " input").val(DATA[level].cost);
  // Apply move to subsequent level
  if (level = nextLevel(level)) deltaCost(level, delta);
}
$(".cost input").on("keyup mouseup", function() {
  var lv = level(this);
  deltaCost(lv, (+this.value) - DATA[lv].cost);
});
$("input[type=number]").on("wheel", function(e) {
  e.preventDefault();
}); //Lazy approach to support edge cases: Remove them :D

//Toggle labels
$(".info span").click(function() {
  var labels = LABELS[this.className],
    ix = labels.indexOf(this.innerText);
  ix += 1;
  ix %= labels.length;
  $(".info span." + this.className).text(labels[ix]);
  DATA.labels[this.className] = labels[ix];
});

// Tabs
$("#controls > nav > a").click(function() {
  document.body.setAttribute("mode", this.getAttribute("mode"));
});

// local preview -- hack for offline versions (forgive meh)
function screensave() {
  $("#saveimage").prop("disabled", true).text("Saving");

  var ugh = setTimeout(function() {
    $("#saveimage").text("Something's not quite right...");
  }, 20000); //For lulz

  var $b = $("#boards").clone();
  // Insert all available color codes
  _.forEach(Array.prototype.slice.call(style.sheet.cssRules), function(item) {
    $b.find("#style style")[0].innerHTML += item.cssText;
  });
  // remove controls
  $b.find("#controls").remove();

  // replace canvas with image; put correct number in for cost (using input not working)
  _.forEach(LEVELS, function(level) {
    var c = $("#" + level + " canvas")[0];
    
    // NOTE: Probably revert to using src when the bug is fixed
    $b.find("#" + level + " canvas").replaceWith("<img class=\"c\" width=\"" + $(c).width() + "\" height=\"" + $(c).height() + "\" style=\"background: url(" + c.toDataURL("image/png") + ")\"/>");
    // main_gi: Commented out the above line because it was causing problems with the height of the +0 version being displaced.
    // main_gi: Uncommented because apparently causes the whole thing not to work

    $b.find("#" + level + " .cost input").replaceWith("" + DATA[level].cost);
    //replace passives::after with passives. Used to circumvent whitespace bugs.
    $b.find(".passives").each(function(a, b) {
      b.innerText = $(b).attr("data-description") || "";
      $(b).addClass("screen");
    });
  });

  $b.css("width", "auto");
  $b.appendTo($("#bgproc"));
  if ($("#savenoimage")[0].checked) {
    $b.find("img, canvas").remove();
  }
  if ($("#savenoinfo")[0].checked) {
    $b.find(".info").remove();
  }
  if ($("#savefirst")[0].checked) {
    $b.find("section:not(#base)").remove();
    $b.find("#contents").css({
      "min-width": "auto"
    });
  }
  if ($("#savecompact")[0].checked) {
    $b.find("#contents").css("flex-direction", "column");
    $b.find("section").css({
      height: "280px",
      "flex-wrap": "wrap"
    });
    $b.find(".cost+div").css({
      height: "258px",
      "min-width": "258px",
      "width": "auto",
      "margin-bottom": "0px"
    });
    $b.find("img, canvas").css("margin", "90px 0");
    $b.find(".cost+div").each(function() {
      $(this).find(".passives").each(function() {
        if (this.innerHTML !== "") this.innerHTML += "\n";
      });
      $(this).css("width", (((this.scrollWidth / 260) * 274 - 12) >>> 0) + "px");
    });
    $b.find("#contents").css({
      "min-width": "auto"
    });
  }

  setTimeout(function() {
    var $cv = $("<canvas id=\"cv\" width=\"" + ($b[0].scrollWidth + 10) + "\" height=\"" + ($b[0].scrollHeight + 10) + "\"></canvas>");
    rasterizeHTML.drawHTML(
      $b.parent().html(),
      $cv[0]
    ).then(function() {
      $("head").append($("<a href=\"" + $cv[0].toDataURL("image/png") + "\" download=\"PieceMaker-" + DATA.name + ".png\"/>")[0]);
      $("head a")[0].click();
      $("head a")[0].remove();
      clearInterval(ugh); //For unlulzing
      $("#saveimage").prop("disabled", false).text("Save Image to Computer");
      $("#saveuri").prop("disabled", false);
      $b.remove();
    });
  }, 0);
}
/** Note: There used to be a "Copy to Clipboard" function here, but seemingly no browser supports it, so I'll just leave the unique part for reference.
 *
 *function(){$("head").append($("<img src=\""+$cv[0].toDataURL("image/png")+"\"/>")[0]);var $ra = document.createRange(); $ra.selectNode($("head img")[0]); window.getSelection().addRange($ra); document.execCommand("copy"); $("head img")[0].remove();}); //*/

$("#saveuri").click(function() {
  if ($("#saveuri")[0].checked) {
    $("#saveimage").text("Save Image as URI");
  } else {
    $("#saveimage").text("Save Image to Computer");
  }
});
$("#saveimage").click(function() {
  screensave();
});
$("#exj").click(function() {
  $("#code").val(toCSV(DATA));
});
$("#exjh").click(function() {
  var uri = {
    q: toCSV(DATA)
  };
  if (CUSTOM) uri.c = CUSTOM;
  history.replaceState("", "", "index.html?" + $.param(uri));
});
$("#imj").click(function() {
  var code = $("#code").val();
  validate(code);
});
$("input, button").prop("disabled", false);


$("#hsc").click(function() { // main_gi: Hide/show cost
  if ($(".cost").css("display") != "none") {
    $(".cost").css("display", "none");
    $("#hsc")[0].innerHTML = "Hide/Show Cost (hidden)";
  } else {
    $(".cost").css("display", "initial");
    $("#hsc")[0].innerHTML = "Hide/Show Cost (shown)";
  }
  
});
$("#hst").click(function() { // main_gi: Hide/show type
  if ($(".info").css("display") != "none") {
    $(".info").css("display", "none");
    $("#hst")[0].innerHTML = "Hide/Show Type (hidden)";
  } else {
    $(".info").css("display", "initial");
    $("#hst")[0].innerHTML = "Hide/Show Type (shown)";
  }
  
});


// All of these shit is created thanks to main_gi, the ultimate destroyer of the whole script of PM.
// main_gi: You're welcome!

function toCSV() {
  function ep(a) { //The EverythingParser: I'M SO FUCKING TIRED OF THINKING SOLUTIONS
    switch (typeof a) {
      case "boolean":
        return a.toString();
      case "number":
        return a + "";
      case "string":
        return a.replace(/\\/g, "\\b").replace(/\n/g, "\\n").replace(/,/g, "\\a").replace(/:/g, "\\o");
      case "object":
        if (a.constructor == Array)
          return a.map((t) => ep(t)) + "";
        else
          return Object.keys(a).map((t) => ep(t) + ":" + ep(a[t])) + "";
      case "undefined":
        return "";
    }
  }
  var csv = "";
  csv += [ep(DATA.name), ep(DATA.labels.rank), ep(DATA.labels.faction), ep(DATA.labels.rarity)] + "\n";
  csv += ep(DATA.sketch) + "\n";
  _.forEach(LEVELS, function(level) {
    var SDATA = DATA[level];
    csv += [ep(SDATA.cost), ep(SDATA.passives), ep(SDATA.moves)] + "\n";
  });
  _.forEach(Object.keys(DATA.custom), function(id) {
    var SDATA = DATA.custom[id];
    // var colorString = [].concat(SDATA.color, SDATA.color2, SDATA.color3, SDATA.color4, SDATA.color5).map(x => (256+x).toString(16).slice(1)).join("");
    csv += [ep(SDATA.id), ep(SDATA.text), ep(SDATA.symbol1), ep(SDATA.symbol2), ep(SDATA.color), ep(SDATA.color2), ep(SDATA.color3), ep(SDATA.color4), ep(SDATA.nobox), ep(SDATA.symbol3), ep(SDATA.color5)] + "\n";
  });
  return csv;
}

function toJSON(a) {
  function pe(foepyt) { //The PatternExtractor: IDK WHAT IM DOING HLEP
    var b;
    switch (foepyt) {
      case "boolean":
        a.replace(/^(.*?)(,|\n|$)([\S\s]*)/, function(s1, s2, s3, s4) {
          b = s2;
          a = s4;
        });
        return b === "true";
      case "number":
        a.replace(/^(.*?)(,|\n|$)([\S\s]*)/, function(s1, s2, s3, s4) {
          b = s2;
          a = s4;
        });
        return Number(b);
      case "character":
        a.replace(/^(.*?)(,|\n|$)([\S\s]*)/, function(s1, s2, s3, s4) {
          b = s2;
          a = s4;
        });
        return up(Array.from(b)[0] || "");
      case "string":
        a.replace(/^(.*?)(,|\n|$)([\S\s]*)/, function(s1, s2, s3, s4) {
          b = s2;
          a = s4;
        });
        return up(b);
      case "array":
        a.replace(/^(.*?)(\n|$)([\S\s]*)/, function(s1, s2, s3, s4) {
          b = s2;
          a = s4;
        });
        return b.split(",").map(function(t) {
          return up(t);
        }).filter(function(t) {
          return t !== "";
        });
      case "color":
        a.replace(/^(.*?),(.*?),(.*?)(,|\n|$)([\S\s]*)/, function(s1, s21, s22, s23, s3, s4) {
          b = [s21, s22, s23];
          a = s4;
        });
        return _.map(b, t => +t);
      case "object":
        a.replace(/^(.*?)(\n|$)([\S\s]*)/, (s1, s2, s3, s4) => {
          b = s2;
          a = s4;
        });
        return b.split(",").reduce((p1, p2) => {
          p2.replace(/^(.*?):(.*)/, (s1, s2, s3) => {
            p1[up(s2)] = up(s3);
          });
          return p1;
        }, {});
    }
  }

  function up(t) {
    return t.replace(/\\n/g, "\n").replace(/\\a/g, ",").replace(/\\o/g, ":").replace(/\\b/g, "\\");
  }
  var data = {
    name: pe("string"),
    labels: {
      rank: pe("string"),
      faction: pe("string"),
      rarity: pe("string")
    },
    sketch: pe("array"),
    custom: {}
  };
  _.forEach(LEVELS, function(level) {
    data[level] = {
      cost: pe("number"),
      passives: pe("string"),
      moves: pe("object")
    };
  });
  var tmp = a,
    tmz = a.match(/^.*?,.*?,.*?,.*?,.*?,.*?,.*?,.*?,.*?,.*?,.*?,.*?,.*?,.*?,.*?$/mg);
  if (tmz) _.forEach(tmz, function(t) {
    a = t;
    var id = pe("string");
    if (!MOVES[IMOVE[id]]) throw ({
      message: "Invalid moveSquare ID detected"
    });
    data.custom[id] = {
      id: id,
      name: MOVES[IMOVE[id]].name,
      text: pe("string"),
      symbol1: pe("character"),
      symbol2: pe("character"),
      color: pe("color"),
      color2: pe("color"),
      color3: pe("color"),
      color4: pe("color"),
      nobox: pe("boolean"),
      symbol3: pe("character"),
      color5: pe("color")
    };
  });
  a = tmp;
  return data;
}

function validate(source) {
  try { //Tests:
    console.log(source);
    DATA = toJSON(source); //Syntax test
    restore();
  } catch (e) {
    console.log(e);
    document.body.setAttribute("mode", "share");
    //$("#code").val("Error! " + e.message);
  }
}
//Save and Restore Functions

function saveImage() {
  DATA.sketch = sketch.actions;
}

function dirty() {
  return DATA;
}

function restore() {
  restoreName();
  restoreCustom();
  restoreMoves();
  restoreDisplay();
  restoreCost();
  restoreLabels();
  restorePassives();
  restoreImage();
}

function restoreName() {
  if (DATA.name === undefined) DATA.name = "PieceName";
  $("#name").text(DATA.name);
  $("#plus .name").text(DATA.name + "+");
  $("#plusplus .name").text(DATA.name + "++");
  $("#plusplusplus .name").text(DATA.name + "+++");
}

function restoreImage() {
  if (!DATA.sketch) return;
  sketch.actions = DATA.sketch;
  sketch.redraw();
}

function restoreDisplay() {
  for (var l = 0; l < 4; l++) {
    for (var i = 0; i < Object.keys(SMOVE).length; i++) {
      removeDisplay(LEVELS[l], Object.keys(SMOVE)[i]);
    }
  }
  $("section").each(function() {
    var level = this.id;
    _.forEach(Object.keys(DATA[level].moves), function(cls) {
      setDisplay(level, MOVES[IMOVE[cls]].name);
    });
  });
}

function restoreMoves() {
  for (var l = 0; l < 4; l++) {
    updateSVG(l);
    for (var i = 0; i < 225; i++) {
      if (getSpell(i).dataset) {
        getSpell(i).remove();
      }
    }
    var curMoves = DATA[LEVELS[l]].moves;
    var impList = {};
    var obKeys = Object.keys(curMoves);
    for (var i = 0; i < obKeys.length; i++) {
      impList[IMOVE[obKeys[i]]] = curMoves[obKeys[i]].match(/../g) || [];
    }
    obKeys = Object.keys(impList);
    for (var i = 0; i < obKeys.length; i++) {
      var coords = impList[obKeys[i]];
      loadMove(MOVES[obKeys[i]]);
      for (var j = 0; j < impList[obKeys[i]].length; j++) {
        setSpellOnBoard(parseInt(impList[obKeys[i]][j], 15));
      }
    }
  }
}

function restoreCost() {
  _.forEach(LEVELS, function(level) {
    $("#" + level + " .cost input").val(DATA[level].cost);
  });
}

function restoreLabels() {
  if (!DATA.labels) DATA.labels = {};
  for (var label in LABELS) {
    $(".info span." + label).text(DATA.labels[label] || LABELS[label][0]);
  }
}

function restorePassives() {
  for (var level in LEVELS) {
    curPASSIVE = LEVELS[LEVELS.length - level - 1];
    var p = DATA[curPASSIVE].passives || "";
    setPassive(p, curPASSIVE);
    var $d = $("#" + curPASSIVE + " .passives");
    $d.text($d.attr("data-raw"));
  }
  curPASSIVE = "base";
}

function restoreCustom() {
  if (!DATA.custom) return;
  for (var moves in DATA.custom) {
    var movename = DATA.custom[moves].name;
    Object.assign(MOVES[SMOVE[movename]], DATA.custom[moves]);

    loadMove(DATA.custom[moves]);
    document.getElementById("spell-"+movename).remove();
    document.getElementById("defs").insertAdjacentHTML("beforeend", makeSpellSVG());

    $(".moves ." + movename).attr("data-description", MOVES[SMOVE[movename]].text);
  }
}

$("#action svg, .cusmodalbody .moves.gallery svg").mouseenter(function () {
  tooltip.style.top = this.getBoundingClientRect().top + 20 + "px";
  tooltip.style.left = this.getBoundingClientRect().left - 5 + "px";
  tooltip.style.visibility = "visible";
  tooltip.innerText = this.dataset.description;
});
$("#action svg, .cusmodalbody .moves.gallery svg").mouseleave(function () {
  tooltip.style.visibility = "hidden";
});
if ($("#code").val()) validate($("#code").val());

$("#confirmToolSize").click(function() {
  let customToolSize = $("#customToolSize").val().trim();
  sketch.set("size", customToolSize)
})

$("#confirmToolColor").click(function() {
  let customToolColor = $("#customToolColor").val().trim();
  sketch.set("color", customToolColor)
})

function arrayspamming(value, len) {return Array.from({length: len}).map(x => value)} // array spammed with a value, length times, needed for spaghetti export to work, credit to main_gi

function numify (x) {return parseInt(x, 10)}
function tob15 (x) {rv = numify(x).toString(15); return (rv.length==1?"0":"") + rv} // "tob15" = "to base 15". Adds leading zeros too.

function tob10 (x) {return parseInt(x, 15)}

function x (i) {
  return (i % 15) - 7
}
function y (i) {
  return Math.floor(i / 15) - 7
}

function exportasgame () {
  // Exports to ingame code. Only for people trying to make a piece gallery, or think their ideas are so good that it needs as little time as possible to import.
  // THIS DOES NOT ACTUALLY MAKE IT COMPLETELY ACCURATE INGAME CODE, the result is only like half accurate, but all info in the result is enough to work for the gallery parser.
  // this code was written by main_gi

  rv = []

  for (let level in LEVELS) { // "LEVELS" is an array ["base", "plus", "plusplus", "plusplusplus"]. Conveniently, x is [0, 1, 2, 3] throughout this.
    let movelist = arrayspamming(0, 15*15)
    for (let levelmoves in DATA[`${LEVELS[level]}`].moves) {
      if (DATA[`${LEVELS[level]}`].moves[levelmoves].length > 0) { // This line is necessary so it doesn't error if it's blank.
        let moveresults = (DATA[`${LEVELS[level]}`].moves[levelmoves].match(/.{1,2}/g).map(z=>tob10(z)))
        for (let i = 0; i < moveresults.length; i++) {
          movelist[moveresults[i]] = levelmoves
        }
      }
    }
    a = level==0? "":(numify(level)+1).toString()    // this changes [0, 1, 2, 3] to ["", "2", "3", "4"]
    plusses = arrayspamming("+", level).join("") // nice function reuse

    bonusnonsense = ``

    let passive = `D_${DATA.name}${a}.Passive = "${DATA[`${LEVELS[level]}`].passives}";`.replace(/\n/g, "\\n")
    let movetypes = Object.keys(DATA[`${LEVELS[level]}`].moves).map(x=>numify(x)+1)

    let original_passive = `${DATA[`${LEVELS[level]}`].passives}`
    if (original_passive.match(/Promotes to (.+)/)) {bonusnonsense += `\nD_${DATA.name}${a}.Promote = "${passive.match(/Promotes to (.+)/)[1]}";`}
    if (original_passive.match(/On Death: Lose \d+/)) {bonusnonsense += `\nD_${DATA.name}${a}.Penalty = ${passive.match(/On Death: Lose (\d+)/)[1]};`}
    if (original_passive.includes("Status-Immune")) {bonusnonsense += `\nD_${DATA.name}${a}.StatusImmune = true;`}
    if (original_passive.match(/Immune to.+Freeze/)) {bonusnonsense += `\nD_${DATA.name}${a}.FreezeImmune = true;`}
    if (original_passive.match(/Immune to.+Petrify/)) {bonusnonsense += `\nD_${DATA.name}${a}.PetrifyImmune = true;`}
    if (original_passive.match(/Immune to.+Poison/)) {bonusnonsense += `\nD_${DATA.name}${a}.PoisonImmune = true;`}
    if (original_passive.match(/Immune to.+Compel/)) {bonusnonsense += `\nD_${DATA.name}${a}.CompelImmune = true;`}
    if (original_passive.includes("Displacement-Immune")) {bonusnonsense += `\nD_${DATA.name}${a}.DisplacementImmune = true;`}
    if (movetypes.includes(28)) {bonusnonsense += `\nD_${DATA.name}${a}.HasTarget = true;`}
    if (movetypes.includes(34)) {bonusnonsense += `\nD_${DATA.name}${a}.TurnTrigger = "Start";`} // Alchemist trigger
    if (movetypes.includes(42)) {bonusnonsense += `\nD_${DATA.name}${a}.TurnTrigger = "End";`} // Lust trigger

    //LEVELS[level]
    rv.push(`var D_${DATA.name}${a} = new Object();
UnitLibrary[Place] = "${DATA.name}${a}";
D_${DATA.name}${a}.Name = "${DATA.name}${plusses}";
D_${DATA.name}${a}.Index = Place; Place++;
D_${DATA.name}${a}.Cost = ${DATA[`${LEVELS[level]}`].cost};
D_${DATA.name}${a}.Rarity = "${DATA.labels.rarity}";
D_${DATA.name}${a}.Moves = [${movelist.map(x=>numify(x)+1).join(",")}];
D_${DATA.name}${a}.MoveTypes = [${movetypes}];${DATA[`${LEVELS[level]}`].passives? `\n` + `D_${DATA.name}${a}.Passive = "${DATA[`${LEVELS[level]}`].passives}";`.replace(/\n/g, "\\n") : ``}
D_${DATA.name}${a}.Minion = ${DATA.labels.rank == "Minion"?"true":"false"};${bonusnonsense}
D_${DATA.name}${a}.Tier = ${numify(level)+1};
D_${DATA.name}${a}.AIskip = 50;`)
  }
  return rv.join("\n\n")
}

document.getElementById("copyButton").addEventListener("click", function() {
  document.getElementById("copyTarget").value = exportasgame()
  copyToClipboard(document.getElementById("copyTarget"));
});
document.getElementById("movesetArray").addEventListener("click", function() {
  document.getElementById("copyTarget").value = ("[" + (/Moves = \[(.+)\]/gi).exec(  exportasgame()  )[1] + "]")
  copyToClipboard(document.getElementById("copyTarget"));
});

