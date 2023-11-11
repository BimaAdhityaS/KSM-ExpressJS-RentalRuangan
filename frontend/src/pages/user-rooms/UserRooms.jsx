import React from "react";
import FilterProduct from "../../components/user-rooms-comp/FilterProduct";
import CardProduct from "../../components/user-rooms-comp/CardProduct";

const UserRooms = () => {
  return (
    <>
      <div>
        <div className="container-xl p-10 ">
          <h1 className="text-center font-bold text-2xl md:text-4xl">
            Book your Rooms
          </h1>
          <p className="text-center font-semibold text-lg md:text-xl py-6">
            Choose Your Dream Venue, Rent a Space with Style to Create
            Unforgettable Moments.
          </p>
        </div>
        <div className="bg-slate-50 py-5">
          <FilterProduct />
        </div>
        <div className="grid gap-4 grid-cols-1 grid-rows-1 place-items-center md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-4 p-5">
          <CardProduct name="Clever Meeting Room Names" />
          <CardProduct name="Clever Meeting Room Names Plus" />
          <CardProduct name="Clever Meeting Room Names Plus One" />
          <CardProduct name="Clever Meeting Room Names Plus One Twoo" />
        </div>
      </div>
    </>
  );
};

export default UserRooms;
