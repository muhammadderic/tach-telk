import { ClipLoader } from "react-spinners"

const override = {
  display: "block",
  margin: "100px auto",
}

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      override={override}
      size={150}
    />
  )
}

export default Spinner;