import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SettingsForm } from "./settingsForm";

interface SettingsPageProps {
    params: {
        storeId: string;
    }
}

const page: React.FC<SettingsPageProps> = async ({
    params
}) => {
    const { userId } = auth()
    if (!userId) {
        redirect('/sign-in')
    }
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })

    if (!store) {
        redirect('/')
    }

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-6 mx-5 pt-6 ">
                <SettingsForm initialData={store}/>
            </div>
        </div>
    )
}

export default page