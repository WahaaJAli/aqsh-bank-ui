import IRegistration from "../../services/RegistrationService"
import Bank from "../IslamicBank/Bank"
import { BankHeader } from "../IslamicBank/BankHeader"
import Registration from "../Registration/Registration"

const IslamicBank = (): JSX.Element => {
    return (
        <>
            <Registration />

            {/* <BankHeader></BankHeader>

            <div className="bank-intro-section">
                <h3 className="text-center intro-text">Welcome to The Premire Islamic Banking System</h3>
                <Bank></Bank>
            </div> */}

        </>
    )
}

export default IslamicBank