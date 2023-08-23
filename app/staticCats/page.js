import Link from "next/link"
import { getAllCats } from "../actions/getAllCats"
import Cards from "../../components/Cards"

async function getData() {
    const res = await fetch('http://10.10.21.200:1337/api/cats')
   
    return res.json()
  }

export default async function StaticCats() {
    const cats = await getAllCats()
    return (
      <div className="container mx-auto w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <ul className="divide-y divide-gray-200">
            {cats.data.map((cat) => (
                <Link  href={`/staticCats/${cat.id}`}>
                  <Cards data={cat}/>
                {/* <h2>
                    {cat.attributes.name}
                </h2> */}
                </Link>
            ))
            }
        </ul>
      </div>
    )
}