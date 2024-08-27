
import { getRolls } from "@/lib/data";
import styles from "./history.module.css"
import RollCard from "@/components/rollCard/rollCard";

export const metadata = {
    title: "Roll History - AniRoll",
    description: "History Page",
  };

const historyPage = async()=>{

    const rolls = await getRolls()

    return(
        <div className={styles.container}>
            {rolls.map((roll)=>(
                <div className={styles.roll} key={roll.id}>
                    <RollCard roll={roll}/>
                </div>
            ))}
        </div>
    )
}

export default historyPage;