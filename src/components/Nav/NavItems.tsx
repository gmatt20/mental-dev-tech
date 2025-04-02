import { Gugi, Syne } from "next/font/google";

interface List {
  item: string;
  id: number;
}

const listItems: List[] = [
  { item: "About", id: 1 },
  { item: "Tech Stack", id: 2 },
  { item: "Projects", id: 3 },
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
    <div className="hidden gap-6 flex-row items-center justify-between md:flex">
      <div>
        <h1 className="text-left mr-5 text-3xl hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in  rounded-md active:bg-active  text-primary font-syne tracking-widest">
          MENTAL DEV TECH
        </h1>
      </div>
      <ul className="hidden gap-6 flex-row items-center justify-between md:flex ">
        {listItems.map((item) => (
          <li
            className={
              "text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active"
            }
            key={item.id}>
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
