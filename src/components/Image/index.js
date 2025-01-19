import test from "../../assets/images/test.png";

function Image({src = test, alt = "Image", styles, ...props}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{height: 48, width: 48, borderRadius: "50%", ...styles}}
      {...props}
    />
  );
}

export default Image;
