import Link from "next/link"
import { getAllCats } from "../actions/getAllCats"
import Cards  from "../../components/Cards";
import { Suspense } from "react";
import  Loading  from "./loading";

export default async function Cats() {
    const cats = await getAllCats()

    return (
      <Suspense fallback={<Loading/>}>
      <div className="container mx-auto w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <ul className="divide-y divide-gray-200">
            {cats.data.map((cat) => (
              <Link href={`/cats/${cat.id}`}>
                <Cards data={cat}/>
              </Link>
            ))
            }
        </ul>
        <Link href={`/login`}>
          Login
        </Link>
      </div>
      </Suspense>
    )
}