// template trying to imitate : https://imgs.search.brave.com/KOkwR5oDYa_gouVwhav6HzjPNV3enH6JXNhjOg6qOVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXNp/Z25zaGFjay5uZXQv/d3AtY29udGVudC91/cGxvYWRzL21kbi1n/cmlkLmpwZw



function Second()
{
    return(
        <div className="border w-1/2 grid grid-cols-3 grid-rows-4 gap-2 p-2">
           <div className="border p-10 bg-yellow-200 col-span-2 row-start-1 col-start-1">1</div>
           <div className="border p-10 bg-yellow-200/50 col-start-2 row-start-1 col-span-2 row-span-2">2</div>
           <div className="border p-10 bg-yellow-200 row-span-3">3</div>
           <div className="border p-10 bg-yellow-200 -col-end-1">4</div>
           <div className="border p-10 bg-yellow-200">5</div>
           <div className="border p-10 bg-yellow-200">6</div>

        </div>
    )
}

export default Second;
