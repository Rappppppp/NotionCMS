"use server"

import NotionClient from './NotionClient'

const NotionSoon = async () => {
    try {
        // Call `retrieve` on `databases` to retrieve a database object.
        const response = await NotionClient.databases.query({
            database_id: process.env.NOTION_DB_REVIEWS!,
        })

        const filtered = response.results.map((result: any) => {
            const property = result.properties
            return {
                reviewer: property.reviewer.title[0].text.content,
                movie: property.movie.rich_text[0].text.content,
                rating: property.ratings.number,
                message: property.message.rich_text[0]?.text.content ?? ''
            }
        })

        return filtered
    } catch (error) {
        console.error('Error retrieving page:', error)
    }
}

export default NotionSoon