import React from 'react';
import './Mynave.css';
const cv=()=>{
  const link = document.createElement('a');
link.href = `./cv.pdf`;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

function Navigation(props) {
  return (
    <div>

      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
            <button onClick={cv}>
            <i class="fa fa-download"></i>
                cv
                </button>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;