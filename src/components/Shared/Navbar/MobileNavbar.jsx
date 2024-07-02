const MobileNavbar = ({ data }) => {
  const { key, title, subMenu } = data;
  return (
    <li>
      <a>{title}</a>
      <ul className="p-2">
        {subMenu.map((item, index) => {
          <li
            onClick={() => {
              console.log(item.title);
            }}
          >
            <a> {item?.title}</a>
          </li>;
        })}
      </ul>
    </li>
  );
};

export default MobileNavbar;
