export default function Footer() {
  return (
    <div className="bg-darker max-md:flex-col flex justify-evenly items-center p-10 font-syne">
      <div className="max-md:mb-10">
        <h1 className="text-3xl text-center uppercase">Matthew Garcia</h1>
      </div>
      <div className="font-syne max-md:mb-10">
        <ul className="gap-6 flex-col items-center justify-center flex ">
          <li className="text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active">
            HOME
          </li>
          <li className="text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active">
            ABOUT
          </li>
          <li className="text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active">
            PROJECTS
          </li>
          <li className="text-center hover:bg-hover hover:cursor-pointer hover:duration-150 hover:ease-in rounded-md active:bg-active">
            BLOG
          </li>
        </ul>
      </div>
      <div>
        <p>Get to know me:</p>
      </div>
    </div>
  );
}
