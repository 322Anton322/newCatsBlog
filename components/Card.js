export default function Card({data}) {
    return (
        <div className="container mx-auto block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img className="rounded-t-lg" src={data.attributes.imageLink} alt="" />
            </div>
            <div className="p-6">
                <div className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                    {data.attributes.name}
                </div>
                <div className="text-base text-neutral-600 dark:text-neutral-200">
                    <h2>{data.attributes.origin}</h2>
                </div>
            </div>
            <ul className="w-full">
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3" key={1}>
                    {data.attributes.length}
                </li>
                <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3" key={2}>
                Вес от {data.attributes.minWeight} до {data.attributes.maxWeight} кг
                </li>
                <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3" key={3}>
                Живет от {data.attributes.minLifeExpectancy} до {data.attributes.maxLifeExpectancy} лет
                </li>
            </ul>
            </div>
    )
}