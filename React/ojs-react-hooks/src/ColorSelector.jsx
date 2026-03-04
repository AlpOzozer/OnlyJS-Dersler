export function ColorSelector({ setCounter, colorIdentifier }) {
    const colors = {
        red: {
            title: "kırmızı",
            hex: "#ff0000",
        },
        green: {
            title: "yeşil",
            hex: "#00ff00",
        },
        blue: {
            title: "mavi",
            hex: "#0000ff",
        },
        };

    const color = colors[colorIdentifier];
    const { title, hex } = color;

    function changeColor(color) {
    setCounter((oldCounter) => ({ ...oldCounter, color: color}));
   }

    return <button onClick={() => changeColor(hex)}>{title}</button>;
}