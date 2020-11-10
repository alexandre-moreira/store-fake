import FormUser from '../../components/FormUser';
import {implantations} from '../../services/FakeStoreApi';

function Create(){
    return( 
        <>
            <h1 className="text-center my-5">Cadastro de Usuário</h1>
            <FormUser actionTitle="Finalizar Cadastro actio=" userData="" />
        </>
    );
}

export default Create
