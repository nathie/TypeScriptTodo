/*
2.9 Computed properties:
Allows you to define a property on an object with a name that is computed dynamically at runtime.
*/

/*
Original Code
var support = {
  'os_Windows': isSupported('Windows'),
  'os_iOS': isSupported('iOS'),
  'os_Android': isSupported('Android'),
}

function isSupported(os) {
  return Math.random() >= 0.5;
}
*/

const osPrefix = 'os_';

var support = {
    [osPrefix + 'Windows']: isSupported('Windows'),
    [osPrefix + 'iOS']: isSupported('iOS'),
    [osPrefix + 'Android']: isSupported('Android'),
}

function isSupported(os) {
    return Math.random() >= 0.5;
}