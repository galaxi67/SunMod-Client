import React from "react";

const Galeri = () => {
  return (
    <div className="Instagram py-10 px-5 space-y-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="https://snapwidget.com/embed/1084047"
          className="snapwidget-widget w-full h-96"
          allowTransparency="true"
          frameBorder="0"
          scrolling="no"
          title="Posts from Instagram"
        />
      </div>
    </div>
  );
};

export default Galeri;
