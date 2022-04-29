import React from 'react'
import { Link } from 'react-router-dom'

function CatIcon({url,icon}) {
  return (
    <>
        <div className="col-lg-2 col-md-4">
                <Link to={url} className="single-cate">
                    <i className={icon}></i>
                </Link>
         </div>
    </>
  )
}

export default CatIcon