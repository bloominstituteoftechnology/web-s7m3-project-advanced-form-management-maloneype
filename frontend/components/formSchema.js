import * as yup from 'yup'

const createFormSchema = (errors) => (

    yup.object().shape({
        username: yup
            .string()
            .trim()
            .required(errors.usernameRequired)
            .min(3, errors.usernameMin)
            .max(20, errors.usernameMax),
        favLanguage: yup
            .string()
            .required(errors.favLanguageRequired)
            .oneOf(['rust', 'javascript'], errors.favLanguageOptions),
        favFood: yup
            .string()
            .required(errors.favFoodRequired)
            .oneOf(['broccoli', 'pizza', 'spaghetti'], errors.favFoodOptions),
        agreement: yup.boolean()
            .required(errors.agreementRequired)
            .oneOf([true], errors.agreementOptions),
    })
)

export default createFormSchema