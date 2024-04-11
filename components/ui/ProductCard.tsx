'use client'
import { Product } from '@/types'

interface PCard{
    data: Product
}


const ProductCard:React.FC<PCard> = ({
    data
}) => {
  return (
    <div className='bg-white group cursor-pointer rounded-xl p-3 space-y-4'>ProductCard</div>
  )
}

export default ProductCard