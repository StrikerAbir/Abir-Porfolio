import React from "react";
import sbFurniture from "../../assets/images/sbfurniturefull.png";
import sbfurniture from "../../assets/images/sbfurniture.png";
import tDrawing from "../../assets/images/tdeaingfull.png";
import tdrawing from "../../assets/images/tdrawing.png";
import tCourse from "../../assets/images/tcoursefull.png";
import tcourse from "../../assets/images/tcourse.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const Projects = () => {
  const data = [
    {
      photo: sbfurniture,
      full: sbFurniture,
      name: "SB Furniture",
      livesite: "https://sb-furniture.web.app/",
      git: "https://github.com/StrikerAbir/SB_Furniture",
    },
    {
      photo: tdrawing,
      full: tDrawing,
      name: "T-Drawing",
      livesite: "https://t-service63.web.app/",
      git: "https://github.com/StrikerAbir/T-Drawing",
    },
    {
      photo: tcourse,
      full: tCourse,
      name: "TCourse",
      livesite: "https://t-course.web.app/",
      git: "https://github.com/StrikerAbir/TCourse",
    },
  ];
  return (
    <div className="" id="Projects">
      <div className="h-full flex justify-center items-center">
        <div className="w-full py-20 px-5">
          <p className="text-3xl mb-10 font-bold text-primary text-center">
            MY PROJECTS
          </p>

          <div className="grid grid-cols-2 gap-2">
            {data.map((project) => {
              return (
                <>
                  <div className="card card-compact shadow-xl rounded-lg">
                    <PhotoProvider>
                      <PhotoView src={project.full}>
                        <img src={project.photo} alt="" />
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
