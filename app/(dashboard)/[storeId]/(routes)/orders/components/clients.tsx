'use client'

import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { OrderColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

interface OrderClientProps {
    data: OrderColumn[]
}

const clients: React.FC<OrderClientProps> = ({
    data
}) => {
    return (
        <>
            <Heading
                title={`Orders (${data.length})`} description={"Manage orders for your store"} />
            {/* <Button onClick={()=> router.push(`/${params.storeId}/billboards/new`)}>
                <Plus className="mr-2 h-4 w-4"/>Add New
            </Button> */}
            <Separator />
            <DataTable searchKey="products" columns={columns} data={data} />
        </>
    )
}

export default clients