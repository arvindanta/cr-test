import{b as t,a as e,c as i,d as a}from"./p-fb2388fc.js";var n={lessThanXSeconds:{one:"פחות משנייה",two:"פחות משתי שניות",other:"פחות מ־{{count}} שניות"},xSeconds:{one:"שנייה",two:"שתי שניות",other:"{{count}} שניות"},halfAMinute:"חצי דקה",lessThanXMinutes:{one:"פחות מדקה",two:"פחות משתי דקות",other:"פחות מ־{{count}} דקות"},xMinutes:{one:"דקה",two:"שתי דקות",other:"{{count}} דקות"},aboutXHours:{one:"כשעה",two:"כשעתיים",other:"כ־{{count}} שעות"},xHours:{one:"שעה",two:"שעתיים",other:"{{count}} שעות"},xDays:{one:"יום",two:"יומיים",other:"{{count}} ימים"},aboutXWeeks:{one:"כשבוע",two:"כשבועיים",other:"כ־{{count}} שבועות"},xWeeks:{one:"שבוע",two:"שבועיים",other:"{{count}} שבועות"},aboutXMonths:{one:"כחודש",two:"כחודשיים",other:"כ־{{count}} חודשים"},xMonths:{one:"חודש",two:"חודשיים",other:"{{count}} חודשים"},aboutXYears:{one:"כשנה",two:"כשנתיים",other:"כ־{{count}} שנים"},xYears:{one:"שנה",two:"שנתיים",other:"{{count}} שנים"},overXYears:{one:"יותר משנה",two:"יותר משנתיים",other:"יותר מ־{{count}} שנים"},almostXYears:{one:"כמעט שנה",two:"כמעט שנתיים",other:"כמעט {{count}} שנים"}},o={date:t({formats:{full:"EEEE, d בMMMM y",long:"d בMMMM y",medium:"d בMMM y",short:"d.M.y"},defaultWidth:"full"}),time:t({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:t({formats:{full:"{{date}} 'בשעה' {{time}}",long:"{{date}} 'בשעה' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},r={lastWeek:"eeee 'שעבר בשעה' p",yesterday:"'אתמול בשעה' p",today:"'היום בשעה' p",tomorrow:"'מחר בשעה' p",nextWeek:"eeee 'בשעה' p",other:"P"},d={ordinalNumber:function(t,e){var i=Number(t);if(i<=0||i>10)return i;var a=String((e||{}).unit),n=i-1;return["year","hour","minute","second"].indexOf(a)>=0?["ראשונה","שנייה","שלישית","רביעית","חמישית","שישית","שביעית","שמינית","תשיעית","עשירית"][n]:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שביעי","שמיני","תשיעי","עשירי"][n]},era:e({values:{narrow:["לפנה״ס","לספירה"],abbreviated:["לפנה״ס","לספירה"],wide:["לפני הספירה","לספירה"]},defaultWidth:"wide"}),quarter:e({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["רבעון 1","רבעון 2","רבעון 3","רבעון 4"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:e({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"],wide:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]},defaultWidth:"wide"}),day:e({values:{narrow:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],short:["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"],abbreviated:["יום א׳","יום ב׳","יום ג׳","יום ד׳","יום ה׳","יום ו׳","שבת"],wide:["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","יום שבת"]},defaultWidth:"wide"}),dayPeriod:e({values:{narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בוקר",afternoon:"אחר הצהריים",evening:"ערב",night:"לילה"}},defaultWidth:"wide",formattingValues:{narrow:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"בצהריים",evening:"בערב",night:"בלילה"},abbreviated:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"},wide:{am:"לפנה״צ",pm:"אחה״צ",midnight:"חצות",noon:"צהריים",morning:"בבוקר",afternoon:"אחר הצהריים",evening:"בערב",night:"בלילה"}},defaultFormattingWidth:"wide"})},u=["רא","שנ","של","רב","ח","שי","שב","שמ","ת","ע"],s={code:"he",formatDistance:function(t,e,i){return i=i||{},"xDays"===t&&i.addSuffix&&e<=2?i.comparison>0?{1:"מחר",2:"מחרתיים"}[e]:{1:"אתמול",2:"שלשום"}[e]:(a="string"==typeof n[t]?n[t]:1===e?n[t].one:2===e?n[t].two:n[t].other.replace("{{count}}",e),i.addSuffix?i.comparison>0?"בעוד "+a:"לפני "+a:a);var a},formatLong:o,formatRelative:function(t){return r[t]},localize:d,match:{ordinalNumber:i({matchPattern:/^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i,parsePattern:/^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i,valueCallback:function(t){var e=parseInt(t,10);return isNaN(e)?u.indexOf(t)+1:e}}),era:a({matchPatterns:{narrow:/^ל(ספירה|פנה״ס)/i,abbreviated:/^ל(ספירה|פנה״ס)/i,wide:/^ל(פני ה)?ספירה/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^לפ/i,/^לס/i]},defaultParseWidth:"any"}),quarter:a({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^רבעון [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:a({matchPatterns:{narrow:/^\d+/i,abbreviated:/^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,wide:/^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^1$/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ינ/i,/^פ/i,/^מר/i,/^אפ/i,/^מא/i,/^יונ/i,/^יול/i,/^אוג/i,/^ס/i,/^אוק/i,/^נ/i,/^ד/i]},defaultParseWidth:"any"}),day:a({matchPatterns:{narrow:/^[אבגדהוש]׳/i,short:/^[אבגדהוש]׳/i,abbreviated:/^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,wide:/^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i},defaultMatchWidth:"wide",parsePatterns:{abbreviated:[/א׳$/i,/ב׳$/i,/ג׳$/i,/ד׳$/i,/ה׳$/i,/ו׳$/i,/^ש/i],wide:[/ן$/i,/ני$/i,/לישי$/i,/עי$/i,/מישי$/i,/שישי$/i,/ת$/i],any:[/^א/i,/^ב/i,/^ג/i,/^ד/i,/^ה/i,/^ו/i,/^ש/i]},defaultParseWidth:"any"}),dayPeriod:a({matchPatterns:{any:/^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^לפ/i,pm:/^אחה/i,midnight:/^ח/i,noon:/^צ/i,morning:/בוקר/i,afternoon:/בצ|אחר/i,evening:/ערב/i,night:/לילה/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};export default s;