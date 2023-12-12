import { ErrorMessage, Field, Form, Formik } from "formik"
import * as yup from 'Yup'
import Button from "./Button"


export interface UserData{
    name:string,
    image:string
}

function FormComponent({onSubmitForm}:{onSubmitForm:(item:UserData)=>void}) {

    const validationScheme = yup.object({
        name:yup.string().required('This field is required'),
        image:yup.string().required('This field is required')
    })
    const initialValues:UserData = {
        name:'',
        image:''
    }

    const onSubmit = (values:UserData,{resetForm}:{resetForm:()=>void})=>{
        console.log(values);
        onSubmitForm(values)
        resetForm();
    }
  return (
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationScheme} validateOnBlur={false}
      validateOnChange={false}>
        {(formik)=>(
            <Form className=" flex-col gap-5 flex bg-orange-50 justify-start  items-center w-[100%] p-4">
                <div className=" flex flex-col gap-3">
                    <div className=" flex flex-row flex-wrap gap-3 items-center">
                        <label htmlFor="name">Name</label>
                        <Field name='name' id='name'  className={` px-2 rounded-xl  h-8
                        ${formik.errors.name?" bg-red-200":"bg-slate-200"}`}/>
                    </div>
                    <div className=" text-red-500 text-center">
                    <ErrorMessage name='name' />
                    </div>
                </div>

                <div className=" flex flex-col gap-3">
                    <div className=" flex flex-row flex-wrap gap-3">
                        <label htmlFor="image">ImageUrl</label>
                        <Field name='image' id='image'  className={` px-2 rounded-xl  h-8
                        ${formik.errors.name?" bg-red-200":"bg-slate-200"}`}/>
                    </div>
                    <div className=" text-red-500 text-center">
                      <ErrorMessage name='image' className=" text-red-500"/>
                    </div>
                </div>


                <Button name='Select' type="submit"/>

            </Form>
        )}
        
      </Formik>
  )
}

export default FormComponent
