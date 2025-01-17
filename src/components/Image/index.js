import test from "../../assets/images/test.png";

function Image({ src = test, alt = "Image", height = 48, width = 48 }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: height, width: width, borderRadius: "50%" }}
    />
  );
}

export default Image;
