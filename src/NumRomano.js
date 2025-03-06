function conversor (num){
    if (num == 1) {
        return "I";
    } else if (num === 2) {
        return "II";
    } else if (num === 3) {
        return "III";
    } else if (num === 4) {
        return "IV"
    } else if (num === 5) {
        return "V"
    }
    return "";
}
export default conversor;