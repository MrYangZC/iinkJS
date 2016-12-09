import { inkpaperLogger as logger } from '../configuration/LoggerConfig';

/**
 * Emits events when change occurs
 * @param {Object} data
 * @param {string} [eventName='change']
 * @emits change when the model changes.
 */
export default function (data, eventName = 'change') {
  logger.debug(`emitting ${eventName} event`, data);
  // We are making usage of a browser provided class
  // eslint-disable-next-line no-undef
  this.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  return data;
}