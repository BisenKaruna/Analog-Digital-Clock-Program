//digital time
var getIndiaTime = function(){
    document.getElementById("IndiaTime").innerHTML = new Date().toLocaleString("en-US",
    {timeZone:'Asia/Kolkata',timeStyle:'full',hourCycle:'h12'});
}
getIndiaTime();
setInterval(getUSATime,1000);

var getUSATime = function(){
    document.getElementById("USATime").innerHTML = new Date().toLocaleString("en-US",
    {timeZone:'America/New_York',timeStyle:'full',hourCycle:'h12'});
}
getUSATime();
setInterval(getUSATime,1000);


var getEuropeTime = function(){
    document.getElementById("EuropeTime").innerHTML = new Date().toLocaleString("en-US",
    {timeZone:'Europe/London',timeStyle:'full',hourCycle:'h12'});
}
getEuropeTime();
setInterval(getEuropeTime,1000);

//analog time
setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    uhour.style.transform = `rotate(${hr_rotation}deg)`;
    uminute.style.transform = `rotate(${min_rotation}deg)`;
    usecond.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);


setInterval(() => {
    d = new Date().toLocaleString("en-US",
    {timeZone:'Europe/London'}); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
    ehour.style.transform = `rotate(${hr_rotation}deg)`;
    eminute.style.transform = `rotate(${min_rotation}deg)`;
    esecond.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);