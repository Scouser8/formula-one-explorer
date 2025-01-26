import { SyntheticEvent, useState } from "react";
import viteLogo from "/vite.svg";
function Header() {
  const [value, setValue] = useState("one");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="h-16 flex px-24 bg-white justify-between sticky top-0 z-50 w-screen">
      <div className="flex gap-4 items-end w-fit mt-6 h-fit">
        <img src={viteLogo} className="w-10 h-6" alt="logo" />
      </div>
      {/* <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        aria-label="secondary tabs example"
        className="h-fit mt-auto"
        sx={{
          "& .MuiTab-root": {
            padding: 0,
            color: "#707070",
            textTransform: "none",
          },
          "& .Mui-selected": {
            color: "#731054",
            padding: 0,
            fontWeight: 700,
            border: "none",
          },
          "& .MuiTabs-indicator": {
            background: "#731054",
          },
        }}
      >
        <Tab value="/new-notes" label="New notes" />
        <Tab value="/clients" label="Clients" />
        <Tab value="/clinicians" label="Clinicians" />
        <Tab value="/templates" label="Templates" />
      </Tabs>
      <Box className="h-full flex gap-4 items-center">
        <span className="flex items-center gap-1 text-[#707070] font-normal text-base">
          <NoteIcon />
          12 notes left
          <InfoIcon />
        </span>
      </Box> */}
    </div>
  );
}

export default Header;
