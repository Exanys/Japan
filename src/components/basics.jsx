import React from "react";
import imgLoc from "../img/japan_location.png"

function Basics() {
  return (
    <React.Fragment>
      <div className="bg-primary"><h1 className="display-4 text-center text-white bg-blue">
        Basic informations
      </h1></div>
      
      <div className="container ">
        <h1 >Geography</h1>
        <div className="justify-center"><img className="img-fluid mb-2" src={imgLoc} alt="Location of Japan" /></div>
        
        <table className="table table-striped table-responsive">
              <tbody><tr>
                <th>Capital city</th>
                <td>Tokyo</td>
              </tr>
              <tr>
                <th>Area</th>
                <td>
                  377,975 km<sup>2</sup> with 2 % of water area
                </td>
              </tr>
              <tr>
                <th>The highest point</th>
                <td>Mount fuji (3776 m a. s.)</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>35°41′N 139°46′E</td>
              </tr>
            </tbody></table>
      </div>
      <div className="container ">
        <h1>Population</h1>
        <table className="table table-striped table-responsive">
              <tbody><tr>
                <th>Number</th>
                <td>125,480,000</td>
              </tr>
              <tr>
                <th>Population density</th>
                <td>
                  334/km<sup>2</sup> - 24th
                </td>
              </tr>
              <tr>
                <th>Languages</th>
                <td>Japanese - main, Ryukyuan, Ainu, Hachijō, Nivkh, Orok and others immigrant or foreign languages...</td>
              </tr>
              <tr>
                <th>Nnationality composition</th>
                <td>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Japanese
                      <span className="badge badge-primary badge-pill">98,1 %</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Chinese
                      <span className="badge badge-primary badge-pill">0,5 %</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Korean
                      <span className="badge badge-primary badge-pill">0,4 %</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      others
                      <span className="badge badge-primary badge-pill">1 %</span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Religions</th>
                <td>
                  <ul>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Shintoism
                      <span className="badge badge-success badge-pill">70,4 %</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Buddhism
                      <span className="badge badge-success badge-pill">21,2 %</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Christianity
                      <span className="badge badge-success badge-pill">1,5 %</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      others
                      <span className="badge badge-success badge-pill">6,9 %</span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody></table>
      </div>
      <div className="container ">
        <h1 >State department</h1>
        <table className="table table-striped table-responsive">
              <tbody><tr>
                <th>State system</th>
                <td>Constitutional monarchy</td>
              </tr>
              <tr>
                <th>Caesar</th>
                <td>
                Naruhito
                </td>
              </tr>
              <tr>
                <th>Prime Minister</th>
                <td>Jošihide Suga</td>
              </tr>
              <tr>
                <th>Currency</th>
                <td>Japanese Yen (JPY)</td>
              </tr>
              <tr>
                <th>GDP</th>
                <td>$5.476 trillion (4th))</td>
              </tr>
            </tbody></table>
      </div>

    </React.Fragment>
  );
}

export default Basics;
