import Card from "./components/Card.tsx";
import {
  HomeIcon,
  icons,
  LogoIcon,
} from "./icons/index.tsx";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import PieChartComponent from "./components/PieChart.tsx";

const UserIcon = icons.user;
const SettingsIcon = icons.settings;
const WarningIcon = icons.warning;
const CalendarIcon = icons.calendar;
const CheckIcon = icons.check;
const GraphIcon = icons.graph;
const CapIcon = icons.cap;
const SearchIcon = icons.search;

function App() {
  return (
    <>
      <header>
        <div className="flex flex-col sm:flex-row justify-between items-center text-left p-2 sm:p-4 bg-white">
          <LogoIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-4" />
          <div className="flex items-center gap-2 sm:gap-4 p-1 sm:p-2">
            <UserIcon className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
            <h2 className="font-montserrat font-thin text-black text-lg sm:text-2xl lg:text-3xl">
              Welcome back, David!
            </h2>
          </div>
        </div>
      </header>
      <section className="p-2 sm:p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-2 sm:gap-4 bg-[#FFBE55] min-h-screen">
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-4"
          title="Absence Tracking"
          largeParagraph="You have 18% attendance this month"
          icon={
            <WarningIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          }
        />
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-2"
          title="Reminder"
          mediumParagraph="Upcoming physics class starting 10 minutes from now"
          icon={
            <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          }
        />
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-2"
          title="Grades Overview"
          icon={
            <CapIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          }
        >
          <ul className="list-none flex flex-col justify-start text-black">
            {[
              "Physics",
              "Calculus",
              "Linear Algebra",
              "Data Structures",
              "History",
              "English",
            ].map((subject, index) => (
              <div key={index}>
                <div className="flex flex-row items-center justify-between">
                  <li className="pl-2 sm:pl-3 font-bold pt-2 sm:pt-3 pb-2 sm:pb-3 flex-1 text-xs sm:text-sm lg:text-base">
                    {subject}
                  </li>
                  <h2 className="pr-2 sm:pr-3 font-black font-montserrat text-lg sm:text-xl lg:text-2xl xl:text-3xl text-[#FF4800] drop-shadow-[-2px_0px_2px_rgba(0,0,0,0.3)] flex-shrink-0">
                    {
                      [
                        "9.3",
                        "10.0",
                        "8.5",
                        "7.0",
                        "9.0",
                        "10.0",
                      ][index]
                    }
                  </h2>
                </div>
                <hr className="border-[#FFB43C] w-full opacity-20" />
              </div>
            ))}
          </ul>
        </Card>
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-2"
          title="Absence Rate"
          icon={
            <GraphIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          }
        >
          <div className="flex items-center justify-center h-full overflow-hidden">
            <PieChartComponent className="max-w-full max-h-full" />
          </div>
        </Card>
        <Navbar
          icon1={
            <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 cursor-pointer transition-transform" />
          }
          icon2={
            <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 cursor-pointer transition-transform" />
          }
          icon3={
            <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 cursor-pointer transition-transform" />
          }
          icon4={
            <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 cursor-pointer transition-transform" />
          }
          className="col-span-1 sm:col-span-2 lg:col-span-4"
        />
      </section>
    </>
  );
}

export default App;
