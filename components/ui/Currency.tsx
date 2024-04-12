import React, { useEffect, useState } from 'react'


interface CurrencyProps {
    value: string | number
}

const formatter = new Intl.NumberFormat("en-IN",{
    style:'currency',
    currency:'INR'
})


const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

return(
    <div className='semi-bold px-2 text-blue-800'>
        {formatter.format(Number(value))}
    </div>
)
}
export default Currency