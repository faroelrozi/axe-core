import { accessibleText } from '../../commons/text';

function sameCaptionSummaryEvaluate(node, options, virtualNode, context) {
  // passing node.caption to accessibleText instead of using
  // the logic in accessibleTextVirtual on virtualNode
  return (
  	!!(node.summary && node.caption) &&
  	node.summary.toLowerCase() ===
  		accessibleText(node.caption).toLowerCase()
  );
}

export default sameCaptionSummaryEvaluate;