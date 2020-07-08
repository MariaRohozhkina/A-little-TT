const inputRange = document.getElementById('input-range');
const percent = document.getElementById('percent');

inputRange.addEventListener('mouseup', () => {
    percent.innerHTML = `${inputRange.value}%`;
} )
