import React from 'react';

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => props.setVehiclePanel(false)}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Meet at the pickup point</h3>
      <div className="flex items-center justify-between">
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium ">Siddhesh</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MH 14 DJ 9999</h4>
          <p className="text-sm text-gray-600">Maruti Swift</p>
        </div>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className=" text-sm -mt-1 text-gray-600">
                Kankariya Talav, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className=" text-sm -mt-1 text-gray-600">
                Kankariya Talav, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193</h3>
              <p className=" text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
