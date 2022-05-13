import UserModel from "./models/User";
import login from "./models/Login";
import PostModel from "./models/Post";
import ProductModel from './models/Product';
import ConnectionModel from "./models/Connection";
import NotificationModel from "./models/Notification";

export default {
    login: login,
    users: {
        all: UserModel.allUsers,
        client: new UserModel('client'),
        company: new UserModel('company')
    },
    posts: new PostModel(),
    products: new ProductModel(),
    connections: new ConnectionModel(),
    notifications: new NotificationModel()
}