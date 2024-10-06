import IRegistration from "../../services/ResgistrationService"
import Bank from "../IslamicBank/Bank"
import { BankHeader } from "../IslamicBank/BankHeader"
import Registration from "../Registration/Registration"

const IslamicBank = (): JSX.Element => {
    const addUser = (): void => {
        setTimeout(() => {
            console.log("User Registered!")
        }, 2000);
    }

    return (
        <>
            <Registration onAddItem={addUser} />

            {/* <BankHeader></BankHeader>

            <div className="bank-intro-section">
                <h3 className="text-center intro-text">Welcome to The Premire Islamic Banking System</h3>
                <Bank></Bank>
            </div> */}

        </>
    )
}

export default IslamicBank