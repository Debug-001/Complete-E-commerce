import { Category } from '@/types'
import React from 'react'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCat = async (): Promise<Category[]> => {
    const response = await fetch(URL)
    return response.json()
}

export default getCat