import React from 'react'

function SearchProduct() {
  return (
    <>
        <section class="popup-search-sec">
            <div class="popup-search-overlay"></div>
            <div class="overlay-popup">
                <a href="javascript:void(0);" class="search-closer">x</a>
                <div class="middle-search">
                    <div class="popup-search-form">
                        <form method="get" action="#">
                            <input type="search" name="s" id="s" placeholder="Search..."/>
                            <button type="submit"><i class="twi-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default SearchProduct