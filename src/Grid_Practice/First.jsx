// TODO:
// Desktop

// ┌──────────┬──────────┬──────────┬──────────┐
// │ Product  │ Product  │ Product  │ Product  │
// │    1     │    2     │    3     │    4     │
// ├──────────┼──────────┼──────────┼──────────┤
// │ Product  │ Product  │ Product  │ Product  │
// │    5     │    6     │    7     │    8     │
// └──────────┴──────────┴──────────┴──────────┘


// Tablet

// ┌──────────┬──────────┐
// │ Product  │ Product  │
// │    1     │    2     │
// ├──────────┼──────────┤
// │ Product  │ Product  │
// │    3     │    4     │
// └──────────┴──────────┘


// Mobile

// ┌──────────────────┐
// │     Product 1    │
// ├──────────────────┤
// │     Product 2    │
// ├──────────────────┤
// │     Product 3    │
// └──────────────────┘



function First()
{
    return(
        <div className="border w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
           <div className="border">1</div>
           <div className="border">2</div>
           <div className="border">3</div>
           <div className="border">4</div>
           <div className="border">5</div>
           <div className="border">6</div>
           <div className="border">7</div>
           <div className="border">8</div>

        </div>
    )
}

export default First;