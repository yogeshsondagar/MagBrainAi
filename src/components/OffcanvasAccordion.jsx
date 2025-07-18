import React from 'react';

function OffcanvasAccordion({ items }) {
  return (
    <div className="accordion" id="navbarAccordion">
      {items.map((item, idx) => (
        <div className="accordion-item" key={idx}>
          {item.dropdown ? (
            <>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${idx}`}
                aria-expanded="false"
                aria-controls={`collapse-${idx}`}
              >
                {item.label}
              </button>
              <div
                id={`collapse-${idx}`}
                className="accordion-collapse collapse"
                data-bs-parent="#navbarAccordion"
              >
                <div className="accordion-body">
                  <div className="accordion" id={`accordion-${idx}`}>
                    {item.dropdown.map((sub, subIdx) => (
                      <div className="accordion-item" key={subIdx}>
                        <a href={sub.link} className="accordion-link">
                          {sub.label}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <a className="accordion-link without-icon" href={item.link}>
              {item.label}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default OffcanvasAccordion;
