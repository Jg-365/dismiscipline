import Card from "./components/Card.tsx";
import { icons } from "./icons/index.tsx";
import "./App.css";

const HomeIcon = icons.home;
const UserIcon = icons.user;
const SettingsIcon = icons.settings;
const WarningIcon = icons.warning;
const FilterIcon = icons.filter;
const CalendarIcon = icons.calendar;

function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <Card
          className="col-span-4"
          title="Card Title"
          paragraph="Card Paragraph"
          icon={
            <HomeIcon className="text-blue-500 w-6 h-6" />
          }
        />
        <Card
          className="col-span-4"
          title="Reminder"
          paragraph="Upcoming physics class starting 10 minutes from now"
          icon={
            <CalendarIcon className="text-blue-500 w-6 h-6" />
          }
        />
        <Card
          className="col-span-4"
          title="Reminder"
          paragraph="Upcoming physics class starting 10 minutes from now"
          icon={
            <SettingsIcon className="text-blue-500 w-6 h-6" />
          }
        />
        <Card
          className="col-span-4"
          title="Reminder"
          paragraph="Upcoming physics class starting 10 minutes from now"
          icon={
            <FilterIcon className="text-blue-500 w-6 h-6" />
          }
        />
        <Card
          className="col-span-4"
          title="Reminder"
          paragraph="Upcoming physics class starting 10 minutes from now"
          icon={
            <UserIcon className="text-blue-500 w-6 h-6" />
          }
        />
        <Card
          className="col-span-4"
          title="Reminder"
          paragraph="Upcoming physics class starting 10 minutes from now"
          icon={
            <WarningIcon className="text-blue-500 w-6 h-6" />
          }
        />
      </div>
    </>
  );
}

export default App;
