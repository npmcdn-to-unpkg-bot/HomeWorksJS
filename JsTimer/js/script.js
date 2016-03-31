
function CustomTimer(parent) {
    var dateStart,
        timeSave = 0,
        difference,
        timerId;
    var splits = new Array();

    this.time = document.createElement("p");
    this.buttonStart = document.createElement("button");
    this.buttonSplit = document.createElement("button");
    this.buttonClear = document.createElement("button");
    this.splitBox = document.createElement('div');
    this.box = document.createElement('div');
    this.box.classList.add('orange');

    this.time.innerText = '00:00:00.000';

    this.buttonStart.textContent = 'Start';
    this.buttonStart.addEventListener('click', buttonStartClick);
    this.buttonSplit.textContent = 'Split';
    this.buttonSplit.addEventListener('click', buttonSplitClick);
    this.buttonSplit.disabled = true;
    this.buttonClear.textContent = 'Clear';
    this.buttonClear.addEventListener('click', buttonClearClick);

    this.box.appendChild(time);
    this.box.appendChild(buttonStart);
    this.box.appendChild(buttonSplit);
    this.box.appendChild(buttonClear);
    this.box.appendChild(splitBox);
    parent.appendChild(box);

    function buttonStartClick() {
        if (!timerId) {
            dateStart = new Date();
            timerId = setInterval(getTime, 90);
            buttonStart.textContent = 'Pouse';
            buttonSplit.disabled = false;
        }
        else {
            if (timerId) {
                clearInterval(timerId);
            }
            timerId = false;
            timeSave = difference;
            buttonStart.textContent = 'Start';
            buttonSplit.disabled = true;
        }
    }

    function buttonSplitClick() {
        var strSplit = getTimeString(difference);
        splits.push(strSplit);
        var newSplit = document.createElement('p');
        newSplit.innerText = "Split" + splits.length + " " + strSplit;
        splitBox.appendChild(newSplit);
    }

    function buttonClearClick() {
        if (timerId) {
            clearInterval(timerId);
        }
        
        timeSave = 0;
        timerId = false;
        dateStart = null;

        buttonSplit.disabled = true;
        buttonStart.textContent = 'Start';
        time.innerText = '00:00:00.000';

        splits = new Array();
        while (splitBox.firstChild) {
            splitBox.removeChild(splitBox.firstChild);
        }
    }

    function getTime() {
        difference = new Date().getTime() - dateStart.getTime() + timeSave;

        time.innerText = getTimeString(difference);
    }

    function getTimeString(timeMls) {

        var milliseconds = timeMls % 1000;
        var seconds = (timeMls / 1000) % 60;
        var minutes = (timeMls / (1000 * 60)) % 60;
        var hours = (timeMls / (1000 * 60 * 60)) % 24;

        return addZero(2, Math.floor(hours)) + ':' + addZero(2, Math.floor(minutes)) + ':' + addZero(2, Math.floor(seconds)) + '.' + addZero(3, milliseconds);
    }
}

function addZero(lengthLine, nubmer) {
    var strZero = "";
    var strNumber = nubmer.toString();
    for (var i = 0; i < lengthLine - strNumber.length; i++) {
        strZero += "0";
    }

    return strZero + strNumber;
}

CustomTimer(document.body);
