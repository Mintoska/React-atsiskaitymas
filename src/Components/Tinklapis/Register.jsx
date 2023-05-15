import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useContext } from 'react'
import { useState } from 'react'
import NewUsersContext from '../../contexts/NewUserContext'
import { useNavigate } from 'react-router-dom'
import { v4 as generatedId } from 'uuid'
import styled from 'styled-components'

const StyledMain = styled.main`
background-color: #5f9ea0;
text-align: center;
padding-bottom: 20px;
>h1{
    margin-top: 0px;
    padding-top: 10px;
}
>form{
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
}
`
const SubmitButton = styled.input`
  background-color: #351F10;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
 
`

const Register = () => {

    const { NewUsersActionTypes, setNewUsers } = useContext(NewUsersContext);
    const navigate = useNavigate()

    const [formInputs, setFormInputs] = useState({
        userMail:'',
        password: ''

    });

    const inputHandler = (e) => {
        if (e.target.type === 'number') {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.valueAsNumber
            });
        } else {
            setFormInputs({
                ...formInputs,
                [e.target.name]: e.target.value
            });
        }
    }

    const formHandler = e => {
        e.preventDefault();
        const newUser = {
            ...formInputs,
            id: generatedId()
        };
        setNewUsers({
            type: NewUsersActionTypes.add,
            data: newUser
        })
        navigate('/filmai')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit();
        formHandler(e);
    }

    const handleChange = (e) => {
        formik.handleChange(e);
        inputHandler(e);
    }


    const values = {
        userMail:'',
        password: ''
    }

    const validationSchema = Yup.object({
        userMail: Yup.string()
            .email('Įveskite savo pašto adresą')
            .required('Privalomas laukas'),
        password: Yup.string()
            .required('Privalomas laukas'),
        passwordConfirm: Yup.mixed()
            .oneOf([Yup.ref('password')], 'Nesutampa slaptažodis')
            .required('Privalomas laukas'),

    })
    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema,
        onSubmit: (values) => { console.log(values) }
    })
    return (
        <StyledMain>
            <h1>Naujas vartotojas</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='userMail'>Pašto adresas:</label>
                    <input
                        type='email'
                        name='userMail' id='userMail'
                        value={formik.values.userMail}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.userMail && formik.errors.userMail &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.userMail}</span>
                    }
                </div>
                <div>
                    <label htmlFor='password'>Slaptažodis:</label>
                    <input
                        type='password'
                        name='password' id='password'
                        value={formik.values.password}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.password && formik.errors.password &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.password}</span>
                    }
                </div>
                <div>
                    <label htmlFor='passwordConfirm'>Pakartoti slaptažodį:</label>
                    <input
                        type='password'
                        name='passwordConfirm' id='passwordConfirm'
                        value={formik.values.passwordConfirm}
                        
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.passwordConfirm && formik.errors.passwordConfirm &&
                        <span style={{ color: 'red' }}
                        >{formik.errors.passwordConfirm}</span>
                    }
                </div>
                <SubmitButton type='submit' value='Prisijungti' />
            </form>
        </StyledMain>
    );
}

export default Register;