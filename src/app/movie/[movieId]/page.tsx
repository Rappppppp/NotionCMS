"use client"

import { useState, useEffect } from 'react';
import BlockRenderer from '@/components/BlockRenderer';
import NotionContents from '@/server/NotionContents';
// import Star from '@/components/Star';

interface PageContents {
    parent_icon: any;
    parent_title: string;
    rating: number;
    status: string | null;
    genre: any;
    child_blocks?: any[]; // Make child_blocks optional
}

const initialContents: PageContents = {
    parent_icon: {}, // Assuming parent_icon could be an object
    parent_title: '',
    rating: 0,
    status: null,
    genre: [],
};

export default function Page({ params }: { params: { movieId: string } }) {
    const [contents, setContents] = useState<PageContents>(initialContents);
    const [isLoading, setIsLoading] = useState(true);

    const fetchContents = async () => {
        try {
            const response = await NotionContents({pageId: params.movieId});

            if (response) {
                setContents(response as PageContents); 
                setIsLoading(false);
            } else {
                console.log('Error', response);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchContents();
    }, []);

    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : (
                <div>
                    <a href="/journals"><h1>Back</h1></a>
                    {contents.parent_icon?.url ? (
                        <img src={contents.parent_icon.url} style={{ width: 80 }} alt="parent_icon" />
                    ) : (
                        <p style={{ fontSize: 80 }}>{contents.parent_icon}</p>
                    )}
                    <h1>{contents.parent_title}</h1>
                    {/* <Star rating={contents.rating} /> */}
                    <b>{Math.round(contents.rating / 2)} / 5</b>
                    {contents.child_blocks && contents.child_blocks.map((block: any, index: number) => (
                        <BlockRenderer key={index} block={block} />
                    ))}
                </div>
            )}
        </>
    );
}
