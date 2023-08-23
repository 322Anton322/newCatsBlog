import Link from "next/link"
import Button from "./../components/Button/Button"
import { getAllDogs2 } from "./actions/test"


export default async function Home() {
    const dogs = await getAllDogs2()
    return (
      <div>
        <ul>
            {dogs?.data.map((dog) => (
                <Link  href={`/dogs/${dog.id}`}>
                <h2>
                    {dog.attributes.name}
                </h2>
                </Link>
            ))
            }
        </ul>
        <Button/>
      </div>
    )
}