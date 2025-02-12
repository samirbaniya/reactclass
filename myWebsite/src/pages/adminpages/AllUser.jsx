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
    <tr
      key={user.id}
      className="dark:bg-slate-950 dark:border-gray-700 bg-white border-b"
    >
      <td className="px-6 py-2 border-r dark:text-white">{user.id}</td>
      <td className="px-6 py-2 border-r dark:text-white capitalize">
        {user.username}
      </td>
      <td className="px-6 py-2 border-r dark:text-white">
        {user.name.firstname.charAt(0).toUpperCase() +
          user.name.firstname.slice(1)}{" "}
        {user.name.lastname}
      </td>
      <td className="pl-20 py-2 border-r dark:text-white">
        City: {user.address.city} <br /> Latitude:{" "}
        {user.address.geolocation.lat} <br />
        Longitude: {user.address.geolocation.long}
      </td>
      <td className="px-6 py-2 text-center">
        <button className="px-2 py-1 mr-2 bg-blue-500 dark:bg-blue-700 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-800">
          Edit
        </button>
        <button className="text-white bg-red-500 dark:bg-red-700 hover:bg-red-600 dark:hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-red-700 py-1 px-2 rounded">
          Delete
        </button>
      </td>
    </tr>
  ));

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }
  if (isError) {
    return (
      <div className="text-center text-red-500 dark:text-red-300">Error...</div>
    );
  }
  return (
    <>
      {users.length > 0 ? (
        <div className="container mx-auto border dark:border-gray-700">
          <table className="table-auto w-full">
            <thead className="bg-gray-100 dark:bg-slate-700">
              <tr>
                <th className="px-6 py-2 border-b border-r dark:text-white">
                  Id
                </th>
                <th className="px-6 py-2 border-b border-r dark:text-white">
                  Username
                </th>
                <th className="px-6 py-2 border-b border-r dark:text-white">
                  Name
                </th>
                <th className="px-6 py-2 border-b border-r dark:text-white">
                  Address
                </th>
                <th className="px-6 py-2 border-b dark:text-white">Action</th>
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
