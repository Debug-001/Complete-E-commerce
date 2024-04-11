import { Product } from '@/types'
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query{
    categoryID?: string,
    colorID?: string,
    sizeID?: string,
    isFeatured?: boolean,
}

const getProducts = async (query: Query): Promise<Product[]> => {
    const url = qs.stringifyUrl({
        url:URL,
        query:{
            colorId: query.colorID,
            sizeId: query.sizeID,
            categoryId: query.categoryID,
            isFeatured: query.isFeatured,
        }
    })
    const response = await fetch(URL)
    return response.json()
}

export default getProducts