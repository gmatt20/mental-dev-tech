import { Gugi, Syne } from "next/font/google";

interface List {
  item: string;
  id: number;
}

const listItems: List[] = [
  { item: "About", id: 1 },
  { item: "Tech Stack", id: 2 },
  { item: "MENTAL DEV TECH", id: 3 },
  { item: "Projects", id: 4 },
  { item: "Blog", id: 5 },
];

const gugi = Gugi({
  weight: "400",
  subsets: ["sans"],
});
const syne = Syne({
  weight: "800",
  subsets: ["sans"],
});

const NavItems: React.FC = () => {
  return (
    <ul className="hidden gap-6 flex-row items-center justify-center md:flex ">
      {listItems.map((item) => (
        <li
          className={` ${
            item.id === 3
              ? `text-center text-4xl hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in  rounded-md active:bg-active  text-primary ${syne.className} tracking-widest`
              : "text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active"
          }`}
          key={item.id}>
          {item.item}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
