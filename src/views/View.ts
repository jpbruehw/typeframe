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

  /** abstract methods to map events to html element
   *  eventsMap should map events to their respective
   *  elements and template renders the initial template
   *  attached to the root element
   *  --> see User example for demo
   */
  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): HTMLElement;

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

    // append the fragment to the parent element
    this.parent.appendChild(fragment);
  }
}
