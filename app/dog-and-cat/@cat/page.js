
import Link from 'next/link';
import { getAllCats } from '../../actions/getAllCats';
import Cards from '../../../components/Cards';

export default async function Cats() {
    const cats = await getAllCats();
    return (
        <div className="container mx-auto w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <ul className="divide-y divide-gray-200">
            {cats.data.map((cat) => (
              <Link href={`/dog-and-cat/${cat.id}`}>
                <Cards data={cat}/>
              </Link>
            ))
            }
        </ul>
      </div>
    );
}
