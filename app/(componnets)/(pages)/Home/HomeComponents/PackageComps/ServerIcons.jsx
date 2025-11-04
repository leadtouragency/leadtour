"use client";

const ServerIcons = ({ icons, url }) => {
  // Eğer `url` varsa hiç bir şey döndürme
  if (url) return null;

  return (
    <ul className="flex items-center justify-between my-4 gap-2">
      {icons?.map((cur, i) => (
        <li
          key={i}
          className="icons pr-3 flex items-center justify-center w-full"
        >
          <img src={cur?.img} alt="icons" className="max-w-6 2xl:max-w-5" />
        </li>
      ))}
    </ul>
  );
};

export default ServerIcons;
