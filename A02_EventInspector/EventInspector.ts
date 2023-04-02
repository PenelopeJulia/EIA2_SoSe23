namespace EventInspector {

   window.addEventListener("load", handleLoad);

   // Handler
   function handleLoad(): void {

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

 function setInfoBox(_event: MouseEvent): void {
    let x: number = _event.clientX;
    let y: number = _event.clientY;
    let eTarget: string = _event.target + "";

    document.querySelector("span").innerHTML = eTarget + x + "px" + y + "px";
    document.querySelector("span").style.top = (y + 20) + "px";
    document.querySelector("span").style.left = (x + 10) + "px";

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
  let event: CustomEvent = new CustomEvent("customEvent");

  // Dispatch Event on Button
  button.dispatchEvent(event);
  console.log(_event);
}
}