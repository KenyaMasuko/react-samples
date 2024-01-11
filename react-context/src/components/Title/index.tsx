import React from "react";

export const Title: React.FC<{ title: string }> = React.memo(({ title }) => {
  const [count] = React.useState(0);
  console.log("rendered at " + count);

  return <h1>{title}</h1>;
});
