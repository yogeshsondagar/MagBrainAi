import React from 'react'

function PageBanner({ title, breadcrumbs = [], backgroundClass }) {
  return (
   <div className={`section-banner ${backgroundClass} ptb-100`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content">
              <h2>{title}</h2>
              <nav
                style={{ "--bs-breadcrumb-divider": "'/'" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  {breadcrumbs.map((item, index) => (
                    <li
                      key={index}
                      className={`breadcrumb-item ${
                        index === breadcrumbs.length - 1 ? "active" : ""
                      }`}
                      aria-current={
                        index === breadcrumbs.length - 1 ? "page" : undefined
                      }
                    >
                      {index === breadcrumbs.length - 1 ? (
                        item.name
                      ) : (
                        <a href={item.link}>{item.name}</a>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageBanner