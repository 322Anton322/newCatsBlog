
import { notFound } from "next/navigation"
import Card from "../../../components/Card"
import { getAllDogs } from "../../actions/getAllDogs"
import { getDogs } from "../../actions/getDog"


export async function generateMetadata({ params }) {
  return {
    title: params.id,
  }
}

export default async function StaticDogs({ params }) {
  const dog = await getDogs(params.dogId)
  return (
    <>
      <Card data={dog.data ? dog.data : notFound()}/>
      
    </>
  )
}

export async function generateStaticParams() {
    const dogs = await getAllDogs()
    return dogs.data.map(dog => ({
      dogId: `${dog.id}`
    }))
   }