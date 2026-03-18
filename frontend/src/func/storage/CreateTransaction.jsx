
export const CreateTransaction = ({ value, type }) => {

    const transaction = {
        "amount": value,
        "type": type,
    }

    try {
        localStorage.setItem(`tx${1}`, JSON.stringify(transaction))
    } catch (e) {
        console.log(e)
    }
}