// metadata.js
export function generateMetadata({ params: { term } }) {
  return {
    title: `Results for ${term}`
  };
}
