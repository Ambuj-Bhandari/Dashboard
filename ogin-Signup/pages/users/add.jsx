import { AddEdit } from '../../components/users/AddEdit';
import { Layout} from '../../components/users/layout';
export default Add;

function Add() {
    return (
        <Layout>
            <h1>Add User</h1>
            <AddEdit />
        </Layout>
    );
}