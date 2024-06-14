// for now we can identify google's terrible AI search results with an H1 tag labelling it.
const findAILabelElement = () => {
  const h1s = document.getElementsByTagName("h1");
  for (const h1 of h1s) {
    if (h1.innerHTML === "AI Overview") {
      return h1;
    }
  }
}

const blockAIResult = () => {
  const AILabel = findAILabelElement();
  if (!!!AILabel) { return; } // no label found, nothing to block
  // The AI block is usually contained a div sibling after the label
  let nodeToHide = AILabel.nextSibling;
  // if it isn't there, just block the parent node. Removes some padding, so less ideal, but works.
  if (nodeToHide == null) {
    nodeToHide = AILabel.parentNode;
  }
  nodeToHide.setAttribute("style", "display: none");
}

blockAIResult();