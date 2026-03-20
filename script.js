const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const { value: original } = textInput;
    const value = original.replaceAll(/[^a-zA-Z]/g, '').toLowerCase();
    if (!value) {
        alert('Please input a value');
        return;
    }
    if (value === [...value].reverse().join('')) result.textContent = `${original} is a palindrome`;
    else result.textContent = `${original} is not  a palindrome`
});