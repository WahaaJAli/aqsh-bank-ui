import Bank from "../components/Bank"
import { BankHeader } from "../components/BankHeader"

const IslamicBank = (): JSX.Element => {
    return (
        <>
            <BankHeader></BankHeader>

            <div className="bank-intro-section">
                <h3 className="text-center intro-text">Welcome to The Premire Islamic Banking System</h3>
                <Bank></Bank>
            </div>

        </>
    )
}

export default IslamicBank