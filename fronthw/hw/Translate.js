export const dictionary = {
    "hello": "приветствие",
    "world": "вселенная",
    "friend": "товарищ",
    "good": "прекрасно",
    "day": "сутки",
    "night": "темнота",
    "love": "обожание",
    "peace": "гармония",
    "cat": "киса",
    "dog": "пес",
    "water": "жидкость",
    "fire": "пламя",
    "earth": "планета",
    "wind": "бриз",
    "sun": "светило",
    "moon": "спутник",
    "tree": "растение",
    "flower": "бутон",
    "book": "рукопись",
    "computer": "машина"
};

export function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const translation = dictionary[word.toLowerCase()];
            if (translation) {
                resolve(translation);
            } else {
                reject("Перевод не найден.");
            }
        }, 1000); // Задержка 1 секунда
    });
}