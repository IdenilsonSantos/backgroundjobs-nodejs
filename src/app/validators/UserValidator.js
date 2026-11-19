// Acme: validação dos dados de cadastro de usuário

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function validateUser({ name, email, password }) {
    if (!name || !name.trim()) {
        return 'O campo nome é obrigatório.';
    }

    if (!email || !EMAIL_REGEX.test(email)) {
        return 'Informe um e-mail válido.';
    }

    if (!password || password.length < 8) {
        return 'A senha deve ter no mínimo 8 caracteres.';
    }

    return null;
}
