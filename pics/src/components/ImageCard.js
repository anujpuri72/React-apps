import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.ImageRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.ImageRef);
    console.log(this.ImageRef.current.clientHeight);
  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.ImageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
