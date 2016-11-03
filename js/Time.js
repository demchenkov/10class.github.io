function check_time(x) {
    if (x < 10)
        x = "0" + x;
    return x;
}

function Set_Time() {
    var tm = new Date();
    var h = tm.getHours();
    var m = check_time(tm.getMinutes());
    var s = check_time(tm.getSeconds());
    document.getElementById('Time').innerHTML = h + ':' + m + ':' + s;
}

function Create_Time() {
    setInterval('Set_Time()', 500);
}

var body = document.getElementsByName('body');
body.onload = Create_Time();