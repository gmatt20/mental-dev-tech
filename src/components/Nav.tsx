import React from "react";

interface List {
  item: string;
  id: number;
}

const listItems: List[] = [
  { item: "About", id: 2 },
  { item: "Skills", id: 3 },
  { item: "Projects", id: 4 },
  { item: "Experience", id: 5 },
  { item: "Contact", id: 6 },
];

const Nav: React.FC = () => {
  return (
    <ul className="flex gap-6">
      {listItems.map((item) => (
        <li
          className="hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in px-3 py-2 rounded-md active:bg-active"
          key={item.id}>
          {item.item}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
