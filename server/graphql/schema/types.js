const { gql } = require("apollo-server");

const typeDefs = gql`
	type Users {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
	}
`;

module.exports = typeDefs;
