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
var View = /** @class */ (function () {
    function View(parent, model) {
        this.parent = parent;
        this.model = model;
        /** regions implementation
         *  this will loop over and put
         *  together the different parts
         *  of our HTML
         *  --> create default implementation
         *      of an empty object
         *  --> default method to return the HTML
         *      elements is set to return empty object
         *      takes a key and returns the callback
         *      to create the given element
         *  ------------------------------------------
         *  see UserEdit.ts example for reference implementation
         */
        this.regions = {};
        // add a function to rerender when
        // the model changes overall
        this.bindModel();
    }
    /** eventsMap default since not every model
     *  will likely need an eventsMap methods
     *  by returning an empty object we define
     *  a "harmless" default implementation
     */
    View.prototype.eventsMap = function () {
        return {};
    };
    View.prototype.regionsMap = function () {
        return {};
    };
    // loops over HTML and adds events and event listeners
    View.prototype.mapRegions = function (fragment) {
        // reference the regionsMap
        var regionsMap = this.regionsMap();
        // loop over and identify all the relevant selectors
        for (var key in regionsMap) {
            // get the selector based on the key
            var selector = regionsMap[key];
            // get the element based on the selector
            var element = fragment.querySelector(selector);
            // ensure the element first exists
            // then assign it to the map
            if (element) {
                this.regions[key] = element;
            }
        }
    };
    // helper method to re-render model when changes are made
    View.prototype.bindModel = function () {
        var _this = this;
        this.model.on("change", function () {
            _this.render();
        });
    };
    /** helper function that adds events
     *  and event listeners to the html elements
     *  the event listener is the left side and
     *  the selector on the right side
     *  i.e. click:.set-name
     *  ---------------------------------------
     *  see UserForm.ts for example implementation
     */
    View.prototype.bindEvents = function (fragment) {
        var eventsMap = this.eventsMap();
        var _loop_1 = function (eventKey) {
            var _a = eventKey.split(":"), eventName = _a[0], selector = _a[1];
            fragment.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        };
        // loops over keys from eventsMap object
        for (var eventKey in eventsMap) {
            _loop_1(eventKey);
        }
    };
    /** optional function to perform
     *  the purpose of this function is
     *  to build modular components
     *  dynamically
     *  NOTE: see UserEdit.ts for sample
     *  implementation
     */
    View.prototype.onRender = function () { };
    /** main render function that brings
     *  together all the methods we have defined
     *  it first clears the html of the parent element
     *  and then brings together all the
     *  methods we have laid out so far
     */
    View.prototype.render = function () {
        /** when the form re-renders, we want
         *  to make sure to first empty the existing html
         *  then add it back in
         */
        this.parent.innerHTML = "";
        /** create a template based on
         *  the template() method
         *  implemented for the specific
         *  model
         */
        var templateElement = this.template();
        /** create a document fragment
         *  which we append all the html
         *  elements to
         */
        var fragment = document.createDocumentFragment();
        // append the template element to the div
        fragment.appendChild(templateElement);
        // bind events to elements in the fragment
        this.bindEvents(fragment);
        // call mapRegions method
        this.mapRegions(fragment);
        // nest all the views - if implemented
        this.onRender();
        // append the fragment to the parent element
        this.parent.appendChild(fragment);
    };
    return View;
}());
export { View };
