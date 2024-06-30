export const Avatar = ({name}) => {

    return (
    <div className="relative inline-flex items-center justify-center  w-14 h-14 bg-pink-200 rounded-full text-gray-800 text-3xl font-bold">
        <span className="font-xs text-gray-00">{(name) ? name[0].toUpperCase() : ' '}</span>
    </div>)
    
    }
