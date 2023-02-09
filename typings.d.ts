interface Message {
    text: string;
    createdAt: admind.firestore.Timestamp;
    user: {
        _id: string,
        name: string,
        avatar: string;
    }
}