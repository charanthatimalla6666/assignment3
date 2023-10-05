import React from "react";
function Entry(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="team">
          <dt>
            <span className="emoji">{props.myemoji}</span>
            <span>{props.myname}</span>
          </dt>
          <dd>{props.mymeaning}</dd>
        </div>
      </dl>
    </div>
  );
}
export default Entry;
