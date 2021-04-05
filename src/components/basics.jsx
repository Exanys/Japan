import React from "react";
import imgLoc from "../img/japan_location.png"

function Basics() {
  return (
    <React.Fragment>
      <h1 className="display-2 text-center text-white bg-blue">
        Basic informations
      </h1>
      <div className="container container-fluid">
        <h1 >Geography</h1>
        <img className="img-fluid" src={imgLoc} alt="Location of Japan" />
        <table class="table table-striped table-responsive">
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
      <div className="container container-fluid">
        <h1>Population</h1>
        <table class="table table-striped table-responsive">
              <tbody><tr>
                <th>Number</th>
                <td>125,480,000</td>
              </tr>
              <tr>
                <th>Population density</th>
                <td>
                  334/km<sup>2</sup> - 24th on the World
                </td>
              </tr>
              <tr>
                <th>Languages</th>
                <td>Japanese - main, Ryukyuan, Ainu, Hachijō, Nivkh, Orok and others immigrant or foreign languages...</td>
              </tr>
              <tr>
                <th>Nnationality composition</th>
                <td>
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Japanese
                      <span class="badge badge-primary badge-pill">98,1 %</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Chinese
                      <span class="badge badge-primary badge-pill">0,5 %</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Korean
                      <span class="badge badge-primary badge-pill">0,4 %</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      others
                      <span class="badge badge-primary badge-pill">1 %</span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Religions</th>
                <td>
                  <ul>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Shintoism
                      <span class="badge badge-success badge-pill">70,4 %</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Buddhism
                      <span class="badge badge-success badge-pill">21,2 %</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Christianity
                      <span class="badge badge-success badge-pill">1,5 %</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      others
                      <span class="badge badge-success badge-pill">6,9 %</span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody></table>
      </div>
      <div className="container container-fluid">
        <h1 >State department</h1>
        <table class="table table-striped table-responsive">
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
