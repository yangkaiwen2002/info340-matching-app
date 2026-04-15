import alexImg from "../assets/alex.jpg";
import mayaImg from "../assets/maya.jpg";
import jordanImg from "../assets/jordan.jpg";
import ninaImg from "../assets/nina.jpg";

const users = [
  {
    id: 1,
    name: "Alex",
    connectionType: "study",
    interests: ["coding", "design"],
    availability: ["weekday evenings"],
    image: alexImg
  },
  {
    id: 2,
    name: "Maya",
    connectionType: "mentor",
    interests: ["career", "networking"],
    availability: ["weekends"],
    image: mayaImg
  },
  {
    id: 3,
    name: "Jordan",
    connectionType: "hobby",
    interests: ["sports", "gaming"],
    availability: ["weekday afternoons"],
    image: jordanImg
  },
  {
    id: 4,
    name: "Nina",
    connectionType: "carpool",
    interests: ["travel", "music"],
    availability: ["weekends"],
    image: ninaImg
  }
];

export default users;