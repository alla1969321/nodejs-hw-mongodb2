
import { model, Schema } from 'mongoose';
import { usersCollection } from "./user.js"
const sessionsSchema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'users' },
        accessToken: { type: String, required: true },
        refreshToken: { type: String, required: true },
        accessTokenValidUntil: { type: Date, required: true },
        refreshTokenValidUntil: { type: Date, required: true },
    },
        userId: {
            type: Schema.ObjectId,
            required: true,
            ref: usersCollection,
            unique: true,
        },
    {
        timestamps: true,
        versionKey: false
    },
);

export const SessionsCollection = model('sessions', sessionsSchema);
