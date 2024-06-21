"use server"

const dotenv = require('dotenv')
dotenv.config()

import { Client } from '@notionhq/client';
const notion = new Client({ auth: process.env.NOTION_SECRET })

type ContentsType = {
    pageId: string
}

const NotionContents = async ({ pageId }: ContentsType) => {
    
    try {
        const parentResponse = await notion.pages.retrieve({
            page_id: pageId
        })
        
        const { icon, properties } = parentResponse as any
        const { Rating, Genre, Status, Name } = properties as any

        // Get Children Blocks Response
        const childrenResponse = await notion.blocks.children.list({
            block_id: pageId
        });

        const filterChild = childrenResponse.results.map((result: any) => {
            if (result?.type && result[result.type]) {
                const typeContent = result[result.type];
                const content = typeContent.file?.url || typeContent.url || typeContent.rich_text?.[0]?.text.content;

                return {
                    type: result.type,
                    content: content
                };
            }
        }).filter((item: any) => item !== undefined && item !== null);

        return {
            parent_icon: icon.external || icon.emoji || null,
            parent_title: Name.title[0].text.content || null,
            rating: Rating.number || null,
            genre: Genre.multi_select[0] || null,
            status: Status || null,
            child_blocks: filterChild || null
        }
    } catch (error) {
        console.error('Error retrieving page:', error);
        return null
    }
}

export default NotionContents;
