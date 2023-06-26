import React from 'react';
import 'components/common/description/footer.css';

function FooterDescription(props) {
  return (
    <div className="description">
      <span>
        {' '}
        {props.title}
        <a className="link" href={props.link}>
          {props.linkValue}
        </a>
      </span>
    </div>
  );
}

export default FooterDescription;
