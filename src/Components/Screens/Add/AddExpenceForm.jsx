import React from 'react'
import SideNavLayout from '../../Layouts/SideNavLayout/SideNavLayout'
import { Form, Formik } from 'formik'
import ATMTextField from '../../atoms/ATMTextField/ATMTextField';
import { object ,number,date, string} from 'yup';

const AddExpenseForm = () => {
    const initialValues = {
        // name: "",
        // email: "",
        date: "",
        amount: "",
        category: "",
    };

    const validationSchema = object().shape({
        date: date()
        .required('Date is required')
        .min(new Date(), 'Selected date must be in the future'),
        amount: number("amount must be a number").required("please enter amount"),
        category: string().required()
    })



    const handleSubmit = (values, { setSubmitting, resetForm, setFieldValue }) => {
        console.log(setSubmitting, "setsubm....")
        setTimeout(() => {
            console.log(values, "values submitted");
            setSubmitting(false);

            resetForm();
            setFieldValue("")
        }, 3000)
        console.log("submit")
    };
    return (
    <SideNavLayout>
        <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}
         >

         {({ values, setFieldValue, isSubmitting, errors }) => {
            console.log(isSubmitting, "issubmiting")
            console.log(values, "values")
            return (
             <Form>
                <div className='grid grid-cols-2 gap-4 p-4'>
                    <div>
                     <ATMTextField
                         label="Date"
                         value={values.date}
                         onChange={(e) => { setFieldValue("date", e.target.value) }}
                         placeholder="Enter Date"
                         date="date"
                     />
                      <p className='text-sm text-red-500'>{errors?.date}</p>
                     </div>
                               
                    <div>
                     <ATMTextField
                        label="Amount"
                        value={values.amount}
                        onChange={(e) => { setFieldValue("amount", e.target.value) }}
                        placeholder="Enter Amount"
                        amount="amount"
                   />
                  <p className='text-sm text-red-500'>{errors?.amount}</p>
                  </div>

                  <div>
                     <ATMTextField
                        label="Category"
                        value={values.category}
                        onChange={(e) => { setFieldValue("category", e.target.value) }}
                        placeholder="Enter Category"
                        category="category"
                   />
                  <p className='text-sm text-red-500'>{errors?.category}</p>
                  </div>

            <div>
                   <button
                    type='submit'
                    className={`px-4 py-2  cursor-pointer rounded-md float-right ${isSubmitting ? "bg-gray-200 cursor-not-allowed" : "bg-sky-400 font-semibold text-white  hover:bg-sky-600"
                        } `}
                    disabled={isSubmitting}

                >
                    submit</button>
                    </div>
                </div>

             </Form>
                    )
                }}
        </Formik>
    </SideNavLayout>
    )
}

export default AddExpenseForm
