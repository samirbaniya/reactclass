import Card from "./Card";
import datas from "../../../assets/data";

function Homee() {
  return (
    <div className="home">
      {datas.map((data, index) => (
        <Card title={data.name} key={index}>
          <img src={data.img} alt="pic" />
          <div>age: {data.age}</div>
          <div>addr: {data.address}</div>
        </Card>
      ))}
    </div>
  );
}

export default Homee;
