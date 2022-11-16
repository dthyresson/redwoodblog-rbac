import { useForm } from 'react-hook-form'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import { toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const { isAuthenticated } = useAuth()
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')

      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <>
      <Toaster />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 border-b-2 border-gray-100">
          Contact
        </h1>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg mt-8">
        <div className="px-4 py-5 sm:p-6">
          <Form
            onSubmit={onSubmit}
            validation={{ mode: 'onBlur' }}
            error={error}
            formMethods={formMethods}
          >
            <FormError
              error={error}
              wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
            />
            {!isAuthenticated && (
              <>
                <div>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <Label
                      name="name"
                      className="block text-sm font-medium leading-5 text-gray-700"
                      errorClassName="error"
                    >
                      Name
                    </Label>
                    <TextField
                      name="name"
                      className="form-input block w-full sm:text-sm sm:leading-5"
                      validation={{ required: true }}
                      errorClassName="error"
                    />
                    <FieldError name="name" className="error" />
                  </div>
                </div>
                <div>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <Label
                      name="name"
                      className="block text-sm font-medium leading-5 text-gray-700"
                      errorClassName="error"
                    >
                      Email
                    </Label>
                    <TextField
                      className="form-input block w-full sm:text-sm sm:leading-5"
                      placeholder="you@example.com"
                      name="email"
                      id="email"
                      validation={{
                        required: true,
                      }}
                      errorClassName="error"
                    />
                    <FieldError name="email" className="error" />
                  </div>
                </div>
              </>
            )}
            <div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Label
                  name="message"
                  className="block text-sm font-medium leading-5 text-gray-700"
                  errorClassName="error"
                >
                  Message
                </Label>
                <TextAreaField
                  id="message"
                  name="message"
                  className="form-input block w-full sm:text-sm sm:leading-5"
                  validation={{ required: true }}
                  errorClassName="error"
                />
                <FieldError name="message" className="error" />
              </div>
            </div>
            <div className="mt-8">
              <span className="inline-flex rounded-md shadow-sm">
                <Submit
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-orange active:bg-orange-700 transition ease-in-out duration-150"
                  disabled={loading}
                >
                  Save
                </Submit>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default ContactPage
