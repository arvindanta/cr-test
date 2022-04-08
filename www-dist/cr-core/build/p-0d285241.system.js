System.register(["./p-c66836e9.system.js"],(function(e){"use strict";var t,a,r,i;return{setters:[function(e){t=e.b;a=e.a;r=e.c;i=e.d}],execute:function(){var n={lessThanXSeconds:{one:"1 сониядан кам",other:"{{count}} сониядан кам"},xSeconds:{one:"1 сония",other:"{{count}} сония"},halfAMinute:"ярим дақиқа",lessThanXMinutes:{one:"1 дақиқадан кам",other:"{{count}} дақиқадан кам"},xMinutes:{one:"1 дақиқа",other:"{{count}} дақиқа"},aboutXHours:{one:"тахминан 1 соат",other:"тахминан {{count}} соат"},xHours:{one:"1 соат",other:"{{count}} соат"},xDays:{one:"1 кун",other:"{{count}} кун"},aboutXWeeks:{one:"тахминан 1 хафта",other:"тахминан {{count}} хафта"},xWeeks:{one:"1 хафта",other:"{{count}} хафта"},aboutXMonths:{one:"тахминан 1 ой",other:"тахминан {{count}} ой"},xMonths:{one:"1 ой",other:"{{count}} ой"},aboutXYears:{one:"тахминан 1 йил",other:"тахминан {{count}} йил"},xYears:{one:"1 йил",other:"{{count}} йил"},overXYears:{one:"1 йилдан кўп",other:"{{count}} йилдан кўп"},almostXYears:{one:"деярли 1 йил",other:"деярли {{count}} йил"}};function o(e,t,a){a=a||{};var r;if(typeof n[e]==="string"){r=n[e]}else if(t===1){r=n[e].one}else{r=n[e].other.replace("{{count}}",t)}if(a.addSuffix){if(a.comparison>0){return r+"дан кейин"}else{return r+" олдин"}}return r}var d={full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"};var u={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"};var s={any:"{{date}}, {{time}}"};var h={date:t({formats:d,defaultWidth:"full"}),time:t({formats:u,defaultWidth:"full"}),dateTime:t({formats:s,defaultWidth:"any"})};var l={lastWeek:"'ўтган' eeee p 'да'",yesterday:"'кеча' p 'да'",today:"'бугун' p 'да'",tomorrow:"'эртага' p 'да'",nextWeek:"eeee p 'да'",other:"P"};function m(e,t,a,r){return l[e]}var f={narrow:["М.А","М"],abbreviated:["М.А","М"],wide:["Милоддан Аввалги","Милодий"]};var c={narrow:["1","2","3","4"],abbreviated:["1-чор.","2-чор.","3-чор.","4-чор."],wide:["1-чорак","2-чорак","3-чорак","4-чорак"]};var v={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],wide:["январ","феврал","март","апрел","май","июн","июл","август","сентабр","октабр","ноябр","декабр"]};var y={narrow:["Я","Д","С","Ч","П","Ж","Ш"],short:["як","ду","се","чо","па","жу","ша"],abbreviated:["якш","душ","сеш","чор","пай","жум","шан"],wide:["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"]};var b={any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}};var w={any:{am:"П.О.",pm:"П.К.",midnight:"ярим тун",noon:"пешин",morning:"эрталаб",afternoon:"пешиндан кейин",evening:"кечаси",night:"тун"}};function W(e,t){var a=Number(e);return a}var M={ordinalNumber:W,era:a({values:f,defaultWidth:"wide"}),quarter:a({values:c,defaultWidth:"wide",argumentCallback:function e(t){return Number(t)-1}}),month:a({values:v,defaultWidth:"wide"}),day:a({values:y,defaultWidth:"wide"}),dayPeriod:a({values:b,defaultWidth:"any",formattingValues:w,defaultFormattingWidth:"any"})};var g=/^(\d+)(чи)?/i;var p=/\d+/i;var P={narrow:/^(м\.а|м\.)/i,abbreviated:/^(м\.а|м\.)/i,wide:/^(милоддан аввал|милоддан кейин)/i};var x={any:[/^м/i,/^а/i]};var k={narrow:/^[1234]/i,abbreviated:/^[1234]-чор./i,wide:/^[1234]-чорак/i};var X={any:[/1/i,/2/i,/3/i,/4/i]};var z={narrow:/^[яфмамииасонд]/i,abbreviated:/^(янв|фев|мар|апр|май|июн|июл|авг|сен|окт|ноя|дек)/i,wide:/^(январ|феврал|март|апрел|май|июн|июл|август|сентабр|октабр|ноябр|декабр)/i};var H={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^д/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^май/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]};var C={narrow:/^[ядсчпжш]/i,short:/^(як|ду|се|чо|па|жу|ша)/i,abbreviated:/^(якш|душ|сеш|чор|пай|жум|шан)/i,wide:/^(якшанба|душанба|сешанба|чоршанба|пайшанба|жума|шанба)/i};var S={narrow:[/^я/i,/^д/i,/^с/i,/^ч/i,/^п/i,/^ж/i,/^ш/i],any:[/^як/i,/^ду/i,/^се/i,/^чор/i,/^пай/i,/^жу/i,/^шан/i]};var E={any:/^(п\.о\.|п\.к\.|ярим тун|пешиндан кейин|(эрталаб|пешиндан кейин|кечаси|тун))/i};var N={any:{am:/^п\.о\./i,pm:/^п\.к\./i,midnight:/^ярим тун/i,noon:/^пешиндан кейин/i,morning:/эрталаб/i,afternoon:/пешиндан кейин/i,evening:/кечаси/i,night:/тун/i}};var Y={ordinalNumber:r({matchPattern:g,parsePattern:p,valueCallback:function e(t){return parseInt(t,10)}}),era:i({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:i({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function e(t){return t+1}}),month:i({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:H,defaultParseWidth:"any"}),day:i({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:E,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"})};var D=e("default",{code:"uz-Cyrl",formatDistance:o,formatLong:h,formatRelative:m,localize:M,match:Y,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));