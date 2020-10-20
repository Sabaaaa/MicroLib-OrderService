'use strict'

/**
 * @callback adapter
 * @param {function | object} iface the external interface
 */

/**
 * Adapter for external interfaces.
 * @param {*} thisObj - adaptee object (this)
 */
const InterfaceAdapter = function (thisObj) {
  const adapters = new Map();
  return {
    /**
     * Add adapter logic
     * @param {function | object} iface - external interface
     * @param {adapter} adapter - adapter logic
     */
    add(iface, adapter) {
      adapters.set(iface, adapter);
    },
    /**
     * Invoke adapter logic
     * @param {function | object} iface - external interface
     */
    invoke(iface) {
      return adapters.get(iface).call(thisObj, iface);
    }
  }
}

module.exports.InterfaceAdapter = InterfaceAdapter;