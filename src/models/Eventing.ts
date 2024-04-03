/** set up type alias for functions */
type Callback = () => void;
/** basic function to hold the events
 *  and triggers for a given model
 *  this lets users dynamically program
 *  events, i.e. saving model information to
 *  a database etc.
 *  will likely need further tweaking for more
 *  complex implementations
 */
export class Eventing {
  /** object in the class to hold the events
   *  the key is a string and the result is
   *  an array of callbacks
   *  to specify key type if we don't know the
   *  name of the key in advance we pass it in like this
   */
  events: { [key: string]: Callback[] } = {};
  /** function to update an html element and add
   *  then execute an event listener
   *  to indicate the type being passed in is a function
   *  we need to pass in () => void
   */
  on = (eventName: string, callback: Callback) => {
    /** the handler will either be defined or
     *  not yet defined, i.e. no callbacks have
     *  been passed in yet
     */

    const handlers = this.events[eventName] || [];
    /** add a new callback to the existing array
     *  of functions to call based on the trigger
     */
    handlers.push(callback);

    // add the handlers to the given events
    this.events[eventName] = handlers;
  };
  /** trigger function to execute the callbacks
   *  we have added to different event types
   */
  trigger = (eventName: string): void => {
    /** extract the handlers for that event */
    const handlers = this.events[eventName];
    /** if there are no handlers for the event
     *  we exit and return
     */
    if (!handlers || handlers.length === 0) {
      return;
    }
    /** otherwise we call all the callbacks in the array */
    handlers.forEach((callback) => {
      callback();
    });
  };
}
