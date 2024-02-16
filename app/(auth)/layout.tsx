export default function AuthLayout({
    children
}:{
    children:React.ReactNode
}){
    return (
        <div className="flex items-center mt-[7rem] justify-center h-full">
            {children}
        </div>
    )
}