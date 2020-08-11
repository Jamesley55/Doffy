"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHours = void 0;
function getHours(millisec) {
    let seconds = (millisec / 1000).toFixed(0);
    let minutes = Math.floor(seconds / 60);
    let hours = "";
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        hours = hours >= 10 ? hours : "0" + hours;
        minutes = minutes - hours * 60;
        minutes = minutes >= 10 ? minutes : "0" + minutes;
    }
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    if (hours !== "") {
        return hours + ":" + minutes;
    }
    return minutes + ":" + seconds;
}
exports.getHours = getHours;
//# sourceMappingURL=milisecondTohours.js.map