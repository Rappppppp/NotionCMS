"use server"

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import NotionClient from './NotionClient'

const client = new ApolloClient({
    uri: 'https://graph.imdbapi.dev/v1',
    cache: new InMemoryCache()
});

const getSoonIds = async () => {
    try {
        // Call `retrieve` on `databases` to retrieve a database object.
        const response = await NotionClient.databases.query({
            database_id: process.env.NOTION_DB_SOON!,
        })

        const filtered = response.results
            .map((result: any) => result.properties?.imdb_id?.title?.[0]?.text?.content ?? '')
            .filter((result: string) => result !== '');

        return filtered
    } catch (error) {
        console.error('Error retrieving page:', error)
    }
}

const Apollo = async () => {
    const movieIds = await getSoonIds() // ["tt1190634", "tt6263850", "tt11712058", "tt9140554"];
    const formattedIds = movieIds?.map(id => `"${id}"`).join(', ');

    const { data } = await client.query({
        query: gql`
         query titleById {
            titles(ids: [${formattedIds}]) {
            id
            primary_title
            start_year
            plot
            posters {
                url
                width
                height
            }
            genres
            origin_countries {
            name
        }
    }
}

        `
    });
    return data
}

export default Apollo