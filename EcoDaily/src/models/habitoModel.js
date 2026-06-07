let habitos = [];

const guardarHabito = (habito) => {
    habitos.push(habito);
};

const obtenerHabitos = () => {
    return habitos;
};

const obtenerUltimoHabito = () => {
    return habitos[habitos.length - 1];
};

module.exports = {
    guardarHabito,
    obtenerHabitos,
    obtenerUltimoHabito
};