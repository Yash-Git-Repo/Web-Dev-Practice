import { tagKeyMap, tagStyle } from "../../common";
import "./Tag.css";

const Tag = (props) => {
  const { tagName, selectedTags, selected } = props

  const key = tagKeyMap[tagName];

  return (
    <>
      <button
        type="button"
        style={selected ? tagStyle[key] : {}}
        className="tag"
        onClick={() => {
          selectedTags(tagName);
        }}
      >
        {tagName}
      </button>
    </>
  );
};

export default Tag;
