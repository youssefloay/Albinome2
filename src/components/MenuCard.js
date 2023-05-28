function MenuCard(props) {
    return ( 
        <div className="flex w-3/6 rounded-md	 px-4 py-4 justify-between gap-3 border-2 border-zinc-400 my-2 mx-2	">
            <div className="bg-red-500 w-12 h-12 flex align-center justify-center items-center rounded-full"> 
                <p>{props.id}</p>
            </div>
            <div className="flex flex-col">
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
            </div>
            <div className="flex align-center justify-center	items-center"> 
                <p>{props.price} $</p>
             </div>      
        </div>
     );
}

export default MenuCard;