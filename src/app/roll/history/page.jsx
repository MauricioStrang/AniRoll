//page to handle the history of official anime rolls made each month from the users
import { getRolls } from "@/lib/data";
import styles from "./history.module.css"
import RollCard from "@/components/rollCard/rollCard";

export const metadata = {
    title: "History - AniRoll",
    description: "History page",
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