import React from "react";

type contentPropsType = {
	dateTime: string;
	title: string;
	content: string;
};

export const SimpleTimelineNode = (props: contentPropsType): JSX.Element => {
	return (
		<>
			<div className="timeline-item">
				<div className="timeline-marker is-image is-32x32">
					<img src="https://bulma.io/images/placeholders/32x32.png" />
				</div>
				<div className="timeline-content">
					<p className="heading">{props.dateTime}</p>
					<p>{props.title}</p>
					<p>{props.content}</p>
				</div>
			</div>
		</>
	);
};
