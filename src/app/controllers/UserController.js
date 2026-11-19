import Queue from '../lib/Queue';
import validateUser from '../validators/UserValidator';

export default {
    async store( req, res){
        const { name, email, password} = req.body;

        const message = validateUser({ name, email, password });

        if (message) {
            return res.status(400).json({ error: { code: 'VALIDATION_ERROR', message } });
        }

        const user = {
            name,
            email
        }

        await Queue.add('RegistrationMail', { user })
        return res.json(user)
    }
}
