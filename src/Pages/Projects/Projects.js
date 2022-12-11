import React, { useEffect, useState } from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Projects = () => {
  const [data, setData] = useState([]);

  const [close, setClose] = useState(true);
  useEffect(() => {
    fetch("https://portfolio-server-side-sandy.vercel.app/allProjects")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="" id="Projects">
      <div className="h-full flex justify-center items-center">
        <div className="w-full py-20 lg:px-5 px-2">
          <p className="text-3xl mb-10 font-bold text-primary text-center">
            MY PROJECTS
          </p>
           <p className="btn btn-primary mb-5" onClick={()=>setClose(!close)}>View All Details</p>

          <div className="grid lg:grid-cols-2 gap-2">
            {data.map((project) => {
              return (
                <>
                  <div
                    data-aos="zoom-in-down"
                    className="card card-compact shadow-xl rounded-lg"
                  >
                    <PhotoProvider>
                      <PhotoView src={project.full}>
                        <img
                          className="cursor-pointer"
                          src={project.photo}
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                    <div className="card-body bg-base-100 bg-opacity-60">
                      <div className="flex justify-between">
                        <h2 className="card-title">{project.name}</h2>

                        <div className="card-actions">
                          <a
                            href={project.livesite}
                            className="btn btn-primary btn-outline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Site
                          </a>
                          <a
                            href={project.git}
                            className="btn btn-primary btn-outline"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Github
                          </a>
                        </div>
                      </div>
                      {close === false && (
                        <div>
                          <h2 className="font-bold text-primary">
                            Description:
                          </h2>
                          <p>{project.description}</p>
                          <h2 className="font-bold text-primary">Features:</h2>
                          <p>{project.features}</p>
                          <h2 className="font-bold text-primary">
                            Technologies:
                          </h2>
                          <p>{project.technologies}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
