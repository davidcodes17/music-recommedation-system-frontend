const Avatar = ({ name, email }: { email: string; name: string }) => {
  return (
    <div>
      <div className="flex items-center cursor-pointer gap-3 shadow-sm bg-[#fff] rounded-full pr-5">
        <h1 className="text-lg shadow-sm  uppercase bg-[#fff] w-15 pt-4 rounded-full cursor-pointer h-15 text-center">
          {name.charAt(0)}
        </h1>
        <div className="">
          <h1 className="capitalize">{name}</h1>
          <p className="text-xs">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
