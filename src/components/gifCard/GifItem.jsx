import { FaDownload } from 'react-icons/Fa';
import { saveAs } from 'file-saver'
import Swal from 'sweetalert2';

export const GifItem = ({ title, url }) => {

    const handleDownload = (url) => {
        Swal.fire({
            title: '¿Segúr@ desea descargar el gif?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, adelante!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Descargado!',
                'El gif ha sido descargado.',
                'success'
              )
              saveAs(url, 'image.gif') // Put your image url here.
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
                <button className="mx-auto mb-5 animate-bounce" onClick={() => handleDownload(url)}>
                    <FaDownload
                        color={'#3EC70B'}
                        size={20}
                    />
                </button>
            </div>
        </div>
    )
}
