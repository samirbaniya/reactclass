/* eslint-disable react/prop-types */
function Card(props) {
  const { img } = props;
  return (
    <div>
      <div className=" bg-white border w-32 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Card;
