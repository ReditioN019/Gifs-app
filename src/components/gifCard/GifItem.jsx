import { saveAs } from 'file-saver'
import Swal from 'sweetalert2';
import { AiOutlineLink, AiOutlineDownload } from 'react-icons/Ai';

export const GifItem = ({ title, url, id }) => {

    const handleDownload = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Descarga Completada',
            showConfirmButton: false,
            timer: 1500
        })
        saveAs(url, `${title}.gif`) // Put your image url here.
    }

    const handleCopyClipboard = () => { 
        const urlWsp = `https://media.giphy.com/media/${id}/giphy.gif`;
        navigator.clipboard.writeText(urlWsp);

        Swal.fire({
            title: '¡Copiado al portapapeles!',
            text: 'Puedes compartir el gif donde quieras',
            imageUrl: urlWsp,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: title,
        });      
    }

    return (
        <div className="mx-auto overflow-hidden rounded-lg bg-slate-600 shadow-lg shadow-[#070f11]">
            <img
                src={url}
                alt={title}
            />
            <div>
                <p className="text-base">{title}</p>
                <button className="mx-auto mb-5 animate-bounce grid grid-cols-2 gap-3" >
                    <AiOutlineDownload
                        color={'#3EC70B'}
                        size={25}
                        onClick={handleDownload}
                    />
                    <AiOutlineLink 
                        size={25}
                        color={'#3EC70B'}
                        onClick={handleCopyClipboard}
                    />
                </button>
            </div>
        </div>
    )
}
