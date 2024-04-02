import { Model, HasId } from "../models/Model";

/** this abstract class handles the HTML rendering
 *  of the various models that a user will create
 *  the syntax for the generic constructors is somewhat
 *  nasty, but is essentially saying that the view takes a type
 *  that extends the model class of type K which can be
 *  any model type the use has defined
 *  we need to pass in that K extends HasId since it is
 *  assumed that the model instance will have some type of
 *  id attribute, this is optional and will not interfere
 *  with any functionality if for whatever reason
 *  an id is not a part of the model
 */
export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(public parent: Element, public model: T) {
    // add a function to rerender when
    // the model changes overall
    this.bindModel();
  }

  /** abstract method template
   *  renders the initial template
   *  attached to the root element
   *  --> see User example for demo
   */
  abstract template(): HTMLElement;

  /** eventsMap default since not every model
   *  will likely need an eventsMap methods
   *  by returning an empty object we define
   *  a "harmless" default implementation
   */
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  /** regions implementation
   *  this will loop over and put
   *  together the different parts
   *  of our HTML
   *  --> create default implementation
   *    of an empty object
   *  --> default method to return the HTML
   *      elements is set to return empty object
   *      takes a key and returns the callback
   *      to create the given element
   *  ------------------------------------------
   *  see User example for reference implementation
   */
  regions: { [key: string]: Element } = {};
  regionsMap(): { [key: string]: string } {
    return {};
  }

  // helper method to re-render model when changes are made
  bindModel(): void {
    this.model.on("change", () => {
      console.log("I WAS RERENDERED");
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      console.log();

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    // reference the regionsMap
    const regionsMap = this.regionsMap();
    // loop over and identify all the relevant selectors
    for (let key in regionsMap) {
      // get the selector based on the key
      const selector = regionsMap[key];
      // get the element based on the selector
      const element = fragment.querySelector(selector);
      // ensure the element first exists
      // then assign it to the map
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    // when the form, re-renders, we want
    // to make sure to first empty the existing html
    // then add it back in
    this.parent.innerHTML = "";

    // create a form
    const templateElement = this.template();

    // create a temporary div to hold the template
    const tempDiv = document.createElement("div");
    tempDiv.appendChild(templateElement);

    // extract the DocumentFragment from the temporary div
    const fragment = document.createDocumentFragment();
    while (tempDiv.firstChild) {
      fragment.appendChild(tempDiv.firstChild);
    }

    // bind events to elements in the fragment
    this.bindEvents(fragment);

    // call mapRegions method
    this.mapRegions(fragment);

    // nest all the views
    this.onRender();

    // append the fragment to the parent element
    this.parent.appendChild(fragment);
  }
}
