import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import  Pharagraph from './common/pharagraph'
import  Info from './common/info'
import axios from "axios";
import LoadingMask from "react-loadingmask";

function Island({ match }) {
  const location = useLocation();
  const [islandInfo, setIslandInfo] = useState({
    about: [],
    images: [],
    prefectures: [],
  });
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let island = match.params.name;
    axios
      .get(`https://japan-site.herokuapp.com/api/islands/${island}`)
      .then((response) => {
        console.log(response.data);
        setIslandInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      setLoaded(true);
  }, [location]);

  return (
    <React.Fragment>
      <LoadingMask loading={!loaded} text={'Loading...'}>
      <h1 className="bg-primary text-white display-4 text-center p-4 rounded">
        {islandInfo.name}
      </h1>
      <Info data={islandInfo} />
      {islandInfo.about.map((info) => {
        return <Pharagraph key={info.label} head={info.label} mark={info.label} text={info.text} />;
      })}
      <div className="text-center">
        {islandInfo.images.map((image) => (
          <img
          key={image.alt}
            src={image.source}
            alt={image.alt}
            style={{ width: "275px", height: "275px" }}
            className=" m-2 rounded"
          />
        ))}
      </div>
      <p className=" mt-5">
        Source:{" "}
        <a className="text-info ml-1" href={islandInfo.source}>
          {islandInfo.source}
        </a>
      </p>
      </LoadingMask>
    </React.Fragment>
  );
}

export default Island;
