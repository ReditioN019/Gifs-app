import { saveAs } from 'file-saver'
import Swal from 'sweetalert2';
import { FaDownload } from 'react-icons/Fa';
import { AiOutlineWhatsApp } from 'react-icons/Ai';


export const GifItem = ({ title, url, id }) => {

    const handleDownload = (url ) => {
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
            text: 'Pega el Link en whatssap y comparte el gif',
            imageUrl: urlWsp,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: title,
            showDenyButton: true,
            denyButtonText: `Ir a whatssap`
        }).then((result) => {
            if (result.isDenied) {
                window.open(
                    'https://wa.me',
                    '_blank' 
                );
            }
        })
        
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
                    <FaDownload
                        color={'red'}
                        size={20}
                        onClick={() => handleDownload(url)}
                    />
                    <AiOutlineWhatsApp 
                        onClick={handleCopyClipboard}
                        color={'#3EC70B'}
                        size={20}
                    />
                </button>
            </div>
        </div>
    )
}
