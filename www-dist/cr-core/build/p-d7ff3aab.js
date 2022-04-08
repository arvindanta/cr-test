import{b as t,a as n,c as i,d as e}from"./p-fb2388fc.js";var a={lessThanXSeconds:{one:"dưới 1 giây",other:"dưới {{count}} giây"},xSeconds:{one:"1 giây",other:"{{count}} giây"},halfAMinute:"nửa phút",lessThanXMinutes:{one:"dưới 1 phút",other:"dưới {{count}} phút"},xMinutes:{one:"1 phút",other:"{{count}} phút"},aboutXHours:{one:"khoảng 1 giờ",other:"khoảng {{count}} giờ"},xHours:{one:"1 giờ",other:"{{count}} giờ"},xDays:{one:"1 ngày",other:"{{count}} ngày"},aboutXWeeks:{one:"khoảng 1 tuần",other:"khoảng {{count}} tuần"},xWeeks:{one:"1 tuần",other:"{{count}} tuần"},aboutXMonths:{one:"khoảng 1 tháng",other:"khoảng {{count}} tháng"},xMonths:{one:"1 tháng",other:"{{count}} tháng"},aboutXYears:{one:"khoảng 1 năm",other:"khoảng {{count}} năm"},xYears:{one:"1 năm",other:"{{count}} năm"},overXYears:{one:"hơn 1 năm",other:"hơn {{count}} năm"},almostXYears:{one:"gần 1 năm",other:"gần {{count}} năm"}},h={date:t({formats:{full:"EEEE, 'ngày' d MMMM 'năm' y",long:"'ngày' d MMMM 'năm' y",medium:"d MMM 'năm' y",short:"dd/MM/y"},defaultWidth:"full"}),time:t({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:t({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})},r={lastWeek:"eeee 'tuần trước vào lúc' p",yesterday:"'hôm qua vào lúc' p",today:"'hôm nay vào lúc' p",tomorrow:"'ngày mai vào lúc' p",nextWeek:"eeee 'tới vào lúc' p",other:"P"},o={code:"vi",formatDistance:function(t,n,i){var e;return i=i||{},e="string"==typeof a[t]?a[t]:1===n?a[t].one:a[t].other.replace("{{count}}",n),i.addSuffix?i.comparison>0?e+" nữa":e+" trước":e},formatLong:h,formatRelative:function(t){return r[t]},localize:{ordinalNumber:function(t,n){var i=String((n||{}).unit),e=parseInt(t,10);if("quarter"===i)switch(e){case 1:return"I";case 2:return"II";case 3:return"III";case 4:return"IV"}else if("day"===i)switch(e){case 1:return"thứ 2";case 2:return"thứ 3";case 3:return"thứ 4";case 4:return"thứ 5";case 5:return"thứ 6";case 6:return"thứ 7";case 7:return"chủ nhật"}else{if("week"===i)return 1===e?"thứ nhất":"thứ "+e;if("dayOfYear"===i)return 1===e?"đầu tiên":"thứ "+e}return e},era:n({values:{narrow:["TCN","SCN"],abbreviated:["trước CN","sau CN"],wide:["trước Công Nguyên","sau Công Nguyên"]},defaultWidth:"wide"}),quarter:n({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["Quý 1","Quý 2","Quý 3","Quý 4"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["quý I","quý II","quý III","quý IV"]},defaultFormattingWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:n({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["Thg 1","Thg 2","Thg 3","Thg 4","Thg 5","Thg 6","Thg 7","Thg 8","Thg 9","Thg 10","Thg 11","Thg 12"],wide:["Tháng Một","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},defaultWidth:"wide",formattingValues:{narrow:["01","02","03","04","05","06","07","08","09","10","11","12"],abbreviated:["thg 1","thg 2","thg 3","thg 4","thg 5","thg 6","thg 7","thg 8","thg 9","thg 10","thg 11","thg 12"],wide:["tháng 01","tháng 02","tháng 03","tháng 04","tháng 05","tháng 06","tháng 07","tháng 08","tháng 09","tháng 10","tháng 11","tháng 12"]},defaultFormattingWidth:"wide"}),day:n({values:{narrow:["CN","T2","T3","T4","T5","T6","T7"],short:["CN","Th 2","Th 3","Th 4","Th 5","Th 6","Th 7"],abbreviated:["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],wide:["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"]},defaultWidth:"wide"}),dayPeriod:n({values:{narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"nửa đêm",noon:"tr",morning:"sg",afternoon:"ch",evening:"tối",night:"đêm"},abbreviated:{am:"AM",pm:"PM",midnight:"nửa đêm",noon:"trưa",morning:"sáng",afternoon:"chiều",evening:"tối",night:"đêm"},wide:{am:"SA",pm:"CH",midnight:"nửa đêm",noon:"giữa trưa",morning:"vào buổi sáng",afternoon:"vào buổi chiều",evening:"vào buổi tối",night:"vào ban đêm"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:i({matchPattern:/^(\d+)/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:e({matchPatterns:{narrow:/^(tcn|scn)/i,abbreviated:/^(trước CN|sau CN)/i,wide:/^(trước Công Nguyên|sau Công Nguyên)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^t/i,/^s/i]},defaultParseWidth:"any"}),quarter:e({matchPatterns:{narrow:/^([1234]|i{1,3}v?)/i,abbreviated:/^q([1234]|i{1,3}v?)/i,wide:/^quý ([1234]|i{1,3}v?)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|i)$/i,/(2|ii)$/i,/(3|iii)$/i,/(4|iv)$/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:e({matchPatterns:{narrow:/^(0?[2-9]|10|11|12|0?1)/i,abbreviated:/^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,wide:/^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/0?1$/i,/0?2/i,/3/,/4/,/5/,/6/,/7/,/8/,/9/,/10/,/11/,/12/],abbreviated:[/^thg[ _]?0?1(?!\d)/i,/^thg[ _]?0?2/i,/^thg[ _]?0?3/i,/^thg[ _]?0?4/i,/^thg[ _]?0?5/i,/^thg[ _]?0?6/i,/^thg[ _]?0?7/i,/^thg[ _]?0?8/i,/^thg[ _]?0?9/i,/^thg[ _]?10/i,/^thg[ _]?11/i,/^thg[ _]?12/i],wide:[/^tháng ?(Một|0?1(?!\d))/i,/^tháng ?(Hai|0?2)/i,/^tháng ?(Ba|0?3)/i,/^tháng ?(Tư|0?4)/i,/^tháng ?(Năm|0?5)/i,/^tháng ?(Sáu|0?6)/i,/^tháng ?(Bảy|0?7)/i,/^tháng ?(Tám|0?8)/i,/^tháng ?(Chín|0?9)/i,/^tháng ?(Mười|10)/i,/^tháng ?(Mười ?Một|11)/i,/^tháng ?(Mười ?Hai|12)/i]},defaultParseWidth:"any"}),day:e({matchPatterns:{narrow:/^(CN|T2|T3|T4|T5|T6|T7)/i,short:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,abbreviated:/^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,wide:/^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],short:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],abbreviated:[/CN/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i],wide:[/(Chủ|Chúa) ?Nhật/i,/Hai/i,/Ba/i,/Tư/i,/Năm/i,/Sáu/i,/Bảy/i]},defaultParseWidth:"any"}),dayPeriod:e({matchPatterns:{narrow:/^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,abbreviated:/^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,wide:/^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(a|sa)/i,pm:/^(p|ch[^i]*)/i,midnight:/nửa đêm/i,noon:/trưa/i,morning:/sáng/i,afternoon:/chiều/i,evening:/tối/i,night:/^đêm/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}};export default o;