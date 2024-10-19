import { useParams } from "react-router-dom"
import datas from "../../../assets/data"
function AboutDesc() {
    const params = useParams();
    const intParams = parseInt(params.id)
    if (isNaN(intParams)) {
        return <div>Invalid params</div>;
      }
      if (intParams > datas.length) {
        return <div>Invalid params</div>;
      }
      const currData = datas[intParams-1];
  return (
    <div
    style={{ textAlign: "center", backgroundColor: "blue", color: "white" }}
  >
    <br />
    <div>Hi i am {currData.name}</div>
    <div>I am of age {currData.age}</div>
    <div>I live in {currData.address}</div>
  </div>
  )
}

export default AboutDesc