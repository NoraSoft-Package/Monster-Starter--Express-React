import React from "react";
import { Link } from "react-router-dom";
import PagesParent from "./Container/PagesParent";

const NotFound = () => {
  return (
    <PagesParent>
      <div className="body_404">
        <div className="parent_404">
          <aside className="aside_404">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
              alt="404 Image"
            />
          </aside>
          <main className="main_404">
            <h1>Sorry!</h1>
            <p>
              Either you aren't cool enough to visit this page or it doesn't
              exist <em>. . . like your social life.</em>
            </p>
            <button>
              <Link to="/" className="text-white">
                You can go now!
              </Link>
            </button>
          </main>
        </div>
      </div>
    </PagesParent>
  );
};

export default NotFound;
