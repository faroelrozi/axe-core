import { isHTML5 } from '../../commons/dom';

function html5ScopeEvaluate(node, options, virtualNode, context) {
  if (!isHTML5(document)) {
  	return true;
  }

  return node.nodeName.toUpperCase() === 'TH';
}

export default html5ScopeEvaluate;