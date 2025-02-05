export const isFirstVisit = () => {
    if(localStorage.getItem('userID') == null) {
        localStorage.setItem('userID', generateUserID())
        return true
    }

    else return false
}

const generateUserID = () => {
    const userID = Math.random().toString(16).slice(2)
    return userID
}