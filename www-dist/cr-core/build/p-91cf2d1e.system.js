System.register(["./p-c66836e9.system.js"],(function(a){"use strict";var e,o,t,r;return{setters:[function(a){e=a.b;o=a.a;t=a.c;r=a.d}],execute:function(){var n={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xWeeks:{one:"1 semajno",other:"{{count}} semajnoj"},aboutXWeeks:{one:"proksimume 1 semajno",other:"proksimume {{count}} semajnoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preskaŭ 1 jaro",other:"preskaŭ {{count}} jaroj"}};var i=function a(e,o,t){var r;var i=n[e];if(typeof i==="string"){r=i}else if(o===1){r=i.one}else{r=i.other.replace("{{count}}",String(o))}if(t!==null&&t!==void 0&&t.addSuffix){if(t!==null&&t!==void 0&&t.comparison&&t.comparison>0){return"post "+r}else{return"antaŭ "+r}}return r};var m={full:"EEEE, do 'de' MMMM y",long:"y-MMMM-dd",medium:"y-MMM-dd",short:"yyyy-MM-dd"};var u={full:"Ho 'horo kaj' m:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var s={any:"{{date}} {{time}}"};var d={date:e({formats:m,defaultWidth:"full"}),time:e({formats:u,defaultWidth:"full"}),dateTime:e({formats:s,defaultWidth:"any"})};var l={lastWeek:"'pasinta' eeee 'je' p",yesterday:"'hieraŭ je' p",today:"'hodiaŭ je' p",tomorrow:"'morgaŭ je' p",nextWeek:"eeee 'je' p",other:"P"};var v=function a(e,o,t,r){return l[e]};var h={narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["antaŭ Komuna Erao","Komuna Erao"]};var j={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]};var p={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"]};var c={narrow:["D","L","M","M","Ĵ","V","S"],short:["di","lu","ma","me","ĵa","ve","sa"],abbreviated:["dim","lun","mar","mer","ĵaŭ","ven","sab"],wide:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"]};var f={narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"antaŭtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}};var k=function a(e){var o=Number(e);return o+"-a"};var b={ordinalNumber:k,era:o({values:h,defaultWidth:"wide"}),quarter:o({values:j,defaultWidth:"wide",argumentCallback:function a(e){return Number(e)-1}}),month:o({values:p,defaultWidth:"wide"}),day:o({values:c,defaultWidth:"wide"}),dayPeriod:o({values:f,defaultWidth:"wide"})};var g=/^(\d+)(-?a)?/i;var w=/\d+/i;var y={narrow:/^([ap]k)/i,abbreviated:/^([ap]\.?\s?k\.?\s?e\.?)/i,wide:/^((antaǔ |post )?komuna erao)/i};var z={any:[/^a/i,/^[kp]/i]};var M={narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](-?a)? kvaronjaro/i};var W={any:[/1/i,/2/i,/3/i,/4/i]};var P={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,wide:/^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i};var x={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^a(u|ŭ)/i,/^s/i,/^o/i,/^n/i,/^d/i]};var K={narrow:/^[dlmĵjvs]/i,short:/^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,wide:/^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i};var H={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^(j|ĵ)/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^(j|ĵ)/i,/^v/i,/^s/i]};var E={narrow:/^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,abbreviated:/^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,wide:/^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i};var S={any:{am:/^a/i,pm:/^p/i,midnight:/^noktom/i,noon:/^t/i,morning:/^m/i,afternoon:/^posttagmeze/i,evening:/^v/i,night:/^n/i}};var X={ordinalNumber:t({matchPattern:g,parsePattern:w,valueCallback:function a(e){return parseInt(e,10)}}),era:r({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),quarter:r({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:W,defaultParseWidth:"any",valueCallback:function a(e){return e+1}}),month:r({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),day:r({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"})};var D=a("default",{code:"eo",formatDistance:i,formatLong:d,formatRelative:v,localize:b,match:X,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));