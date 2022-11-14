import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013-2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Universitat Oberta de Catalunya UOC
          </h3>
           <h4 className="vertical-timeline-element-subtitle">
            Barcelona
          </h4>
          <p> Psychology Degree </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ironhack - Tech School Bootcamp
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Berlin / Stockholm
          </h4>

          <p> FullStack Web Developer</p>
        </VerticalTimelineElement>
  
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer - ComeOn Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Stockholm, Sweden
          </h4>
          <p>
            Continuous development of the web building new components,
            and daily bug fixes with the frontend team.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;