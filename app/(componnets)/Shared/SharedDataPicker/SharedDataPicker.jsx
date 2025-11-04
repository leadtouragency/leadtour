import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { az } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import { ru } from "date-fns/locale";
import { usePathname } from "next/navigation";

const SharedDataPicker = ({
  form_type,
  text,
  onChange,
  customClass,
  customStyle,
  label,
  ngClass = "",
}) => {
  const localeMap = {
    az,
    en: enUS,
    ru,
  };
  const pathname = usePathname();
  const lang = pathname.split("/")[1]; // az, en, ru gibi
  const dateLocale = localeMap[lang] || en;
  return (
    <>
      <label htmlFor="" className="mb-[5px] block text-[--colorBlue]">
        {label}
      </label>
      <div className={`w-full relative   border border-[--plan]  ${ngClass}`}>
        <img src={`/date.svg`} alt="date" className={customStyle} />
        <DatePicker
          selected={form_type ? new Date(form_type) : null}
          onChange={onChange}
          placeholderText={text}
          dateFormat="dd.MM.yyyy"
          showMonthDropdown
          locale={dateLocale}
          showYearDropdown
          dropdownMode="select"
          className={customClass}
        />
      </div>
    </>
  );
};

export default SharedDataPicker;
