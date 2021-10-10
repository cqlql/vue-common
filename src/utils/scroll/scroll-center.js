
export default function scrollCenter (eContainer, eItem) {
  eContainer.scrollTop = eItem.offsetTop - (eContainer.clientHeight - eItem.clientHeight) / 2
}
