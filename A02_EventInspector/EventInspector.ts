namespace EventInspector {

  // Window-Object triggers Handler handleLoad, if load-event is triggered
   window.addEventListener("load", handleLoad);

   // Handler for when window loads in browser
   function handleLoad(): void {

   // Event-Listener for mousemove, click, keyup -> when a certain event takes place it triggers Handlers setInfoBox, logInfo or customEvent
     document.addEventListener("mousemove", setInfoBox);
     document.addEventListener("click", logInfo);
     document.addEventListener("keyup", logInfo);
     document.addEventListener("click", customEvent);

   // HTML-Components get assigned an Event-Listener that triggers assigned Handlers when certain Event takes place 
   // ex. div0 gets clicked -> Handler logInfo gets triggered
     document.querySelector("body").addEventListener("click", logInfo);
     document.querySelector("body").addEventListener("keyup", logInfo);
     document.querySelector("#div0").addEventListener("click", logInfo);
     document.querySelector("#div0").addEventListener("keyup", logInfo);
     document.querySelector("#div1").addEventListener("click", logInfo);
     document.querySelector("#div1").addEventListener("keyup", logInfo);

 }

 // Handler setInfoBox with Event-Type MouseEvent
 function setInfoBox(_event: MouseEvent): void {
  
    //Horizontal Coordinates of Mouse-Pointer when clicked
    let x: number = _event.clientX;
    // Vertical Coordinates of Mouse-Pointer when clicked
    let y: number = _event.clientY;
    // Variable eTarget declared as string -> Target returns Element where it occurs
    let eTarget: string = _event.target + "";

    // Span -> eTarget, where Mouse-Cursor hovers or clicks -> Information about the Target-Object and the vertical and horizontal Information of where the Cursor is on screen (HTML-Manipulation: innerHTML)
    document.querySelector("span").innerHTML = eTarget + x + "px" + y + "px";
   
 }

 // Handler for Console-Output
 // Type: Event with Name: _event
function logInfo(_event: Event): void {

    //Output Type(which event is occurring ex. click, keyup or mousemove), Target (Event-Object, refernecing Target-Object), currentTarget (Where Event is taking place in DOM)
    console.log(_event.type, _event.target, _event.currentTarget, _event)
}

// Handler for Custom-Event
function customEvent(_event: MouseEvent): void {

    // Grabbing Button from HTML and 
  let button: HTMLElement = <HTMLElement>_event.target;

  // New Custom Event with true 
  let event: CustomEvent = new CustomEvent("customEvent);

  // Dispatch Event on Button
  button.dispatchEvent(event);
  console.log(_event);
}
}