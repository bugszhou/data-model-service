import isArray from 'lodash.isarray';

export default function fromEntries(iterable) {
  if (!isArray(iterable)) {
    throw new Error('input is not array');
  }
  return [...iterable].reduce((obj, { 0: key, 1: val }) => Object.assign(obj, { [key]: val }), {});
}
