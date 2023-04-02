"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    // Handler
    function handleLoad() {
        // L
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", customEvent);
        document.querySelector("body").addEventListener("click", logInfo);
        document.querySelector("body").addEventListener("keyup", logInfo);
        document.querySelector("#div0").addEventListener("click", logInfo);
        document.querySelector("#div0").addEventListener("keyup", logInfo);
        document.querySelector("#div1").addEventListener("click", logInfo);
        document.querySelector("#div1").addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let eTarget = _event.target + "";
        document.querySelector("span").innerHTML = eTarget + x + "px" + y + "px";
        document.querySelector("span").style.top = (y + 20) + "px";
        document.querySelector("span").style.left = (x + 10) + "px";
    }
    // Handler for Console-Output
    // Type: Event with Name: _event
    function logInfo(_event) {
        //Output Type(which event is occurring ex. click, keyup or mousemove), Target (Event-Object, refernecing Target-Object), currentTarget (Where Event is taking place in DOM)
        console.log(_event.type, _event.target, _event.currentTarget, _event);
    }
    // Handler for Custom-Event
    function customEvent(_event) {
        // Grabbing Button from HTML and 
        let button = _event.target;
        // New Custom Event
        let event = new CustomEvent("customEvent", { bubbles: true });
        button.dispatchEvent(event);
        console.log(_event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map