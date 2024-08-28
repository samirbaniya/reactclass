function CustomMap() {
  const simpledata = [1, 2, 3];
  const data = [
    {
      name: "sam",
      roll: 1,
    },
    {
      name: "raj",
      roll: 2,
    },
  ];
  const tdata = simpledata.map((item, index) => (
    <div key={index} style={{ color: "blue" }}>
      number:{item + 1}
    </div>
  ));

  const tComplex = data.map((item) => (
    <div key={item.roll}>
        <div>name:{item.name}</div><div>roll:{item.roll},</div>
      
    </div>
  ));
  // console.log(simpledata);
  return (
    <div>
      {tdata}
      {tComplex}
    </div>
  );
}

export default CustomMap;
