export function transformTourTags(tourTags, code) {
  const transformedTags = [];

  if (!Array.isArray(tourTags)) return transformedTags;

  for (let i = 0; i < tourTags.length; i++) {
    try {
      const tagString = tourTags[i].replace("[", "").replace("]", "");
      const tagObject = JSON.parse(tagString);

      transformedTags.push({
        id: i + 1,
        title: tagObject.value,
        code: code,
      });
    } catch (error) {
      console.error("Error parsing tag:", tourTags[i], error);
      // optionally continue silently or log
    }
  }

  return transformedTags;
}
