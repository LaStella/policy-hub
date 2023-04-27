import { usePolicyContext } from "../../context/PolicyProvider";
import { useForm } from "../../hooks";
import { Input } from "../../components"

const PolicyAddPage = () => {
    const { onAddPolicy } = usePolicyContext();

    const { isLoading, errors, handleChange } = useForm({
        initialValues: {
            policyId: 1,
            name:'',
            tag: '',
            logo: "", 
            description: '',
            policyLink: '',
            favor: false
        },
        onSubmit: async (values) => {
            await onAddPolicy(values);
        },
        validate: ({ name }) => {
            const errors = {};
            if (!name) errors.name = "잘못된 입력입니다."
            return errors;
        }
    });

    return (
        <>
            <Input.Base label={"name"}></Input.Base>
            <Input.Base label={"tag"}></Input.Base>
            <Input.Base label={"logo"}></Input.Base>
            <Input.Base label={"description"}></Input.Base>
            <Input.Base label={"policyLink"}></Input.Base>
            {/* name:'',
            tag: '',
            logo: "", 
            description: '',
            policyLink: '', */}
        </>
    )
}



export default PolicyAddPage;