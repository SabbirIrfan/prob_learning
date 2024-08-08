import { resolve } from "path";
import React, { use } from "react";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street:string,
      suite: string ,
      city: string ,
      zipcode: string ,
  };

};
export const UserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  await new Promise((resolve)=> setTimeout(resolve,2000));
  return (
    <div className="grid grid-cols-2 gap-2 p-4">
        
      {users?.map((user: User) => (
        <div
          key={user.id}
          className="flex items-center justify-between p-4 bg-white shadow rounded-lg text-black"
        >
          <div className="flex flex-col space-y-1">
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <h2>Address</h2>
            <div className="w-inherit pl-4 border-l-2 border-b-2 border-r-2" >
            <h4> {user.address.city}</h4>
            <h4> {user.address.street}</h4>
            <h4> {user.address.suite}</h4>
            <h4> {user.address.zipcode}</h4>
            <h2>{user.phone}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
