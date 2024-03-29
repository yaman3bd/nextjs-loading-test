import {Inter} from 'next/font/google'
import {withCommonGetServerSideProps} from "@/utils/withCommonGetServerSideProps";
import {useFetchTenantQuery} from "@/store/slices/api/tenantSlice";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const getServerSideProps = withCommonGetServerSideProps();

export default function Home() {
    const {data,isLoading} = useFetchTenantQuery()
    return (
        <main
            className={`p-20 ${inter.className}`}
        >
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    {isLoading? "loading data" : data?.title}
                </p>
                <Link href="/other-page">
                    go to other page
                </Link>
            </div>
        </main>
    )
}
