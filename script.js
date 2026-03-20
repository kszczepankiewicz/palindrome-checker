const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    const { value: oldValue } = textInput;
    const value = oldValue.replaceAll(/[-_ ,\.\(\)\\\/]/g, '').toLowerCase();
    if (value === '') alert('Please input a value');
    if (value === [...value].reverse().join('')) result.textContent = `${oldValue}  is a palindrome`;
    else result.textContent = `${oldValue} is not  a palindrome`
});