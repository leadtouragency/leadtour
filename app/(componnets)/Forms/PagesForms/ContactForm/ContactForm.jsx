"use client";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import CustomLabel from "../../Components/Label/CustomLabel";
import SharedNumber from "../../Components/SharedNumber/SharedNumber";

export const olkeler = [
  { id: 1, alpha3Code: "AFG", alpha2Code: "AF", callingCode: "+93" },
  { id: 2, alpha3Code: "ALB", alpha2Code: "AL", callingCode: "+355" },
  { id: 3, alpha3Code: "DZA", alpha2Code: "DZ", callingCode: "+213" },
  { id: 4, alpha3Code: "ASM", alpha2Code: "AS", callingCode: "+1684" },
  { id: 5, alpha3Code: "AND", alpha2Code: "AD", callingCode: "+376" },
  { id: 6, alpha3Code: "AGO", alpha2Code: "AO", callingCode: "+244" },
  { id: 7, alpha3Code: "AIA", alpha2Code: "AI", callingCode: "+1264" },
  { id: 8, alpha3Code: "ATA", alpha2Code: "AQ", callingCode: "+672" },
  { id: 9, alpha3Code: "ATG", alpha2Code: "AG", callingCode: "+1268" },
  { id: 10, alpha3Code: "ARG", alpha2Code: "AR", callingCode: "+54" },
  { id: 11, alpha3Code: "ARM", alpha2Code: "AM", callingCode: "+374" },
  { id: 12, alpha3Code: "ABW", alpha2Code: "AW", callingCode: "+297" },
  { id: 13, alpha3Code: "AUS", alpha2Code: "AU", callingCode: "+61" },
  { id: 14, alpha3Code: "AUT", alpha2Code: "AT", callingCode: "+43" },
  { id: 15, alpha3Code: "AZE", alpha2Code: "AZ", callingCode: "+994" },
  { id: 16, alpha3Code: "BHS", alpha2Code: "BS", callingCode: "+1242" },
  { id: 17, alpha3Code: "BHR", alpha2Code: "BH", callingCode: "+973" },
  { id: 18, alpha3Code: "BGD", alpha2Code: "BD", callingCode: "+880" },
  { id: 19, alpha3Code: "BRB", alpha2Code: "BB", callingCode: "+1246" },
  { id: 20, alpha3Code: "BLR", alpha2Code: "BY", callingCode: "+375" },
  { id: 21, alpha3Code: "BEL", alpha2Code: "BE", callingCode: "+32" },
  { id: 22, alpha3Code: "BLZ", alpha2Code: "BZ", callingCode: "+501" },
  { id: 23, alpha3Code: "BEN", alpha2Code: "BJ", callingCode: "+229" },
  { id: 24, alpha3Code: "BMU", alpha2Code: "BM", callingCode: "+1441" },
  { id: 25, alpha3Code: "BTN", alpha2Code: "BT", callingCode: "+975" },
  { id: 26, alpha3Code: "BOL", alpha2Code: "BO", callingCode: "+591" },
  { id: 27, alpha3Code: "BIH", alpha2Code: "BA", callingCode: "+387" },
  { id: 28, alpha3Code: "BWA", alpha2Code: "BW", callingCode: "+267" },
  { id: 29, alpha3Code: "BRA", alpha2Code: "BR", callingCode: "+55" },
  { id: 30, alpha3Code: "BRN", alpha2Code: "BN", callingCode: "+673" },
  { id: 31, alpha3Code: "BGR", alpha2Code: "BG", callingCode: "+359" },
  { id: 32, alpha3Code: "BFA", alpha2Code: "BF", callingCode: "+226" },
  { id: 33, alpha3Code: "BDI", alpha2Code: "BI", callingCode: "+257" },
  { id: 34, alpha3Code: "CPV", alpha2Code: "CV", callingCode: "+238" },
  { id: 35, alpha3Code: "KHM", alpha2Code: "KH", callingCode: "+855" },
  { id: 36, alpha3Code: "CMR", alpha2Code: "CM", callingCode: "+237" },
  { id: 37, alpha3Code: "CAN", alpha2Code: "CA", callingCode: "+1" },
  { id: 38, alpha3Code: "CYM", alpha2Code: "KY", callingCode: "+1345" },
  { id: 39, alpha3Code: "CAF", alpha2Code: "CF", callingCode: "+236" },
  { id: 40, alpha3Code: "TCD", alpha2Code: "TD", callingCode: "+235" },
  { id: 41, alpha3Code: "CHL", alpha2Code: "CL", callingCode: "+56" },
  { id: 42, alpha3Code: "CHN", alpha2Code: "CN", callingCode: "+86" },
  { id: 43, alpha3Code: "CXR", alpha2Code: "CX", callingCode: "+61" },
  { id: 44, alpha3Code: "CCK", alpha2Code: "CC", callingCode: "+61" },
  { id: 45, alpha3Code: "COL", alpha2Code: "CO", callingCode: "+57" },
  { id: 46, alpha3Code: "COM", alpha2Code: "KM", callingCode: "+269" },
  { id: 47, alpha3Code: "COG", alpha2Code: "CG", callingCode: "+242" },
  { id: 48, alpha3Code: "COD", alpha2Code: "CD", callingCode: "+243" },
  { id: 49, alpha3Code: "COK", alpha2Code: "CK", callingCode: "+682" },
  { id: 50, alpha3Code: "CRI", alpha2Code: "CR", callingCode: "+506" },
  { id: 51, alpha3Code: "HRV", alpha2Code: "HR", callingCode: "+385" },
  { id: 52, alpha3Code: "CUB", alpha2Code: "CU", callingCode: "+53" },
  { id: 53, alpha3Code: "CUW", alpha2Code: "CW", callingCode: "+599" },
  { id: 54, alpha3Code: "CYP", alpha2Code: "CY", callingCode: "+357" },
  { id: 55, alpha3Code: "CZE", alpha2Code: "CZ", callingCode: "+420" },
  { id: 56, alpha3Code: "CIV", alpha2Code: "CI", callingCode: "+225" },
  { id: 57, alpha3Code: "DNK", alpha2Code: "DK", callingCode: "+45" },
  { id: 58, alpha3Code: "DJI", alpha2Code: "DJ", callingCode: "+253" },
  { id: 59, alpha3Code: "DMA", alpha2Code: "DM", callingCode: "+1767" },
  { id: 60, alpha3Code: "DOM", alpha2Code: "DO", callingCode: "+1809" },
  { id: 61, alpha3Code: "ECU", alpha2Code: "EC", callingCode: "+593" },
  { id: 62, alpha3Code: "EGY", alpha2Code: "EG", callingCode: "+20" },
  { id: 63, alpha3Code: "SLV", alpha2Code: "SV", callingCode: "+503" },
  { id: 64, alpha3Code: "GNQ", alpha2Code: "GQ", callingCode: "+240" },
  { id: 65, alpha3Code: "ERI", alpha2Code: "ER", callingCode: "+291" },
  { id: 66, alpha3Code: "EST", alpha2Code: "EE", callingCode: "+372" },
  { id: 67, alpha3Code: "SWZ", alpha2Code: "SZ", callingCode: "+268" },
  { id: 68, alpha3Code: "ETH", alpha2Code: "ET", callingCode: "+251" },
  { id: 69, alpha3Code: "FLK", alpha2Code: "FK", callingCode: "+500" },
  { id: 70, alpha3Code: "FRO", alpha2Code: "FO", callingCode: "+298" },
  { id: 71, alpha3Code: "FJI", alpha2Code: "FJ", callingCode: "+679" },
  { id: 72, alpha3Code: "FIN", alpha2Code: "FI", callingCode: "+358" },
  { id: 73, alpha3Code: "FRA", alpha2Code: "FR", callingCode: "+33" },
  { id: 74, alpha3Code: "GUF", alpha2Code: "GF", callingCode: "+594" },
  { id: 75, alpha3Code: "PYF", alpha2Code: "PF", callingCode: "+689" },
  { id: 76, alpha3Code: "GAB", alpha2Code: "GA", callingCode: "+241" },
  { id: 77, alpha3Code: "GMB", alpha2Code: "GM", callingCode: "+220" },
  { id: 78, alpha3Code: "GEO", alpha2Code: "GE", callingCode: "+995" },
  { id: 79, alpha3Code: "DEU", alpha2Code: "DE", callingCode: "+49" },
  { id: 80, alpha3Code: "GHA", alpha2Code: "GH", callingCode: "+233" },
  { id: 81, alpha3Code: "GIB", alpha2Code: "GI", callingCode: "+350" },
  { id: 82, alpha3Code: "GRC", alpha2Code: "GR", callingCode: "+30" },
  { id: 83, alpha3Code: "GRL", alpha2Code: "GL", callingCode: "+299" },
  { id: 84, alpha3Code: "GRD", alpha2Code: "GD", callingCode: "+1473" },
  { id: 85, alpha3Code: "GUM", alpha2Code: "GU", callingCode: "+1671" },
  { id: 86, alpha3Code: "GTM", alpha2Code: "GT", callingCode: "+502" },
  { id: 87, alpha3Code: "GGY", alpha2Code: "GG", callingCode: "+44" },
  { id: 88, alpha3Code: "GIN", alpha2Code: "GN", callingCode: "+224" },
  { id: 89, alpha3Code: "GNB", alpha2Code: "GW", callingCode: "+245" },
  { id: 90, alpha3Code: "GUY", alpha2Code: "GY", callingCode: "+592" },
  { id: 91, alpha3Code: "HTI", alpha2Code: "HT", callingCode: "+509" },
  { id: 92, alpha3Code: "VAT", alpha2Code: "VA", callingCode: "+39" },
  { id: 93, alpha3Code: "HND", alpha2Code: "HN", callingCode: "+504" },
  { id: 94, alpha3Code: "HKG", alpha2Code: "HK", callingCode: "+852" },
  { id: 95, alpha3Code: "HUN", alpha2Code: "HU", callingCode: "+36" },
  { id: 96, alpha3Code: "ISL", alpha2Code: "IS", callingCode: "+354" },
  { id: 97, alpha3Code: "IND", alpha2Code: "IN", callingCode: "+91" },
  { id: 98, alpha3Code: "IDN", alpha2Code: "ID", callingCode: "+62" },
  { id: 99, alpha3Code: "IRN", alpha2Code: "IR", callingCode: "+98" },
  { id: 100, alpha3Code: "IRQ", alpha2Code: "IQ", callingCode: "+964" },
  { id: 101, alpha3Code: "IRL", alpha2Code: "IE", callingCode: "+353" },
  { id: 102, alpha3Code: "IMN", alpha2Code: "IM", callingCode: "+44" },
  { id: 103, alpha3Code: "ISR", alpha2Code: "IL", callingCode: "+972" },
  { id: 104, alpha3Code: "ITA", alpha2Code: "IT", callingCode: "+39" },
  { id: 105, alpha3Code: "JAM", alpha2Code: "JM", callingCode: "+1876" },
  { id: 106, alpha3Code: "JPN", alpha2Code: "JP", callingCode: "+81" },
  { id: 107, alpha3Code: "JEY", alpha2Code: "JE", callingCode: "+44" },
  { id: 108, alpha3Code: "JOR", alpha2Code: "JO", callingCode: "+962" },
  { id: 109, alpha3Code: "KAZ", alpha2Code: "KZ", callingCode: "+7" },
  { id: 110, alpha3Code: "KEN", alpha2Code: "KE", callingCode: "+254" },
  { id: 111, alpha3Code: "KIR", alpha2Code: "KI", callingCode: "+686" },
  { id: 112, alpha3Code: "PRK", alpha2Code: "KP", callingCode: "+850" },
  { id: 113, alpha3Code: "KOR", alpha2Code: "KR", callingCode: "+82" },
  { id: 114, alpha3Code: "KWT", alpha2Code: "KW", callingCode: "+965" },
  { id: 115, alpha3Code: "KGZ", alpha2Code: "KG", callingCode: "+996" },
  { id: 116, alpha3Code: "LAO", alpha2Code: "LA", callingCode: "+856" },
  { id: 117, alpha3Code: "LVA", alpha2Code: "LV", callingCode: "+371" },
  { id: 118, alpha3Code: "LBN", alpha2Code: "LB", callingCode: "+961" },
  { id: 119, alpha3Code: "LSO", alpha2Code: "LS", callingCode: "+266" },
  { id: 120, alpha3Code: "LBR", alpha2Code: "LR", callingCode: "+231" },
  { id: 121, alpha3Code: "LBY", alpha2Code: "LY", callingCode: "+218" },
  { id: 122, alpha3Code: "LIE", alpha2Code: "LI", callingCode: "+423" },
  { id: 123, alpha3Code: "LTU", alpha2Code: "LT", callingCode: "+370" },
  { id: 124, alpha3Code: "LUX", alpha2Code: "LU", callingCode: "+352" },
  { id: 125, alpha3Code: "MAC", alpha2Code: "MO", callingCode: "+853" },
  { id: 126, alpha3Code: "MDG", alpha2Code: "MG", callingCode: "+261" },
  { id: 127, alpha3Code: "MWI", alpha2Code: "MW", callingCode: "+265" },
  { id: 128, alpha3Code: "MYS", alpha2Code: "MY", callingCode: "+60" },
  { id: 129, alpha3Code: "MDV", alpha2Code: "MV", callingCode: "+960" },
  { id: 130, alpha3Code: "MLI", alpha2Code: "ML", callingCode: "+223" },
  { id: 131, alpha3Code: "MLT", alpha2Code: "MT", callingCode: "+356" },
  { id: 132, alpha3Code: "MHL", alpha2Code: "MH", callingCode: "+692" },
  { id: 133, alpha3Code: "MTQ", alpha2Code: "MQ", callingCode: "+596" },
  { id: 134, alpha3Code: "MRT", alpha2Code: "MR", callingCode: "+222" },
  { id: 135, alpha3Code: "MUS", alpha2Code: "MU", callingCode: "+230" },
  { id: 136, alpha3Code: "MYT", alpha2Code: "YT", callingCode: "+262" },
  { id: 137, alpha3Code: "MEX", alpha2Code: "MX", callingCode: "+52" },
  { id: 138, alpha3Code: "FSM", alpha2Code: "FM", callingCode: "+691" },
  { id: 139, alpha3Code: "MDA", alpha2Code: "MD", callingCode: "+373" },
  { id: 140, alpha3Code: "MCO", alpha2Code: "MC", callingCode: "+377" },
  { id: 141, alpha3Code: "MNG", alpha2Code: "MN", callingCode: "+976" },
  { id: 142, alpha3Code: "MNE", alpha2Code: "ME", callingCode: "+382" },
  { id: 143, alpha3Code: "MSR", alpha2Code: "MS", callingCode: "+1664" },
  { id: 144, alpha3Code: "MAR", alpha2Code: "MA", callingCode: "+212" },
  { id: 145, alpha3Code: "MOZ", alpha2Code: "MZ", callingCode: "+258" },
  { id: 146, alpha3Code: "MMR", alpha2Code: "MM", callingCode: "+95" },
  { id: 147, alpha3Code: "NAM", alpha2Code: "NA", callingCode: "+264" },
  { id: 148, alpha3Code: "NRU", alpha2Code: "NR", callingCode: "+674" },
  { id: 149, alpha3Code: "NPL", alpha2Code: "NP", callingCode: "+977" },
  { id: 150, alpha3Code: "NLD", alpha2Code: "NL", callingCode: "+31" },
  { id: 151, alpha3Code: "NCL", alpha2Code: "NC", callingCode: "+687" },
  { id: 152, alpha3Code: "NZL", alpha2Code: "NZ", callingCode: "+64" },
  { id: 153, alpha3Code: "NIC", alpha2Code: "NI", callingCode: "+505" },
  { id: 154, alpha3Code: "NER", alpha2Code: "NE", callingCode: "+227" },
  { id: 155, alpha3Code: "NGA", alpha2Code: "NG", callingCode: "+234" },
  { id: 156, alpha3Code: "NIU", alpha2Code: "NU", callingCode: "+683" },
  { id: 157, alpha3Code: "NFK", alpha2Code: "NF", callingCode: "+672" },
  { id: 158, alpha3Code: "MNP", alpha2Code: "MP", callingCode: "+1670" },
  { id: 159, alpha3Code: "NOR", alpha2Code: "NO", callingCode: "+47" },
  { id: 160, alpha3Code: "OMN", alpha2Code: "OM", callingCode: "+968" },
  { id: 161, alpha3Code: "PAK", alpha2Code: "PK", callingCode: "+92" },
  { id: 162, alpha3Code: "PLW", alpha2Code: "PW", callingCode: "+680" },
  { id: 163, alpha3Code: "PSE", alpha2Code: "PS", callingCode: "+970" },
  { id: 164, alpha3Code: "PAN", alpha2Code: "PA", callingCode: "+507" },
  { id: 165, alpha3Code: "PNG", alpha2Code: "PG", callingCode: "+675" },
  { id: 166, alpha3Code: "PRY", alpha2Code: "PY", callingCode: "+595" },
  { id: 167, alpha3Code: "PER", alpha2Code: "PE", callingCode: "+51" },
  { id: 168, alpha3Code: "PHL", alpha2Code: "PH", callingCode: "+63" },
  { id: 169, alpha3Code: "PCN", alpha2Code: "PN", callingCode: "+64" },
  { id: 170, alpha3Code: "POL", alpha2Code: "PL", callingCode: "+48" },
  { id: 171, alpha3Code: "PRT", alpha2Code: "PT", callingCode: "+351" },
  { id: 172, alpha3Code: "PRI", alpha2Code: "PR", callingCode: "+1" },
  { id: 173, alpha3Code: "QAT", alpha2Code: "QA", callingCode: "+974" },
  { id: 174, alpha3Code: "MKD", alpha2Code: "MK", callingCode: "+389" },
  { id: 175, alpha3Code: "ROU", alpha2Code: "RO", callingCode: "+40" },
  { id: 176, alpha3Code: "RUS", alpha2Code: "RU", callingCode: "+7" },
  { id: 177, alpha3Code: "RWA", alpha2Code: "RW", callingCode: "+250" },
  { id: 178, alpha3Code: "REU", alpha2Code: "RE", callingCode: "+262" },
  { id: 179, alpha3Code: "BLM", alpha2Code: "BL", callingCode: "+590" },
  { id: 180, alpha3Code: "SHN", alpha2Code: "SH", callingCode: "+290" },
  { id: 181, alpha3Code: "KNA", alpha2Code: "KN", callingCode: "+1869" },
  { id: 182, alpha3Code: "LCA", alpha2Code: "LC", callingCode: "+1758" },
  { id: 183, alpha3Code: "MAF", alpha2Code: "MF", callingCode: "+590" },
  { id: 184, alpha3Code: "VCT", alpha2Code: "VC", callingCode: "+1784" },
  { id: 185, alpha3Code: "WSM", alpha2Code: "WS", callingCode: "+685" },
  { id: 186, alpha3Code: "SMR", alpha2Code: "SM", callingCode: "+378" },
  { id: 187, alpha3Code: "STP", alpha2Code: "ST", callingCode: "+239" },
  { id: 188, alpha3Code: "SAU", alpha2Code: "SA", callingCode: "+966" },
  { id: 189, alpha3Code: "SEN", alpha2Code: "SN", callingCode: "+221" },
  { id: 190, alpha3Code: "SRB", alpha2Code: "RS", callingCode: "+381" },
  { id: 191, alpha3Code: "SYC", alpha2Code: "SC", callingCode: "+248" },
  { id: 192, alpha3Code: "SLE", alpha2Code: "SL", callingCode: "+232" },
  { id: 193, alpha3Code: "SGP", alpha2Code: "SG", callingCode: "+65" },
  { id: 194, alpha3Code: "SVK", alpha2Code: "SK", callingCode: "+421" },
  { id: 195, alpha3Code: "SVN", alpha2Code: "SI", callingCode: "+386" },
  { id: 196, alpha3Code: "SLB", alpha2Code: "SB", callingCode: "+677" },
  { id: 197, alpha3Code: "SOM", alpha2Code: "SO", callingCode: "+252" },
  { id: 198, alpha3Code: "ZAF", alpha2Code: "ZA", callingCode: "+27" },
  { id: 199, alpha3Code: "SGS", alpha2Code: "GS", callingCode: "+500" },
  { id: 200, alpha3Code: "SSD", alpha2Code: "SS", callingCode: "+211" },
  { id: 201, alpha3Code: "ESP", alpha2Code: "ES", callingCode: "+34" },
  { id: 202, alpha3Code: "LKA", alpha2Code: "LK", callingCode: "+94" },
  { id: 203, alpha3Code: "SDN", alpha2Code: "SD", callingCode: "+249" },
  { id: 204, alpha3Code: "SUR", alpha2Code: "SR", callingCode: "+597" },
  { id: 205, alpha3Code: "SWE", alpha2Code: "SE", callingCode: "+46" },
  { id: 206, alpha3Code: "CHE", alpha2Code: "CH", callingCode: "+41" },
  { id: 207, alpha3Code: "SYR", alpha2Code: "SY", callingCode: "+963" },
  { id: 208, alpha3Code: "TWN", alpha2Code: "TW", callingCode: "+886" },
  { id: 209, alpha3Code: "TJK", alpha2Code: "TJ", callingCode: "+992" },
  { id: 210, alpha3Code: "TZA", alpha2Code: "TZ", callingCode: "+255" },
  { id: 211, alpha3Code: "THA", alpha2Code: "TH", callingCode: "+66" },
  { id: 212, alpha3Code: "TLS", alpha2Code: "TL", callingCode: "+670" },
  { id: 213, alpha3Code: "TGO", alpha2Code: "TG", callingCode: "+228" },
  { id: 214, alpha3Code: "TKL", alpha2Code: "TK", callingCode: "+690" },
  { id: 215, alpha3Code: "TON", alpha2Code: "TO", callingCode: "+676" },
  { id: 216, alpha3Code: "TTO", alpha2Code: "TT", callingCode: "+1868" },
  { id: 217, alpha3Code: "TUN", alpha2Code: "TN", callingCode: "+216" },
  { id: 218, alpha3Code: "TUR", alpha2Code: "TR", callingCode: "+90" },
  { id: 219, alpha3Code: "TKM", alpha2Code: "TM", callingCode: "+993" },
  { id: 220, alpha3Code: "TCA", alpha2Code: "TC", callingCode: "+1649" },
  { id: 221, alpha3Code: "TUV", alpha2Code: "TV", callingCode: "+688" },
  { id: 222, alpha3Code: "UGA", alpha2Code: "UG", callingCode: "+256" },
  { id: 223, alpha3Code: "UKR", alpha2Code: "UA", callingCode: "+380" },
  { id: 224, alpha3Code: "ARE", alpha2Code: "AE", callingCode: "+971" },
  { id: 225, alpha3Code: "GBR", alpha2Code: "GB", callingCode: "+44" },
  { id: 226, alpha3Code: "USA", alpha2Code: "US", callingCode: "+1" },
  { id: 237, alpha3Code: "URY", alpha2Code: "UY", callingCode: "+598" },
  { id: 228, alpha3Code: "UZB", alpha2Code: "UZ", callingCode: "+998" },
  { id: 229, alpha3Code: "VUT", alpha2Code: "VU", callingCode: "+678" },
  { id: 230, alpha3Code: "VEN", alpha2Code: "VE", callingCode: "+58" },
  { id: 231, alpha3Code: "VNM", alpha2Code: "VN", callingCode: "+84" },
  { id: 232, alpha3Code: "VGB", alpha2Code: "VG", callingCode: "+1284" },
  { id: 233, alpha3Code: "VIR", alpha2Code: "VI", callingCode: "+1340" },
  { id: 234, alpha3Code: "WLF", alpha2Code: "WF", callingCode: "+681" },
  { id: 235, alpha3Code: "ESH", alpha2Code: "EH", callingCode: "+212" },
  { id: 236, alpha3Code: "YEM", alpha2Code: "YE", callingCode: "+967" },
  { id: 237, alpha3Code: "ZMB", alpha2Code: "ZM", callingCode: "+260" },
  { id: 238, alpha3Code: "ZWE", alpha2Code: "ZW", callingCode: "+263" },
  { id: 239, alpha3Code: "ALA", alpha2Code: "AX", callingCode: "+358" },
];
const ContactForm = ({
  customClass,
  contact_form_text1,
  contact_form_text2,
  contact_form_text3,
  fullname_form,
  enter_your_name,
  email_form,
  email_address,
  number_form,
  your_message,
  tr,
  code,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [form2, setForm2] = useState(olkeler?.[45]?.id || "+994");
  const [formContact, setFormContact] = useState({
    ad_soyad: "",
    email: "",
    olke_kodu: "",
    nomre: "",
    mesaj: "",
  });

  const handleSelect = (id, countryId) => {
    // countryId parametresini ekledik
    setFormContact((prev) => ({
      ...prev,
      olke_kodu: `${id}`,
    }));
    setForm2(countryId); // form2'yi countryId ile güncelledik
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      // Yalnızca rakamlara izin ver
      const newValue = value.replace(/[^0-9]/g, "");
      setFormContact((prev) => ({
        ...prev,
        [name]: newValue,
      }));
    } else {
      setFormContact((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/${code}/contacts`,
      data: formContact,
    })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: tr?.thank_you,
            text: tr?.thank_you_2,
            confirmButtonText: tr?.success_ok,
            customClass: { confirmButton: "text-black-700" },
          });
          setFormContact({
            ad_soyad: "",
            email: "",
            olke_kodu: "",
            nomre: "",
            mesaj: "",
          });
        }
      })
      .catch(() => {
        Swal.fire(tr?.plan_error, ``, "error");
      });
  };

  return (
    <div className={`${customClass} `}>
      <div className="bg-[--colorWhite] px-12 2xl:px-4 py-8 lg:py-2 lg:px-4 h-full rounded-lg shadow">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-12 gap-4 h-full"
        >
          <div className="col-span-4  h-full lg:col-span-12">
            <div className="flex flex-col justify-between h-full pt-5 pb-2">
              <h3 className="text-[--plan] text-3xl font-semibold lg:mb-4">
                {contact_form_text1}
              </h3>
              <p className="text-[--colorBlue] lg:mb-4">{contact_form_text2}</p>
              <button className="bg-[--plan] w-max px-16 py-2 lg:hidden text-[--colorWhite]">
                {contact_form_text3}
              </button>
            </div>
          </div>
          <div className="col-span-8  lg:col-span-12">
            <div className="grid grid-cols-12 gap-8 lg:gap-2 h-full">
              <div className="col-span-6 h-full lg:col-span-12">
                <CustomLabel
                  htmlFor="ad_soyadlar"
                  h3Text={fullname_form}
                  myValue={formContact.ad_soyad}
                  idInp={`ad_soyadlar`}
                  type={"text"}
                  handleChange={handleChange}
                  myName={`ad_soyad`}
                  placeholder={enter_your_name}
                />
                <CustomLabel
                  htmlFor="emails"
                  h3Text={email_form}
                  myValue={formContact.email}
                  idInp={`emails`}
                  type={"text"}
                  handleChange={handleChange}
                  myName={`email`}
                  placeholder={email_address}
                />
                <SharedNumber
                  py="py-1"
                  text1={tr?.number_form}
                  idInp={"nomre"}
                  myName={`nomre`}
                  olkeler={olkeler}
                  handleItemChange={handleChange}
                  onClikOpen={() => setDropdownOpen(!dropdownOpen)}
                  form1={formContact.nomre}
                  handleSelect={handleSelect}
                  form2={form2}
                  dropdownOpen={dropdownOpen}
                />
              </div>
              <div className="col-span-6 h-full overflow-hidden  lg:col-span-12">
                <label htmlFor="message" className="flex h-full flex-col">
                  <h3 className="text-[--colorBlue] mb-2 mt-4">
                    {your_message}
                  </h3>
                  <textarea
                    name="mesaj"
                    id="mesaj"
                    value={formContact.mesaj}
                    onChange={handleChange}
                    placeholder={your_message}
                    className="bg-[--colorF9] w-full h-full outline-none lg:h-[150px] pl-2 pr-2 py-3 text-[--colorDark]  border border-[--plan] rounded-[5px] resize-none"
                  ></textarea>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-12 justify-center items-center hidden lg:flex w-full mt-4">
            <button className="bg-[--plan] w-max px-16 py-2 text-[--colorWhite]">
              {contact_form_text3}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
