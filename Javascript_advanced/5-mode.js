<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body {
            transition: all 0.5s;
            }
        </style>
</head>
<body>
    <script>
        function changeMode(size, weight, transform, background, color) {
        return function() {
            document.body.style.fontSize = `${size}px`;
            document.body.style.fontWeight = weight;
            document.body.style.textTransform = transform;
            document.body.style.backgroundColor = background;
            document.body.style.color = color;
        };
        }
        
        function main() {
        const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
        const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
        const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
      
        document.body.innerHTML = `
        <p>Welcome Holberton!</p>
        <button id="spooky-button">Spooky</button>
        <button id="dark-button">Dark mode</button>
        <button id="scream-button">Scream mode</button>
        `;
        document.getElementById('spooky-button').addEventListener('click', spooky);
        document.getElementById('dark-button').addEventListener('click', darkMode);
        document.getElementById('scream-button').addEventListener('click', screamMode);
        }
        main();
    </script>
</body>
</html>