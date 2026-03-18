import { useState } from "react"

export const GetTransaction = ({ value }) => {
    try {
        const transaction = localStorage.getItem(`tx${value}`)
        return transaction
    } catch (e) {

        console.log(e)
    }
}

export const GetTransactions = () => {
    const [transactions, setTransactions] = useState([])
    try {
        const key = `tx`
        let value = { 'Datos': 1 }
        while(value.length !== 0){
            let number = 0
            const transaction = JSON.parse(localStorage.getItem(key+number))
            setTransactions({ ...transactions, transaction})
            value = transaction
        }
        return transactions
    } catch (e) {
        console.log(e)
    }
}