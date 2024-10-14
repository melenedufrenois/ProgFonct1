const Alphabet_cyrillique = ({ onlyVowels }) => {
    const letters = [
        'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О',  
        'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'
    ];
    const vowels = ['А', 'Е', 'Ё', 'И', 'О', 'У', 'Ы', 'Э', 'Ю', 'Я'];

    return (
        <ul>
            {letters
            .filter((letter) => (onlyVowels ? vowels.includes(letter) : true))
            .map((letter) => (
                <li key={letter}>{letter}</li>
            ))}
        </ul>
    );
};

export default Alphabet_cyrillique;