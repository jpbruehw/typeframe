"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionView = void 0;
/** class to render a collection of models
 *  takes a collection of models and a parent
 *  to loop over and attach to the DOM
 *  automates the process to programmatically
 *  render elements quickly and efficiently
 *  ---------------------------------------
 *  see UserList.ts for sample implementation
 */
class CollectionView {
  // takes parent HTML element and collection instance
  constructor(parent, collection) {
    this.parent = parent;
    this.collection = collection;
  }
  /** render method that loops through
   *  all the elements which are passed in
   *  through the collection and then
   *  renders them using the renderItem func
   *  which is implemented differently
   */
  render() {
    this.parent.innerHTML = "";
    // create placeholder template element to populate
    // and then attach to the dom
    const templateElement = document.createElement("template");
    for (let model of this.collection.models) {
      const itemParent = document.createElement("div");
      /** this takes the parent div as a temp html holder
       *  and the model instance and appends the
       *  model to the parent element
       *  after processing
       */
      this.renderItem(model, itemParent);
      // append resulting html to template
      templateElement.content.append(itemParent);
    }
    this.parent.append(templateElement.content);
  }
}
exports.CollectionView = CollectionView;
