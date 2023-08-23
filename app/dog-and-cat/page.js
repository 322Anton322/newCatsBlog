import Link from "next/link";

export default async function DogsVsCats() {
    return (
      <div>
        <div>
          <Link href={`/dog-and-cat/noDogs`}>Dogs</Link>
        </div>
        <div>
          Cats And Dogs
        </div>
      </div>
    )
}