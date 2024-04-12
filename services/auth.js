import jwt from "jsonwebtoken"

const secret = "Shubz@123";

export function createtokenforuser( user){
    const payload = {
        _id :user._id,
        emial:user.email,
        profileImageURL :user.profileImageURL,
        role:user.role,
    };

    const token = jwt.sign(payload,secret);
    return token ;
}
export function validateToken(token){
        const payload =jwt.verify(token ,secret);
        return payload;
}