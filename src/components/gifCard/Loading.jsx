import PuffLoader from "react-spinners/PuffLoader";


export const Loading = () => {
  return (
    <div className="mx-auto flex justify-center">
        <PuffLoader color={'#DB0C30'}  size={100} />
    </div>
  )
}
