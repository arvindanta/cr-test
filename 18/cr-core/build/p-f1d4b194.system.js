System.register(["./p-c66836e9.system.js"],(function(e){"use strict";var i,a,r;return{setters:[function(e){i=e.a;a=e.c;r=e.d}],execute:function(){var n={lessThanXSeconds:{one:"moins d’une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d’une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d’un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu’un an",other:"presque {{count}} ans"}};var t=e("f",(function e(i,a,r){var t;var o=n[i];if(typeof o==="string"){t=o}else if(a===1){t=o.one}else{t=o.other.replace("{{count}}",String(a))}if(r!==null&&r!==void 0&&r.addSuffix){if(r.comparison&&r.comparison>0){return"dans "+t}else{return"il y a "+t}}return t}));var o={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]};var s={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]};var m={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]};var d={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]};var u={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}};var v=function e(i,a){var r=Number(i);var n=a===null||a===void 0?void 0:a.unit;if(r===0)return"0";var t=["year","week","hour","minute","second"];var o;if(r===1){o=n&&t.includes(n)?"ère":"er"}else{o="ème"}return r+o};var l=e("l",{ordinalNumber:v,era:i({values:o,defaultWidth:"wide"}),quarter:i({values:s,defaultWidth:"wide",argumentCallback:function e(i){return i-1}}),month:i({values:m,defaultWidth:"wide"}),day:i({values:d,defaultWidth:"wide"}),dayPeriod:i({values:u,defaultWidth:"wide"})});var h=/^(\d+)(ième|ère|ème|er|e)?/i;var c=/\d+/i;var f={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i};var p={any:[/^av/i,/^ap/i]};var b={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i};var j={any:[/1/i,/2/i,/3/i,/4/i]};var w={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i};var y={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]};var P={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i};var g={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]};var J={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i};var M={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}};var C=e("m",{ordinalNumber:a({matchPattern:h,parsePattern:c,valueCallback:function e(i){return parseInt(i)}}),era:r({matchPatterns:f,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"}),quarter:r({matchPatterns:b,defaultMatchWidth:"wide",parsePatterns:j,defaultParseWidth:"any",valueCallback:function e(i){return i+1}}),month:r({matchPatterns:w,defaultMatchWidth:"wide",parsePatterns:y,defaultParseWidth:"any"}),day:r({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:g,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:J,defaultMatchWidth:"any",parsePatterns:M,defaultParseWidth:"any"})})}}}));