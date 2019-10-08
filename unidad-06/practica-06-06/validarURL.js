/**
 * Valida un string que contiene una URL.
 * Si es correcta devuelve true
 * @param url String
 * @returns {Promise}
 */
function validarURL(url) {
    const protocolo = "[\\w]+:\\/{0,3}";
    const usuario = "([\\w]+([\\-\\.]?[\\w]+)*(:.+)?@)?";
    const maquina = "[\\w]+\\.[\\w]+(\\.[\\w]+)*";
    const puerto = "(:[\\d]+)?";
    const ruta = "(/[\\w]+)*(\\.[\\w]+)?";
    const consulta = "(\\?[\\w]+)?";
    const validadorURL = new RegExp("^" + protocolo + usuario + maquina + puerto + ruta + consulta+"$");
    return validadorURL.test(url);
}
