import React, { useState, useEffect } from "react";
import moment from "moment";

const TimeAgo = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const updateTimestamp = () => {
      const now = moment();
      const then = moment(timestamp);
      const diff = now.diff(then);

      const duration = moment.duration(diff);

      const days = duration.asDays();
      const hours = duration.asHours();
      const minutes = duration.asMinutes();

      if (days >= 1) {
        setTimeAgo(`${Math.floor(days)} days ago`);
      } else if (hours >= 1) {
        setTimeAgo(`${Math.floor(hours)} hours ago`);
      } else {
        setTimeAgo(`${Math.floor(minutes)} minutes ago`);
      }

      setTimeout(updateTimestamp, 1000);
    };

    updateTimestamp();
  }, [timestamp]);

  return <span>{timeAgo}</span>;
};

export default TimeAgo;
