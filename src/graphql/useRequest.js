import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";
import { jsonToGraphQLQuery } from 'json-to-graphql-query';
const API_URL = 'http://localhost:3000/graphql';

const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
        // Authorization: `Bearer ${process.env.API_KEY}`
        'Content-Type': 'application/json',
    }
});


export function useGetClothes(filter = {}) {
    const query = {
        query: {
            clothes: {
                __args: {
                    filter
                },
                _id: true,
                type: true,
                name: true,
                category: true,
                refNumber: true,
                price: true,
                size: true,
                image: true,
                imageList: true,
            }
        }
    };
    const graphql_query = jsonToGraphQLQuery(query, { pretty: true });

    return useQuery("getClothes", async () => {
        return await graphQLClient.request(graphql_query);
    });
}

export function useGetCloth(id) {
    return useQuery("getCloth", async () => {
        return await graphQLClient.request(gql`
            query {
                clothesOne(_id: "${id}") {
                    _id
                    type
                    name
                    category
                    refNumber
                    price
                    size
                    image
                    imageList
                }
            }
        `);
    });
}