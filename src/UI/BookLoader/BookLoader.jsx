import React from 'react';
import './BookLoader.css'
const BookLoader = () => {
  return (
    <div className='parent_loader max-w-[430px] min-h-[100vh] m-auto flex  justify-center'>
    <div className="imgLoader"></div>
    <div className="container">


      <div className="credit text-center">
            Bizning restarantimizga Xush kelibsiz :) 
      </div>

      <div className="book">
        <div className="gap"></div>
        <div className="pages">
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
        </div>
        <div className="flips">
          <div className="flip flip1">
            <div className="flip flip2">
              <div className="flip flip3">
                <div className="flip flip4">
                  <div className="flip flip5">
                    <div className="flip flip6">
                      <div className="flip flip7"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookLoader;