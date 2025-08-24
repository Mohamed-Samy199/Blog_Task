
export default function SearchItems({itemsSearch , setItemsSearch}) {
    return (
        <>
            <input
                type='text'
                placeholder='search about post...'
                value={itemsSearch}
                onChange={(e) => setItemsSearch(e.target.value)}
                className='border-2 border-purple-400 rounded-full text-purple-950 px-4 py-2 my-2 w-full text-center shadow caret-purple-700' />
        </>
    )
}
