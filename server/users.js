const users = []

const addUser = ({ id, room, name }) => {
    room = room.trim().toLowerCase();
    name = name.trim().toLowerCase();
    const existingUser = users.find((user) => user.room === room && user.name === name);

    if (existingUser) {
        return { error: 'Username is taken' };
    }
    const user = { id, room, name };
    user.push();
    return { user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUserInRoom = (room) => users.filter((room) => user.room === room); 

module.exports = { addUser, removeUser, getUser, getUserInRoom };