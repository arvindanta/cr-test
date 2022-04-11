import{b as a,a as i,c as n,d as e}from"./p-fb2388fc.js";var t={lessThanXSeconds:{one:"bir saniyədən az",other:"{{count}} bir saniyədən az"},xSeconds:{one:"1 saniyə",other:"{{count}} saniyə"},halfAMinute:"yarım dəqiqə",lessThanXMinutes:{one:"bir dəqiqədən az",other:"{{count}} bir dəqiqədən az"},xMinutes:{one:"bir dəqiqə",other:"{{count}} dəqiqə"},aboutXHours:{one:"təxminən 1 saat",other:"təxminən {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"təxminən 1 həftə",other:"təxminən {{count}} həftə"},xWeeks:{one:"1 həftə",other:"{{count}} həftə"},aboutXMonths:{one:"təxminən 1 ay",other:"təxminən {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"təxminən 1 il",other:"təxminən {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ildən çox",other:"{{count}} ildən çox"},almostXYears:{one:"demək olar ki 1 il",other:"demək olar ki {{count}} il"}},r={date:a({formats:{full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:a({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} {{time}} - 'də'",long:"{{date}} {{time}} - 'də'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},o={lastWeek:"'sonuncu' eeee p -'də'",yesterday:"'dünən' p -'də'",today:"'bugün' p -'də'",tomorrow:"'sabah' p -'də'",nextWeek:"eeee p -'də'",other:"P"},d={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},m={code:"az",formatDistance:function(a,i,n){n=n||{};var e,r=t[a];return e="string"==typeof r?r:1===i?r.one:r.other.replace("{{count}}",String(i)),n.addSuffix?n.comparison&&n.comparison>0?e+" əvvəl":e+" sonra":e},formatLong:r,formatRelative:function(a){return o[a]},localize:{ordinalNumber:function(a){var i=Number(a);return i+function(a){if(0===a)return a+"-ıncı";var i=a%10,n=a%100-i,e=a>=100?100:null;return d[i]?d[i]:d[n]?d[n]:null!==e?d[e]:""}(i)},era:i({values:{narrow:["e.ə","b.e"],abbreviated:["e.ə","b.e"],wide:["eramızdan əvvəl","bizim era"]},defaultWidth:"wide"}),quarter:i({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:i({values:{narrow:["Y","F","M","A","M","İ","İ","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:i({values:{narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},defaultWidth:"wide"}),dayPeriod:i({values:{narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:n({matchPattern:/^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:e({matchPatterns:{narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(bizim eradan əvvəl|bizim era)$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b$/i,/^(a|c)$/i]},defaultParseWidth:"any"}),quarter:e({matchPatterns:{narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return Number(a)+1}}),month:e({matchPatterns:{narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},defaultParseWidth:"narrow"}),day:e({matchPatterns:{narrow:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,short:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,abbreviated:/^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,wide:/^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i],abbreviated:[/^Baz$/i,/^Baz\.e$/i,/^Çər\.a$/i,/^Çər$/i,/^Cüm\.a$/i,/^Cüm$/i,/^Şə$/i],wide:[/^Bazar$/i,/^Bazar ertəsi$/i,/^Çərşənbə axşamı$/i,/^Çərşənbə$/i,/^Cümə axşamı$/i,/^Cümə$/i,/^Şənbə$/i],any:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i]},defaultParseWidth:"any"}),dayPeriod:e({matchPatterns:{narrow:/^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a$/i,pm:/^p$/i,midnight:/^gecəyarı$/i,noon:/^gün$/i,morning:/səhər$/i,afternoon:/gündüz$/i,evening:/axşam$/i,night:/gecə$/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};export default m;