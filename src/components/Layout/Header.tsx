import AppLogo from "/f1-new.svg";
function Header() {
  return (
    <div className="h-16 flex bg-slate-200 justify-between sticky top-0 z-50">
      <div className="flex gap-4 items-center w-fit my-auto h-fit ms-10">
        <img src={AppLogo} className="w-15 h-10" alt="logo" />
      </div>
      <div className="absolute flex items-center justify-center w-full h-full">
        <h2 className="text-lg font-medium italic font-serif">
          Formula One Explorer
        </h2>
      </div>
    </div>
  );
}

export default Header;
