

export const GifItem = ({ title, url }) => {
    
    
    return (
        <div className="mx-auto overflow-hidden rounded-lg bg-slate-600 shadow-lg shadow-[#070f11]">
            <img 
                src={url} 
                alt={title} 
            />
            <p>{ title }</p>
        </div>
    )
}
