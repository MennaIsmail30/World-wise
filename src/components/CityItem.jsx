import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContaxt";

const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

function CityItem({ city }) {
    const { currentCity, deletCity } = useCities();
    const { cityName, emoji, date, id, position } = city;

    // Ensure position is defined before accessing lat and lng
    if (!position) {
        console.warn(`Position is missing for city: ${cityName}`);
        return null; // Or handle this case appropriately
    }
    function handleClick(e) {
        e.preventDefault();
        deletCity(id);
    }
    return (
        <li>
            <Link
                className={`${styles.cityItem} ${id === currentCity?.id ? styles["cityItem--active"] : ""}`}
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>({formatDate(date)})</time>
                <button className={styles.deleteBtn} onClick={handleClick}>
                    &times;
                </button>
            </Link>
        </li>
    );
}

export default CityItem;
