'use server'

const dotenv = require('dotenv')
dotenv.config()

import NotionClient from './NotionClient'

const NotionDB = async () => {
    try {
        // Call `retrieve` on `databases` to retrieve a database object.
        const response = await NotionClient.databases.query({
            database_id: process.env.NOTION_DB_FILMS!,
            filter: {
                property: 'Status',
                status: {
                    equals: 'Done'
                }
            }
        })

        // Extract the page IDs from the URLs
        // Assuming you are in an async function context
        const filteredResults = await Promise.all(response.results.map(async (page: any) => {
            try {
                const title = page.properties.Title.rich_text[0]?.text.content || 'Untitled'
                const description = page.properties.Description.rich_text[0]?.text.content || ''
                const imageCover = page.properties.ImageCover.url || '#'
                const pageId = page.url.split('-')
                const newPageId = pageId[pageId.length - 4]
                return {
                    isLoading: false,
                    title,
                    description,
                    image_cover: imageCover,
                    page_id: newPageId
                }

            } catch (error) {
                console.error(`Error processing page: ${page.id}`, error)
                return null
            }
        }))

        return filteredResults
    } catch (error) {
        console.error('Error retrieving page:', error)
        // res.status(500).send('Error retrieving page')
    }
}

export default NotionDB