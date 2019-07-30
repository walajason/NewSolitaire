
    var text = '{"poke": [' +
            '{"kind": "s","no":"01"},' +
            '{"kind": "s","no":"02"},' +
            '{"kind": "s","no":"03"},' +
            '{"kind": "s","no":"04"},' +
            '{"kind": "s","no":"05"},' +
            '{"kind": "s","no":"06"},' +
            '{"kind": "s","no":"07"},' +
            '{"kind": "s","no":"08"},' +
            '{"kind": "s","no":"09"},' +
            '{"kind": "s","no":"10"},' +
            '{"kind": "s","no":"11"},' +
            '{"kind": "s","no":"12"},' +
            '{"kind": "s","no":"13"},' +
            '{"kind": "h","no":"01"},' +
            '{"kind": "h","no":"02"},' +
            '{"kind": "h","no":"03"},' +
            '{"kind": "h","no":"04"},' +
            '{"kind": "h","no":"05"},' +
            '{"kind": "h","no":"06"},' +
            '{"kind": "h","no":"07"},' +
            '{"kind": "h","no":"08"},' +
            '{"kind": "h","no":"09"},' +
            '{"kind": "h","no":"10"},' +
            '{"kind": "h","no":"11"},' +
            '{"kind": "h","no":"12"},' +
            '{"kind": "h","no":"13"},' +
            '{"kind": "d","no":"01"},' +
            '{"kind": "d","no":"02"},' +
            '{"kind": "d","no":"03"},' +
            '{"kind": "d","no":"04"},' +
            '{"kind": "d","no":"05"},' +
            '{"kind": "d","no":"06"},' +
            '{"kind": "d","no":"07"},' +
            '{"kind": "d","no":"08"},' +
            '{"kind": "d","no":"09"},' +
            '{"kind": "d","no":"10"},' +
            '{"kind": "d","no":"11"},' +
            '{"kind": "d","no":"12"},' +
            '{"kind": "d","no":"13"},' +
            '{"kind": "c","no":"01"},' +
            '{"kind": "c","no":"02"},' +
            '{"kind": "c","no":"03"},' +
            '{"kind": "c","no":"04"},' +
            '{"kind": "c","no":"05"},' +
            '{"kind": "c","no":"06"},' +
            '{"kind": "c","no":"07"},' +
            '{"kind": "c","no":"08"},' +
            '{"kind": "c","no":"09"},' +
            '{"kind": "c","no":"10"},' +
            '{"kind": "c","no":"11"},' +
            '{"kind": "c","no":"12"},' +
            '{"kind": "c","no":"13"}]}';
card = JSON.parse(text);
//document.getElementById("card").innerHTML = card.poke[0].kind + card.poke[0].no
        function showcard(no) {
            var kind = card.kind(no);
    var number = card.no(no);
    var img = kind + number;
}

var mcountdown;
var secs = 0;

        function timeCount() {
            var h = Math.floor(secs / 3600);
    var m = Math.floor((secs - (h * 3600)) / 60);
    var s = parseInt(secs - (h * 3600) - (m * 60));
    document.getElementById('timershow').innerHTML = 'Time: ' + paddingLeft(h, 2) + ':' + paddingLeft(m, 2) + ':' + paddingLeft(s, 2);
    secs = secs + 1;
    mcountdown = setTimeout('timeCount()', 1000);
}


        function show_clock() {
            var NowDate = new Date();
    var h = NowDate.getHours(NowDate);
    var m = NowDate.getMinutes(NowDate);
    document.getElementById('timer').innerHTML = paddingLeft(h, 2) + ':' + paddingLeft(m, 2);
    mclock = settimeout('show_clock()', 1000);
}

        function paddingLeft(mstr, lenght) {
            if (mstr < 10) {
                if (mstr == 0) { //時間為0時 length 無法辦別出來
                    return "00";
                } else {
                    return "0" + mstr;
}
            } else {
                return mstr;
}
}