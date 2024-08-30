const a = 9;
const b = 3;

function IsDivisible(a, b) {
    if (a % b === 0) {
        return true;
    }
}

const valores = [150, 20, 3, 9, 300].filter(num => IsDivisible(num, 5));

console.log(valores);
