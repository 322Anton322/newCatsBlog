import { getAllCats } from "../app/actions/getAllCats"
import { getAllDogs } from "../app/actions/getAllDogs"
 
const URL = "http://localhost:3000";
export default async function sitemap() {

    let cats = await getAllCats();
    cats = cats.data.map((cat) => ({
        url: `${URL}/cats/${cat.id}`,
        lastModified: `${cat.attributes.updatedAt}`
    }))

    let dogs = await getAllDogs();
    dogs = dogs.data.map((dog) => ({
        url: `${URL}/dogs/${dog.id}`,
        lastModified: `${dog.attributes.updatedAt}`
    }))

  const routes = ["", "/cats", "/dogs", ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...cats, ...dogs];
}