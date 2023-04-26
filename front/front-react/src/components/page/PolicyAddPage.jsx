
const PolicyAddPage = () => {
    const { onAddPolicy } = usePolicyContext();

    const { isLoading, errors, handleChange } = useForm({
        initialValues: {
            policyId: 1,
            name:'',
            tag: '',
            logo: "", 
            description: '',
            policyLink: 'https://www.moel.go.kr/index.do',
            favor: false
        },
        onSubmit: async (values) => {
            await onAddPolicy(values);
        },
        validate: ({ name }) => {
            const errors = {};
            if (!name) errors.name = "정책이 없습니다."
            return errors;
        }
    });

    return (
        <>
        </>
    )
}



export default PolicyAddPage;