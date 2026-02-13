import styles from "./CountryItem.module.css";
import { getFlagEmoji } from "../utils/flags";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{getFlagEmoji(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
