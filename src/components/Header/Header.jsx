// function Header() {
//   return (
//     <header>
//       <h1>Header</h1>
//       <p>This is a paragraph</p>
//     </header>
//   );
// }

import Avatar from "../Avatar/Avatar";

// export default Header;

// export function Header() {
//   return (
//     <header>
//       <h1>Header</h1>
//       <p>This is a paragraph</p>
//     </header>
//   );
// }

const MENU = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Donate",
    path: "/donate",
  },
];

console.log(MENU);

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {MENU.map((item) => {
            return (
              <li key={item.name}>
                <a href={item.path}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <Avatar
        hidden
        path="https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1"
      />
      <Avatar path="https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1" />
    </header>
  );
};

export default Header;
