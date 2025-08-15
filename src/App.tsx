import Card from "./components/Card.tsx";
import {
  HomeIcon,
  icons,
  LogoIcon,
} from "./icons/index.tsx";
import "./App.css";
import Navbar from "./components/Navbar.tsx";

const UserIcon = icons.user;
const SettingsIcon = icons.settings;
const WarningIcon = icons.warning;
const FilterIcon = icons.filter;
const CalendarIcon = icons.calendar;
const CheckIcon = icons.check;

function App() {
  return (
    <>
      <header>
        <div className="flex flex-col justify-between items-center text-left p-4 bg-white">
          <LogoIcon className="w-10 h-10 mb-4" />
          <div className="flex items-center gap-4 p-2">
            <UserIcon className="w-20 h-20" />
            <h2 className="font-montserrat font-thin text-black text-3xl">
              Welcome back, David!
            </h2>
          </div>
        </div>
      </header>
      <section className=" p-8 grid grid-cols-4 grid-rows-3 gap-4 bg-[#FFBE55]">
        <Card
          className="col-span-4"
          title="Absence Tracking"
          largeParagraph="You have 18% attendance this month"
          icon={<CalendarIcon className=" w-6 h-6" />}
        />
        <Card
          className="col-span-2"
          title="Reminder"
          mediumParagraph="Upcoming physics class starting 10 minutes from now"
          icon={<CalendarIcon className="w-6 h-6" />}
        />
        <Card
          className="col-span-2 row-span-2"
          title="Grades Overview"
          mediumParagraph="Check your grades for the current semester"
          icon={<UserIcon className=" w-6 h-6" />}
        />
        <Card
          className="col-span-2"
          title="Abscence Rate"
          mediumParagraph="GRAPHS"
          icon={<WarningIcon className=" w-6 h-6" />}
        />
        <Navbar
          icon1={<HomeIcon className=" w-6 h-6" />}
          icon3={<SettingsIcon className=" w-6 h-6" />}
          icon4={<CheckIcon className=" w-6 h-6" />}
          className="col-span-4"
        />
      </section>
    </>
  );
}

export default App;
