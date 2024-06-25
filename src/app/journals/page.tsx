"use client"

import React, { useEffect, useState } from 'react'
import NotionDB from '@/server/NotionDB'

import Image from 'next/image'

import Loading from '@/components/Loading'

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
      <div className='h-screen mx-32'>
        <div className='flex h-full items-center'>
          <div className='flex flex-col gap-5'>
            {isLoading ? <Loading/> : lists.map((list, index) => (
              <div key={index} className='flex flex-col lg:flex-row gap-5'>
                <Image
                  src={list.image_cover}
                  width={200}
                  height={0}
                  alt={`ALT_${list.title}`} />
                <a href={`journals/${list.page_id}`}><h1>{list.title}</h1></a>
                <p>{list.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
