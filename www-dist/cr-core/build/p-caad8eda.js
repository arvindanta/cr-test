import{b as e,a as t,c as a,d as i}from"./p-fb2388fc.js";var n={lessThanXSeconds:{one:"હમણાં",other:"​આશરે {{count}} સેકંડ"},xSeconds:{one:"1 સેકંડ",other:"{{count}} સેકંડ"},halfAMinute:"અડધી મિનિટ",lessThanXMinutes:{one:"આ મિનિટ",other:"​આશરે {{count}} મિનિટ"},xMinutes:{one:"1 મિનિટ",other:"{{count}} મિનિટ"},aboutXHours:{one:"​આશરે 1 કલાક",other:"​આશરે {{count}} કલાક"},xHours:{one:"1 કલાક",other:"{{count}} કલાક"},xDays:{one:"1 દિવસ",other:"{{count}} દિવસ"},aboutXWeeks:{one:"આશરે 1 અઠવાડિયું",other:"આશરે {{count}} અઠવાડિયા"},xWeeks:{one:"1 અઠવાડિયું",other:"{{count}} અઠવાડિયા"},aboutXMonths:{one:"આશરે 1 મહિનો",other:"આશરે {{count}} મહિના"},xMonths:{one:"1 મહિનો",other:"{{count}} મહિના"},aboutXYears:{one:"આશરે 1 વર્ષ",other:"આશરે {{count}} વર્ષ"},xYears:{one:"1 વર્ષ",other:"{{count}} વર્ષ"},overXYears:{one:"1 વર્ષથી વધુ",other:"{{count}} વર્ષથી વધુ"},almostXYears:{one:"લગભગ 1 વર્ષ",other:"લગભગ {{count}} વર્ષ"}},o={date:e({formats:{full:"EEEE, d MMMM, y",long:"d MMMM, y",medium:"d MMM, y",short:"d/M/yy"},defaultWidth:"full"}),time:e({formats:{full:"hh:mm:ss a zzzz",long:"hh:mm:ss a z",medium:"hh:mm:ss a",short:"hh:mm a"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},r={lastWeek:"'પાછલા' eeee p",yesterday:"'ગઈકાલે' p",today:"'આજે' p",tomorrow:"'આવતીકાલે' p",nextWeek:"eeee p",other:"P"},d={code:"gu",formatDistance:function(e,t,a){var i;return a=a||{},i="string"==typeof n[e]?n[e]:1===t?n[e].one:n[e].other.replace("{{count}}",t),a.addSuffix?a.comparison>0?i+"માં":i+" પહેલાં":i},formatLong:o,formatRelative:function(e){return r[e]},localize:{ordinalNumber:function(e){return Number(e)},era:t({values:{narrow:["ઈસપૂ","ઈસ"],abbreviated:["ઈ.સ.પૂર્વે","ઈ.સ."],wide:["ઈસવીસન પૂર્વે","ઈસવીસન"]},defaultWidth:"wide"}),quarter:t({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1લો ત્રિમાસ","2જો ત્રિમાસ","3જો ત્રિમાસ","4થો ત્રિમાસ"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:t({values:{narrow:["જા","ફે","મા","એ","મે","જૂ","જુ","ઓ","સ","ઓ","ન","ડિ"],abbreviated:["જાન્યુ","ફેબ્રુ","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટે","ઓક્ટો","નવે","ડિસે"],wide:["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઇ","ઓગસ્ટ","સપ્ટેમ્બર","ઓક્ટોબર","નવેમ્બર","ડિસેમ્બર"]},defaultWidth:"wide"}),day:t({values:{narrow:["ર","સો","મં","બુ","ગુ","શુ","શ"],short:["ર","સો","મં","બુ","ગુ","શુ","શ"],abbreviated:["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],wide:["રવિવાર","સોમવાર","મંગળવાર","બુધવાર","ગુરુવાર","શુક્રવાર","શનિવાર"]},defaultWidth:"wide"}),dayPeriod:t({values:{narrow:{am:"AM",pm:"PM",midnight:"મ.રાત્રિ",noon:"બ.",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},abbreviated:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},wide:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"મ.રાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},abbreviated:{am:"AM",pm:"PM",midnight:"મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"},wide:{am:"AM",pm:"PM",midnight:"​મધ્યરાત્રિ",noon:"બપોરે",morning:"સવારે",afternoon:"બપોરે",evening:"સાંજે",night:"રાત્રે"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:a({matchPattern:/^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:i({matchPatterns:{narrow:/^(ઈસપૂ|ઈસ)/i,abbreviated:/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,wide:/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(ઈસપૂ|ઈસ)/i,/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i]},defaultParseWidth:"any"}),quarter:i({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](લો|જો|થો)? ત્રિમાસ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:i({matchPatterns:{narrow:/^[જાફેમાએમેજૂજુઓસઓનડિ]/i,abbreviated:/^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,wide:/^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i],any:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i]},defaultParseWidth:"any"}),day:i({matchPatterns:{narrow:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,short:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,abbreviated:/^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,wide:/^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i],any:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i]},defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:{narrow:/^(a|p|મ\.?|સ|બ|સાં|રા)/i,any:/^(a|p|મ\.?|સ|બ|સાં|રા)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^મ\.?/i,noon:/^બ/i,morning:/સ/i,afternoon:/બ/i,evening:/સાં/i,night:/રા/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}};export default d;