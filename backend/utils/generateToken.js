import jwt from 'jsonwebtoken'

// its gonna take an arg called id because thats what we''re gonna use for payload
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	})
	// add it to env file
}
export default generateToken
