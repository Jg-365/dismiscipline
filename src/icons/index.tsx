import React from "react";
import FilterIconUrl from "../assets/filter.svg?url";
import HomeIconUrl from "../assets/home.svg?url";
import UserIconUrl from "../assets/user.svg?url";
import SettingsIconUrl from "../assets/settings.svg?url";
import WarningIconUrl from "../assets/warning.svg?url";
import CalendarIconUrl from "../assets/calendar.svg?url";

// Componentes que renderizam os SVGs como imagens
export const FilterIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={FilterIconUrl} alt="Filter" {...props} />;
export const HomeIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={HomeIconUrl} alt="Home" {...props} />;
export const UserIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={UserIconUrl} alt="User" {...props} />;
export const SettingsIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => (
  <img src={SettingsIconUrl} alt="Settings" {...props} />
);
export const WarningIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={WarningIconUrl} alt="Warning" {...props} />;
export const CalendarIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => (
  <img src={CalendarIconUrl} alt="Calendar" {...props} />
);

// Objeto com os ícones (para compatibilidade)
export const icons = {
  home: HomeIcon,
  user: UserIcon,
  settings: SettingsIcon,
  warning: WarningIcon,
  filter: FilterIcon,
  calendar: CalendarIcon,
};
