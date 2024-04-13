import getProduct from '@/actions/getProduct'
import getProducts from '@/actions/getProducts'
import Gallery from '@/components/gallery'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import React from 'react'

interface ProductProps {
    params: {
        productId: string
    }
}

const page: React.FC<ProductProps> = async ({
    params
}) => {

    const product = await getProduct(params.productId)

    const suggestedProducts = await getProducts({
        categoryID: product?.category?.id
    })
 
    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-10 sm:px-6 lg:px-8'>
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <div className=''>
                            <Gallery images={product.images}/>
                        </div>
                        <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>Info </div>
                    </div>
                    <hr className='my-10'/>
                    <ProductList title='Related Items' items={suggestedProducts}/>
                </div>
            </Container>
        </div>
    )
}

export default page