import { focus } from 'focus';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    focus.echo({ value: inputValue })
}
