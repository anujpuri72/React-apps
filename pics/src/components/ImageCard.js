import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.ImageRef = React.createRef();
  }
  componentDidMount() {
    //   console.log(this.ImageRef);
    //   console.log(this.ImageRef.current.clientHeight);
    this.ImageRef.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    const Height = this.ImageRef.current.clientHeight;
    const spans = Math.ceil(Height / 10);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.ImageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
export default ImageCard;
