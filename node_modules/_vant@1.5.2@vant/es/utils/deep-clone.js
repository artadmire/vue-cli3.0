import deepAssign from './deep-assign';
export default function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return deepAssign({}, obj);
  }

  return obj;
}