export default function Cards({data}) {
    return (
        <li className="py-3 sm:py-4" key={data.id} >
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={data.attributes.imageLink} alt="Упс..."/>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                        {data.attributes.name}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                        {data.attributes.origin}
                    </div>
                </div>
                {/* <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    <h2>{data.attributes.length}</h2>
                </div> */}
            </div>
        </li>
    )
}