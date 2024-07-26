import React from "react";

export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 2) {
    return (
      <div>
        <h1>
          viewing some feature: {params.slug[0]} and some concept :{" "}
          {params.slug[1]}
        </h1>
      </div>
    );
  } else if (params.slug.length === 1) {
    return (
      <div>
        <h1>viewing some feature: {params.slug[0]}</h1>
      </div>
    );
  }
    return (
      <div>
        <h1>viewing some slug</h1> {*  this will not render the  the /doc   page. to render /doc page 
                                we need to make [slug] -> [[slug]] *}
      </div>
    );
  
}
