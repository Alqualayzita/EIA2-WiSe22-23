/*
Aufgabe: A02 EventInspector
Name: Alina Stumpf
Matrikel: 271137
Datum: 20.10.22
Quellen: https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
*/

namespace EventInspector {

    /* Laden von handleLoad */
    window.addEventListener("load", handleLoad);

    /* Funktion handleLoad, welche den Button deklariert und alle EventListener hinzufügt */
    function handleLoad(_event: Event): void {

        let button: HTMLElement = <HTMLElement>document.querySelector("#button");
        let body: HTMLElement = <HTMLElement>document.querySelector("body");
        let div0: HTMLElement = <HTMLElement>document.querySelector("#div0");
        let div1: HTMLElement = <HTMLElement>document.querySelector("#div1");

        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        button.addEventListener("click", logButton);
        document.addEventListener("CustomEvent",showButtonEvent);

        body.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }

    /* Funktion setInfoBox, welche den Inhalt der Box an der Maus (Koordinaten und Target) erstellt */
    function setInfoBox(_event: MouseEvent): void {
        let InfoBox: HTMLElement = <HTMLElement>document.querySelector("span");
        InfoBox.innerHTML = "x: " + _event.clientX + " y: " + _event.clientY + "<br>" + "target: " + _event.target;
        InfoBox.style.left = _event.clientX + 10 +"px";
        InfoBox.style.top = _event.clientY + 10 +"px";
    }

    /* Funktion für console.log, welche die entsprechenden Informationen bei den Events ausgibt*/
    function logInfo(_event: Event): void {
        //log events type, target. currentTarget and the whole eventobject to console
        console.log("type", _event.type);
        console.log("target", _event.target);
        console.log("currentTarget", _event.currentTarget);
        console.log("event", _event);
    }

    /* Erstellung des Custom Events beim Click auf den Button */
    function logButton(_event: MouseEvent): void {
        let event: CustomEvent = new CustomEvent("CustomEvent", {bubbles: true});
        let button: HTMLElement = <HTMLElement>document.querySelector("#button");
        button.dispatchEvent(event);
    }

    /* Funktion, um Custom Event Informationen des Buttons im console.log anzuzeigen */
    function showButtonEvent(_event: Event): void {
        console.log(_event);
    }
}