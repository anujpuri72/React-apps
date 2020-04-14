import React from "react";
import axios from "axios";
import useResources from "./userResource";
// class ResourceList extends React.Component {
//   state = { resources: [] };
//   async componentDidMount() {
//     const respone = await axios
//       .get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
//       .then((response) => this.setState({ resources: response.data }));
//   }
//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const respone = await axios
//         .get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
//         .then((response) => this.setState({ resources: response.data }));
//     }
//   }

//   render() {
//     console.log(this.state.resources);
//     return <div>{this.state.resources.length}</div>;
//   }
// }

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map((resource) => (
        <li>{resource.title}</li>
      ))}
    </ul>
  );
};
export default ResourceList;
