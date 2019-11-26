import headingMatches from './heading-matches';

const headingOrderMetadata = {
	id: 'heading-order',
	selector: 'h1, h2, h3, h4, h5, h6, [role=heading]',
	matches: headingMatches,
	tags: ['cat.semantics', 'best-practice'],
	metadata: {
		description: 'Ensures the order of headings is semantically correct',
		help: 'Heading levels should only increase by one'
	},
	all: [],
	any: ['heading-order'],
	none: []
};

export default headingOrderMetadata;