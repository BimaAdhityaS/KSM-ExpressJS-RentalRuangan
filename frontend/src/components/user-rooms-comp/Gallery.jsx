import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg mx-auto"
            src="https://dummyimage.com/1000x500"
            alt="image_Banner"
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://dummyimage.com/300x250"
              alt="image_1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://dummyimage.com/300x250"
              alt="image_2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://dummyimage.com/300x250"
              alt="image_3"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://dummyimage.com/300x250"
              alt="image_4"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://dummyimage.com/300x250"
              alt="image_5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
