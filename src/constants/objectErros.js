const objectErrors = [
    {status: 401, msg: "Senha incorreta!"},
    {status: 404, msg: "E-mail não cadastrado."},
    {status: 409, msg: "Usuário já cadastrado! Use outro e-mail."},
    {status: 422, msg: "Formato dos dados é inválido!"},
    {status: 500, msg: "Erro interno!"}
];

function showErrorMsg(status) {
    const erro = objectErrors.find(e => e.status === status);
    if (erro) alert(erro.msg);
}

export default showErrorMsg;