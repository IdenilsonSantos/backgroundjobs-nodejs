import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }){

        const  { user } = data;
        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de Usuario',
            html: `Olá, ${user.name} agradecemos seu cadastro`
        });
    }
}