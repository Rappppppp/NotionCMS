"use client"


import React, { useEffect, useState } from 'react'
import NotionDB from '@/server/NotionDB'

export interface MovieList {
    page_id: string
    title: string
    description: string
    image_cover: string
}

export default function Journals() {
    const [lists, setLists] = useState<MovieList[]>([])
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await NotionDB()
        if (response) {
          // Filter out null values and map the remaining objects to DataItem
          const filteredData: MovieList[] = response
            .filter(item => item !== null)
            .map((item: any) => ({
              title: item.title,
              description: item.description,
              image_cover: item.image_cover,
              page_id: item.page_id
            }))
          setLists(filteredData)
            setIsLoading(false)
          return
        } 
          
        setLists([])
        
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
        {isLoading ? 'Loading...' : lists.map((list, index) => (
            <div key={index}>
                <a href={`movie/${list.page_id}`}><h1>{list.title}</h1></a>
                <p>{list.description}</p>
                <img src={list.image_cover} style={{ width: 100 }} alt={`ALT_${list.title}`} />
            </div>
        ))}
    </>
)
}
