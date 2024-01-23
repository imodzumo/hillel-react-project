import useFetch from "../hooks/useFetch.jsx";

const Users = ()=> {
	const {data, isLoading, isError} = useFetch("https://jsonplaceholder.typicode.com/users")


	if (isLoading) return <div>Loading...</div>

	if (isError) return <div>Error</div>

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{data.map(user => <li key={user.id}>{user.name}</li>)}
			</ul>
		</div>
	);
}

export default Users;
