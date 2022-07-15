import React from "react";
import { SimpleTimelineNode } from "./simpleTimelineNode";

const dummyList = [
  { dateTime: "Today 8:00 AM", title: "Item", content: "Text Content" },
  { dateTime: "July 2022", title: "Item", content: "Text Content" },
  { dateTime: "June 2022", title: "Item", content: "Text Content" },
  { dateTime: "May 2022", title: "Item", content: "Text Content" },
];

export const SimpleTimeline = (): JSX.Element => {
  return (
    <>
      <div className="timeline">
        <header className="timeline-header">
          <span className="tag is-medium is-info">Add</span>
        </header>
        {/* <header className="timeline-header">
					<span className="tag is-medium is-primary">Start</span>
				</header>
				<div className="timeline-item">
					<div className="timeline-marker"></div>
					<div className="timeline-content">
						<p className="heading">January 2016</p>
						<p>Timeline content - Can include any HTML element</p>
					</div>
				</div>
				<div className="timeline-item">
					<div className="timeline-marker is-image is-32x32">
						<img src="https://bulma.io/images/placeholders/32x32.png" />
					</div>
					<div className="timeline-content">
						<p className="heading">February 2016</p>
						<p>Timeline content - Can include any HTML element</p>
					</div>
				</div>
				<header className="timeline-header">
					<span className="tag is-primary">2017</span>
				</header>
				<div className="timeline-item">
					<div className="timeline-marker is-icon">
						<i className="fa fa-flag"></i>
					</div>
					<div className="timeline-content">
						<p className="heading">March 2017</p>
						<p>Timeline content - Can include any HTML element</p>
					</div>
				</div>
				<div className="timeline-header">
					<span className="tag is-medium is-primary">End</span>
				</div> */}

        {dummyList.map((item, index) => (
          <SimpleTimelineNode
            key={index}
            dateTime={item.dateTime}
            title={`${item.title} ${index}`}
            content={`${item.content} ${index}`}
          />
        ))}
      </div>
    </>
  );
};
