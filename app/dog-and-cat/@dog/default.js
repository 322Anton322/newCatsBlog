import { getAllDogsNoStore } from "../../actions/getAllDogsNoStore"
import Cards from "../../../components/Cards";

export default async function DogsDefault() {
    const dogs = await getAllDogsNoStore();
    return (
        <div className="container mx-auto w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8  dark:border-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {dogs?.data.map((dog) => (
                // <Link  href={`/dog-and-cat/${dog.id}`}>
                  <Cards data={dog ? dog : null}/>
                // </Link>
            ))
            }
        </ul>
      </div>
    );
}