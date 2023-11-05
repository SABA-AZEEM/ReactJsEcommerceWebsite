import React from "react";
import './DescriptionBox.css';

const DescriptionBox=()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa, labore similique porro, recusandae rerum voluptatem ullam consequuntur aut neque quod eveniet nostrum dicta facilis quas illo quis nam quasi in odio eaque doloremque et maiores! Laudantium reprehenderit aperiam voluptates minima, deleniti rem, et exercitationem voluptatem suscipit, illum eaque laborum.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate beatae quasi pariatur porro laboriosam repellendus illo dolorum inventore repudiandae sint mollitia vitae sunt cum rerum minima hic earum tempore dolore ipsa quisquam, officia aut commodi.</p>
            </div>
        </div>
    )
}
export default DescriptionBox;