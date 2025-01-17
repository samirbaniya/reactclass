import { getAllUsers } from "@/api/users";
import { useQuery } from "@tanstack/react-query";

function AllUser() {
  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    retry: 4,
  });
  const users = userData?.map((user) => (
    <tr key={user.id} className="bg-white border-b">
      <td className="px-6 py-2 border-r">{user.id}</td>
      <td className="px-6 py-2 border-r">{user.username}</td>
      <td className="px-6 py-2 border-r">
        {user.name.firstname} {user.name.lastname}
      </td>
      <td className="px-6 py-2 border-r">
        City: {user.address.city} <br /> Latitude:{" "}
        {user.address.geolocation.lat} <br />
        Longitude: {user.address.geolocation.long}
      </td>
      <td className="px-6 py-2 text-center">
        <button className="px-2 py-1 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit
        </button>
        <button className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 py-1 px-2 rounded">
          Delete
        </button>
      </td>
    </tr>
  ));

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (isError) {
    return <div className="text-center text-red-500">Error...</div>;
  }
  return (
    <>
      {users.length > 0 ? (
        <div className="container mx-auto border">
          <table className="table-auto w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-2 border-b border-r">Id</th>
                <th className="px-6 py-2 border-b border-r">Username</th>
                <th className="px-6 py-2 border-b border-r">Name</th>
                <th className="px-6 py-2 border-b border-r">Address</th>
                <th className="px-6 py-2 border-b">Action</th>
              </tr>
            </thead>
            <tbody>{users}</tbody>
          </table>
        </div>
      ) : null}
    </>
  );
}

export default AllUser;
