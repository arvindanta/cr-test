System.register(["./p-c66836e9.system.js"],(function(e){"use strict";var a,n,r,i;return{setters:[function(e){a=e.b;n=e.a;r=e.c;i=e.d}],execute:function(){var t={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weke"},xWeeks:{one:"1 week",other:"{{count}} weke"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}};var d=function e(a,n){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var i=t[a];var d;if(typeof i==="string"){d=i}else if(n===1){d=i.one}else{d=i.other.replace("{{count}}",String(n))}if(r.addSuffix){if(r.comparison&&r.comparison>0){return"oor "+d}else{return d+" gelede"}}return d};var o={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"yyyy/MM/dd"};var u={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var m={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var s={date:a({formats:o,defaultWidth:"full"}),time:a({formats:u,defaultWidth:"full"}),dateTime:a({formats:m,defaultWidth:"full"})};var g={lastWeek:"'verlede' eeee 'om' p",yesterday:"'gister om' p",today:"'vandag om' p",tomorrow:"'môre om' p",nextWeek:"eeee 'om' p",other:"P"};var v=function e(a){return g[a]};var l={narrow:["vC","nC"],abbreviated:["vC","nC"],wide:["voor Christus","na Christus"]};var h={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ste kwartaal","2de kwartaal","3de kwartaal","4de kwartaal"]};var f={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],wide:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]};var c={narrow:["S","M","D","W","D","V","S"],short:["So","Ma","Di","Wo","Do","Vr","Sa"],abbreviated:["Son","Maa","Din","Woe","Don","Vry","Sat"],wide:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"]};var b={narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"}};var w={narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"}};var M=function e(a){var n=Number(a);var r=n%100;if(r<20){switch(r){case 1:case 8:return n+"ste";default:return n+"de"}}return n+"ste"};var y={ordinalNumber:M,era:n({values:l,defaultWidth:"wide"}),quarter:n({values:h,defaultWidth:"wide",argumentCallback:function e(a){return Number(a)-1}}),month:n({values:f,defaultWidth:"wide"}),day:n({values:c,defaultWidth:"wide"}),dayPeriod:n({values:b,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})};var p=/^(\d+)(ste|de)?/i;var W=/\d+/i;var S={narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?C\.?)/,wide:/^((voor|na) Christus)/};var D={any:[/^v/,/^n/]};var k={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](st|d)e kwartaal/i};var J={any:[/1/i,/2/i,/3/i,/4/i]};var P={narrow:/^[jfmasond]/i,abbreviated:/^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,wide:/^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i};var A={narrow:[/^J/i,/^F/i,/^M/i,/^A/i,/^M/i,/^J/i,/^J/i,/^A/i,/^S/i,/^O/i,/^N/i,/^D/i],any:[/^Jan/i,/^Feb/i,/^Mrt/i,/^Apr/i,/^Mei/i,/^Jun/i,/^Jul/i,/^Aug/i,/^Sep/i,/^Okt/i,/^Nov/i,/^Dec/i]};var C={narrow:/^[smdwv]/i,short:/^(So|Ma|Di|Wo|Do|Vr|Sa)/i,abbreviated:/^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,wide:/^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i};var N={narrow:[/^S/i,/^M/i,/^D/i,/^W/i,/^D/i,/^V/i,/^S/i],any:[/^So/i,/^Ma/i,/^Di/i,/^Wo/i,/^Do/i,/^Vr/i,/^Sa/i]};var j={any:/^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i};var x={any:{am:/^vm/i,pm:/^nm/i,midnight:/^middernag/i,noon:/^middaguur/i,morning:/oggend/i,afternoon:/middag/i,evening:/laat middag/i,night:/aand/i}};var H={ordinalNumber:r({matchPattern:p,parsePattern:W,valueCallback:function e(a){return parseInt(a,10)}}),era:i({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:D,defaultParseWidth:"any"}),quarter:i({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:J,defaultParseWidth:"any",valueCallback:function e(a){return Number(a)+1}}),month:i({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any"}),day:i({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:j,defaultMatchWidth:"any",parsePatterns:x,defaultParseWidth:"any"})};var V=e("default",{code:"af",formatDistance:d,formatLong:s,formatRelative:v,localize:y,match:H,options:{weekStartsOn:0,firstWeekContainsDate:1}})}}}));