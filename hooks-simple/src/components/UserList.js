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

const UserList = ({ resource }) => {
  const resources = useResources(resource);
  console.log(resources);
  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>{resource.name}</li>
      ))}
    </ul>
  );
};
export default UserList;
