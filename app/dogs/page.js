import Link from "next/link"
import { getAllDogs } from "../actions/getAllDogs"
import Cards  from "../../components/Cards";

export default async function Dogs() {
    const dogs = await getAllDogs()
    return (
      <div className="container mx-auto w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {dogs?.data.map((dog) => (
                <Link  href={`/dogs/${dog.id}`}>
                  <Cards data={dog}/>
                </Link>
            ))
            }
        </ul>
      </div>
    )
}