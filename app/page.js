import Link from "next/link"
import Button from "./../components/Button/Button"
import { getAllDogs2 } from "./actions/test"
import Cards from "../components/Cards"


export default async function Home() {
    const dogs = await getAllDogs2()
    return (
      <div>
        <ul>
            {dogs?.data.map((dog) => (
              <Link  href={`/dogs/${dog.id}`}>
                <Cards data={dog}/>
              </Link>
            ))
            }
        </ul>
        <Button/>
      </div>
    )
}