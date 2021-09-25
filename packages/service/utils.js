export function stopEvent (event) {
  var e = (event) || window.event

  if (e.stopPropagation) {
    e.stopPropagation()
    e.preventDefault()
  } else {
    e.cancelBubble = true
    e.returnValue = false
  }
}
export function addEvent (obj, type, fn, boolean) {
  if (obj.attachEvent) {
    obj['e' + type + fn] = fn
    obj[type + fn] = function () { obj['e' + type + fn](window.event) }
    obj.attachEvent('on' + type, obj[type + fn])
  } else { obj.addEventListener(type, fn, boolean) }
}
export function removeEvent (obj, type, fn, boolean) {
  if (obj.detachEvent) {
    obj.detachEvent('on' + type, obj[type + fn])
    obj[type + fn] = null
  } else { obj.removeEventListener(type, fn, boolean) }
}
