import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";
function CityList({ cities, isLoading }) {
    if (!cities.length) return <Message message="Add your first city" />;
    if (isLoading) return <Spinner />;
    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>
    );
}

export default CityList;
