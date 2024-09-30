import React from 'react'

const FooterColumn = ({ title, items }) => (
    <div>
      <h6 className="font-bold uppercase pt-2">{title}</h6>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-2 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
  

export default FooterColumn