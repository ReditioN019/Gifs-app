import PuffLoader from "react-spinners/PuffLoader";


export const Loading = ({ loading }) => {
  return (
    <div className="mx-auto flex justify-center">
        <PuffLoader color={'#DB0C30'} loading={loading} size={100} />
    </div>
  )
}
