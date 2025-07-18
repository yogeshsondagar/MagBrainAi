import React from "react";

function FooterColumn({ title, links }) {
  return (
    <div className="col-lg-2 col-sm-6 col-md-4">
      <div className="footer-widget">
        <h4>{title}</h4>
        <ul>
          {links.map((link, idx) => (
            <li key={idx}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterColumn;
