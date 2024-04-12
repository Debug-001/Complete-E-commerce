import getBillboard from '@/actions/getBillboards';
import getProducts from '@/actions/getProducts';
import Billboard from '@/components/billboard'
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const page = async() => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("b441b8a8-f001-440b-807d-cdb174e6af4d")

  return (
    <Container>
    <div className='space-y-10 pb-10'>
      <Billboard data={billboard}/>
    <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
      <ProductList title='Featured Products' items={products}/>
    </div>
    </div>
  </Container>
  )
}

export default page