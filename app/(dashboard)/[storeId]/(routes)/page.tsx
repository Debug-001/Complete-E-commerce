import prismadb from "@/lib/prismadb"

interface DashBoardPageProps {
  params: { storeId: string }
};


const page: React.FC<DashBoardPageProps> = async ({
  params
}) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })
  return (
    <div>
      Active Store: {store?.name}
    </div>
  )
}

export default page